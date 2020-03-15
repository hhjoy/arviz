(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("38496fff-2b8c-41d7-923b-197561616d91");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '38496fff-2b8c-41d7-923b-197561616d91' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;3a0b0aea-73d8-480c-b44e-5a2c4b96e236&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;55917&quot;},{&quot;id&quot;:&quot;55918&quot;},{&quot;id&quot;:&quot;55919&quot;},{&quot;id&quot;:&quot;55920&quot;},{&quot;id&quot;:&quot;55921&quot;},{&quot;id&quot;:&quot;55922&quot;},{&quot;id&quot;:&quot;55923&quot;},{&quot;id&quot;:&quot;55924&quot;}]},&quot;id&quot;:&quot;55925&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55901&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55914&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;55909&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;55912&quot;},{&quot;id&quot;:&quot;55916&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;55913&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;55937&quot;},{&quot;id&quot;:&quot;55942&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;55945&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;55925&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;55901&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;55905&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;55903&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;55907&quot;}},&quot;id&quot;:&quot;55900&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;55924&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55907&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;55940&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;55913&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;55916&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;55948&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;55910&quot;}},&quot;id&quot;:&quot;55909&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55923&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55918&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55903&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;55945&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;55939&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;55940&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;55941&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;55943&quot;}},&quot;id&quot;:&quot;55942&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;55955&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55922&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55948&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;qc9DEmehCsABjAcTwhkJwPzrB/wSIgDAs/0qtebI/79+hvGtRG/+v5oSWBHSdPu/sIgVzpas+L9VuiqwM6f2v4+oR50Giva/EEA1LOUz9r9pS2p089z0vy3QNEl7e/O/FstignV98r+xux98gmryv0HkoHgCB/G/Zu9KGr/g8L+7PykiqYnpv5FMsDn9z+i/PPcRsoHL6L8KIZK3E+fnv3D+WCwQfOe/YsUVaAcR5r+JV2Ir5Pzkv5kWer/9jeS/KbFA3rQa5L/fWsLxzpjivzkodoulL+G/QtDslzEt4b/HRb8oTY3gv/ANd1Evat+/ZfO2RvNp3b8q6oOGNnfcv8Rkr6Qchtu/UW+hjqOU179wMM6yjNjWvw4TWPjvP9a/JdI949Ul1r8bOX3ubhzTv1jOHwNHB9K/k5cpJbQ5zb+2X8kWG6zKv/IOb8XwPcO/KHbgRLGDwL+r3nEGw+2/v6T/VUwfNqi/W1G4Y43XmL8D4/7QuDVxv5ISPHodEKM/pzUxW60mqz84JJF61bO7P0r890zGNMI/ZZSGOvngwz+UKxU0/lnFP1TG7p1VZ8g/8yazbpDszD+GRtm6wzvPP4NnzI2+iNM/QUcwyyHL1D+3knq1nUDVP8TmOxEgZdY/j0ROjbOU1j+sxd84mFjXP1eRP+1rR9g/gyudmAqu2D+oauTrjqPZP3Ig6j23Hds/HpDJ6fr32z+zzwEjuxHgPzMCluUhveA/AIZlRbjn4D8Xs06e5y/hP65zbk11TeQ/0ffZneeG5D+2OaW17ebkP7o6fT9oa+k/kb5HwO8/6z+0D6PeTSrsPyjlNwN9aOw/tABl3BOL7j+k4bYXN77vP35S5WdiKvE/n6dI4KG48T8C5f+M1/fxP7PCrGT3cPI/l4y1Yd/x8j/gen6qHB3zP78XqC4yw/M/0qF8/5DF8z+GfiJFSCr0PyP02rM5vvQ/CDIa/Pbs9D+JDa8MHQn1PwkjtZDmG/U/OLAjKCKV9T8zIjU2jGr3P/fBp9JB7Pk/EYvGZ5ND+z8UHF/X5Cv+P8Xt45uEOv8/ry2rSpPPBUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;XMHwtmN61T/8z+Gz95jbPwgo8Afau+8/JoFqpYwb8D/BPAepXcjwP7P2U/eWRfI/qDv1mLSp8z/WouonZqz0P7grXLH8uvQ/+F/laQ3m9D9M2spFhpH1P+qXZVtCQvY/dZrOPkXB9j8oIvDBvsr2P+CNr8N+fPc/TYjacqCP9z8RsHW3lZ35P9zsk7EAzPk/MYJ7kx/N+T++dxsSOwb6P2TA6fT7IPo/qI76Jb57+j8eaif1xsD6P1p6IZCA3Po/ttNvyFL5+j9IaY9DzFn7P/J1Ip0WtPs/8MsEmrO0+z+OLtC1rNz7P0Ie0RW6Evw/kyEpl8FS/D+7gi8vGXH8P2gTams8j/w/FtIrjmsN/T/yOaZp7iT9P5799AACOP0/u0WYQ0U7/T/dWDAicpz9PzUGnB8Xv/0/h2atvWQs/j8FapNOPlX+PxEPqfMgzP4/nvix68T3/j8LccznkQD/PwGozoInn/8/XY845VDO/z+OgJcjZff/PyV49DogJgBAa2K2Wk02AECRROpVz24AQOK/ZzKmkQBAozTUyQefAEBdqaDxz6oAQDN276w6wwBAOJl1g2TnAEA0ytYd3vkAQHjG3OiLOAFAdASzHLJMAUArqVfbCVQBQGy+EwFSZgFASeTUOEtpAUBb/I2DiXUBQBX50752hAFAuNKJqeCKAUCqRr7uOJoBQAei3nPbsQFAApmcrn+/AUD2OWBkNwICQEbAsjykFwJAwLCsCPccAkBj1snz/CUCQHbOramuiQJA+j6789yQAkA3p7S23ZwCQFen7wdtLQNA0vcI+P1nA0D2YdS7SYUDQKX8ZqAPjQNAFqCMe2LRA0A03PbixvcDQKBU+ZmYSgRA6CkSeChuBEBA+T/j9X0EQK0wK9k9nARAJmNt2He8BEC4np8qR8cEQPAFqovM8ARAdCjfP2TxBECin0gRkgoFQAm99myOLwVAgowGvz07BUBiwytDR0IFQMJILaT5RgVADuwIikhlBUCNSI0No9oFQH7wqXQQewZAxKLx2eTQBkAFx9c1+YoHQHH7+CahzgdA2JZVpcnnCkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;55952&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;55953&quot;}},&quot;id&quot;:&quot;55939&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;55939&quot;}},&quot;id&quot;:&quot;55943&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;55936&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55917&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;55950&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;55951&quot;}},&quot;id&quot;:&quot;55934&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55905&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55920&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;55955&quot;}},&quot;id&quot;:&quot;55921&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;55941&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;55954&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;55934&quot;}},&quot;id&quot;:&quot;55938&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55953&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;55935&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55946&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55950&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;55934&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;55935&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;55936&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;55938&quot;}},&quot;id&quot;:&quot;55937&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55910&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55952&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;55946&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;55914&quot;}},&quot;id&quot;:&quot;55913&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;55954&quot;}},&quot;id&quot;:&quot;55919&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;55951&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;55909&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;55912&quot;,&quot;type&quot;:&quot;Grid&quot;}],&quot;root_ids&quot;:[&quot;55900&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"3a0b0aea-73d8-480c-b44e-5a2c4b96e236","root_ids":["55900"],"roots":{"55900":"38496fff-2b8c-41d7-923b-197561616d91"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();