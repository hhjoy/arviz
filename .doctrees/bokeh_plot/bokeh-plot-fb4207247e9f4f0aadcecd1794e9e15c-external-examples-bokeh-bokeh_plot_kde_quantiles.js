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
      };var element = document.getElementById("9baaa854-d615-4d9c-bd00-5cc00b7c5d42");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9baaa854-d615-4d9c-bd00-5cc00b7c5d42' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;93629116-ad6e-4f8d-8b20-0b37d2cbf8c6&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;lNYWzVU7yD+IpJdufbXIP3xyGBClL8k/cECZscypyT9kDhpT9CPKP1ncmvQbnso/TaoblkMYyz9BeJw3a5LLPzVGHdmSDMw/KRSeerqGzD8d4h4c4gDNPxKwn70Je80/Bn4gXzH1zT/6S6EAWW/OP+4ZIqKA6c4/4ueiQ6hjzz/WtSPlz93PP+VBUsP7K9A/36gSlA9p0D/ZD9NkI6bQP9N2kzU349A/zd1TBksg0T/IRBTXXl3RP8Kr1KdymtE/vBKVeIbX0T+2eVVJmhTSP7DgFRquUdI/qkfW6sGO0j+krpa71cvSP54VV4zpCNM/mHwXXf1F0z+S49ctEYPTP4xKmP4kwNM/hrFYzzj90z+AGBmgTDrUP3p/2XBgd9Q/dOaZQXS01D9uTVoSiPHUP2i0GuObLtU/Yhvbs69r1T9cgpuEw6jVP1bpW1XX5dU/UFAcJusi1j9Kt9z2/l/WP0UenccSndY/P4VdmCba1j857B1pOhfXPzNT3jlOVNc/LbqeCmKR1z8nIV/bdc7XPyGIH6yJC9g/G+/ffJ1I2D8VVqBNsYXYPxC9YB7Fwtg/CiQh79j/2D8Ei+G/7DzZP/7xoZAAetk/+FhiYRS32T/yvyIyKPTZP+wm4wI8Mdo/5o2j009u2j/g9GOkY6vaP9pbJHV36No/1MLkRYsl2z/OKaUWn2LbP8iQZeeyn9s/wvcluMbc2z+8XuaI2hncP7bFplnuVtw/sCxnKgKU3D+qkyf7FdHcP6T658spDt0/nmGonD1L3T+ZyGhtUYjdP5MvKT5lxd0/jZbpDnkC3j+H/anfjD/eP4FkarCgfN4/e8sqgbS53j91MutRyPbeP2+ZqyLcM98/aQBs8+9w3z9jZyzEA67fP13O7JQX698/rJrWshUU4D+smtayFRTgP6ya1rIVFOA/Xc7slBfr3z9jZyzEA67fP2kAbPPvcN8/b5mrItwz3z91MutRyPbeP3vLKoG0ud4/gWRqsKB83j+H/anfjD/eP42W6Q55At4/ky8pPmXF3T+ZyGhtUYjdP55hqJw9S90/pPrnyykO3T+qkyf7FdHcP7AsZyoClNw/tsWmWe5W3D+8XuaI2hncP8L3JbjG3Ns/yJBl57Kf2z/OKaUWn2LbP9TC5EWLJds/2lskdXfo2j/g9GOkY6vaP+aNo9NPbto/7CbjAjwx2j/yvyIyKPTZP/hYYmEUt9k//vGhkAB62T8Ei+G/7DzZPwokIe/Y/9g/EL1gHsXC2D8VVqBNsYXYPxvv33ydSNg/IYgfrIkL2D8nIV/bdc7XPy26ngpikdc/M1PeOU5U1z857B1pOhfXPz+FXZgm2tY/RR6dxxKd1j9Kt9z2/l/WP1BQHCbrItY/VulbVdfl1T9cgpuEw6jVP2Ib27Ova9U/aLQa45su1T9uTVoSiPHUP3TmmUF0tNQ/en/ZcGB31D+AGBmgTDrUP4axWM84/dM/jEqY/iTA0z+S49ctEYPTP5h8F139RdM/nhVXjOkI0z+krpa71cvSP6pH1urBjtI/sOAVGq5R0j+2eVVJmhTSP7wSlXiG19E/wqvUp3Ka0T/IRBTXXl3RP83dUwZLINE/03aTNTfj0D/ZD9NkI6bQP9+oEpQPadA/5UFSw/sr0D/WtSPlz93PP+LnokOoY88/7hkiooDpzj/6S6EAWW/OPwZ+IF8x9c0/ErCfvQl7zT8d4h4c4gDNPykUnnq6hsw/NUYd2ZIMzD9BeJw3a5LLP02qG5ZDGMs/Wdya9Bueyj9kDhpT9CPKP3BAmbHMqck/fHIYEKUvyT+IpJdufbXIP5TWFs1VO8g/lNYWzVU7yD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[172]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGipKTKkYBQAaKkpMqRgFAXw9DdlMXAUC+SWTGEOYAQE7nScSCrwBAslw5cx9zAEDnfQ0O5zAAQJBL+KL9yv8/Qhe5XB8h/z8/DhugD2n+P+ZErrwbof0/Pp1BH9HL/D/uh+6vNO77P5zbnkowBPs/OW+JZ2ca+j8divB0myz5P7gKJneCQ/g/rQkBoWBa9z/yZBmfcnn2P3yFcaO0nvU/NhFgW+/L9D/x1kAdDAH0PzI+wB6dP/M/qsRuZt+G8j+U5yfry9PxP5NVhKbdJvE/xIXl3Px/8D84vvduT7vvP4BItpPGh+4/6DY/1BBh7T+9gCV39EDsPxyso5SnLOs/Ix2rSP0h6j8v677E5iXpP5QyspM4Oeg/sB26GDVY5z8yJwbf14jmP0xMgt19xuU/XumGQDYW5T/pUrCRHHPkPzmatKIc2+M/7p/4edVR4z+7LD0kVtHiP57iBQ6fV+I/2Fi3vgnl4T+6FhWRCnfhP7Cbe66MCuE/HfSQx9+e4D9omJwJ7THgPzwJl7Cxh98/88kTAxen3j/2ZtWE8LndPxXB08qKzNw/7QTrA+XV2z8gXXv4YNjaP9su35fm1dk/CFHbOv7P2D/y9aM63MPXP+T13pODstY/042FisOY1T/S0zz/BXrUP6IwHjAZYNM/6RQgfjZF0j+a9Jw0jSbRP4OFH/R5CNA/7b59GgvSzT/Ol8p0U5TLP/qYeiTVY8k/1AqB9Y08xz9Sip8CsSLFPyG8QEMtFcM/7xpsEiYiwT8BMGfe14K+P9dIKHS8Ers/CpnI5zfdtz9Heh2QQgG1P65KWDsdbLI/Ik87gNUgsD+STowfjUCsP8137Flv0qg/Q1FIxAwMpj/SRJHOCdOjP0oPbkt4IaI/jUUPm+bLoD/8Hu62ChigPx5Do6Ij5Z8/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[172]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56992&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56993&quot;}},&quot;id&quot;:&quot;56966&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56968&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56937&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56995&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56990&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56942&quot;}},&quot;id&quot;:&quot;56941&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56972&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56935&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56939&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56966&quot;}},&quot;id&quot;:&quot;56970&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56966&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56967&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56968&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56970&quot;}},&quot;id&quot;:&quot;56969&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;56957&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;56949&quot;},{&quot;id&quot;:&quot;56950&quot;},{&quot;id&quot;:&quot;56951&quot;},{&quot;id&quot;:&quot;56952&quot;},{&quot;id&quot;:&quot;56953&quot;},{&quot;id&quot;:&quot;56954&quot;},{&quot;id&quot;:&quot;56955&quot;},{&quot;id&quot;:&quot;56956&quot;}]},&quot;id&quot;:&quot;57004&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56996&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56978&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56990&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56971&quot;}},&quot;id&quot;:&quot;56975&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56977&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56998&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;jkPBzqJm5j8LdyG3LIXmP4iqgZ+2o+Y/Bd7hh0DC5j+CEUJwyuDmP/9EolhU/+Y/fHgCQd4d5z/5q2IpaDznP3ffwhHyWuc/9BIj+nt55z9xRoPiBZjnP+5548qPtuc/a61DsxnV5z/o4KObo/PnP2UUBIQtEug/4kdkbLcw6D9fe8RUQU/oP9yuJD3Lbeg/WeKEJVWM6D/WFeUN36roP1NJRfZoyeg/0Hyl3vLn6D9NsAXHfAbpP8rjZa8GJek/RxfGl5BD6T/ESiaAGmLpP0F+hmikgOk/vrHmUC6f6T875UY5uL3pP7gYpyFC3Ok/NUwHCsz66T+yf2fyVRnqPy+zx9rfN+o/rOYnw2lW6j8pGoir83TqP6ZN6JN9k+o/I4FIfAey6j+gtKhkkdDqPx3oCE0b7+o/mxtpNaUN6z8YT8kdLyzrP5WCKQa5Sus/EraJ7kJp6z+P6enWzIfrPwwdSr9Wpus/iVCqp+DE6z8GhAqQauPrP4O3anj0Aew/AOvKYH4g7D99HitJCD/sP/pRizGSXew/d4XrGRx87D/0uEsCpprsP3Hsq+ovuew/7h8M07nX7D9rU2y7Q/bsP+iGzKPNFO0/ZbosjFcz7T/i7Yx04VHtP18h7VxrcO0/3FRNRfWO7T9ZiK0tf63tP9a7DRYJzO0/1rsNFgnM7T/Wuw0WCcztP1mIrS1/re0/3FRNRfWO7T9fIe1ca3DtP+LtjHThUe0/ZbosjFcz7T/ohsyjzRTtP2tTbLtD9uw/7h8M07nX7D9x7KvqL7nsP/S4SwKmmuw/d4XrGRx87D/6UYsxkl3sP30eK0kIP+w/AOvKYH4g7D+Dt2p49AHsPwaECpBq4+s/iVCqp+DE6z8MHUq/VqbrP4/p6dbMh+s/EraJ7kJp6z+VgikGuUrrPxhPyR0vLOs/mxtpNaUN6z8d6AhNG+/qP6C0qGSR0Oo/I4FIfAey6j+mTeiTfZPqPykaiKvzdOo/rOYnw2lW6j8vs8fa3zfqP7J/Z/JVGeo/NUwHCsz66T+4GKchQtzpPzvlRjm4vek/vrHmUC6f6T9BfoZopIDpP8RKJoAaYuk/RxfGl5BD6T/K42WvBiXpP02wBcd8Buk/0Hyl3vLn6D9TSUX2aMnoP9YV5Q3fqug/WeKEJVWM6D/criQ9y23oP197xFRBT+g/4kdkbLcw6D9lFASELRLoP+jgo5uj8+c/a61DsxnV5z/ueePKj7bnP3FGg+IFmOc/9BIj+nt55z9338IR8lrnP/mrYiloPOc/fHgCQd4d5z//RKJYVP/mP4IRQnDK4OY/Bd7hh0DC5j+IqoGftqPmPwt3IbcsheY/jkPBzqJm5j+OQ8HOombmPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[128]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7LLY5uUSxT/sstjm5RLFP6Jg5FcjYcU/zovTUhH/xT/TLNM1NOLGP6Xw4x9YDsg/eOzjXcyRyT+XHP2bjmjLPwL/ttgZhc0/usEnRL7azz92zSvhRTjRP+2MVry1m9I/rtFwd4AX1D/ccVzOCqHVP90/qKiJM9c/ajjiaLnN2D8jwSKAV2vaP/GPtbQGCNw/C12bL5Wg3T8n/bGvIzrfP0wVIBa5a+A/o0lGCGs64T9Eh5eHLwviP83x+jQb5OI/MNOCV1HB4z/Fw0Eps6zkP/YlWG1xo+U/ZwYOOVOp5j/HIr9Qnr7nP6VSm/FP4eg/M/9UGiIR6j/CyP/KQVLrP0xUaIirouw/rFo9dVkC7j9t7gGUVXDvP7UuLQ6oevA/a+Zwg7BC8T/sCaMQdRHyP0251aux6/I/LuVqHo3L8z8xap7HNrT0PxjRxmkbpfU/3+3Pmaub9j9gG82kG5j3P2/Z7IpKmvg/9GOMNouf+T/gRIzAzaH6P+FznW08ofs/U8TC5ECZ/D/wFweR7If9P9XZlGYIbP4/uYrbhVZE/z8TXYr3LwcAQEb+duJnZgBALApwPoO9AECCZfSfyg8BQE2U9BR3WwFAOMCaJaWgAUDWpvUeLuIBQGHN0mmLHwJAN5KuBRxaAkCGz/r+2JACQPY2dIduxgJAhb0uoUr6AkAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[128]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56998&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56999&quot;}},&quot;id&quot;:&quot;56981&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56983&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56976&quot;}},&quot;id&quot;:&quot;56980&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56999&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56976&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56977&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56978&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56980&quot;}},&quot;id&quot;:&quot;56979&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56933&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56949&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56954&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56982&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56942&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;57004&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;57005&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;56932&quot;},0,0]]},&quot;id&quot;:&quot;57003&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56955&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;56941&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;56944&quot;},{&quot;id&quot;:&quot;56948&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;56945&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;56969&quot;},{&quot;id&quot;:&quot;56974&quot;},{&quot;id&quot;:&quot;56979&quot;},{&quot;id&quot;:&quot;56984&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;56987&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;56957&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;56933&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;56937&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;56935&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;56939&quot;}},&quot;id&quot;:&quot;56932&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56952&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56981&quot;}},&quot;id&quot;:&quot;56985&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;57001&quot;}},&quot;id&quot;:&quot;56953&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56981&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56982&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56983&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56985&quot;}},&quot;id&quot;:&quot;56984&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56946&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;56987&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56992&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56988&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;56949&quot;},{&quot;id&quot;:&quot;56950&quot;},{&quot;id&quot;:&quot;56951&quot;},{&quot;id&quot;:&quot;56952&quot;},{&quot;id&quot;:&quot;56953&quot;},{&quot;id&quot;:&quot;56954&quot;},{&quot;id&quot;:&quot;56955&quot;},{&quot;id&quot;:&quot;56956&quot;}]},&quot;id&quot;:&quot;56957&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56950&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56945&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;56948&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56993&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56997&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;57000&quot;}},&quot;id&quot;:&quot;56951&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;57000&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;56956&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;57005&quot;},{&quot;id&quot;:&quot;57003&quot;}]},&quot;id&quot;:&quot;57006&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56941&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;56944&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56988&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56946&quot;}},&quot;id&quot;:&quot;56945&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;57001&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56971&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56972&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56973&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56975&quot;}},&quot;id&quot;:&quot;56974&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56994&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;3Aj8NKFM4z9YPFwdK2vjP9ZvvAW1ieM/UqMc7j6o4z/Q1nzWyMbjP0wK3b5S5eM/yj09p9wD5D9GcZ2PZiLkP8Sk/XfwQOQ/QdhdYHpf5D++C75IBH7kPzs/HjGOnOQ/uHJ+GRi75D81pt4BotnkP7LZPuor+OQ/Lw2f0rUW5T+sQP+6PzXlPyl0X6PJU+U/pqe/i1Ny5T8j2x903ZDlP6AOgFxnr+U/HULgRPHN5T+adUAte+zlPxepoBUFC+Y/lNwA/o4p5j8REGHmGEjmPxEQYeYYSOY/ERBh5hhI5j+U3AD+jinmPxepoBUFC+Y/mnVALXvs5T8dQuBE8c3lP6AOgFxnr+U/I9sfdN2Q5T+mp7+LU3LlPyl0X6PJU+U/rED/uj815T8vDZ/StRblP7LZPuor+OQ/NabeAaLZ5D+4cn4ZGLvkPzs/HjGOnOQ/vgu+SAR+5D9B2F1gel/kP8Sk/XfwQOQ/RnGdj2Yi5D/KPT2n3APkP0wK3b5S5eM/0NZ81sjG4z9SoxzuPqjjP9ZvvAW1ieM/WDxcHStr4z/cCPw0oUzjP9wI/DShTOM/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsjUAlwKwNAyyNQCXArA0CjAUBAgloDQLHhL2UoiANAw8ccN8m0A0Cp1v2MeN0DQNjWU3/tAgRA3sKF5h8oBEBBpeOnQ0wEQKbWhySJbARANYVcUCmNBEB/e+A0uqwEQD6/ksXVygRAayAx9Q/pBEDazGhfpQcFQJSkFPlBJQVAnJ6P9K9EBUB9oYp2rGAFQOayFMeVfAVAOxwR0W2VBUAnZ0+JHK8FQDCHuOh+xAVAC0acCyXaBUCx/Ajsge4FQPVDAkvtAAZAUsyKaKQSBkB+KhWTNSIGQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56996&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56997&quot;}},&quot;id&quot;:&quot;56976&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56973&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;KM42m58y4D+mAZeDKVHgPyI192uzb+A/oGhXVD2O4D8dnLc8x6zgP5rPFyVRy+A/FwN4Ddvp4D+UNtj1ZAjhPxFqON7uJuE/jp2YxnhF4T8L0fiuAmThP4gEWZeMguE/BTi5fxah4T+CaxlooL/hP/+eeVAq3uE/fNLZOLT84T/5BTohPhviP3Y5mgnIOeI/82z68VFY4j9woFra23biP+7TusJlleI/agcbq++z4j/oOnuTedLiP2Ru23sD8eI/4qE7ZI0P4z9e1ZtMFy7jP17Vm0wXLuM/XtWbTBcu4z/ioTtkjQ/jP2Ru23sD8eI/6Dp7k3nS4j9qBxur77PiP+7TusJlleI/cKBa2tt24j/zbPrxUVjiP3Y5mgnIOeI/+QU6IT4b4j980tk4tPzhP/+eeVAq3uE/gmsZaKC/4T8FOLl/FqHhP4gEWZeMguE/C9H4rgJk4T+OnZjGeEXhPxFqON7uJuE/lDbY9WQI4T8XA3gN2+ngP5rPFyVRy+A/HZy3PMes4D+gaFdUPY7gPyI192uzb+A/pgGXgylR4D8ozjabnzLgPyjONpufMuA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEPAIQvoMAZAQ8AhC+gwBkCzaX4ocj4GQM2Gm4dESgZAlgvyKhhTBkCiDdQdc1YGQGS4wZeEVQZALYaQXP9OBkBdh6MLf0AGQF2XS9CIKQZAGladb8cGBkCr7d7FQ9kFQFlUckkgoQVALyne3IRdBUBOREn7MxMFQPrJySl6vgRAUyjI45llBEAq2LuLCgsEQKcTnVh4rgNAPihVqxdUA0BQdRTz2fwCQEBcQ7mcrAJApRRnScBhAkAiXqNQzh0CQFbjrUKK4QFAfe9/XOWqAUD4qctssXcBQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56994&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56995&quot;}},&quot;id&quot;:&quot;56971&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56967&quot;,&quot;type&quot;:&quot;Patch&quot;}],&quot;root_ids&quot;:[&quot;57006&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"93629116-ad6e-4f8d-8b20-0b37d2cbf8c6","root_ids":["57006"],"roots":{"57006":"9baaa854-d615-4d9c-bd00-5cc00b7c5d42"}}];
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