var UniteCssEditorRev = new function () {
    var a = this, b = [], c = ".tp-caption", d = "params", e = new Object, f = new Object, g = !1, h = null, i = null,
        j = null, k = {
            "background-color": "backgroundColor",
            "border-color": "borderColor",
            "border-radius": "borderRadius",
            "border-style": "borderStyle",
            "border-width": "borderWidth",
            color: "color",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "line-height": "lineHeight",
            opacity: "opacity",
            padding: "padding",
            "text-decoration": "textDecoration"
        }, l = "idle", m = "idle";
    a.setInitCssStyles = function (a) {
        b = jQuery.parseJSON(a)
    }, a.setInitCssStylesObj = function (a) {
        b = a
    }, a.init = function () {
        p(), a.initAdvancedEditor()
    };
    var n = function () {
        f[d] = e
    }, p = function () {
        jQuery(".rev-advanced-css-idle, .rev-advanced-css-hover").click(function () {
            var b = UniteLayersRev.get_current_selected_layer();
            if (b === -1)return !1;
            var c = UniteLayersRev.getCurrentLayer();
            return c.hover !== !0 ? jQuery("#change_acea_wrappers").hide() : jQuery("#change_acea_wrappers").show(), a.checkIfHandleExists(jQuery("#layer_caption").val()) ? (l = jQuery(this).hasClass("rev-advanced-css-idle") ? "idle" : "hover", m = jQuery(this).hasClass("rev-advanced-css-idle") ? "idle" : "hover", void jQuery("#dialog_advanced_css").dialog({
                modal: !0,
                resizable: !1,
                title: "Currently editing: " + jQuery("#layer_caption").val(),
                minWidth: 1024,
                minHeight: 500,
                closeOnEscape: !0,
                open: function () {
                    jQuery(".current-advance-edited-class").text(jQuery("#layer_caption").val()), jQuery(this).closest(".ui-dialog").addClass("tp-css-editor-dialog"), null != i && i.refresh(), null != h && h.refresh(), a.setTemplateCssUneditable(), a.setTemplateCssEditable()
                },
                close: function (a) {
                    l = m
                },
                buttons: {
                    Save: function () {
                        a.saveTemplateStylesInDb(), n(), l = m
                    }, Cancel: function () {
                        jQuery(this).dialog("close"), l = m
                    }
                }
            })) : (alert(rev_lang.please_select_first_an_existing_style), !1)
        }), jQuery(".rev-advanced-css-idle-layer, .rev-advanced-css-hover-layer").click(function () {
            var b = UniteLayersRev.get_current_selected_layer();
            if (b === -1)return !1;
            var c = UniteLayersRev.getCurrentLayer();
            c.hover !== !0 ? jQuery("#change_ace_wrappers").hide() : jQuery("#change_ace_wrappers").show(), l = jQuery(this).hasClass("rev-advanced-css-idle-layer") ? "idle" : "hover", m = jQuery(this).hasClass("rev-advanced-css-idle-layer") ? "idle" : "hover", jQuery("#dialog_advanced_layer_css").dialog({
                modal: !0,
                resizable: !1,
                minWidth: 1024,
                minHeight: 500,
                closeOnEscape: !0,
                open: function (b) {
                    jQuery(this).closest(".ui-dialog").addClass("tp-css-editor-dialog"), null != j && j.refresh(), a.setTemplateCssLayer()
                },
                close: function (a) {
                    l = m
                },
                buttons: {
                    Save: function () {
                        q(), l = m, jQuery(this).dialog("close")
                    }, Cancel: function () {
                        l = m, jQuery(this).dialog("close")
                    }
                }
            })
        })
    };
    jQuery(document).ready(function () {
        jQuery("body").on("click", "#change_ace_toidle", function () {
            confirm(rev_lang.save_changes) && q(), l = "idle", a.setTemplateCssLayer()
        }), jQuery("body").on("click", "#change_ace_tohover", function () {
            confirm(rev_lang.save_changes) && q(), l = "hover", a.setTemplateCssLayer()
        }), jQuery("body").on("click", "#change_acea_toidle", function () {
            confirm(rev_lang.save_changes) && (a.saveTemplateStylesInDb(), n()), l = "idle", a.setTemplateCssUneditable(), a.setTemplateCssEditable()
        }), jQuery("body").on("click", "#change_acea_tohover", function () {
            confirm(rev_lang.save_changes) && (a.saveTemplateStylesInDb(), n()), l = "hover", a.setTemplateCssUneditable(), a.setTemplateCssEditable()
        })
    }), a.initAdvancedEditor = function () {
        i = CodeMirror.fromTextArea(document.getElementById("textarea_advanced_css_editor"), {
            onChange: function () {
            }, lineNumbers: !0
        }), h = CodeMirror.fromTextArea(document.getElementById("textarea_template_css_editor_uneditable"), {
            onChange: function () {
            }, lineNumbers: !0, readOnly: !0
        }), j = CodeMirror.fromTextArea(document.getElementById("textarea_template_css_editor_layer"), {
            onChange: function () {
            }, lineNumbers: !0, readOnly: !1
        })
    }, a.setPreviewTextClass = function () {
        if ("undefined" != typeof f.handle) {
            var a = f.handle.split(".");
            for (var b in a)jQuery("#rev-example-style-layer").addClass(a[b])
        }
        jQuery("#rev-example-style-layer").parent().show()
    }, a.clearPreviewText = function () {
        jQuery("#rev-example-style-layer").attr("style", ""), jQuery("#rev-example-style-layer").attr("class", "")
    }, a.setTemplateCssUneditable = function () {
        jQuery("#textarea_template_css_editor_uneditable").val("");
        var b = "{\n";
        if (r(), "idle" === l ? jQuery(".acsa_idle_or_hover").html("- IDLE") : jQuery(".acsa_idle_or_hover").html("- HOVER"), e = "idle" == l && "undefined" != typeof f.params ? f.params : "hover" == l && "undefined" != typeof f.hover ? f.hover : [], !jQuery.isEmptyObject(e))for (var c in k) {
            var d = "";
            switch (c) {
                default:
                    d = "object" == typeof e[c] ? e[c].join(" ") : e[c]
            }
            "undefined" !== d && void 0 !== d && "" !== d && "none" !== d && (b += "\t" + c + ": " + d + ";\n")
        }
        b += "}", null != h ? h.setValue(b) : (jQuery("#textarea_template_css_editor_uneditable").val(b), a.initAdvancedEditor()), h.refresh()
    }, a.setTemplateCssEditable = function () {
        jQuery("#textarea_advanced_css_editor").val("");
        var b = "{\n";
        if (r(), "idle" == l && "undefined" != typeof f.advanced && "undefined" != typeof f.advanced.idle)var c = jQuery.extend({}, f.advanced.idle); else if ("hover" == l && "undefined" != typeof f.advanced && "undefined" != typeof f.advanced.hover)var c = jQuery.extend({}, f.advanced.hover); else var c = [];
        for (var d in c) {
            var e = "";
            switch (d) {
                default:
                    e = "object" == typeof c[d] ? c[d].join(" ") : c[d]
            }
            "undefined" !== e && void 0 !== e && "" !== e && (b += "\t" + d + ": " + e + ";\n")
        }
        b += "}", null != i ? i.setValue(b) : (jQuery("#textarea_advanced_css_editor").val(b), a.initAdvancedEditor()), i.refresh()
    }, a.setTemplateCssLayer = function () {
        jQuery("#textarea_template_css_editor_layer").val("");
        var b = "{\n";
        r();
        var c = UniteLayersRev.getCurrentLayer();
        if (null === c)return !1;
        if ("idle" === l ? jQuery("#acs_idle_or_hover").html("- IDLE") : jQuery("#acs_idle_or_hover").html("- HOVER"), c)if ("idle" == l && "undefined" != typeof c.inline && "undefined" != typeof c.inline.idle)var d = jQuery.extend({}, c.inline.idle); else if ("hover" == l && "undefined" != typeof c.inline && "undefined" != typeof c.inline.hover)var d = jQuery.extend({}, c.inline.hover); else var d = [];
        for (var e in d) {
            var f = "";
            switch (e) {
                default:
                    f = "object" == typeof d[e] ? d[e].join(" ") : d[e]
            }
            "undefined" !== f && void 0 !== f && "" !== f && (b += "\t" + e + ": " + f + ";\n")
        }
        b += "}", null != j ? j.setValue(b) : (jQuery("#textarea_template_css_editor_layer").val(b), a.initAdvancedEditor()), j.refresh()
    }, a.saveStylesInDb = function (b, c, d) {
        var e = {idle: {}, hover: {}}, g = UniteLayersRev.getCurrentLayer();
        e.handle = b, e.idle.color = jQuery('input[name="color_static"]').val(), e.idle["color-transparency"] = jQuery('input[name="css_font-transparency"]').val(), e.idle["font-size"] = jQuery('input[name="font_size_static"]').val(), e.idle["line-height"] = jQuery('input[name="line_height_static"]').val(), e.idle["font-weight"] = jQuery('select[name="font_weight_static"] option:selected').val(), e.idle["font-style"] = jQuery('input[name="css_font-style"]').is(":checked") ? "italic" : "normal", e.idle["font-family"] = jQuery('input[name="css_font-family"]').val(), e.idle["text-decoration"] = jQuery('select[name="css_text-decoration"] option:selected').val(), e.idle["text-align"] = g["text-align"], e.idle.margin = g.margin, e.idle.padding = g.padding, e.idle["background-color"] = jQuery('input[name="css_background-color"]').val(), e.idle["background-transparency"] = jQuery('input[name="css_background-transparency"]').val(), e.idle["border-color"] = jQuery('input[name="css_border-color-show"]').val(), e.idle["border-transparency"] = jQuery('input[name="css_border-transparency"]').val(), e.idle["border-style"] = jQuery('select[name="css_border-style"] option:selected').val(), e.idle["border-width"] = {}, jQuery('input[name="css_border-width[]"]').each(function (a) {
            e.idle["border-width"][a] = jQuery(this).val()
        }), e.idle["border-radius"] = {}, jQuery('input[name="css_border-radius[]"]').each(function (a) {
            e.idle["border-radius"][a] = jQuery(this).val()
        }), e.idle.x = jQuery('input[name="layer__x"]').val(), e.idle.y = jQuery('input[name="layer__y"]').val(), e.idle.z = jQuery('input[name="layer__z"]').val(), e.idle.skewx = jQuery('input[name="layer__skewx"]').val(), e.idle.skewy = jQuery('input[name="layer__skewy"]').val(), e.idle.scalex = jQuery('input[name="layer__scalex"]').val(), e.idle.scaley = jQuery('input[name="layer__scaley"]').val(), e.idle.opacity = jQuery('input[name="layer__opacity"]').val(), e.idle.xrotate = jQuery('input[name="layer__xrotate"]').val(), e.idle.yrotate = jQuery('input[name="layer__yrotate"]').val(), e.idle["2d_rotation"] = jQuery('input[name="layer_2d_rotation"]').val(), e.idle["2d_origin_x"] = jQuery('input[name="layer_2d_origin_x"]').val(), e.idle["2d_origin_y"] = jQuery('input[name="layer_2d_origin_y"]').val(), e.idle.pers = jQuery('input[name="layer__pers"]').val(), e.idle.corner_left = jQuery('select[name="layer_cornerleft"] option:selected').val(), e.idle.corner_right = jQuery('select[name="layer_cornerright"] option:selected').val(), e.idle.parallax = jQuery('select[name="parallax_level"] option:selected').val(), e.hover.color = jQuery('input[name="hover_color_static"]').val(), e.hover["color-transparency"] = jQuery('input[name="hover_css_font-transparency"]').val(), e.hover["text-decoration"] = jQuery('select[name="hover_css_text-decoration"] option:selected').val(), e.hover["background-color"] = jQuery('input[name="hover_css_background-color"]').val(), e.hover["background-transparency"] = jQuery('input[name="hover_css_background-transparency"]').val(), e.hover["border-color"] = jQuery('input[name="hover_css_border-color-show"]').val(), e.hover["border-transparency"] = jQuery('input[name="hover_css_border-transparency"]').val(), e.hover["border-style"] = jQuery('select[name="hover_css_border-style"] option:selected').val(), e.hover["border-width"] = {}, jQuery('input[name="hover_css_border-width[]"]').each(function (a) {
            e.hover["border-width"][a] = jQuery(this).val()
        }), e.hover["border-radius"] = {}, jQuery('input[name="hover_css_border-radius[]"]').each(function (a) {
            e.hover["border-radius"][a] = jQuery(this).val()
        }), e.hover.opacity = jQuery('input[name="hover_layer__opacity"]').val(), e.hover.scalex = jQuery('input[name="hover_layer__scalex"]').val(), e.hover.scaley = jQuery('input[name="hover_layer__scaley"]').val(), e.hover.skewx = jQuery('input[name="hover_layer__skewx"]').val(), e.hover.skewy = jQuery('input[name="hover_layer__skewy"]').val(), e.hover.xrotate = jQuery('input[name="hover_layer__xrotate"]').val(), e.hover.yrotate = jQuery('input[name="hover_layer__yrotate"]').val(), e.hover["2d_rotation"] = jQuery('input[name="hover_layer_2d_rotation"]').val(), e.hover.css_cursor = jQuery('select[name="css_cursor"] option:selected').val(), e.hover.speed = jQuery('input[name="hover_speed"]').val(), e.hover.easing = jQuery('select[name="hover_easing"] option:selected').val(), g = UniteLayersRev.getCurrentLayer(), e.settings = new Object, e.settings.hover = jQuery('input[name="hover_allow"]').is(":checked"), e.settings.type = g.type, e.advanced = {
            idle: {},
            hover: {}
        }, r(), "undefined" != typeof f.advanced && ("undefined" != typeof f.advanced.idle && (e.advanced.idle = f.advanced.idle), "undefined" != typeof f.advanced.hover && (e.advanced.hover = f.advanced.hover));
        var h = c === !0 ? "insert_captions_css" : "update_captions_css";
        UniteAdminRev.ajaxRequest(h, e, function (c) {
            UniteLayersRev.setCaptionClasses(c.arrCaptions), a.updateCaptionsInput(c.arrCaptions), a.setInitCssStylesObj(c.initstyles), "undefined" !== c.compressed_css && a.refresh_css(c.compressed_css), "undefined" != typeof d && d.dialog("close"), jQuery("#layer_caption").val(b), jQuery("#layer_caption").change()
        })
    }, a.saveTemplateStylesInDb = function () {
        for (var b = {}, d = c + "." + jQuery("#layer_caption").val(), e = i.getValue(); e.indexOf("/*") !== -1;) {
            if (e.indexOf("*/") === -1)return !1;
            var g = e.indexOf("/*"), h = e.indexOf("*/") + 2;
            e = e.replace(e.substr(g, h - g), "")
        }
        if (e.indexOf("{") > -1) {
            var j = e.substr(0, e.indexOf("{"));
            e = e.replace(j, "")
        }
        e.indexOf("}") > -1 && (e = e.substr(0, e.indexOf("}"))), e = e.replace(/{/g, "").replace(/}/g, "").replace(/	/g, "").replace(/\n/g, "");
        var k = e.split(";"), m = {};
        for (var n in k)if ("" != jQuery.trim(k[n])) {
            var o = k[n].split(":");
            2 === o.length && (m[jQuery.trim(o[0])] = jQuery.trim(o[1]))
        }
        jQuery.isEmptyObject(m) && (m = ""), b.handle = d, b.styles = m, b.type = l, UniteAdminRev.ajaxRequest("update_captions_advanced_css", b, function (c) {
            if (c.success !== !1) {
                UniteLayersRev.setCaptionClasses(c.arrCaptions), a.updateCaptionsInput(c.arrCaptions), a.setInitCssStylesObj(c.initstyles), "undefined" !== c.compressed_css && a.refresh_css(c.compressed_css), f.advanced[b.type] = b.styles;
                var d = a.checkIfHandleExists(jQuery("#layer_caption").val());
                a.updateInitCssStyles(jQuery("#layer_caption").val(), d)
            }
        })
    };
    var q = function () {
        var a = UniteLayersRev.getCurrentLayer();
        if (null === a)return !1;
        for (var c = j.getValue(); c.indexOf("/*") !== -1;) {
            if (c.indexOf("*/") === -1)return !1;
            var d = c.indexOf("/*"), e = c.indexOf("*/") + 2;
            c = c.replace(c.substr(d, e - d), "")
        }
        if (c.indexOf("{") > -1) {
            var f = c.substr(0, c.indexOf("{"));
            c = c.replace(f, "")
        }
        c.indexOf("}") > -1 && (c = c.substr(0, c.indexOf("}"))), c = c.replace(/{/g, "").replace(/}/g, "").replace(/	/g, "").replace(/\n/g, "");
        var g = c.split(";"), h = {};
        for (var i in g)if ("" != jQuery.trim(g[i])) {
            var k = g[i].split(":");
            2 === k.length && (h[jQuery.trim(k[0])] = jQuery.trim(k[1]))
        }
        "undefined" == typeof a.inline && (a.inline = {}), "undefined" == typeof a.inline[l] && (a.inline[l] = {}), a.inline[l] = h, tpLayerTimelinesRev.rebuildLayerIdle(jQuery(".slide_layer.layer_selected"))
    };
    a.renameStylesInDb = function (b, c) {
        var d = {};
        d.old_name = b, d.new_name = c, UniteAdminRev.ajaxRequest("rename_captions_css", d, function (d) {
            UniteLayersRev.setCaptionClasses(d.arrCaptions), a.updateCaptionsInput(d.arrCaptions), a.setInitCssStylesObj(d.initstyles), "undefined" !== d.compressed_css && a.refresh_css(d.compressed_css);
            var e = {};
            e.style = c;
            var f = UniteLayersRev.getSimpleLayers();
            for (var g in f)f[g].style == b && UniteLayersRev.updateLayer(g, e);
            jQuery("#layer_caption").val(c), jQuery("#layer_caption").change(), jQuery("#dialog_rename_css").dialog("close")
        }), a.updateInitCssStyles(b, -1), f = new Object, e = new Object
    }, a.deleteStylesInDb = function (b, c) {
        UniteAdminRev.setErrorMessageID("dialog_error_message"), UniteAdminRev.ajaxRequest("delete_captions_css", b, function (b) {
            UniteLayersRev.setCaptionClasses(b.arrCaptions), a.updateCaptionsInput(b.arrCaptions), a.setInitCssStylesObj(b.initstyles), "undefined" !== b.compressed_css && a.refresh_css(b.compressed_css)
        }), a.updateInitCssStyles(b, c, !0), jQuery("#layer_caption").val(""), f = new Object, e = new Object
    };
    var r = function () {
        f = new Object;
        for (var a in b)if (b[a].handle == c + "." + jQuery("#layer_caption").val()) {
            f = jQuery.extend({}, b[a]);
            break
        }
    };
    a.checkIfHandleExists = function (a) {
        for (var d in b)if (b[d].handle == c + "." + a)return d;
        return !1
    }, a.updateCaptionsInput = function (a) {
        layer = UniteLayersRev.getCurrentLayer();
        var b = [];
        if (layer !== !1)switch (layer.type) {
            case"image":
                for (var c in a)"image" == a[c].type && b.push(a[c]);
                break;
            case"button":
                for (var c in a)"button" == a[c].type && b.push(a[c]);
                break;
            case"shape":
                for (var c in a)"shape" == a[c].type && b.push(a[c]);
                break;
            default:
                for (var c in a)"text" == a[c].type && b.push(a[c])
        }
        jQuery("#layer_caption").catcomplete("option", "source", b)
    }, a.updateInitCssStyles = function (a, d, e) {
        var h = !1;
        for (var i in b)if (b[i].handle == c + "." + a) {
            h = i;
            break
        }
        return "undefined" != typeof e ? (delete b[h], !0) : (h === !1 && (h = b.length), d === !1 && (d = b.length, b[h] = new Object, b[h].id = d, b[h].handle = c + "." + a, b[h].params = [], b[h].hover = [], b[h].settings = [], b[h].advanced = {
            hover: {},
            idle: {}
        }), b[h].params = f.params, b[h].hover = f.hover, b[h].advanced = f.advanced, "undefined" == typeof b[h].settings && (b[h].settings = new Object), b[h].settings.hover = g, b[h])
    }, a.refresh_css = function (a) {
        var b = jQuery("#rs-plugin-settings-css").next();
        b.is("style") && b.html(a)
    }, a.getStyleSettingsByHandle = function (a) {
        for (var d in b)if (b[d].handle == c + "." + a)return b[d];
        return !1
    }, a.set_state = function (a, b, c, d, e, f) {
        if (void 0 === f)switch (e) {
            case"select":
                f = jQuery(c + " option:selected").val();
                break;
            case"multi":
                f = {}, jQuery(c).each(function (a) {
                    f[a] = jQuery(this).val()
                });
                break;
            default:
                f = jQuery(c).val()
        }
        var g = "";
        if ("undefined" != typeof jQuery(c).data("suffix") && (g = jQuery(c).data("suffix")), "undefined" == typeof a[b]) {
            if (d == f || d + g == f ? (jQuery(c).removeClass("differentthandefault"), jQuery(c).css("color", "#777")) : jQuery(c).addClass("differentthandefault"), "object" == typeof d) {
                var h = "", i = "", j = "";
                for (var k in d)"" != d[k] && (h += d[k] + g);
                for (var k in f)"" != f[k] && (i += f[k], j += f[k] + g);
                h !== i && h !== j || (jQuery(c).removeClass("differentthandefault"), jQuery(c).css("color", "#777"))
            }
        } else if ("object" == typeof a[b]) {
            var h = "", i = "", j = "";
            for (var k in a[b])"" != a[b][k] && (h += a[b][k] + g);
            for (var k in f)"" != f[k] && (i += f[k], j += f[k] + g);
            h === i || h === j ? (jQuery(c).removeClass("differentthandefault"), jQuery(c).css("color", "#777")) : jQuery(c).addClass("differentthandefault")
        } else if (a[b] !== f && a[b] + g !== f)if ("object" == typeof f) {
            var l = a[b].split(" "), m = "";
            switch (l.length) {
                case 1:
                    m = l[0] + l[0] + l[0] + l[0];
                    break;
                case 2:
                    m = l[0] + l[1] + l[0] + l[1];
                    break;
                case 3:
                    m = l[0] + l[1] + l[2] + l[1]
            }
            i = "", j = "";
            for (var k in f)"" != f[k] && (i += f[k], j += f[k] + g);
            m == i || m == j ? (jQuery(c).removeClass("differentthandefault"), jQuery(c).css("color", "#777")) : jQuery(c).addClass("differentthandefault")
        } else jQuery(c).addClass("differentthandefault"); else jQuery(c).removeClass("differentthandefault"), jQuery(c).css("color", "#777")
    }, a.compare_to_original = function () {
        var b = jQuery("#layer_caption").val();
        if (orig_styles = a.getStyleSettingsByHandle(b), orig_styles === !1)return !1;
        if ("undefined" != typeof orig_styles.params) {
            var c = orig_styles.params, d = jQuery('input[name="css_font-style"]').is(":checked") ? "italic" : "normal";
            a.set_state(c, "color-transparency", 'input[name="css_font-transparency"]', "1"), a.set_state(c, "font-style", 'input[name="css_font-style"]', "normal", "checkbox", d), a.set_state(c, "font-family", 'input[name="css_font-family"]', ""), a.set_state(c, "padding", 'input[name="css_padding[]"]', {
                0: "0",
                1: "0",
                2: "0",
                3: "0"
            }, "multi"), a.set_state(c, "text-decoration", 'select[name="css_text-decoration"]', "none", "select"), a.set_state(c, "background-color", 'input[name="css_background-color"]', "transparent"), a.set_state(c, "background-transparency", 'input[name="css_background-transparency"]', "1"), a.set_state(c, "border-color", 'input[name="css_border-color-show"]', "transparent"), a.set_state(c, "border-transparency", 'input[name="css_border-transparency"]', "1"), a.set_state(c, "border-style", 'select[name="css_border-style"]', "none", "select"), a.set_state(c, "border-width", 'input[name="css_border-width"]', "0"), a.set_state(c, "border-radius", 'input[name="css_border-radius[]"]', {
                0: "0",
                1: "0",
                2: "0",
                3: "0"
            }, "multi"), a.set_state(c, "x", 'input[name="layer__x"]', "0"), a.set_state(c, "y", 'input[name="layer__y"]', "0"), a.set_state(c, "z", 'input[name="layer__z"]', "0"), a.set_state(c, "skewx", 'input[name="layer__skewx"]', "0"), a.set_state(c, "skewy", 'input[name="layer__skewy"]', "0"), a.set_state(c, "scalex", 'input[name="layer__scalex"]', "1"), a.set_state(c, "scaley", 'input[name="layer__scaley"]', "1"), a.set_state(c, "opacity", 'input[name="layer__opacity"]', "1"), a.set_state(c, "xrotate", 'input[name="layer__xrotate"]', "0"), a.set_state(c, "yrotate", 'input[name="layer__yrotate"]', "0"), a.set_state(c, "2d_rotation", 'input[name="layer_2d_rotation"]', "0"), a.set_state(c, "2d_origin_x", 'input[name="layer_2d_origin_x"]', "50"), a.set_state(c, "2d_origin_y", 'input[name="layer_2d_origin_y"]', "50"), a.set_state(c, "pers", 'input[name="layer__pers"]', "600"), a.set_state(c, "corner_left", 'select[name="layer_cornerleft"]', "nothing", "select"), a.set_state(c, "corner_right", 'select[name="layer_cornerright"]', "nothing", "select")
        }
        if ("undefined" != typeof orig_styles.hover && !jQuery.isEmptyObject(orig_styles.hover)) {
            var e = orig_styles.hover;
            a.set_state(e, "color", 'input[name="hover_color_static"]'), a.set_state(e, "color-transparency", 'input[name="hover_css_font-transparency"]', "1"), a.set_state(e, "text-decoration", 'select[name="hover_css_text-decoration"]', "none", "select"), a.set_state(e, "background-color", 'input[name="hover_css_background-color"]', "transparent"), a.set_state(e, "background-transparency", 'input[name="hover_css_background-transparency"]', "1"), a.set_state(e, "border-color", 'input[name="hover_css_border-color-show"]', "transparent"), a.set_state(e, "border-transparency", 'input[name="hover_css_border-transparency"]', "1"), a.set_state(e, "border-style", 'select[name="hover_css_border-style"]', "none", "select"), a.set_state(e, "border-width", 'input[name="hover_css_border-width"]', "0", "select"), a.set_state(e, "border-radius", 'input[name="hover_css_border-radius[]"]', {
                0: "0",
                1: "0",
                2: "0",
                3: "0"
            }, "multi"), a.set_state(e, "skewx", 'input[name="hover_layer__skewx"]', "0"), a.set_state(e, "skewy", 'input[name="hover_layer__skewy"]', "0"), a.set_state(e, "scalex", 'input[name="hover_layer__scalex"]', "1"), a.set_state(e, "scaley", 'input[name="hover_layer__scaley"]', "1"), a.set_state(e, "opacity", 'input[name="hover_layer__opacity"]', "1"), a.set_state(e, "xrotate", 'input[name="hover_layer__xrotate"]', "0"), a.set_state(e, "yrotate", 'input[name="hover_layer__yrotate"]', "0"), a.set_state(e, "2d_rotation", 'input[name="hover_layer_2d_rotation"]', "0"), a.set_state(e, "css_cursor", 'select[name="css_cursor"]', "auto", "select"), a.set_state(e, "speed", 'input[name="hover_speed"]', "0"), a.set_state(e, "easing", 'select[name="hover_easing"]', "50", "select")
        }
        return !0
    }
};