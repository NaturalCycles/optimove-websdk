/* tslint:disable */

"use strict";
export const optimoveSDK = function () {
  // Kirill: added `https:` to the next line to fix usage in capacitor://
  const _sdkDomain = "https://sdk-cdn.optimove.net/", envKey = "990a6d8eb6cbb8ea44b73d21f1e473b43b9c74ea",
    eventPlatformIDKey = "0b006d8eb623b8ea11b73d61f1e483b47b9d7422",
    eventDeviceTypeIDKey = "4ba302311571f45d57f1aa75e428b9b78d59a7a2",
    eventOSIDKey = "85bdeae0a9e0dad7fdd022d8f90da5d3a241b3d0",
    eventNativeMobile = "d0df7f0a4c2724ff587c1cfb3e315b432e2d1f50", visitorIDKey = "647a3d19ac2647f361068a43df3a4da1";
  let _configuration, _coreEvents, _env = "prod", _configFileUrl = "", _hostname = "";
  const logger = (() => {
      const _levels = {info: 1, warning: 2, error: 3, none: 4};
      let _loggerLevel = "none";
      return {
        setLevel: function (logLevel) {
          _loggerLevel = logLevel
        }, log: function (level, message) {
          if ("prod" != _env && _levels[level] >= _levels[_loggerLevel]) switch (_levels[level]) {
            case 1:
              console.info(message);
              break;
            case 2:
              console.warn(message);
              break;
            case 3:
              console.error(message);
              break;
            default:
              console.log(message)
          }
        }
      }
    })(), _SHA1_SHA1 = function (msg) {
      var blockstart, i, j, A, B, C, D, E, temp, rotate_left = function (n, s) {
          return n << s | n >>> 32 - s
        }, cvt_hex = function (val) {
          var i, str = "";
          for (i = 7; i >= 0; i--) str += (val >>> 4 * i & 15).toString(16);
          return str
        }, W = new Array(80), H0 = 1732584193, H1 = 4023233417, H2 = 2562383102, H3 = 271733878, H4 = 3285377520,
        msg_len = (msg = function (string) {
          string = string.replace(/\r\n/g, "\n");
          for (var utftext = "", n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            c < 128 ? utftext += String.fromCharCode(c) : c > 127 && c < 2048 ? (utftext += String.fromCharCode(c >> 6 | 192), utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128))
          }
          return utftext
        }(msg)).length, word_array = new Array;
      for (i = 0; i < msg_len - 3; i += 4) j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3), word_array.push(j);
      switch (msg_len % 4) {
        case 0:
          i = 2147483648;
          break;
        case 1:
          i = msg.charCodeAt(msg_len - 1) << 24 | 8388608;
          break;
        case 2:
          i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768;
          break;
        case 3:
          i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128
      }
      for (word_array.push(i); word_array.length % 16 != 14;) word_array.push(0);
      for (word_array.push(msg_len >>> 29), word_array.push(msg_len << 3 & 4294967295), blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
        for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        for (A = H0, B = H1, C = H2, D = H3, E = H4, i = 0; i <= 19; i++) temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 20; i <= 39; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 40; i <= 59; i++) temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        for (i = 60; i <= 79; i++) temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295, E = D, D = C, C = rotate_left(B, 30), B = A, A = temp;
        H0 = H0 + A & 4294967295, H1 = H1 + B & 4294967295, H2 = H2 + C & 4294967295, H3 = H3 + D & 4294967295, H4 = H4 + E & 4294967295
      }
      return (temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4)).toLowerCase()
    }, _Tools_cleanUrl = url => {
      return ["http://www.", "http://", "https://www.", "https://", "www."].forEach(function (str) {
        url = url.startsWith(str) ? url.replace(str, "") : url
      }), url
    },
    _Tools_validateUserId = userId => !(void 0 === userId || "string" != typeof userId || null == userId || "" == userId || " " == userId || null == userId || "null" == userId.toLowerCase() || "none" == userId.toLowerCase() || userId.toLowerCase().includes("undefine") || userId.length > 200),
    _Tools_getUrlParams = function (url) {
      var queryString = url ? url.split("?")[1] : window.location.search.slice(1), obj = {};
      if (queryString) for (var arr = (queryString = queryString.split("#")[0]).split("&"), i = 0; i < arr.length; i++) {
        var a = arr[i].split("="), paramName = a[0], paramValue = void 0 === a[1] || a[1];
        if (paramName = paramName.toLowerCase(), "string" == typeof paramValue && (paramValue = paramValue.toLowerCase()), paramName.match(/\[(\d+)?\]$/)) {
          var key = paramName.replace(/\[(\d+)?\]/, "");
          if (obj[key] || (obj[key] = []), paramName.match(/\[\d+\]$/)) {
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue
          } else obj[key].push(paramValue)
        } else obj[paramName] ? obj[paramName] && "string" == typeof obj[paramName] ? (obj[paramName] = [obj[paramName]], obj[paramName].push(paramValue)) : obj[paramName].push(paramValue) : obj[paramName] = paramValue
      }
      return obj
    }, _Tools_getUserLanguage = function () {
      var language = navigator.language.toLowerCase();
      return "chrome://global/locale/intl.properties" == language && (language = null), language
    }, _Tools_generateUUID = function () {
      let d = (new Date).getTime(), d2 = performance && performance.now && 1e3 * performance.now() || 0;
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        let r = 16 * Math.random();
        return d > 0 ? (r = (d + r) % 16 | 0, d = Math.floor(d / 16)) : (r = (d2 + r) % 16 | 0, d2 = Math.floor(d2 / 16)), ("x" === c ? r : 3 & r | 8).toString(16)
      })
    }, setConfiguration = callback => {
      _configuration = self.optimoveTenantConfiguration, getPlaformInfoFromUserAgent(_configuration), callback && callback()
    }, loadScript = function (url, callback) {
      let script = document.createElement("script");
      script.type = "text/javascript", script.async = !0, script.defer = !0, script.readyState ? script.onreadystatechange = function () {
        "loaded" != script.readyState && "complete" != script.readyState || (script.onreadystatechange = null, callback())
      } : script.onload = function () {
        callback()
      }, script.src = url, document.getElementsByTagName("head")[0].appendChild(script)
    };
  const eventsHandler = (() => {
      let events = [];
      const validateEvent = (eventName, parameters) => {
        let validEvent = {}, eventConf = getEventConfiguration(eventName), currentTenantFailedEvents = function () {
          var parssedTenantNetworkFailedEvents,
            currentTenantNetworkFailedEvents = sessionStorage.getItem("tenantNetworkFailedEvents");
          return null != currentTenantNetworkFailedEvents && "undefined" != currentTenantNetworkFailedEvents && (parssedTenantNetworkFailedEvents = JSON.parse(currentTenantNetworkFailedEvents)), parssedTenantNetworkFailedEvents
        }(), currentTenantCorrectEvents = function () {
          var parssedTenantNetworkCorrectEvents,
            currentTenantNetworkCorrectEvents = sessionStorage.getItem("tenantNetworkCorrectEvents");
          return null != currentTenantNetworkCorrectEvents && "undefined" != currentTenantNetworkCorrectEvents && (parssedTenantNetworkCorrectEvents = JSON.parse(currentTenantNetworkCorrectEvents)), parssedTenantNetworkCorrectEvents
        }();
        if (!eventConf) return logger.log("warning", `event: ${eventName} does not exist`), optmvIsOpen() && (validEvent.errorMessage = "Event name is unavailable. It has not been configured properly", currentTenantFailedEvents.push(validEvent), window.sessionStorage.setItem("tenantNetworkFailedEvents", JSON.stringify(currentTenantFailedEvents))), !1;
        validEvent.userId = parameters && parameters.userId ? parameters.userId : getUserId(), validEvent.visitorData = null, validEvent.eventName = eventName, validEvent.eventMetadata = eventConf, validEvent.parameters = parameters;
        let validateParameters = parameterValidation(eventName, parameters, eventConf);
        return validateParameters.status ? (optmvIsOpen() && (currentTenantCorrectEvents.push(validEvent), window.sessionStorage.setItem("tenantNetworkCorrectEvents", JSON.stringify(currentTenantCorrectEvents))), !0) : (optmvIsOpen() && (validEvent.errorMessage = validateParameters.message, currentTenantFailedEvents.push(validEvent), window.sessionStorage.setItem("tenantNetworkFailedEvents", JSON.stringify(currentTenantFailedEvents))), !1)
      }, parameterValidation = (eventName, parameters, eventConf) => {
        let paramMetadata, validation = {status: !0, message: ""};
        if (parameters.length > _configuration.optitrackMetaData.maxActionCustomDimensions && logger.log("warning", `event ${eventName} contains ${parameters.length} parameters while the allowed number of parameters is ${_configuration.optitrackMetaData.maxActionCustomDimensions}. We removed some of them to process the event.`), null != eventConf.parameters) {
          let config_parameters_keys = Object.keys(eventConf.parameters), missingMandatoryParams = [];
          if (config_parameters_keys.forEach(param_name => {
            0 == eventConf.parameters[param_name].optional && (parameters && void 0 !== parameters[param_name] || (missingMandatoryParams.push(param_name), logger.log("error", `event ${eventName} has mandatory parameter ${param_name} which is undefined or empty`)))
          }), missingMandatoryParams.length > 0) return validation.status = !1, validation.message = `ERROR - required paramMetadata ${missingMandatoryParams.join(", ")} is missing`, validation
        }
        if (parameters) {
          for (let parameterName in parameters) {
            if (parameters[parameterName] && "string" == typeof parameters[parameterName] && parameters[parameterName].length > 4e3) return logger.log("error", `parameter ${parameterName} has exceeded the limit of allowed number of characters (4000)`), validation.status = !1, validation.message = `ERROR - parameter ${parameterName} has exceeded the limit of allowed number of characters (4000)`, validation;
            paramMetadata = eventConf.parameters[parameterName];
            let parameterConfigurationCheck = checkForConfigurationMatch(parameterName, parameters[parameterName], paramMetadata);
            if (paramMetadata && !parameterConfigurationCheck.status) return validation.status = !1, validation.message = parameterConfigurationCheck.message, validation
          }
          switch (eventName) {
            case"set_user_id_event":
              _Tools_validateUserId(parameters.userId) || (validation.status = !1, validation.message = `ERROR - userId ${parameters.userId} is invalid`, logger.log("error", validation.message))
          }
        }
        return validation
      }, checkForConfigurationMatch = (parameterName, parameterValue, paramMetadata) => {
        let validation = {status: !0, message: ""},
          isList = "[object Array]" === Object.prototype.toString.call(parameterValue);
        return isList && (validation.status = !1, validation.message = `ERROR - parameter ${parameterName} is type of Array/Object which is currently not supported`, logger.log("warning", validation.message)), null != parameterValue && paramMetadata && ("String" === paramMetadata.type && "string" != typeof parameterValue ? (validation.status = !1, validation.message = `ERROR - parameter "${parameterName}" should be type of String`, logger.log("warning", validation.message)) : "Number" === paramMetadata.type && "number" != typeof parameterValue ? (validation.status = !1, validation.message = `ERROR - parameter "${parameterName}" should be type of number`, logger.log("warning", validation.message)) : "Boolean" === paramMetadata.type && "boolean" != typeof parameterValue ? (validation.status = !1, validation.message = `ERROR - parameter "${parameterName}" should be type of boolean`, logger.log("warning", validation.message)) : "List" !== paramMetadata.type || isList || (validation.status = !1, validation.message = `ERROR - parameter "${parameterName}" should be type of array`, logger.log("warning", validation.message))), validation
      }, getEventConfiguration = eventName => {
        let eventConf;
        return eventConf = _coreEvents.events.hasOwnProperty(eventName) ? _coreEvents.events[eventName] : _configuration.events[eventName] || null
      }, report = async (endpoint, payload) => {
        let events = [];
        return payload.forEach(event => {
          events.push(event.event)
        }), await fetch(endpoint, {
          method: "POST",
          headers: {Accept: "application/json", "Content-Type": "application/json"},
          body: JSON.stringify(payload)
        }).then(response => response.json()).then(data => (logger.log("info", `event${events.length > 1 ? "s" : ""} ${events.join(", ")} reported to ${endpoint} successfully`), {
          payload: payload,
          response: data
        })).catch(error => (logger.log("error", `event${events.length > 1 ? "s" : ""} ${events.join(", ")} not reported to ${endpoint} due to ${error}`), {
          payload: payload,
          response: error
        }))
      };
      return {
        logEvent: (eventName, parameters) => {
          if (validateEvent(eventName, parameters)) {
            parameters = "object" == typeof parameters && Object.keys(parameters).length > 0 ? normalizeEventParameters(parameters) : {}, Object.assign(parameters, getAdditionalAttributesToEvent());
            let payload = {
              tenant: _configuration.optitrackMetaData.siteId,
              category: "track",
              origin: "sdk",
              event: eventName,
              context: parameters,
              timestamp: (new Date).toISOString(),
              metadata: {firsrtVisitorDate: getFirstVisitDate()},
              visitor: parameters && parameters.updatedVisitorId ? parameters.updatedVisitorId : getVisitorId(),
              customer: parameters && parameters.userId ? parameters.userId : getUserId()
            };
            events.push(payload)
          }
        }, dispatch: async () => {
          let optitrackEvents = [], realtimeEvents = [];
          if (events.length > 0) {
            events.forEach(event => {
              let eventConf = getEventConfiguration(event.event);
              eventConf.supportedOnOptitrack && optitrackEvents.push(event), eventConf.supportedOnRealTime && realtimeEvents.push(event)
            });
            let dispatchToTrack = _configuration.enableOptitrack && optitrackEvents.length > 0 ? await report(optitrackModule.getOptitrackEndpoint(), optitrackEvents) : await Promise.resolve(),
              dispatchToRealtime = _configuration.enableRealtime && realtimeEvents.length > 0 ? await report(realtimeModule.getRealtimeEndpoint(), realtimeEvents).then(data => {
                realtimeModule.postRealtimeEvent(data)
              }) : await Promise.resolve();
            return Promise.all([dispatchToTrack, dispatchToRealtime]).then(data => (events = [], data))
          }
        }
      }
    })(), persistSDKLocalData = (key, updatedValue) => {
      try {
        let currValue = localStorage.getItem(key);
        null != currValue && currValue == updatedValue || localStorage.setItem(key, updatedValue)
      } catch (error) {
        logger.log("error", `OptimoveSDK: persistSDKLocalData() Failed error = ${error}`)
      }
    }, getPersistedSDKLocalData = key => {
      try {
        let value = localStorage.getItem(key);
        if (null != value) return value
      } catch (error) {
        return logger.log("error", `OptimoveSDK: getPersistedSDKLocalDatas () Failed error = ${error}`), null
      }
    }, getVisitorId = () => getPersistedSDKLocalData(visitorIDKey) || null, setVisitorId = visitorId => {
      persistSDKLocalData(visitorIDKey, visitorId)
    }, generateVisitorId = () => {
      let visitorId = getPersistedSDKLocalData(visitorIDKey),
        originalVisitorId = getPersistedSDKLocalData("19a826c7f361268a43da3a46a12047f3");
      if (visitorId || (visitorId = _Tools_generateUUID(), persistSDKLocalData(visitorIDKey, visitorId)), !originalVisitorId) {
        let cookieName = `_pk_id.${_configuration.optitrackMetaData.siteId}.`,
          cookieOriginalVisitorIdString = document.cookie.match(new RegExp("(^| )" + cookieName + ".{1,}=([^;]+)")),
          cookieOriginalVisitorId = Array.isArray(cookieOriginalVisitorIdString) && null != cookieOriginalVisitorIdString[2] ? cookieOriginalVisitorIdString[2].split(".")[0] : null;
        persistSDKLocalData("19a826c7f361268a43da3a46a12047f3", cookieOriginalVisitorId || visitorId), persistSDKLocalData("511a26f4be2047a348064e4abe8ce2a9", (new Date).toISOString())
      }
      return visitorId
    }, getOriginalVisitorId = () => getPersistedSDKLocalData("19a826c7f361268a43da3a46a12047f3") || null,
    getUserId = () => getPersistedSDKLocalData("215d26f4be2047f348066e44ee7fe3d6") || null, setUserId = userId => {
      persistSDKLocalData("215d26f4be2047f348066e44ee7fe3d6", userId)
    }, getFirstVisitDate = () => getPersistedSDKLocalData("511a26f4be2047a348064e4abe8ce2a9") || null,
    normalizeEventParameters = event_parameters => {
      if (null == event_parameters) return void logger.log("info", "normalizeEventParameters: event parameter is null");
      return Object.getOwnPropertyNames(event_parameters).forEach(paramName => {
        let currParamValue = event_parameters[paramName];
        if ("string" == typeof currParamValue) {
          let normalizedValue = currParamValue.trim();
          event_parameters[paramName] = normalizedValue
        }
      }), event_parameters
    };
  var UserAgentcallBackFunc = function (responseData) {
    var deviceType = "desktop", platform = "windows", deviceOS = "";
    if (void 0 !== responseData) {
      var osName = responseData.os.name;
      platform = osName, deviceOS = osName + " " + responseData.os.version, Object.keys(responseData.device).length > 0 && void 0 !== responseData.device.type && (deviceType = responseData.device.type, logger.log("info", "found deviceType=" + deviceType)), persistSDKLocalData(eventPlatformIDKey, platform), persistSDKLocalData(eventDeviceTypeIDKey, deviceType), persistSDKLocalData(eventOSIDKey, deviceOS), persistSDKLocalData(eventNativeMobile, "false")
    }
  };
  const getPlaformInfoFromUserAgent = configuration => {
    void 0 === getPersistedSDKLocalData(eventPlatformIDKey) && ((configuration, callback) => {
      window.navigator.userAgent;
      var xmlhttp = new XMLHttpRequest, url = configuration.sdkServicesEndPoint;
      xmlhttp.open("GET", url, !0), xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), xmlhttp.onreadystatechange = function () {
        try {
          if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {
            var responseData = JSON.parse(xmlhttp.responseText);
            logger.log("info", responseData), callback && callback(responseData)
          }
        } catch (err) {
          logger.log("error", err)
        }
      }, xmlhttp.send()
    })(configuration, UserAgentcallBackFunc)
  };
  var getVisitorsInfoObj = function () {
    var visitorsInfo = optitrackModule.getOptitrackVisitorInfo(), visitorInfoObject = new Object;
    return null != visitorsInfo ? (visitorInfoObject.visitorId = visitorsInfo[1], visitorInfoObject.visitCount = visitorsInfo[3]) : (logger.log("error", "in getVisitorsInfoObj Optitrack"), visitorInfoObject = void 0), visitorInfoObject
  };
  const getAdditionalAttributesToEvent = () => ({
    event_platform: getPersistedSDKLocalData(eventPlatformIDKey),
    event_device_type: getPersistedSDKLocalData(eventDeviceTypeIDKey),
    event_os: getPersistedSDKLocalData(eventOSIDKey),
    event_native_mobile: getPersistedSDKLocalData(eventNativeMobile)
  }), realtimeModule = (() => {
    let _popup, _executionInProcess = !1, _rt_endpoint = "";
    const closePopup = element => {
      element && (!0 !== element && element.target != document.getElementById("optiRealPopupDimmer") && "optiRealclosePopupImage" != element.target.id || (document.body.removeChild(_popup), document.removeEventListener("mousedown", closePopup)))
    }, executePopup = html => {
      try {
        let popupDiv = document.createElement("div"), divHtml = "";
        divHtml = "<div id='optiRealPopupDimmer' style='position: fixed;bottom: 0;right: 0;top: 0;left: 0;overflow: hidden;display: none; z-index:999999999;background: #000000;opacity : " + (_configuration.realtimeMetaData.options.showDimmer ? .5 : 0) + ";display:block;width: auto;height: auto;'></div>", document.addEventListener("mousedown", closePopup);
        let poweredByHtml = "<div style='position: absolute;z-index:9999999999; clear:both;font-family : Arial;font-size : 9px;color : #CCCCCC;padding-top:6px;margin-left: 5px;'>Powered by Optimove</div>";
        divHtml += "<div style='max-height:90%;max-width:90%;top: 50%;left: 50%;transform:translate(-50%, -50%);position: fixed;z-index:9999999999;'><div style=' clear:both;min-width: 100px;min-height: 100px;background-color:white; text-align:center;box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.2);'><div style='position:absolute;right:-13px;top:-13px;cursor:pointer;z-index:99999999999; color:white' onclick='optimoveSDK.API.closeRealtimePopup();'><img id='optiRealclosePopupImage' src='https://d3qycynbsy5rsn.cloudfront.net/banner_pop_x.png' /></div><div>" + html + "</div></div>" + (_configuration.realtimeMetaData.options.showDimmer && _configuration.realtimeMetaData.options.showWatermark ? poweredByHtml : "") + "</div>", popupDiv.innerHTML = divHtml, _popup = popupDiv, document.body.appendChild(popupDiv);
        let scriptTags = popupDiv.getElementsByTagName("script");
        scriptTags.length > 0 && window.eval(scriptTags[0].innerText)
      } catch (err) {
        logger.log("error", `Error while executing popup ${err}`)
      }
    };
    const getRealtimeEndpointFromConfig = () => `${_configuration.realtimeMetaData.realtimeGateway}reportEvent`;
    return {
      initializeRealtime: callback => {
        _rt_endpoint = getRealtimeEndpointFromConfig(), callback && callback()
      }, postRealtimeEvent: async data => {
        try {
          let responseData = data.response;
          if (responseData.IsSuccess && responseData.Data && responseData.Metadata) {
            responseData.Metadata.delayValue || (responseData.Metadata.delayValue = 0);
            let campaignId = 1;
            responseData.Metadata.campaignDetailId && (campaignId = parseInt(responseData.Metadata.campaignDetailId));
            let templateId = 0;
            responseData.Metadata.templateId && (templateId = parseInt(responseData.Metadata.templateId)), _executionInProcess || (_executionInProcess = !0, setTimeout(() => {
              if (((visitorId, campaignId, recurrenceFrameStopTime, recurrenceLeft) => {
                if (!campaignId || void 0 === campaignId || 0 == campaignId) return !1;
                if (null == recurrenceLeft || null == recurrenceFrameStopTime) return !0;
                let lsCampaign = localStorage.getItem("optimove_popup_" + campaignId + "_" + visitorId), obj = {};
                if (lsCampaign) {
                  let minCounter;
                  lsCampaign = JSON.parse(lsCampaign), new Date(lsCampaign.recurrenceFrameStopTime) > new Date((new Date).toISOString()) ? minCounter = Math.min(recurrenceLeft, lsCampaign.recurrenceLeft) : (minCounter = recurrenceLeft, obj.recurrenceFrameStopTime = recurrenceFrameStopTime), recurrenceLeft = minCounter
                }
                return obj.recurrenceFrameStopTime = recurrenceFrameStopTime, obj.recurrenceLeft = recurrenceLeft - 1, localStorage.setItem("optimove_popup_" + campaignId + "_" + visitorId, JSON.stringify(obj)), !(recurrenceLeft <= 0)
              })(data.visitorId, campaignId, responseData.Metadata.recurrenceFrameStopTime, responseData.Metadata.recurrenceLeft)) {
                _configuration.realtimeMetaData.options.popupCallback ? _configuration.realtimeMetaData.options.popupCallback(responseData) : executePopup(responseData.Data);
                let eventHandler = eventsHandler;
                eventHandler.logEvent("web_popup_displayed", {
                  campaign_detail_id: campaignId,
                  template_id: templateId
                }), eventHandler.dispatch().then(data => (_executionInProcess = !1, data))
              }
            }, 1e3 * responseData.Metadata.delayValue))
          }
        } catch (err) {
          logger.log("error", err)
        }
      }, executePopup: executePopup, closePopup: closePopup, getRealtimeEndpoint: getRealtimeEndpointFromConfig
    }
  })(), optitrackModule = (() => {
    let _ot_endpoint = null;
    var getCustomEventConfigById = function (eventId) {
      var currEvent = _configuration.events[eventId];
      return null == currEvent ? null : currEvent
    }, getCustomEventParamFromConfig = function (eventConfig, paramName) {
      var currParam = eventConfig.parameters[paramName];
      return null == currParam ? null : currParam
    };
    const persistSDKSessionData = (key, updatedValue) => {
      try {
        if (1 == _configuration.optitrackMetaData.useSessionStorage) {
          let currValue = sessionStorage.getItem(key);
          null != currValue && currValue == updatedValue || sessionStorage.setItem(key, updatedValue)
        } else logger.log("info", "Optitrack: persistSDKSessionData() Not Persisted")
      } catch (error) {
        logger.log("error", `OptiTrackModule: persistSDKSessionData () Failed error = ${error}`)
      }
    }, getPersistedSDKSessionData = function (key) {
      try {
        if (1 != _configuration.optitrackMetaData.useSessionStorage) return logger.log("info", `Optitrack: persistSDKSessionData() key: ${key} Not Persisted`), null;
        {
          let value = sessionStorage.getItem(key);
          if (null != value) {
            return {key: key, value: value}
          }
        }
      } catch (error) {
        return logger.log("error", `OptiTrackModule: getPersistedSDKSessionData () Failed error = ${error}`), null
      }
    };
    const getOptiTrackEndpointFromConfig = () => _configuration.optitrackMetaData.optitrackEndpoint;
    return {
      initializeOptiTrack: callback => {
        _ot_endpoint = getOptiTrackEndpointFromConfig(), callback && callback()
      },
      logSetUserId: function (origVisitorIdValue, updatedUserIdValue, updatedVisitorIdValue) {
        try {
          var eventConfig = getCustomEventConfigById("set_user_id_event");
          if (null == origVisitorIdValue || null == updatedUserIdValue) return void logger.log("error", "OptiTrackModule:logSetUserIdEvent Failed!!, error = origVisitorIdValue == undefined || updatedUserIdValue == undefined ");
          if (null != eventConfig) {
            getCustomEventParamFromConfig(eventConfig, "originalVisitorId"), getCustomEventParamFromConfig(eventConfig, "updatedVisitorId"), getCustomEventParamFromConfig(eventConfig, "userId");
            let event_parameters = {
              originalVisitorId: origVisitorIdValue,
              userId: getUserId(),
              updatedVisitorId: getVisitorId()
            };
            reportEvent("set_user_id_event", event_parameters).then(data => {
            })
          }
        } catch (error) {
          logger.log("error", "OptiTrackModule:logSetUserIdEvent Failed!!, error =  " + error)
        }
      },
      logUserEmail: function (email) {
        try {
          reportEvent("set_email_event", {email: email}).then(data => {
          })
        } catch (error) {
          _logger.log("error", "OptiTrackModule:logOptitrackUserEmail Failed!!, error =  " + error)
        }
      },
      logMetadataCoreEvent: async () => {
        logger.log("info", "OptiTrackModule: in logMetadataCoreEvent");
        let isReported = getPersistedSDKSessionData("a5c127e180652c82e615be143677e248");
        if (isReported && "true" === isReported.value) return;
        let urlParams = _Tools_getUrlParams(), params = {
          sdk_platform: "Web",
          sdk_version: "2.0.0",
          config_file_url: _configFileUrl,
          app_ns: _hostname,
          campaign_name: urlParams.utm_campaign ? urlParams.utm_campaign : null,
          campaign_keyword: urlParams.utm_term ? urlParams.utm_term : null,
          campaign_source: urlParams.utm_source ? urlParams.utm_source : null,
          campaign_medium: urlParams.utm_medium ? urlParams.utm_medium : null,
          campaign_content: urlParams.utm_content ? urlParams.utm_content : null,
          campaign_id: urlParams.utm_id ? urlParams.utm_id : null,
          language: _Tools_getUserLanguage()
        }, eventHandler = eventsHandler;
        return eventHandler.logEvent("optimove_sdk_metadata", params), eventHandler.dispatch().then(data => (persistSDKSessionData("a5c127e180652c82e615be143677e248", !0), data)).catch(error => {
          logger.log("warning", `OptiTrackModule:logMetadataCoreEvent Failed!!, error = ${error}`)
        })
      },
      getOptitrackVisitorInfo: function () {
        return []
      },
      getUserId: getUserId,
      getKeyId: function (THIS, keyName) {
        try {
          var resultKeyId = null;
          switch (keyName) {
            case"datonics":
              resultKeyId = "75f8c5fdab43daca991a35c854a5a6d2";
              break;
            case"liveRamp":
              resultKeyId = "4007d0a432ab6289711974163b25a06d";
              break;
            case"googlCookieMatch":
              resultKeyId = "634beb77779dc8025e7615cf95fce8f7";
              break;
            default:
              resultKeyId = null
          }
          return resultKeyId
        } catch (error) {
          var errMsg = "OptiTrackModule:getKeyId  Failed!!, error = " + error;
          _logger.log("error", errMsg)
        }
      },
      getOptitrackEndpoint: getOptiTrackEndpointFromConfig,
      reportOptitrackEvent: async (event, params) => reportEvent(event, params, _ot_endpoint),
      getPersistedSDKSessionData: getPersistedSDKSessionData,
      persistSDKSessionData: persistSDKSessionData
    }
  })();
  var liveRampModule = {
    updateLiveRampDataMatching: function () {
      var visitorId, livRampId = optitrackModule.getKeyId(optitrackModule, "liveRamp"),
        liveRampOnSessionPersisted = optitrackModule.getPersistedSDKSessionData(optitrackModule, livRampId);
      if (visitorId = getVisitorsInfoObj().visitorId, (null == liveRampOnSessionPersisted || liveRampOnSessionPersisted.value != visitorId) && void 0 !== _configuration.LiveRampMetaData && void 0 !== _configuration.LiveRampMetaData.tenantToken && void 0 !== _configuration.LiveRampMetaData.baseEndpoint) {
        var tenantToken = _configuration.LiveRampMetaData.tenantToken,
          liveRampTenantToken = _configuration.LiveRampMetaData.liveRampTenantToken,
          liveRampTemplateEndpoint = _configuration.LiveRampMetaData.baseEndpoint,
          tenantId = _configuration.optitrackMetaData.siteId, reg = new RegExp("(\\[liveRampToken\\])", "g");
        !function (srcUrl) {
          if (tenantToken != srcUrl) {
            var d = document, g = d.createElement("img"), s = d.getElementsByTagName("script")[0];
            g.type = "text/javascript", g.async = !0, g.defer = !0, g.src = srcUrl, s.parentNode.insertBefore(g, s)
          }
        }(liveRampTemplateEndpoint.replace(reg, liveRampTenantToken) + tenantToken + "_" + tenantId + "_" + visitorId), optitrackModule.persistSDKSessionData(optitrackModule, livRampId, visitorId)
      }
    }
  }, datonicsModule = {
    updateDatonicsDataMatching: function () {
      var visitorId, datonicsId = optitrackModule.getKeyId(optitrackModule, "datonics"),
        datonicsOnSessionPersisted = optitrackModule.getPersistedSDKSessionData(optitrackModule, datonicsId);
      visitorId = getVisitorsInfoObj().visitorId, (null == datonicsOnSessionPersisted || datonicsOnSessionPersisted.value != visitorId) && (function (optimove_Cookie_ID, optimove_Client_ID) {
        if (null != optimove_Cookie_ID) {
          var baseEndpoint = _configuration.DatonicsCookieMatchingMetaData.baseEndpoint, d = document,
            g = d.createElement("img"), s = d.getElementsByTagName("script")[0];
          g.type = "text/javascript", g.async = !0, g.defer = !0;
          var random = Math.round(1e16 * Math.random());
          g.src = baseEndpoint + "csync=" + optimove_Client_ID + "_" + optimove_Cookie_ID + ";rnd=(" + random + ")", s.parentNode.insertBefore(g, s)
        }
      }(visitorId, _configuration.optitrackMetaData.siteId), optitrackModule.persistSDKSessionData(optitrackModule, datonicsId, visitorId))
    }
  }, cookieMatcherModule = {
    updateCookieMatcher: function (userId) {
      var visitorId, googlCookieMatchId = optitrackModule.getKeyId(optitrackModule, "googlCookieMatch"),
        googlCookieMatchOnSessionPersisted = optitrackModule.getPersistedSDKSessionData(optitrackModule, googlCookieMatchId);
      visitorId = getVisitorsInfoObj().visitorId;
      var cookieMatcherUserId = null;
      cookieMatcherUserId = void 0 !== userId && null != userId ? userId : visitorId, (null == googlCookieMatchOnSessionPersisted || googlCookieMatchOnSessionPersisted.value != visitorId) && (function (cookieMatcherUserId) {
        var setCookieUrl = "https://gcm.optimove.events/setCookie?optimove_id=" + cookieMatcherUserId,
          setCookieNode = document.createElement("img");
        setCookieNode.style.display = "none", setCookieNode.setAttribute("src", setCookieUrl), document.body.appendChild(setCookieNode)
      }(cookieMatcherUserId), function (tenantToken, optimoveCookieMatcherId) {
        var url = "https://cm.g.doubleclick.net/pixel?google_nid=" + optimoveCookieMatcherId + "&google_cm&tenant_id=" + tenantToken,
          node = document.createElement("img");
        node.style.display = "none", node.setAttribute("src", url), document.body.appendChild(node)
      }(_configuration.cookieMatcherMetaData.tenantToken, _configuration.cookieMatcherMetaData.optimoveCookieMatcherId), optitrackModule.persistSDKSessionData(optitrackModule, googlCookieMatchId, visitorId))
    }
  };
  const setUserIdHandler = updatedUserId => {
    let userId = updatedUserId.trim(), userInfo = (() => ({
      userId: getUserId(),
      originalVisitorId: getOriginalVisitorId(),
      updatedVisitorId: getVisitorId()
    }))();
    return userInfo.userId && userInfo.userId == userId ? (logger.log("info", "setUserId: User ID is already set"), !1) : {
      userId: userId,
      originalVisitorId: userInfo.originalVisitorId ? getOriginalVisitorId() : generateVisitorId(),
      updatedVisitorId: _SHA1_SHA1(updatedUserId).substring(0, 16)
    }
  };
  return {
    initialize: (token, confversion, callback, logLevel) => {
      logLevel && logger.setLevel(logLevel), _env = getPersistedSDKLocalData(envKey) || _env, persistSDKLocalData(envKey, _env), _hostname = window.location.hostname, loadScript(_configFileUrl = _sdkDomain + "webconfig/" + token + "/" + confversion + ".js", () => {
        logger.log("info", "configuration loaded successfully"), loadScript("https://sdk-cdn.optimove.net/webconfig/prod/sdk-events.js", () => {
          _coreEvents = self.optimoveCoreEvents, logger.log("info", "core events loaded successfully"), setConfiguration(() => {
            generateVisitorId(), _configuration.enableOptitrack && (logger.log("info", "call initializeOptiTrack"), optitrackModule.initializeOptiTrack(() => {
              optitrackModule.logMetadataCoreEvent().then(data => {
                callback && callback()
              })
            })), _configuration.enableRealtime && (logger.log("info", "call initializeRealtime"), realtimeModule.initializeRealtime())
          })
        })
      })
    }, API: {
      getVersion: () => "2.0.0",
      getConfigurationVersion: () => _configuration.version,
      getVisitorId: () => getVisitorId(),
      getUserId: () => getUserId(),
      setRealTimeOptions: options => {
        null != options.showDimmer && (_configuration.realtimeMetaData.options.showDimmer = options.showDimmer), null != options.showWatermark && (_configuration.realtimeMetaData.options.showWatermark = options.showWatermark), null != options.reportEventCallback && (_configuration.realtimeMetaData.options.popupCallback = options.reportEventCallback)
      },
      setUserId: (updatedUserId, callback) => {
        let userInfo = setUserIdHandler(updatedUserId);
        if (userInfo) {
          let params = {
            originalVisitorId: userInfo.originalVisitorId,
            userId: userInfo.userId,
            updatedVisitorId: userInfo.updatedVisitorId
          }, eventHandler = eventsHandler;
          eventHandler.logEvent("set_user_id_event", params), eventHandler.dispatch().then(data => {
            setVisitorId(userInfo.updatedVisitorId), setUserId(updatedUserId), callback && callback()
          }).catch(error => {
            logger.log("error", `setUserId error = ${error}`)
          }), 1 == _configuration.supportCookieMatcher && cookieMatcherModule.updateCookieMatcher(updatedUserId)
        }
      },
      setUserEmail: (email, callback) => {
        if (!email) return void logger.log("error", "setUserEmail: email is missing");
        if (email.trim()) {
          let params = {email: email}, eventHandler = eventsHandler;
          eventHandler.logEvent("set_email_event", params), eventHandler.dispatch().then(data => {
            callback && callback()
          }).catch(error => {
            logger.log("error", `setUserEmail error = ${error}`)
          })
        }
      },
      registerUser: (updatedUserId, email, eventName, parameters, callback) => {
        if (!_Tools_validateUserId(updatedUserId)) return void logger.log("error", `registerUser: userId ${updatedUserId} is invalid`);
        let userInfo = setUserIdHandler(updatedUserId);
        if (userInfo) {
          let params = {
            originalVisitorId: userInfo.originalVisitorId,
            userId: userInfo.userId,
            updatedVisitorId: userInfo.updatedVisitorId
          }, eventHandler = eventsHandler;
          eventHandler.logEvent("set_user_id_event", params), setVisitorId(userInfo.updatedVisitorId), setUserId(updatedUserId), email && eventHandler.logEvent("set_email_event", {email: email}), eventName && eventHandler.logEvent(eventName, parameters), eventHandler.dispatch().then(data => {
            callback && callback()
          })
        }
      },
      reportEvent: (eventName, parameters, callback) => {
        let eventHandler = eventsHandler;
        eventHandler.logEvent(eventName, parameters), eventHandler.dispatch().then(data => {
          callback && callback()
        })
      },
      setPageVisit: (customURLIn, pageTitleIn, categoryIn) => {
        let pageTitle = pageTitleIn.trim(), category = null != categoryIn ? categoryIn.trim() : null,
          customURL = encodeURI(customURLIn);
        customURL = customURL.trim().toLowerCase();
        let params = {customURL: _Tools_cleanUrl(customURL).toLowerCase(), pageTitle: pageTitle, category: category},
          eventHandler = eventsHandler;
        eventHandler.logEvent("set_page_visit", params), eventHandler.dispatch().then(data => {
        }), void 0 !== _configuration.supportDatonicsCookieMatching && 1 == _configuration.supportDatonicsCookieMatching && (logger.log("info", "call setPageVisit support DatonicsCookieMatching"), datonicsModule.updateDatonicsDataMatching()), void 0 !== _configuration.supportCookieMatcher && 1 == _configuration.supportCookieMatcher && cookieMatcherModule.updateCookieMatcher(null), void 0 !== _configuration.supportLiveRamp && 1 == _configuration.supportLiveRamp && liveRampModule.updateLiveRampDataMatching()
      },
      showRealtimePopup: realtimeModule.executePopup,
      closeRealtimePopup: realtimeModule.closePopup,
      openWebTestTool: (url = null) => {
        let lol = document.getElementById("optimoveSdkWebTool"), env = getPersistedSDKLocalData(envKey),
          toolPath = url || "https://sdk-cdn.optimove.net/webtool/" + (env || _env) + "/v1/";
        null == lol && loadScript(toolPath + "optmv-web-test-tool.js", function () {
          openTestTool(toolPath)
        })
      },
      closeWebTestTool: () => {
        let a = document.getElementById("optimoveSdkWebTool");
        null != a && (a.remove(), window.sessionStorage.setItem("isSideBarShouldBeOpen", !1)), document.body.classList.remove("optimoveSdkWebToolOpen"), document.body.style.width = "auto"
      }
    }
  }
}();
const optmvIsOpen = function () {
  return "true" == window.sessionStorage.getItem("isSideBarShouldBeOpen")
};
optmvIsOpen() && optimoveSDK.API.openWebTestTool();
