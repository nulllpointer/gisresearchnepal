var acf={ajaxurl:"",admin_url:"",wp_version:"",post_id:0,nonce:"",l10n:null,o:null,helpers:{get_atts:null,version_compare:null,uniqid:null,sortable:null,add_message:null,is_clone_field:null,url_to_object:null},validation:null,conditional_logic:null,media:null,fields:{date_picker:null,color_picker:null,Image:null,file:null,wysiwyg:null,gallery:null,relationship:null}};!function(e){acf.helpers.isset=function(){var e=arguments,t=e.length,a=null,n;if(0===t)throw new Error("Empty isset");for(a=e[0],i=1;t>i;i++){if(e[i]===n||a[e[i]]===n)return!1;a=a[e[i]]}return!0},acf.helpers.get_atts=function(t){var i={};return e.each(t[0].attributes,function(e,t){"data-"==t.name.substr(0,5)&&(i[t.name.replace("data-","")]=t.value)}),i},acf.helpers.version_compare=function(e,t){if(typeof e+typeof t!="stringstring")return!1;for(var i=e.split("."),a=t.split("."),n=0,s=Math.max(i.length,a.length);s>n;n++){if(i[n]&&!a[n]&&parseInt(i[n])>0||parseInt(i[n])>parseInt(a[n]))return 1;if(a[n]&&!i[n]&&parseInt(a[n])>0||parseInt(i[n])<parseInt(a[n]))return-1}return 0},acf.helpers.uniqid=function(){var e=new Date;return e.getTime()},acf.helpers.url_to_object=function(e){var t={},a=e.split("&");for(i in a){var n=a[i].split("=");t[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return t},acf.helpers.sortable=function(t,i){return i.children().each(function(){e(this).width(e(this).width())}),i},acf.helpers.is_clone_field=function(e){return e.attr("name")&&-1!=e.attr("name").indexOf("[acfcloneindex]")?!0:!1},acf.helpers.add_message=function(t,i){var t=e('<div class="acf-message-wrapper"><div class="message updated"><p>'+t+"</p></div></div>");i.prepend(t),setTimeout(function(){t.animate({opacity:0},250,function(){t.remove()})},1500)},e.fn.exists=function(){return e(this).length>0},acf.media={div:null,frame:null,render_timout:null,clear_frame:function(){this.frame&&(this.frame.detach(),this.frame.dispose(),this.frame=null)},type:function(){var e="thickbox";return"undefined"!=typeof wp&&(e="backbone"),e},init:function(){if("backbone"!==this.type())return!1;if(!acf.helpers.isset(wp,"media","view","AttachmentCompat","prototype"))return!1;var t=wp.media.view.AttachmentCompat.prototype;t.orig_render=t.render,t.orig_dispose=t.dispose,t.className="compat-item acf_postbox no_box",t.render=function(){var t=this;return t.ignore_render?this:(this.orig_render(),setTimeout(function(){var i=t.$el.closest(".media-modal");if(!i.hasClass("acf-media-modal")&&!i.find(".media-frame-router .acf-expand-details").exists()){var a=e(['<a href="#" class="acf-expand-details">','<span class="icon"></span>','<span class="is-closed">'+acf.l10n.core.expand_details+"</span>",'<span class="is-open">'+acf.l10n.core.collapse_details+"</span>","</a>"].join(""));a.on("click",function(e){e.preventDefault(),i.hasClass("acf-expanded")?i.removeClass("acf-expanded"):i.addClass("acf-expanded")}),i.find(".media-frame-router").append(a)}},0),clearTimeout(acf.media.render_timout),acf.media.render_timout=setTimeout(function(){e(document).trigger("acf/setup_fields",[t.$el])},50),this)},t.dispose=function(){e(document).trigger("acf/remove_fields",[this.$el]),this.orig_dispose()},t.save=function(e){var t={},i={};e&&e.preventDefault(),_.each(this.$el.serializeArray(),function(e){"[]"===e.name.slice(-2)&&(e.name=e.name.replace("[]",""),"undefined"==typeof i[e.name]&&(i[e.name]=-1),i[e.name]++,e.name+="["+i[e.name]+"]"),t[e.name]=e.value}),this.ignore_render=!0,this.model.saveCompat(t)}}},acf.conditional_logic={items:[],init:function(){var t=this;e(document).on("change",".field input, .field textarea, .field select",function(){e("#acf-has-changed").exists()&&e("#acf-has-changed").val(1),t.change(e(this))}),e(document).on("acf/setup_fields",function(i,a){t.refresh(e(a))}),t.refresh()},change:function(t){var i=this,a=t.closest(".field"),n=a.attr("data-field_key");e.each(this.items,function(t,a){e.each(a.rules,function(e,t){t.field==n&&i.refresh_field(a)})})},refresh_field:function(t){var i=this,a=e(".field_key-"+t.field);a.each(function(){var a=!0;"any"==t.allorany&&(a=!1);var n=e(this),s=!0;e.each(t.rules,function(o,l){var r=e(".field_key-"+l.field);r.hasClass("sub_field")&&(r=n.siblings(".field_key-"+l.field),s=!1,r.exists()||(n.parents("tr").each(function(){return r=e(this).find(".field_key-"+l.field),r.exists()?!1:void 0}),s=!0));var c=n.parent("tr").parent().parent("table").parent(".layout");c.exists()&&(s=!0,n.is("th")&&r.is("th")&&(r=n.closest(".layout").find("td.field_key-"+l.field)));var c=n.parent("tr").parent().parent("table").parent(".repeater");c.exists()&&"1"==c.attr("data-max_rows")&&(s=!0,n.is("th")&&r.is("th")&&(r=n.closest("table").find("td.field_key-"+l.field)));var d=i.calculate(l,r,n);if("all"==t.allorany){if(0==d)return a=!1,!1}else if(1==d)return a=!0,!1}),n.removeClass("acf-conditional_logic-hide acf-conditional_logic-show acf-show-blank"),a?(n.find("input, textarea, select").removeAttr("disabled"),n.addClass("acf-conditional_logic-show"),e(document).trigger("acf/conditional_logic/show",[n,t])):(n.find("input, textarea, select").attr("disabled","disabled"),n.addClass("acf-conditional_logic-hide"),s||n.addClass("acf-show-blank"),e(document).trigger("acf/conditional_logic/hide",[n,t]))})},refresh:function(t){t=t||e("body");var i=this;e.each(this.items,function(a,n){e.each(n.rules,function(e,a){t.find('.field[data-field_key="'+n.field+'"]').exists()&&i.refresh_field(n)})})},calculate:function(t,i,a){var n=!1;if(i.hasClass("field_type-true_false")||i.hasClass("field_type-checkbox")||i.hasClass("field_type-radio")){var s=i.find('input[value="'+t.value+'"]:checked').exists();"=="==t.operator?s&&(n=!0):s||(n=!0)}else{var o=i.find("input, textarea, select").last().val();e.isArray(o)||(o=[o]),"=="==t.operator?e.inArray(t.value,o)>-1&&(n=!0):e.inArray(t.value,o)<0&&(n=!0)}return n}},e(document).ready(function(){acf.conditional_logic.init(),e(".acf_postbox > .inside > .options").each(function(){e(this).closest(".acf_postbox").addClass(e(this).attr("data-layout"))}),e('#metakeyselect option[value^="field_"]').remove()}),e(window).load(function(){acf.media.init(),setTimeout(function(){try{e.isNumeric(acf.o.post_id)&&(wp.media.view.settings.post.id=acf.o.post_id)}catch(t){}e(document).trigger("acf/setup_fields",[e("#poststuff")])},10)}),acf.fields.gallery={add:function(){},edit:function(){},update_count:function(){},hide_selected_items:function(){},text:{title_add:"Select Images"}}}(jQuery),function(e){function t(){var t=[];e(".categorychecklist input:checked, .acf-taxonomy-field input:checked, .acf-taxonomy-field option:selected").each(function(){e(this).is(":hidden")||e(this).is(":disabled")||e(this).closest(".media-frame").exists()||e(this).closest(".acf-taxonomy-field").exists()&&"0"==e(this).closest(".acf-taxonomy-field").attr("data-save")||-1===t.indexOf(e(this).val())&&t.push(e(this).val())}),acf.screen.post_category=t,acf.screen.taxonomy=t,e(document).trigger("acf/update_field_groups")}acf.screen={action:"acf/location/match_field_groups_ajax",post_id:0,page_template:0,page_parent:0,page_type:0,post_category:0,post_format:0,taxonomy:0,lang:0,nonce:0},e(document).ready(function(){if(acf.screen.post_id=acf.o.post_id,acf.screen.nonce=acf.o.nonce,e("#icl-als-first").length>0){var t=e("#icl-als-first").children("a").attr("href"),i=new RegExp("lang=([^&#]*)"),a=i.exec(t);acf.screen.lang=a[1]}}),e(document).on("acf/update_field_groups",function(){return acf.screen.post_id&&e.isNumeric(acf.screen.post_id)?void e.ajax({url:ajaxurl,data:acf.screen,type:"post",dataType:"json",success:function(t){return t?(e(".acf_postbox").addClass("acf-hidden"),e(".acf_postbox-toggle").addClass("acf-hidden"),0==t.length?!1:(e.each(t,function(t,i){var a=e("#acf_"+i),n=e('#adv-settings .acf_postbox-toggle[for="acf_'+i+'-hide"]');a.removeClass("acf-hidden hide-if-js"),n.removeClass("acf-hidden"),n.find('input[type="checkbox"]').attr("checked","checked"),a.find(".acf-replace-with-fields").each(function(){var t=e(this);e.ajax({url:ajaxurl,data:{action:"acf/post/render_fields",acf_id:i,post_id:acf.o.post_id,nonce:acf.o.nonce},type:"post",dataType:"html",success:function(i){t.replaceWith(i),e(document).trigger("acf/setup_fields",a)}})})}),void e.ajax({url:ajaxurl,data:{action:"acf/post/get_style",acf_id:t[0],nonce:acf.o.nonce},type:"post",dataType:"html",success:function(t){e("#acf_style").html(t)}}))):!1}}):!1}),e(document).on("change","#page_template",function(){acf.screen.page_template=e(this).val(),e(document).trigger("acf/update_field_groups")}),e(document).on("change","#parent_id",function(){var t=e(this).val();""!=t?(acf.screen.page_type="child",acf.screen.page_parent=t):(acf.screen.page_type="parent",acf.screen.page_parent=0),e(document).trigger("acf/update_field_groups")}),e(document).on("change",'#post-formats-select input[type="radio"]',function(){var t=e(this).val();"0"==t&&(t="standard"),acf.screen.post_format=t,e(document).trigger("acf/update_field_groups")}),e(document).on("change",".categorychecklist input, .acf-taxonomy-field input, .acf-taxonomy-field select",function(){e(this).closest(".acf-taxonomy-field").exists()&&"0"==e(this).closest(".acf-taxonomy-field").attr("data-save")||e(this).closest(".media-frame").exists()||setTimeout(function(){t()},1)})}(jQuery),function(e){var t=acf.fields.color_picker={$el:null,$input:null,set:function(t){return e.extend(this,t),this.$input=this.$el.find('input[type="text"]'),this},init:function(){var e=this.$input;acf.helpers.is_clone_field(e)||this.$input.wpColorPicker()}};e(document).on("acf/setup_fields",function(i,a){e(a).find(".acf-color_picker").each(function(){t.set({$el:e(this)}).init()})})}(jQuery),function(e){acf.fields.date_picker={$el:null,$input:null,$hidden:null,o:{},set:function(t){return e.extend(this,t),this.$input=this.$el.find('input[type="text"]'),this.$hidden=this.$el.find('input[type="hidden"]'),this.o=acf.helpers.get_atts(this.$el),this},init:function(){if(!acf.helpers.is_clone_field(this.$hidden)){this.$input.val(this.$hidden.val());var t=e.extend({},acf.l10n.date_picker,{dateFormat:this.o.save_format,altField:this.$hidden,altFormat:this.o.save_format,changeYear:!0,yearRange:"-100:+100",changeMonth:!0,showButtonPanel:!0,firstDay:this.o.first_day});this.$input.addClass("active").datepicker(t),this.$input.datepicker("option","dateFormat",this.o.display_format),e("body > #ui-datepicker-div").length>0&&e("#ui-datepicker-div").wrap('<div class="ui-acf" />')}},blur:function(){this.$input.val()||this.$hidden.val("")}},e(document).on("acf/setup_fields",function(t,i){e(i).find(".acf-date_picker").each(function(){acf.fields.date_picker.set({$el:e(this)}).init()})}),e(document).on("blur",'.acf-date_picker input[type="text"]',function(t){acf.fields.date_picker.set({$el:e(this).parent()}).blur()})}(jQuery),function(e){var t=acf.media;acf.fields.file={$el:null,$input:null,o:{},set:function(t){return e.extend(this,t),this.$input=this.$el.find('input[type="hidden"]'),this.o=acf.helpers.get_atts(this.$el),this.o.multiple=this.$el.closest(".repeater").exists()?!0:!1,this.o.query={},"uploadedTo"==this.o.library&&(this.o.query.uploadedTo=acf.o.post_id),this},init:function(){acf.helpers.is_clone_field(this.$input)},add:function(e){var i=t.div;i.find(".acf-file-icon").attr("src",e.icon),i.find(".acf-file-title").text(e.title),i.find(".acf-file-name").text(e.name).attr("href",e.url),i.find(".acf-file-size").text(e.size),i.find(".acf-file-value").val(e.id).trigger("change"),i.addClass("active"),i.closest(".field").removeClass("error")},edit:function(){var i=this.$input.val();t.div=this.$el,t.clear_frame(),t.frame=wp.media({title:acf.l10n.file.edit,multiple:!1,button:{text:acf.l10n.file.update}}),t.frame.on("open",function(){"browse"!=t.frame.content._mode&&t.frame.content.mode("browse"),t.frame.$el.closest(".media-modal").addClass("acf-media-modal acf-expanded");var a=t.frame.state().get("selection"),n=wp.media.attachment(i);e.isEmptyObject(n.changed)&&n.fetch(),a.add(n)}),t.frame.on("close",function(){t.frame.$el.closest(".media-modal").removeClass("acf-media-modal")}),acf.media.frame.open()},remove:function(){this.$el.find(".acf-file-icon").attr("src",""),this.$el.find(".acf-file-title").text(""),this.$el.find(".acf-file-name").text("").attr("href",""),this.$el.find(".acf-file-size").text(""),this.$el.find(".acf-file-value").val("").trigger("change"),this.$el.removeClass("active")},popup:function(){var i=this;return t.div=this.$el,t.clear_frame(),t.frame=wp.media({states:[new wp.media.controller.Library({library:wp.media.query(i.o.query),multiple:i.o.multiple,title:acf.l10n.file.select,priority:20,filterable:"all"})]}),acf.media.frame.on("content:activate",function(){var t=null,a=null;try{t=acf.media.frame.content.get().toolbar,a=t.get("filters")}catch(n){}return a?void("uploadedTo"==i.o.library&&(a.$el.find('option[value="uploaded"]').remove(),a.$el.after("<span>"+acf.l10n.file.uploadedTo+"</span>"),e.each(a.filters,function(e,t){t.props.uploadedTo=acf.o.post_id}))):!1}),acf.media.frame.on("select",function(){if(selection=t.frame.state().get("selection")){var e=0;selection.each(function(i){if(e++,e>1){var a=t.div.closest("td"),n=a.closest(".row"),s=n.closest(".repeater"),o=a.attr("data-field_key"),l="td .acf-file-uploader:first";o&&(l='td[data-field_key="'+o+'"] .acf-file-uploader'),n.next(".row").exists()||s.find(".add-row-end").trigger("click"),t.div=n.next(".row").find(l)}var r={id:i.id,title:i.attributes.title,name:i.attributes.filename,url:i.attributes.url,icon:i.attributes.icon,size:i.attributes.filesize};acf.fields.file.add(r)})}}),acf.media.frame.open(),!1}},e(document).on("click",".acf-file-uploader .acf-button-edit",function(t){t.preventDefault(),acf.fields.file.set({$el:e(this).closest(".acf-file-uploader")}).edit()}),e(document).on("click",".acf-file-uploader .acf-button-delete",function(t){t.preventDefault(),acf.fields.file.set({$el:e(this).closest(".acf-file-uploader")}).remove()}),e(document).on("click",".acf-file-uploader .add-file",function(t){t.preventDefault(),acf.fields.file.set({$el:e(this).closest(".acf-file-uploader")}).popup()})}(jQuery),function(e){acf.fields.google_map={$el:null,$input:null,o:{},ready:!1,geocoder:!1,map:!1,maps:{},set:function(t){return e.extend(this,t),this.$input=this.$el.find(".value"),this.o=acf.helpers.get_atts(this.$el),this.maps[this.o.id]&&(this.map=this.maps[this.o.id]),this},init:function(){this.geocoder||(this.geocoder=new google.maps.Geocoder),this.ready=!0,acf.helpers.is_clone_field(this.$input)||this.render()},render:function(){var e=this,t=this.$el,i={zoom:parseInt(this.o.zoom),center:new google.maps.LatLng(this.o.lat,this.o.lng),mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.$el.find(".canvas")[0],i);var a=new google.maps.places.Autocomplete(this.$el.find(".search")[0]);a.map=this.map,a.bindTo("bounds",this.map),this.map.marker=new google.maps.Marker({draggable:!0,raiseOnDrag:!0,map:this.map}),this.map.$el=this.$el;var n=this.$el.find(".input-lat").val(),s=this.$el.find(".input-lng").val();n&&s&&this.update(n,s).center(),google.maps.event.addListener(a,"place_changed",function(t){var i=this.map.$el,a=i.find(".search").val();i.find(".input-address").val(a),i.find(".title h4").text(a);var n=this.getPlace();if(n.geometry){var s=n.geometry.location.lat(),o=n.geometry.location.lng();e.set({$el:i}).update(s,o).center()}else e.geocoder.geocode({address:a},function(t,a){if(a!=google.maps.GeocoderStatus.OK)return void console.log("Geocoder failed due to: "+a);if(!t[0])return void console.log("No results found");n=t[0];var s=n.geometry.location.lat(),o=n.geometry.location.lng();e.set({$el:i}).update(s,o).center()})}),google.maps.event.addListener(this.map.marker,"dragend",function(){var t=this.map.$el,i=this.map.marker.getPosition(),a=i.lat(),n=i.lng();e.set({$el:t}).update(a,n).sync()}),google.maps.event.addListener(this.map,"click",function(t){var i=this.$el,a=t.latLng.lat(),n=t.latLng.lng();e.set({$el:i}).update(a,n).sync()}),this.maps[this.o.id]=this.map},update:function(e,t){var i=new google.maps.LatLng(e,t);return this.$el.find(".input-lat").val(e),this.$el.find(".input-lng").val(t).trigger("change"),this.map.marker.setPosition(i),this.map.marker.setVisible(!0),this.$el.addClass("active"),this.$el.closest(".field").removeClass("error"),this},center:function(){var e=this.map.marker.getPosition(),t=this.o.lat,i=this.o.lng;e&&(t=e.lat(),i=e.lng());var a=new google.maps.LatLng(t,i);this.map.setCenter(a)},sync:function(){var e=this.$el,t=this.map.marker.getPosition(),i=new google.maps.LatLng(t.lat(),t.lng());return this.geocoder.geocode({latLng:i},function(t,i){if(i!=google.maps.GeocoderStatus.OK)return void console.log("Geocoder failed due to: "+i);if(!t[0])return void console.log("No results found");var a=t[0];e.find(".title h4").text(a.formatted_address),e.find(".input-address").val(a.formatted_address).trigger("change")}),this},locate:function(){var e=this,t=this.$el;return navigator.geolocation?(t.find(".title h4").text(acf.l10n.google_map.locating+"..."),t.addClass("active"),void navigator.geolocation.getCurrentPosition(function(i){var a=i.coords.latitude,n=i.coords.longitude;e.set({$el:t}).update(a,n).sync().center()})):(alert(acf.l10n.google_map.browser_support),this)},clear:function(){this.$el.removeClass("active"),this.$el.find(".search").val(""),this.$el.find(".input-address").val(""),this.$el.find(".input-lat").val(""),this.$el.find(".input-lng").val(""),this.map.marker.setVisible(!1)},edit:function(){this.$el.removeClass("active");var e=this.$el.find(".title h4").text();this.$el.find(".search").val(e).focus()},refresh:function(){google.maps.event.trigger(this.map,"resize"),this.center()}},e(document).on("acf/setup_fields",function(t,i){$fields=e(i).find(".acf-google-map"),$fields.exists()&&("undefined"==typeof google?e.getScript("https://www.google.com/jsapi",function(){google.load("maps","3",{other_params:"sensor=false&libraries=places",callback:function(){$fields.each(function(){acf.fields.google_map.set({$el:e(this)}).init()})}})}):google.load("maps","3",{other_params:"sensor=false&libraries=places",callback:function(){$fields.each(function(){acf.fields.google_map.set({$el:e(this)}).init()})}}))}),e(document).on("click",".acf-google-map .acf-sprite-remove",function(t){t.preventDefault(),acf.fields.google_map.set({$el:e(this).closest(".acf-google-map")}).clear(),e(this).blur()}),e(document).on("click",".acf-google-map .acf-sprite-locate",function(t){t.preventDefault(),acf.fields.google_map.set({$el:e(this).closest(".acf-google-map")}).locate(),e(this).blur()}),e(document).on("click",".acf-google-map .title h4",function(t){t.preventDefault(),acf.fields.google_map.set({$el:e(this).closest(".acf-google-map")}).edit()}),e(document).on("keydown",".acf-google-map .search",function(e){return 13==e.which?!1:void 0}),e(document).on("blur",".acf-google-map .search",function(t){var i=e(this).closest(".acf-google-map");i.find(".input-lat").val()&&i.addClass("active")}),e(document).on("acf/fields/tab/show acf/conditional_logic/show",function(e,t){acf.fields.google_map.ready&&"google_map"==t.attr("data-field_type")&&acf.fields.google_map.set({$el:t.find(".acf-google-map")}).refresh()})}(jQuery),function(e){var t=acf.media;acf.fields.image={$el:null,$input:null,o:{},set:function(t){return e.extend(this,t),this.$input=this.$el.find('input[type="hidden"]'),this.o=acf.helpers.get_atts(this.$el),this.o.multiple=this.$el.closest(".repeater").exists()?!0:!1,this.o.query={type:"image"},"uploadedTo"==this.o.library&&(this.o.query.uploadedTo=acf.o.post_id),this},init:function(){acf.helpers.is_clone_field(this.$input)},add:function(e){var i=t.div;i.find(".acf-image-image").attr("src",e.url),i.find(".acf-image-value").val(e.id).trigger("change"),i.addClass("active"),i.closest(".field").removeClass("error")},edit:function(){var i=this.$input.val();t.div=this.$el,t.clear_frame(),t.frame=wp.media({title:acf.l10n.image.edit,multiple:!1,button:{text:acf.l10n.image.update}}),t.frame.on("open",function(){"browse"!=t.frame.content._mode&&t.frame.content.mode("browse"),t.frame.$el.closest(".media-modal").addClass("acf-media-modal acf-expanded");var a=t.frame.state().get("selection"),n=wp.media.attachment(i);e.isEmptyObject(n.changed)&&n.fetch(),a.add(n)}),t.frame.on("close",function(){t.frame.$el.closest(".media-modal").removeClass("acf-media-modal")}),acf.media.frame.open()},remove:function(){this.$el.find(".acf-image-image").attr("src",""),this.$el.find(".acf-image-value").val("").trigger("change"),this.$el.removeClass("active")},popup:function(){var i=this;return t.div=this.$el,t.clear_frame(),t.frame=wp.media({states:[new wp.media.controller.Library({library:wp.media.query(i.o.query),multiple:i.o.multiple,title:acf.l10n.image.select,priority:20,filterable:"all"})]}),acf.media.frame.on("content:activate",function(){var t=null,a=null;try{t=acf.media.frame.content.get().toolbar,a=t.get("filters")}catch(n){}return a?(e.each(a.filters,function(e,t){t.props.type="image"}),"uploadedTo"==i.o.library&&(a.$el.find('option[value="uploaded"]').remove(),a.$el.after("<span>"+acf.l10n.image.uploadedTo+"</span>"),e.each(a.filters,function(e,t){t.props.uploadedTo=acf.o.post_id})),a.$el.find("option").each(function(){var t=e(this).attr("value");("uploaded"!=t||"all"!=i.o.library)&&-1===t.indexOf("image")&&e(this).remove()}),void a.$el.val("image").trigger("change")):!1}),acf.media.frame.on("select",function(){if(selection=t.frame.state().get("selection")){var e=0;selection.each(function(a){if(e++,e>1){var n=t.div.closest("td"),s=n.closest(".row"),o=s.closest(".repeater"),l=n.attr("data-field_key"),r="td .acf-image-uploader:first";l&&(r='td[data-field_key="'+l+'"] .acf-image-uploader'),s.next(".row").exists()||o.find(".add-row-end").trigger("click"),t.div=s.next(".row").find(r)}var c={id:a.id,url:a.attributes.url};a.attributes.sizes&&a.attributes.sizes[i.o.preview_size]&&(c.url=a.attributes.sizes[i.o.preview_size].url),acf.fields.image.add(c)})}}),acf.media.frame.open(),!1},text:{title_add:"Select Image",title_edit:"Edit Image"}},e(document).on("click",".acf-image-uploader .acf-button-edit",function(t){t.preventDefault(),acf.fields.image.set({$el:e(this).closest(".acf-image-uploader")}).edit()}),e(document).on("click",".acf-image-uploader .acf-button-delete",function(t){t.preventDefault(),acf.fields.image.set({$el:e(this).closest(".acf-image-uploader")}).remove()}),e(document).on("click",".acf-image-uploader .add-image",function(t){t.preventDefault(),acf.fields.image.set({$el:e(this).closest(".acf-image-uploader")}).popup()})}(jQuery),function(e){acf.fields.radio={$el:null,$input:null,$other:null,farbtastic:null,set:function(t){return e.extend(this,t),this.$input=this.$el.find('input[type="radio"]:checked'),this.$other=this.$el.find('input[type="text"]'),this},change:function(){"other"==this.$input.val()?(this.$other.attr("name",this.$input.attr("name")),this.$other.show()):(this.$other.attr("name",""),this.$other.hide())}},e(document).on("change",'.acf-radio-list input[type="radio"]',function(t){acf.fields.radio.set({$el:e(this).closest(".acf-radio-list")}).change()})}(jQuery),function(e){acf.fields.relationship={$el:null,$input:null,$left:null,$right:null,o:{},timeout:null,set:function(t){return e.extend(this,t),this.$input=this.$el.children('input[type="hidden"]'),this.$left=this.$el.find(".relationship_left"),this.$right=this.$el.find(".relationship_right"),this.o=acf.helpers.get_atts(this.$el),this},init:function(){var t=this;if(!acf.helpers.is_clone_field(this.$input)){this.$right.find(".relationship_list").height(this.$left.height()-2),this.$right.find(".relationship_list").sortable({axis:"y",items:"> li",forceHelperSize:!0,forcePlaceholderSize:!0,scroll:!0,update:function(){t.$input.trigger("change")}});var i=this.$el;this.$left.find(".relationship_list").scrollTop(0).on("scroll",function(a){if(!i.hasClass("loading")&&!i.hasClass("no-results")&&e(this).scrollTop()+e(this).innerHeight()>=e(this).get(0).scrollHeight){var n=parseInt(i.attr("data-paged"));i.attr("data-paged",n+1),t.set({$el:i}).fetch()}}),this.fetch()}},fetch:function(){var t=this,i=this.$el;i.addClass("loading"),e.ajax({url:acf.o.ajaxurl,type:"post",dataType:"json",data:e.extend({action:"acf/fields/relationship/query_posts",post_id:acf.o.post_id,nonce:acf.o.nonce},this.o),success:function(e){t.set({$el:i}).render(e)}})},render:function(t){var i=this;return this.$el.removeClass("no-results").removeClass("loading"),1==this.o.paged&&this.$el.find(".relationship_left li:not(.load-more)").remove(),t&&t.html?(this.$el.find(".relationship_left .load-more").before(t.html),t.next_page_exists||this.$el.addClass("no-results"),void this.$left.find("a").each(function(){var t=e(this).attr("data-post_id");i.$right.find('a[data-post_id="'+t+'"]').exists()&&e(this).parent().addClass("hide")})):void this.$el.addClass("no-results")},add:function(e){var t=e.attr("data-post_id"),i=e.html();if(this.$right.find("a").length>=this.o.max)return alert(acf.l10n.relationship.max.replace("{max}",this.o.max)),!1;if(e.parent().hasClass("hide"))return!1;e.parent().addClass("hide");var a={post_id:e.attr("data-post_id"),title:e.html(),name:this.$input.attr("name")},n=_.template(acf.l10n.relationship.tmpl_li,a);this.$right.find(".relationship_list").append(n),this.$input.trigger("change"),this.$el.closest(".field").removeClass("error")},remove:function(e){e.parent().remove(),this.$left.find('a[data-post_id="'+e.attr("data-post_id")+'"]').parent("li").removeClass("hide"),this.$input.trigger("change")}},e(document).on("acf/setup_fields",function(t,i){e(i).find(".acf_relationship").each(function(){acf.fields.relationship.set({$el:e(this)}).init()})}),e(document).on("change",".acf_relationship .select-post_type",function(t){var i=e(this).val(),a=e(this).closest(".acf_relationship");a.attr("data-post_type",i),a.attr("data-paged",1),acf.fields.relationship.set({$el:a}).fetch()}),e(document).on("click",".acf_relationship .relationship_left .relationship_list a",function(t){t.preventDefault(),acf.fields.relationship.set({$el:e(this).closest(".acf_relationship")}).add(e(this)),e(this).blur()}),e(document).on("click",".acf_relationship .relationship_right .relationship_list a",function(t){t.preventDefault(),acf.fields.relationship.set({$el:e(this).closest(".acf_relationship")}).remove(e(this)),e(this).blur()}),e(document).on("keyup",".acf_relationship input.relationship_search",function(t){var i=e(this).val(),a=e(this).closest(".acf_relationship");a.attr("data-s",i),a.attr("data-paged",1),clearTimeout(acf.fields.relationship.timeout),acf.fields.relationship.timeout=setTimeout(function(){acf.fields.relationship.set({$el:a}).fetch()},500)}),e(document).on("keypress",".acf_relationship input.relationship_search",function(e){13==e.which&&e.preventDefault()})}(jQuery),function(e){acf.fields.tab={add_group:function(e){var t="";t=e.is("tbody")?'<tr class="acf-tab-wrap"><td colspan="2"><ul class="hl clearfix acf-tab-group"></ul></td></tr>':'<div class="acf-tab-wrap"><ul class="hl clearfix acf-tab-group"></ul></div>',e.children(".field_type-tab:first").before(t)},add_tab:function(e){var t=e.closest(".field"),i=t.parent(),a=t.attr("data-field_key"),n=e.text();i.children(".acf-tab-wrap").exists()||this.add_group(i),i.children(".acf-tab-wrap").find(".acf-tab-group").append('<li><a class="acf-tab-button" href="#" data-key="'+a+'">'+n+"</a></li>")},toggle:function(t){var i=this,a=t.closest(".acf-tab-wrap").parent(),n=t.attr("data-key");t.parent("li").addClass("active").siblings("li").removeClass("active"),a.children(".field_type-tab").each(function(){var t=e(this);t.attr("data-field_key")==n?i.show_tab_fields(e(this)):i.hide_tab_fields(e(this))})},show_tab_fields:function(t){t.nextUntil(".field_type-tab").each(function(){e(this).removeClass("acf-tab_group-hide").addClass("acf-tab_group-show"),e(document).trigger("acf/fields/tab/show",[e(this)])})},hide_tab_fields:function(t){t.nextUntil(".field_type-tab").each(function(){e(this).removeClass("acf-tab_group-show").addClass("acf-tab_group-hide"),e(document).trigger("acf/fields/tab/hide",[e(this)])})},refresh:function(t){var i=this;t.find(".acf-tab-group").each(function(){e(this).find(".acf-tab-button:first").each(function(){i.toggle(e(this))})})}},e(document).on("acf/setup_fields",function(t,i){e(i).find(".acf-tab").each(function(){acf.fields.tab.add_tab(e(this))}),acf.fields.tab.refresh(e(i))}),e(document).on("click",".acf-tab-button",function(t){t.preventDefault(),acf.fields.tab.toggle(e(this)),e(this).trigger("blur")}),e(document).on("acf/conditional_logic/hide",function(e,t,i){if("tab"==t.attr("data-field_type")){var a=t.siblings(".acf-tab-wrap").find('a[data-key="'+t.attr("data-field_key")+'"]');a.is(":hidden")||(a.parent().hide(),a.parent().siblings(":visible").exists()?a.parent().siblings(":visible").first().children("a").trigger("click"):acf.fields.tab.hide_tab_fields(t))}}),e(document).on("acf/conditional_logic/show",function(e,t,i){if("tab"==t.attr("data-field_type")){var a=t.siblings(".acf-tab-wrap").find('a[data-key="'+t.attr("data-field_key")+'"]');if(!a.is(":visible"))return a.parent().show(),a.parent().hasClass("active")?void a.trigger("click"):a.parent().siblings(".active").is(":hidden")?void a.trigger("click"):void 0}})}(jQuery),function(e){acf.validation={status:!0,disabled:!1,run:function(){var t=this;t.status=!0,e(".field.required, .form-field.required").each(function(){t.validate(e(this))})},validate:function(t){var i=!1,a=null;if(t.data("validation",!0),t.is(":hidden")&&(i=!0,t.hasClass("acf-tab_group-hide"))){i=!1;var n=t.prevAll(".field_type-tab:first"),s=t.prevAll(".acf-tab-wrap:first");n.hasClass("acf-conditional_logic-hide")?i=!0:a=s.find('.acf-tab-button[data-key="'+n.attr("data-field_key")+'"]')}if(t.hasClass("acf-conditional_logic-hide")&&(i=!0),t.closest(".postbox.acf-hidden").exists()&&(i=!0),!i){if(""==t.find('input[type="text"], input[type="email"], input[type="number"], input[type="hidden"], textarea').val()&&t.data("validation",!1),t.find(".acf_wysiwyg").exists()&&"object"==typeof tinyMCE){t.data("validation",!0);var o=t.find(".wp-editor-area").attr("id"),l=tinyMCE.get(o);l&&!l.getContent()&&t.data("validation",!1)}if(t.find("select").exists()&&(t.data("validation",!0),"null"!=t.find("select").val()&&t.find("select").val()||t.data("validation",!1)),t.find('input[type="radio"]').exists()&&(t.data("validation",!1),t.find('input[type="radio"]:checked').exists()&&t.data("validation",!0)),t.find('input[type="checkbox"]').exists()&&(t.data("validation",!1),t.find('input[type="checkbox"]:checked').exists()&&t.data("validation",!0)),t.find(".acf_relationship").exists()&&(t.data("validation",!1),t.find(".acf_relationship .relationship_right input").exists()&&t.data("validation",!0)),t.find(".repeater").exists()&&(t.data("validation",!1),t.find(".repeater tr.row").exists()&&t.data("validation",!0)),t.find(".acf-gallery").exists()&&(t.data("validation",!1),t.find(".acf-gallery .thumbnail").exists()&&t.data("validation",!0)),e(document).trigger("acf/validate_field",[t]),!t.data("validation")){if(this.status=!1,t.closest(".field").addClass("error"),t.data("validation_message")){var r=t.find("p.label:first"),c=null;r.children(".acf-error-message").remove(),r.append('<span class="acf-error-message"><i class="bit"></i>'+t.data("validation_message")+"</span>")}a&&a.trigger("click")}}}},e(document).on("focus click",".field.required input, .field.required textarea, .field.required select",function(t){e(this).closest(".field").removeClass("error")}),e(document).on("click","#save-post",function(){acf.validation.disabled=!0}),e(document).on("submit","#post",function(){if(acf.validation.disabled)return!0;if(acf.validation.run(),!acf.validation.status){var t=e(this);return t.siblings("#message").remove(),t.before('<div id="message" class="error"><p>'+acf.l10n.validation.error+"</p></div>"),e("#submitdiv").exists()&&(e("#submitdiv").find(".disabled").removeClass("disabled"),e("#submitdiv").find(".button-disabled").removeClass("button-disabled"),e("#submitdiv").find(".button-primary-disabled").removeClass("button-primary-disabled"),e("#submitdiv .spinner").hide()),!1
}return e(".acf_postbox.acf-hidden").remove(),!0})}(jQuery),function(e){var t=acf.fields.wysiwyg={$el:null,$textarea:null,o:{},set:function(t){return e.extend(this,t),this.$textarea=this.$el.find("textarea"),this.o=acf.helpers.get_atts(this.$el),this.o.id=this.$textarea.attr("id"),this},has_tinymce:function(){var e=!1;return"object"==typeof tinyMCE&&(e=!0),e},get_toolbar:function(){return acf.helpers.isset(this,"toolbars",this.o.toolbar)?this.toolbars[this.o.toolbar]:!1},init:function(){if(!acf.helpers.is_clone_field(this.$textarea)){var t=this.get_toolbar(),i="mceAddControl",a="theme_advanced_buttons{i}",n=e.extend({},tinyMCE.settings);if(4==tinymce.majorVersion&&(i="mceAddEditor",a="toolbar{i}"),t)for(var s=1;5>s;s++){var o="";acf.helpers.isset(t,"theme_advanced_buttons"+s)&&(o=t["theme_advanced_buttons"+s]),tinyMCE.settings[a.replace("{i}",s)]=o}tinyMCE.execCommand(i,!1,this.o.id),e(document).trigger("acf/wysiwyg/load",this.o.id),this.add_events(),tinyMCE.settings=n,wpActiveEditor=null}},add_events:function(){var t=this.o.id,i=tinyMCE.get(t);if(i){var a=e("#wp-"+t+"-wrap"),n=e(i.getBody());a.on("click",function(){e(document).trigger("acf/wysiwyg/click",t)}),n.on("focus",function(){e(document).trigger("acf/wysiwyg/focus",t)}),n.on("blur",function(){e(document).trigger("acf/wysiwyg/blur",t)})}},destroy:function(){var e=this.o.id,t="mceRemoveControl";try{var i=tinyMCE.get(e);if(!i)return;4==tinymce.majorVersion&&(t="mceRemoveEditor");var a=i.getContent();tinyMCE.execCommand(t,!1,e),this.$textarea.val(a)}catch(n){}wpActiveEditor=null}};e(document).on("acf/setup_fields",function(i,a){t.has_tinymce()&&(e(a).find(".acf_wysiwyg").each(function(){t.set({$el:e(this)}).destroy()}),setTimeout(function(){e(a).find(".acf_wysiwyg").each(function(){t.set({$el:e(this)}).init()})},0))}),e(document).on("acf/remove_fields",function(i,a){t.has_tinymce()&&a.find(".acf_wysiwyg").each(function(){t.set({$el:e(this)}).destroy()})}),e(document).on("acf/wysiwyg/click",function(t,i){wpActiveEditor=i,container=e("#wp-"+i+"-wrap").closest(".field").removeClass("error")}),e(document).on("acf/wysiwyg/focus",function(t,i){wpActiveEditor=i,container=e("#wp-"+i+"-wrap").closest(".field").removeClass("error")}),e(document).on("acf/wysiwyg/blur",function(t,i){wpActiveEditor=null;var a=tinyMCE.get(i);if(a){var n=a.getElement();a.save(),e(n).trigger("change")}}),e(document).on("acf/sortable_start",function(i,a){t.has_tinymce()&&e(a).find(".acf_wysiwyg").each(function(){t.set({$el:e(this)}).destroy()})}),e(document).on("acf/sortable_stop",function(i,a){t.has_tinymce()&&e(a).find(".acf_wysiwyg").each(function(){t.set({$el:e(this)}).init()})}),e(window).load(function(){if(t.has_tinymce()){var i=e("#wp-content-wrap").exists(),a=e("#wp-acf_settings-wrap").exists();mode="tmce",a&&e("#wp-acf_settings-wrap").hasClass("html-active")&&(mode="html"),setTimeout(function(){a&&"html"==mode&&e("#acf_settings-tmce").trigger("click")},1),setTimeout(function(){a&&"html"==mode&&e("#acf_settings-html").trigger("click"),i&&t.set({$el:e("#wp-content-wrap")}).add_events()},11)}}),e(document).on("click",".acf_wysiwyg a.mce_fullscreen",function(){var t=e(this).closest(".acf_wysiwyg"),i=t.attr("data-upload");"no"==i&&e("#mce_fullscreen_container td.mceToolbar .mce_add_media").remove()})}(jQuery);