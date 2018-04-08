! function() {
	var e;
	if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
		var t = document.createElement("script");
		t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function() {
			"complete" != this.readyState && "loaded" != this.readyState || a()
		} : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
	} else e = window.jQuery, n();

	function a() {
		e = window.jQuery.noConflict(!0),
			n()
	}

	function i(e) {
		var t = " " + document.cookie,
			a = " " + e + "=",
			i = null,
			n = 0,
			r = 0;
		return t.length > 0 && -1 != (n = t.indexOf(a)) && (n += a.length, -1 == (r = t.indexOf(";", n)) && (r = t.length), i = unescape(t.substring(n, r))), i
	}

	function n() {
		var t, a, n = (t = i("_locale") || void 0, a = !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat), {
			toLocaleString: function(e, i) {
				var n = Number(e);
				if (isNaN(n)) return e;
				var r, o, c,
					l, s = i && i.minDecimalPlaces,
					d = i && i.maxDecimalPlaces;
				return void 0 === s || void 0 === d ? (r = n, a ? r.toLocaleString(t) : r.toLocaleString()) : (o = n, c = s, l = d, a ? o.toLocaleString(t, {
					minimumFractionDigits: c,
					maximumFractionDigits: l
				}) : o.toFixed(l))
			}
		});

		function r(e, t) {
			var a = t;
			t = Math.pow(10, t);
			for (var i = ["K", "M", "B", "T"], r = i.length - 1; r >= 0; r--) {
				var o = Math.pow(10, 3 * (r + 1));
				if (o <= e) {
					1e3 == (e = Math.round(e * t / o) / t) && r < i.length - 1 && (e = 1, r++),
						e = n.toLocaleString(Number(e), {
							minDecimalPlaces: a,
							maxDecimalPlaces: a
						}), e += " " + i[r];
					break
				}
			}
			return e
		}

		function o(e, t) {
			return "BTC" == t ? function(e) {
				e = e >= 1e3 ? n.toLocaleString(Math.round(e)) : e >= 1 ? n.toLocaleString(e, {
					minDecimalPlaces: 8,
					maxDecimalPlaces: 8
				}) : e < 1e-8 ? Number(e).toExponential(4) : n.toLocaleString(e, {
					minDecimalPlaces: 8,
					maxDecimalPlaces: 8
				});
				return e
			}(e) : function(e) {
				e = e >= 1 ? e >= 1e5 ? n.toLocaleString(Math.round(e)) : n.toLocaleString(e, {
					minDecimalPlaces: 2,
					maxDecimalPlaces: 2
				}) : e < 1e-6 ? Number(e).toExponential(2) : n.toLocaleString(e, {
					minDecimalPlaces: 6,
					maxDecimalPlaces: 6
				});
				return e
			}(e)
		}

		function c(e, t, a) {
			var i = t,
				n = {
					btc: "ŕ¸ż",
					usd: "$",
					eur: "âŹ",
					cny: "ÂĽ",
					gbp: "ÂŁ",
					cad: "$",
					rub: "<img src='/static/img/fiat/ruble.gif'/>",
					hkd: "$",
					jpy: "ÂĽ",
					aud: "$",
					brl: "R$",
					inr: "âš",
					krw: "âŠ",
					mxn: "$",
					idr: "Rp",
					chf: "Fr"
				};
			return e.toLowerCase() in n && (i = n[e.toLowerCase()] + i), a && (i = i + ' <span style="font-size:9px">' + e.toUpperCase() + "</span>"), i
		}

		function l(e, t, a, i, l, s, d, p, m, u, h, g, v, f, x, y, b, w) {
			var L = w ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + w + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
				k = "#093";
			m < 0 && (k = "#d14836"), m = n.toLocaleString(m, {
					minDecimalPlaces: 2,
					maxDecimalPlaces: 2
				}), valTickerHTML = v ? "(" + a + ")" : "",
				valPrice = s ? o(s, i) : "?", valPercentHTML = m ? '<span style="color:' + k + '">(' + m + "%)" : "", valMarketCap = u ? r(u, 2) : "?",
				valVolume = h ? r(h, 2) : "?", d ? (mainLineHeight = 25, valPriceSecondary = p ? o(p, d) : "?", secondaryHTML = '<br><span style="font-size: 12px; color:gray">' + valPriceSecondary + " " + d + " </span>") : (mainLineHeight = 30, secondaryHTML = "");
			var E = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
				P = '<div style="border:2px solid #E4E6EB;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">    <div>        <div style="float:right;width:67%;border: 0px solid #000;text-align:left;padding:5px 0px;line-height:' + mainLineHeight + 'px;">            <span style="font-size: 18px;"><a href="http://coinmarketcap.com/currencies/' + e + "/?" + E + '" target="_blank">' + t + " " + valTickerHTML + '</a></span> <br>            <span style="font-size: 16px;">' + valPrice + " " + i + " " + valPercentHTML + "</span></span>            " + secondaryHTML + '        </div>        <div style="text-align:center;padding:5px 0px;width:33%;"><img src="' + L + '"></div>    </div>';
			return P += function(e, t, a, i, n, r, o, l) {
				var s = 0,
					d = 0,
					p = "",
					m = "",
					u = "";
				if (e && s++, t && s++, a && s++, 0 == s) return "";
				1 == s && (d = 100),
					2 == s && (d = 49.8), 3 == s && (d = 33),
					e && (borderWidth = 0, (a || t) && (borderWidth = 1), p = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0;border-right:" + borderWidth + 'px solid #E4E6EB;line-height:1.25em;">                        RANK                        <br><br>                        <span style="font-size: 17px; ">' + r + "</span>                    </div>");
				a && (borderWidth = 0, t && (borderWidth = 1), m = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + borderWidth + 'px solid #E4E6EB;line-height:1.25em;">                        MARKET CAP                        <br><br>                        <span style="font-size: 14px; ">' + c(n, o, i) + "</span>                    </div>");
				t && (u = '                    <div style="text-align:center;float:left;width:' + d + '%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;">                        VOLUME (24H)                        <br><br>                        <span style="font-size: 14px; ">' + c(n, l, i) + "</span>                    </div>");
				return detailedHTML = '<div style="border-top: 1px solid #E4E6EB;clear:both;">' + p + m + u + "</div>",
					detailedHTML
			}(f, x, y, b, l, g, valMarketCap, valVolume), P += '    <div style="border-top: 0px solid #E4E6EB;text-align:center;clear:both;font-size:10px;font-style:italic;padding:0px 0;"> </div></div>'
		}
		e(document).ready(function(e) {
			e(".coinmarketcap-currency-widget").each(function() {
				var t = e(this).attr("data-currency"),
					a = e(this).data("currencyid"),
					i = e(this).attr("data-base").toUpperCase(),
					n = e(this).attr("data-secondary");
				n = "BTC" == (n = n ? n.toUpperCase() : null) || "USD" == n ? n : null;
				var r = e(this).attr("data-stats");
				r = (r = r ? r.toUpperCase() : null) == i ? i : "USD";
				var o,
					c,
					s = !1 !== e(this).data("ticker"),
					d = !1 !== e(this).data("rank"),
					p = !1 !== e(this).data("marketcap"),
					m = !1 !== e(this).data("volume"),
					u = !1 !== e(this).data("statsticker"),
					h = this;
				a ? (o = "https://widgets.coinmarketcap.com/v2/ticker/" + a + "/?ref=widget&convert=" + i, c = "volume_24h_") : (o = "https://widgets.coinmarketcap.com/v1/ticker/" + t + "/?ref=widget&convert=" + i, c = "24h_volume_"),
					e.get({
						url: o,
						success: function(o) {
							o = o.length ? o[0] : o.data,
								t || (t = o.website_slug);
							var g = "price_" + i.toLowerCase(),
								v = n ? "price_" + n.toLowerCase() : null,
								f = "market_cap_" + r.toLowerCase(),
								x = c + r.toLowerCase(),
								y = parseFloat(o[g]),
								b = v ? parseFloat(o[v]) : null,
								w = parseInt(o[f]),
								L = parseInt(o[x]),
								k = o.name,
								E = o.symbol,
								P = Number(o.percent_change_24h),
								M = o.rank,
								C = l(t, k, E, i, r, y, n, b, P, w, L, M, s, d, m, p, u, a);
							e(h).html(C),
								e(h).find("a").css({
									"text-decoration": "none",
									color: "#428bca"
								})
						}
					})
			})
		})
	}
}();
