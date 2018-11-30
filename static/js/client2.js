$(document).ready(function () {

    // // CLEAR THE DATE
    // $('#mainMenu #clearDate').click(function (e) {
    //     // don't allow the anchor to visit the link
    //     e.preventDefault();
    //     $("#p1").html("Date to go here.");
    // });

    // // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    // $('#mainMenu #getDate').click(function (e) {

    //     // don't allow the anchor to visit the link
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/ajax-GET",
    //         dataType: "json",
    //         type: "GET",
    //         success: function (data) {
    //             $("#p1").text(data['msg']);
    //             console.log("SUCCESS:", data);

    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p1").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }

    //     });
    // });

    // // INTENTIONALLY GET A 404 FROM THE SERVER
    // $('#mainMenu #getBadURL').click(function (e) {

    //     // don't allow the anchor to visit the link
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/ajax-GET-SOMETHING-THAT-DOESNT-EXIST",
    //         dataType: "json",
    //         type: "GET",
    //         success: function (data) {
    //             $("#p1").text(data['msg']);
    //             console.log("SUCCESS:", data);

    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p1").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         },
    //         // handle a 404 (i.e., page not found)
    //         statusCode: {
    //             404: function () {
    //                 $("#p1").text("Page doesn't exist.");
    //             }
    //         }
    //     });
    // });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATAS
    $('#getHTMLList1').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content11").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList2').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list2" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content12").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList3').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list3" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content13").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList4').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list4" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content14").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList5').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list5" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content15").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList6').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list6" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content16").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList7').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list7" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content17").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList8').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list8" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content18").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList9').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list9" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content19").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#getHTMLList10').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list10" },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#content20").html(data);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#getJSONList1').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content1");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList2').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list2" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content2");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList3').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list3" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content3");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList4').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list4" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content4");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList5').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list5" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content5");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList6').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list6" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content6");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList7').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list7" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content7");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList8').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list8" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content8");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList9').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list9" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content9");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getJSONList10').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list10" },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content10");
                let htmlStr = "<ul>";
                for (let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function (e) {
        let formData = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val()
        };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                    + " " + data[1]['lastName']
                    + " " + data[1]['email']
                );

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
