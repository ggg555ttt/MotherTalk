(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405],
	{
		3162: function(e, n, t)
		{
			var r, o;
			void 0 !== (r = "function" == typeof(o = function()
			{
				"use strict";

				function n(e, n, t)
				{
					var r = new XMLHttpRequest;
					r.open("GET", e), r.responseType = "blob", r.onload = function()
					{
						a(r.response, n, t)
					}, r.onerror = function()
					{
						console.error("could not download file")
					}, r.send()
				}

				function r(e)
				{
					var n = new XMLHttpRequest;
					n.open("HEAD", e, !1);
					try
					{
						n.send()
					}
					catch (e)
					{}
					return 200 <= n.status && 299 >= n.status
				}

				function o(e)
				{
					try
					{
						e.dispatchEvent(new MouseEvent("click"))
					}
					catch (t)
					{
						var n = document.createEvent("MouseEvents");
						n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n)
					}
				}
				var i = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof t.g && t.g.global === t.g ? t.g : void 0,
					c = i.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
					a = i.saveAs || ("object" != typeof window || window !== i ? function() {} : "download" in HTMLAnchorElement.prototype && !c ? function(e, t, c)
					{
						var a = i.URL || i.webkitURL,
							l = document.createElement("a");
						t = t || e.name || "download", l.download = t, l.rel = "noopener", "string" == typeof e ? (l.href = e, l.origin === location.origin ? o(l) : r(l.href) ? n(e, t, c) : o(l, l.target = "_blank")) : (l.href = a.createObjectURL(e), setTimeout(function()
						{
							a.revokeObjectURL(l.href)
						}, 4e4), setTimeout(function()
						{
							o(l)
						}, 0))
					} : "msSaveOrOpenBlob" in navigator ? function(e, t, i)
					{
						if(t = t || e.name || "download", "string" != typeof e)
						{
							var c;
							navigator.msSaveOrOpenBlob((void 0 === (c = i) ? c = {
								autoBom: !1
							} : "object" != typeof c && (console.warn("Deprecated: Expected third argument to be a object"), c = {
								autoBom: !c
							}), c.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e],
							{
								type: e.type
							}) : e), t)
						}
						else if(r(e)) n(e, t, i);
						else
						{
							var a = document.createElement("a");
							a.href = e, a.target = "_blank", setTimeout(function()
							{
								o(a)
							})
						}
					} : function(e, t, r, o)
					{
						if((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."), "string" == typeof e) return n(e, t, r);
						var a = "application/octet-stream" === e.type,
							l = /constructor/i.test(i.HTMLElement) || i.safari,
							s = /CriOS\/[\d]+/.test(navigator.userAgent);
						if((s || a && l || c) && "undefined" != typeof FileReader)
						{
							var u = new FileReader;
							u.onloadend = function()
							{
								var e = u.result;
								e = s ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = e : location = e, o = null
							}, u.readAsDataURL(e)
						}
						else
						{
							var d = i.URL || i.webkitURL,
								h = d.createObjectURL(e);
							o ? o.location = h : location.href = h, o = null, setTimeout(function()
							{
								d.revokeObjectURL(h)
							}, 4e4)
						}
					});
				i.saveAs = a.saveAs = a, e.exports = a
			}) ? o.apply(n, []) : o) && (e.exports = r)
		},
		8727: function(e, n, t)
		{
			"use strict";
			var r = t(7294),
				o = t(5893),
				i = {
					overflow: "hidden",
					fontSize: "0",
					width: "100%",
					height: "100%"
				};
			n.Z = function(e)
			{
				var n, t, c = e.children,
					a = (0, r.useRef)(null),
					l = !1,
					s = function()
					{
						return l = !1
					},
					u = function(e)
					{
						return a.current.scrollLeft = e
					};
				return (0, o.jsx)("div",
				{
					style: i,
					ref: a,
					onTouchStart: function(e)
					{
						n = e.targetTouches[0].pageX - a.current.offsetLeft, t = a.current.scrollLeft
					},
					onTouchMove: function(e)
					{
						u(t - (e.targetTouches[0].pageX - a.current.offsetLeft - n) * 1)
					},
					onMouseDown: function(e)
					{
						l = !0, n = e.pageX - a.current.offsetLeft, t = a.current.scrollLeft
					},
					onMouseMove: function(e)
					{
						l && (e.preventDefault(), u(t - (e.pageX - a.current.offsetLeft - n) * 1))
					},
					onMouseUp: s,
					onMouseLeave: s,
					children: c
				})
			}
		},
		5615: function(e, n, t)
		{
			"use strict";
			var r = t(6150),
				o = t(7294),
				i = t(9521),
				c = t(5893);
			n.Z = function(e)
			{
				var n = e.childrens,
					t = (0, o.useState)(0),
					i = t[0],
					u = t[1],
					d = (0, r.C)(function(e)
					{
						return e.global.isRight
					}),
					h = (0, r.C)(function(e)
					{
						return e.global.isMobile
					});
				return (0, o.useEffect)(function()
				{
					u(d ? 1 : 0)
				}, [d]), (0, c.jsx)(a,
				{
					children: (0, c.jsx)(l,
					{
						children: n.map(function(e, n)
						{
							return (0, c.jsx)(s,
							{
								style:
								{
									width: h && i !== n ? "0" : "100%"
								},
								children: e
							}, n)
						})
					})
				})
			};
			var a = i.ZP.div.withConfig(
				{
					displayName: "MainSlider__Container",
					componentId: "sc-x1wvnd-0"
				})(["width:100%;height:100%;overflow:hidden;position:relative;"]),
				l = i.ZP.div.withConfig(
				{
					displayName: "MainSlider__Slider",
					componentId: "sc-x1wvnd-1"
				})(["display:flex;width:100%;height:100%;"]),
				s = i.ZP.div.withConfig(
				{
					displayName: "MainSlider__Slide",
					componentId: "sc-x1wvnd-2"
				})(["transition:width 300ms ease-in-out;width:100%;height:100%;overflow:hidden;"])
		},
		5654: function(e, n, t)
		{
			"use strict";
			var r = t(4701),
				o = t(6150),
				i = t(1563),
				c = t(9417),
				a = t(7294),
				l = t(9521),
				s = t(5893);
			n.Z = function(e)
			{
				var n = e.items,
					t = e.selected,
					l = e.setSelected,
					f = (0, a.useState)(!1),
					p = f[0],
					g = f[1],
					x = (0, a.useState)(""),
					y = x[0],
					b = x[1],
					j = (0, o.C)(function(e)
					{
						return e.global.lang
					}),
					w = n.length > 0 ? n.filter(function(e)
					{
						return e.title.toLowerCase().match(y.toLowerCase())
					}) : [];
				return (0, a.useEffect)(function()
				{
					p ? b("") : b(t.title)
				}, [p, t, b]), (0, s.jsx)(u,
				{
					children: (0, s.jsxs)("div",
					{
						style:
						{
							position: "relative",
							width: "100%"
						},
						children: [(0, s.jsxs)(i.OP,
						{
							style:
							{
								padding: "0 0.5rem",
								zIndex: "2",
								position: "relative",
								height: "2rem"
							},
							onClick: function()
							{
								g(!0)
							},
							children: [(0, s.jsx)(i.Kx,
							{
								className: "medium",
								style:
								{
									padding: "0",
									overflow: "hidden"
								},
								placeholder: r.Z.filter_selectBox[j],
								maxRows: 1,
								value: y,
								maxLength: 20,
								onChange: function(e)
								{
									!p || e.currentTarget.value.match("\n") || b(e.currentTarget.value)
								}
							}), (0, s.jsx)(i.xL,
							{
								style:
								{
									width: "0.7rem",
									margin: "0 0 0 0.2rem"
								},
								icon: p ? c.l1h : c.eW2
							})]
						}), (0, s.jsx)(d,
						{
							style:
							{
								display: p ? "block" : "none"
							},
							children: w.map(function(e, n)
							{
								return (0, s.jsx)("li",
								{
									children: (0, s.jsx)(h,
									{
										className: e.no === t.no ? "medium selected" : "medium",
										onClick: function()
										{
											l(e), g(!1)
										},
										children: e.title || "-"
									})
								}, n)
							})
						}), (0, s.jsx)(m,
						{
							style:
							{
								display: p ? "block" : "none"
							},
							onClick: function()
							{
								g(!1)
							}
						})]
					})
				})
			};
			var u = l.ZP.div.withConfig(
				{
					displayName: "SelectBox__Container",
					componentId: "sc-1p70i56-0"
				})(["width :100%;"]),
				d = l.ZP.ul.withConfig(
				{
					displayName: "SelectBox__UL",
					componentId: "sc-1p70i56-1"
				})(["position:absolute;width:100%;max-height:15rem;z-index:2;border:2px solid ", ";border-radius:0.5rem;background-color:", ";overflow-y:auto;overflow-y:overlay;overflow-x:hidden;&::-webkit-scrollbar{display:inline-block;width:0.4rem;}&::-webkit-scrollbar-thumb{height:17%;background-color:", ";border-radius:1rem;}"], function(e)
				{
					return e.theme.color.rgb139_187_233
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb210_210_210
				}),
				h = (0, l.ZP)(i.zx).withConfig(
				{
					displayName: "SelectBox__ItemButton",
					componentId: "sc-1p70i56-2"
				})(["width :100%;padding:auto 0.5rem;text-align:left;border-radius:0;&.selected{color:", ";background-color:", ";pointer-events:none;}"], function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb139_187_233
				}),
				m = l.ZP.div.withConfig(
				{
					displayName: "SelectBox__BG",
					componentId: "sc-1p70i56-3"
				})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;"])
		},
		8024: function(e, n, t)
		{
			"use strict";
			var r = t(9499),
				o = t(7294),
				i = t(5280),
				c = t(1728),
				a = t(5893);

			function l(e, n)
			{
				var t = Object.keys(e);
				if(Object.getOwnPropertySymbols)
				{
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter(function(n)
					{
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					})), t.push.apply(t, r)
				}
				return t
			}

			function s(e)
			{
				for(var n = 1; n < arguments.length; n++)
				{
					var t = null != arguments[n] ? arguments[n] :
					{};
					n % 2 ? l(Object(t), !0).forEach(function(n)
					{
						(0, r.Z)(e, n, t[n])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n)
					{
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					})
				}
				return e
			}
			n.Z = function(e)
			{
				var n = e.listArr,
					t = e.clientHeight,
					r = e.selected,
					l = e.rowHeight,
					u = (0, o.useRef)(null),
					d = (0, o.useState)([]),
					h = d[0],
					m = d[1];
				(0, o.useEffect)(function()
				{
					u.current && n.length > 0 && m(n.map(function(e, n)
					{
						return setTimeout(function()
						{
							var e;
							null == u || null === (e = u.current) || void 0 === e || e.resetAfterIndex(n)
						}, 0), r === n ? 2 * l : l
					}))
				}, [r, n, u, l, m]);
				var f = function(e)
				{
					var t = e.index,
						r = e.style;
					return (0, a.jsx)("div",
					{
						style: s(s(
						{}, r),
						{},
						{
							transition: "all 300ms ease-in-out"
						}),
						children: n[t]
					})
				};
				return (0, a.jsx)(c.Z,
				{
					defaultHeight: t,
					children: function(e)
					{
						var t = e.width,
							r = e.height;
						return (0, a.jsx)(i.S_,
						{
							ref: u,
							height: r,
							width: t,
							itemCount: n.length,
							itemSize: function(e)
							{
								return h[e] || 0
							},
							overscanCount: 1,
							children: f
						})
					}
				})
			}
		},
		583: function(e, n, t)
		{
			"use strict";
			t.r(n), t.d(n,
			{
				default: function()
				{
					return nw
				}
			});
			var r = t(7294),
				o = t(9521),
				i = t(6150),
				c = t(1563),
				a = t(8727),
				l = t(9417),
				s = t(8586),
				u = t(3380),
				d = t(3420),
				h = t(1550),
				m = t(5893),
				f = function()
				{
					var e = (0, i.T)(),
						n = (0, r.useState)(!1),
						t = n[0],
						o = n[1],
						c = (0, i.C)(function(e)
						{
							return e.global.isRight
						}),
						f = (0, i.C)(function(e)
						{
							return e.global.isMobile
						}),
						w = (0, i.C)(function(e)
						{
							return e.sCharacter
						}),
						_ = function(n)
						{
							if(t)
							{
								var r = w.selectedList.filter(function(e)
								{
									return !(n.no === e.no && n.index === e.index)
								});
								e((0, h.F5)(r))
							}
							else e((0, h.Ks)(n))
						};
					return (0, m.jsxs)(p,
					{
						children: [(0, m.jsxs)(g,
						{
							children: [(0, m.jsx)(y,
							{
								style:
								{
									display: f && c || t ? "none" : "block"
								},
								onClick: function()
								{
									o(!0), e((0, h.Ks)(d.I))
								},
								children: (0, m.jsx)(b,
								{
									style:
									{
										marginLeft: "0.1rem"
									},
									icon: l.FKd
								})
							}), (0, m.jsx)(y,
							{
								style:
								{
									display: f && c || !t ? "none" : "block"
								},
								onClick: function()
								{
									o(!1)
								},
								children: (0, m.jsx)(b,
								{
									style:
									{
										marginLeft: "0.1rem"
									},
									icon: l.k9h
								})
							}), (0, m.jsx)(y,
							{
								style: f && c ?
								{} :
								{
									display: "none"
								},
								onClick: function()
								{
									e((0, s.Cz)(!1))
								},
								children: (0, m.jsx)(b,
								{
									icon: l.EyR
								})
							})]
						}), (0, m.jsx)(g,
						{
							style:
							{
								flexGrow: "1",
								overflow: "hidden",
								margin: "0",
								width: "100%"
							},
							children: (0, m.jsx)(x,
							{
								children: (0, m.jsx)(a.Z,
								{
									children: (0, m.jsx)(g,
									{
										style:
										{
											margin: "0",
											justifyContent: "flex-start"
										},
										children: w.selectedList.map(function(e, n)
										{
											return (0, m.jsx)(j,
											{
												alt: String(e.no),
												width: 252,
												height: 252,
												src: e.no > 999 ? (headarr["#"+e.no] ? headarr["#"+e.no] : loadhead(e.no)) : "char/ch".concat(e.no, "-").concat(e.index, ".jpg"),
												//#src: "https://server.raun0129.com/asset/" + "image/character/ch".concat(e.no, "/profile/").concat(e.index, ".png"),//下方待选框
												onClick: function()
												{
													_(e)
												},
												onError: function(e)
												{
													var n = e.currentTarget;
													(0, u.Mp)(n, "character")
												},
												className: (0, u.Y)(w.selected, e) ? "selected" : ""
											}, n)
										})
									})
								})
							})
						}), (0, m.jsxs)(g,
						{
							children: [(0, m.jsx)(j,
							{
								className: (0, u.Y)(w.selected, d.I) ? "selected" : "",
								style:
								{
									display: !f || c ? "block" : "none",
									margin: "0"
								},
								width: 252,
								height: 252,
								alt: "sensei",
								src: "char/ch".concat(d.I.no, "-").concat(d.I.index, ".jpg"),
								//#src: "https://server.raun0129.com/asset/" + "image/character/ch".concat(d.I.no, "/profile/").concat(d.I.index, ".png"),//老师本人
								onClick: function()
								{
									e((0, h.Ks)(d.I))
								},
								priority: !0
							}), (0, m.jsx)(y,
							{
								style:
								{
									display: !f || c ? "none" : "block"
								},
								onClick: function()
								{
									e((0, s.Cz)(!0)), o(!1)
								},
								children: (0, m.jsx)(b,
								{
									icon: l.yOZ
								})
							})]
						})]
					})
				},
				p = o.ZP.div.withConfig(
				{
					displayName: "Footer__Container",
					componentId: "sc-1rjbi2j-0"
				})(["", " flex-shrink:0;height:3.5rem;color:", ";background-color:", ";@media screen and (max-width:768px){height:4rem;}"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}),
				g = o.ZP.div.withConfig(
				{
					displayName: "Footer__Flex",
					componentId: "sc-1rjbi2j-1"
				})(["", ";position:relative;width:auto;margin:0 1rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				x = o.ZP.div.withConfig(
				{
					displayName: "Footer__ProfileContainer",
					componentId: "sc-1rjbi2j-2"
				})(["", ";overflow-x:scroll;position:absolute;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "flex-start"
					})
				}),
				y = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "Footer__Circlebutton",
					componentId: "sc-1rjbi2j-3"
				})(["border:2px solid white;border-radius:50%;height:3rem;width:3rem;&:hover{background-color:", ";}"], function(e)
				{
					return e.theme.color.rgb61_75_92
				}),
				b = (0, o.ZP)(c.xL).withConfig(
				{
					displayName: "Footer__StyledIcon2",
					componentId: "sc-1rjbi2j-4"
				})(["height:1.5rem;margin:0.2rem 0rem;color:", ";"], function(e)
				{
					return e.theme.color.rgb255_255_255
				}),
				j = (0, o.ZP)(c.t_).withConfig(
				{
					displayName: "Footer__ProfileClick2",
					componentId: "sc-1rjbi2j-5"
				})(["width:3rem;height:3rem;"]),
				w = t(9499),
				_ = t(721),
				C = t(8024),
				v = function(e)
				{
					var n = e.character,
						t = e.setSelected,
						r = (0, i.C)(function(e)
						{
							return e.sCharacter.selectedList
						}),
						o = (0, i.T)(),
						l = function(e)
						{
							var i, c = {
								no: n.no,
								index: e
							};
							(i = r.filter(function(t)
							{
								return !(n.no === t.no && e === t.index)
							})).length === r.length ? o((0, h.AU)(c)) : o((0, h.F5)(i)), t(null)
						};
					return (0, m.jsx)(a.Z,
					{
						children: (0, m.jsx)(k,
						{
							children: n.profile.map(function(e)
							{
								return (0, m.jsx)(c.t_,
								{
									width: 252,
									height: 252,
									alt: "profile",
									src: n.no > 999 ? (headarr["#"+n.no] ? headarr["#"+n.no] : loadhead(n.no)) : "".concat("char/ch").concat(n.no, "-").concat(e, ".jpg"),
									//#src: "".concat("https://server.raun0129.com/asset/", "image/character/ch").concat(n.no, "/profile/").concat(e, ".png"),//左方人物选择分支
									onError: function(e)
									{
										var n = e.currentTarget;
										(0, u.Mp)(n, "character")
									},
									onClick: function()
									{
										l(e)
									},
									className: 1 === r.filter(function(t)
									{
										return n.no === t.no && e === t.index
									}).length ? "selected" : ""
								}, e)
							})
						})
					})
				},
				k = o.ZP.div.withConfig(
				{
					displayName: "Profiles__PContainer",
					componentId: "sc-6ar1q-0"
				})(["", " padding:1rem 0rem;width:100%;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "flex-start"
					})
				}),
				Z = function(e)
				{
					var n = e.character,
						t = e.selected,
						r = e.setSelected,
						o = (0, i.C)(function(e)
						{
							return e.sCharacter.selectedList
						}),
						a = (0, i.C)(function(e)
						{
							return e.global.lang
						});
					return (0, m.jsxs)(N,
					{
						children: [(0, m.jsx)(S,
						{
							className: o.filter(function(e)
							{
								return e.no === n.no
							}).length > 0 ? "selected" : "",
							children: (0, m.jsxs)(P,
							{
								onClick: function()
								{
									t === n ? r(null) : r(n)
								},
								children: [(0, m.jsxs)(S,
								{
									children: [(0, m.jsx)(c.NZ,
									{
										width: 252,
										height: 252,
										src: n.no > 999 ? (headarr["#"+n.no] ? headarr["#"+n.no] : loadhead(n.no)) : "".concat("char/ch").concat(n.no, "-", 1, ".jpg"),
										//#src: "".concat("https://server.raun0129.com/asset/", "image/character/ch").concat(n.no, "/profile/", 1, ".png"),//左方选择框
										onError: function(e)
										{
											var n = e.currentTarget;
											(0, u.Mp)(n, "character")
										},
										alt: "profile"
									}), (0, m.jsxs)(I,
									{
										children: [(0, m.jsx)("h2",
										{
											children: (0, m.jsx)(R,
											{
												children: (0, m.jsx)(E,
												{
													className: "bold",
													children: n.name[a].replaceAll("-", " ")
												})
											})
										}), (0, m.jsx)(R,
										{
											children: (0, m.jsx)(D,
											{
												children: n.club[a]
											})
										})]
									})]
								}), (0, m.jsx)(B,
								{
									width: 252,
									height: 252,
									src: "image/symbol/".concat(n.school.en, ".png"),
									//#src: "/image/symbol/".concat(n.school.en, ".png"),//学校
									onError: function(e)
									{
										var n = e.currentTarget;
										(0, u.Mp)(n, "school")
									},
									alt: "school"
								})]
							})
						}), (0, m.jsxs)(T,
						{
							children: [n === t && (0, m.jsx)(v,
							{
								character: n,
								setSelected: r
							}), (0, m.jsx)(O,
							{})]
						})]
					})
				},
				N = o.ZP.div.withConfig(
				{
					displayName: "Character__Container",
					componentId: "sc-9wktk6-0"
				})(["", " word-break:keep-all;height:auto;background-color:", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb243_247_248
				}),
				S = o.ZP.div.withConfig(
				{
					displayName: "Character__Wrapper",
					componentId: "sc-9wktk6-1"
				})(["", " &.selected{background-color:", ";}"], function(e)
				{
					return e.theme.common.flexBox(
					{
						align: "space-around",
						justify: "flex-start"
					})
				}, function(e)
				{
					return e.theme.color.rgb202_215_221
				}),
				P = o.ZP.div.withConfig(
				{
					displayName: "Character__CContainer",
					componentId: "sc-9wktk6-2"
				})(["", " height:auto;padding:1rem;cursor:pointer;box-sizing:border-box;&:hover{background-color:", ";}&:active{background-color:", ";}"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}, function(e)
				{
					return e.theme.color.rgb218_228_233
				}, function(e)
				{
					return e.theme.color.rgb202_215_221
				}),
				I = o.ZP.div.withConfig(
				{
					displayName: "Character__ProfileText",
					componentId: "sc-9wktk6-3"
				})(["", " height:auto;width:auto;margin:0 0 0 1rem;font-size:1.1rem;max-height:4rem;color:", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column",
						justify: "space-around",
						align: "flex-start"
					})
				}, function(e)
				{
					return e.theme.color.rgb68_72_78
				}),
				B = (0, o.ZP)(c.Yo).withConfig(
				{
					displayName: "Character__School",
					componentId: "sc-9wktk6-4"
				})(["height:4rem;width:4rem;padding:0;"]),
				T = o.ZP.div.withConfig(
				{
					displayName: "Character__ProfileWrapper",
					componentId: "sc-9wktk6-5"
				})(["padding:0rem 1rem;width:100%;box-sizing:border-box;"]),
				O = o.ZP.div.withConfig(
				{
					displayName: "Character__HR",
					componentId: "sc-9wktk6-6"
				})(["position:relative;height:1px;margin-top:-1px;width:100%;background-color:", ";"], function(e)
				{
					return e.theme.color.rgb231_231_231
				}),
				R = o.ZP.div.withConfig(
				{
					displayName: "Character__FontDiv",
					componentId: "sc-9wktk6-7"
				})(["display:table;width:100%;table-layout:fixed;white-space:nowrap;"]),
				E = o.ZP.span.withConfig(
				{
					displayName: "Character__FontSpan",
					componentId: "sc-9wktk6-8"
				})(["display:table-cell;display:block;text-overflow:ellipsis;white-space:nowrap;"]),
				//#})(["display:table-cell;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]),
				D = (0, o.ZP)(E).withConfig(
				{
					displayName: "Character__FontSpan2",
					componentId: "sc-9wktk6-9"
				})(["font-size:1rem;color:", ";"], function(e)
				{
					return e.theme.color.rgb111_119_127
				}),
				F = t(4701),
				L = t(8681),
				z = function(e)
				{
					var n = e.modalShow,
						t = e.handleModalShow,
						o = e.sortCharType,
						a = e.setSearch,
						l = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						s = (0, r.useState)(o),
						u = s[0],
						d = s[1];
					return (0, r.useEffect)(function()
					{
						d(o)
					}, [n, o]), (0, m.jsx)("div",
					{
						style:
						{
							width: "100%",
							position: "relative"
						},
						children: (0, m.jsxs)(M,
						{
							style:
							{
								maxHeight: n ? "12rem" : "0"
							},
							children: [(0, m.jsxs)(A,
							{
								children: [(0, m.jsx)(U,
								{
									className: "bold",
									children: F.Z.sort[l]
								}), (0, m.jsx)(c.hU,
								{
									onClick: function()
									{
										t()
									},
									children: (0, m.jsx)(G,
									{})
								})]
							}), (0, m.jsx)(q,
							{
								children: L.h5.map(function(e, n)
								{
									return (0, m.jsx)(c.Bx,
									{
										className: u === e ? "selected medium" : "medium",
										onClick: function()
										{
											d(e)
										},
										children: F.Z[e][l]
									}, n)
								})
							}), (0, m.jsx)(A,
							{
								children: (0, m.jsx)(c.Mm,
								{
									className: "medium",
									onClick: function()
									{
										t(), a(
										{
											sortCharType: u
										})
									},
									children: F.Z.confirm[l]
								})
							})]
						})
					})
				},
				M = o.ZP.div.withConfig(
				{
					displayName: "GroupModal__Container",
					componentId: "sc-123a00a-0"
				})(["", ";background-color:", ";border:1px solid ", ";border-radius:10px;position:absolute;transition:max-height 0.3s ease-in-out;height:auto;z-index:1;overflow:hidden;box-sizing:border-box;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb224_226_228
				}),
				A = o.ZP.div.withConfig(
				{
					displayName: "GroupModal__Header",
					componentId: "sc-123a00a-1"
				})(["", ";padding:0.6rem;box-sizing:border-box;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}),
				q = o.ZP.div.withConfig(
				{
					displayName: "GroupModal__Body",
					componentId: "sc-123a00a-2"
				})(["", ";border-top:1px solid ", ";border-bottom:1px solid ", ";padding:0.6rem;box-sizing:border-box;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}, function(e)
				{
					return e.theme.color.rgb239_240_241
				}, function(e)
				{
					return e.theme.color.rgb239_240_241
				}),
				U = o.ZP.span.withConfig(
				{
					displayName: "GroupModal__FontSpan",
					componentId: "sc-123a00a-3"
				})(["font-size:1.2rem;color:", ";"], function(e)
				{
					return e.theme.color.rgb63_68_74
				}),
				G = (0, o.ZP)(c.j4).withConfig(
				{
					displayName: "GroupModal__ExitI",
					componentId: "sc-123a00a-4"
				})(["width:1.5rem;height:1.5rem;&:before,&:after{content:'';width:1.5rem;height:2px;left:40%;background:", ";}"], function(e)
				{
					return e.theme.color.rgb15_33_64
				}),
				Y = function(e)
				{
					var n = e.search,
						t = e.setSearch,
						o = e.characterLength,
						a = (0, r.useState)(!1),
						l = a[0],
						s = a[1],
						u = (0, i.C)(function(e)
						{
							return e.global.lang
						});
					return (0, m.jsxs)(H,
					{
						children: [(0, m.jsxs)(K,
						{
							children: [(0, m.jsx)("h1",
							{
								children: (0, m.jsxs)(X,
								{
									className: "bold",
									children: [F.Z.student[u], " ", (0, m.jsxs)("span",
									{
										style:
										{
											fontSize: "1.2rem"
										},
										children: ["(", o, ")"]
									})]
								})
							}), (0, m.jsxs)(W,
							{
								style:
								{
									width: "auto"
								},
								children: [(0, m.jsx)($,
								{
									className: "medium",
									onClick: function()
									{
										s(!l)
									},
									children: (0, m.jsx)(X,
									{
										style:
										{
											fontSize: "1.1rem"
										},
										children: F.Z[n.sortCharType][u]
									})
								}), (0, m.jsx)(c.jl,
								{
									onClick: function()
									{
										t(
										{
											order: !n.order
										})
									},
									children: (0, m.jsx)(W,
									{
										children: (0, m.jsx)(c.Yo,
										{
											style:
											{
												width: "2rem",
												height: "1rem",
												marginLeft: "0.4rem"
											},
											width: 110,
											height: 60,
											alt: "order",
											src: "image/ui/searchbar/".concat(n.order ? "down" : "up", ".png")
											//#src: "/image/ui/searchbar/".concat(n.order ? "down" : "up", ".png")
										})
									})
								})]
							})]
						}), (0, m.jsxs)(W,
						{
							children: [(0, m.jsx)(c.II,
							{
								type: "text",
								value: n.text,
								maxLength: 30,
								className: "medium",
								placeholder: F.Z.search_comment[u],
								onChange: function(e)
								{
									t(
									{
										text: e.currentTarget.value
									})
								}
							}), (0, m.jsx)(c.lR,
							{
								width: 40,
								height: 40,
								onClick: function()
								{
									t(
									{
										text: ""
									})
								},
								src: "image/ui/searchbar/pen.png",
								//#src: "/image/ui/searchbar/pen.png",
								alt: "pen"
							})]
						}), (0, m.jsx)(z,
						{
							modalShow: l,
							handleModalShow: function()
							{
								s(!1)
							},
							sortCharType: n.sortCharType,
							setSearch: t
						})]
					})
				},
				H = o.ZP.div.withConfig(
				{
					displayName: "SearchBar__Container",
					componentId: "sc-1mvis42-0"
				})(["", " height:auto;padding:1rem 1rem 0rem 1rem;box-sizing:border-box;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}),
				K = o.ZP.div.withConfig(
				{
					displayName: "SearchBar__Sort",
					componentId: "sc-1mvis42-1"
				})(["", " text-align:center;height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}),
				X = o.ZP.span.withConfig(
				{
					displayName: "SearchBar__FontSpan",
					componentId: "sc-1mvis42-2"
				})(["font-size:1.5rem;color:", ";"], function(e)
				{
					return e.theme.color.rgb63_68_74
				}),
				W = o.ZP.div.withConfig(
				{
					displayName: "SearchBar__Flex",
					componentId: "sc-1mvis42-3"
				})(["", " height:auto;position:relative;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				$ = (0, o.ZP)(c.jl).withConfig(
				{
					displayName: "SearchBar__Parallelogram1",
					componentId: "sc-1mvis42-4"
				})(["width:7.5rem;height:2.5rem;&:after{content:'';right:0.5rem;position:absolute;transform:skew(-10deg);border-bottom:0.45rem solid transparent;border-left:0.45rem solid transparent;border-top:0.45rem solid ", ";border-right:0.45rem solid ", ";}&:active:before{width:7.46rem;height:2.46rem;}"], function(e)
				{
					return e.theme.color.rgb73_111_143
				}, function(e)
				{
					return e.theme.color.rgb73_111_143
				});

			function J(e, n)
			{
				var t = Object.keys(e);
				if(Object.getOwnPropertySymbols)
				{
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter(function(n)
					{
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					})), t.push.apply(t, r)
				}
				return t
			}

			function V(e)
			{
				for(var n = 1; n < arguments.length; n++)
				{
					var t = null != arguments[n] ? arguments[n] :
					{};
					n % 2 ? J(Object(t), !0).forEach(function(n)
					{
						(0, w.Z)(e, n, t[n])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n)
					{
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					})
				}
				return e
			}
			var Q = function()
				{
					var e, n = (0, i.C)(function(e)
						{
							return e.global.isMobile
						}),
						t = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						o = (0, r.useState)(
						{
							text: "",
							order: !0,
							sortCharType: "name"
						}),
						c = o[0],
						a = o[1],
						l = (0, r.useState)(null),
						s = l[0],
						d = l[1],
						h = (0, r.useState)(0),
						f = h[0],
						p = h[1],
						g = (0, r.useRef)(null),
						x = (0, r.useMemo)(function()
						{
							return _.Z.filter(function(e)
							{
								return null !== (0, u.oG)(e, c.text)
							}).sort(function(e, n)
							{
								return (0, u.ur)(e, n, c, t)
							})
						}, [t, c]),
						y = (null == g ? void 0 : null === (e = g.current) || void 0 === e ? void 0 : e.clientHeight) || 0;
					return (0, r.useEffect)(function()
					{
						null != g && g.current && setTimeout(function()
						{
							p(6 * parseInt(document.documentElement.style.fontSize.replace("px", "")) || 0)
						}, 500)
					}, [g, n]), (0, m.jsxs)(ee,
					{
						children: [(0, m.jsx)(Y,
						{
							search: c,
							setSearch: function(e)
							{
								a(function(n)
								{
									return V(V(
									{}, n), e)
								})
							},
							characterLength: x.length
						}), (0, m.jsx)(en,
						{
							ref: g,
							style:
							{
								opacity: f > 0 ? 1 : 0
							},
							children: (0, m.jsx)(C.Z,
							{
								listArr: x.map(function(e, n)
								{
									return (0, m.jsx)(Z,
									{
										character: e,
										selected: s,
										setSelected: function(e)
										{
											d(e)
										}
									}, n)
								}),
								clientHeight: y,
								selected: s ? x.indexOf(s) : void 0,
								rowHeight: f
							})
						})]
					})
				},
				ee = o.ZP.div.withConfig(
				{
					displayName: "LeftScreen__Container",
					componentId: "sc-jf2v8s-0"
				})(["", " background-color:", ";border-right:2px solid ", ";min-width:340px;@media screen and (max-width:768px){min-width:100vw;}"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb243_247_248
				}, function(e)
				{
					return e.theme.color.rgb230_233_235
				}),
				en = o.ZP.div.withConfig(
				{
					displayName: "LeftScreen__CharContainer",
					componentId: "sc-jf2v8s-1"
				})(["width:100%;height:100%;overflow-y:scroll !important;"]);
			o.ZP.div.withConfig(
			{
				displayName: "LeftScreen__AruDiv",
				componentId: "sc-jf2v8s-2"
			})(["position:absolute;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;height:100%;background-color:rgb(244,247,248);color:rgb(226,116,108);"]);
			var et = t(7812),
				er = t(5781),
				eo = t(5740),
				ei = t(4288),
				ec = t(6835),
				ea = t(4685),
				el = function(e)
				{
					var n = e.show,
						t = e.handleShow,
						o = e.sendChat,
						a = (0, r.useState)(""),
						l = a[0],
						s = a[1],
						u = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						d = function()
						{
							t(!1), s("")
						};
					return (0, m.jsx)(ea.Xf,
					{
						className: n ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							d()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: F.Z.info[u]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										d()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsxs)(ea.$0,
							{
								children: [(0, m.jsx)(c.OP,
								{
									children: (0, m.jsx)(c.Kx,
									{
										className: "medium",
										placeholder: F.Z.input_comment[u],
										maxRows: 3,
										value: l,
										onChange: function(e)
										{
											s(e.currentTarget.value)
										}
									})
								}), (0, m.jsxs)(ea.$_,
								{
									children: [(0, m.jsx)(ea.Lw,
									{
										className: "bold",
										onClick: function()
										{
											d()
										},
										children: F.Z.cancel[u]
									}), (0, m.jsx)(ea.AZ,
									{
										className: "bold",
										disabled: l.length < 1,
										onClick: function()
										{
											o("info", l), d()
										},
										children: F.Z.confirm[u]
									})]
								})]
							})]
						})
					})
				},
				es = function(e)
				{
					var n = e.show,
						t = e.sReply,
						o = e.handleShow,
						a = e.isFirst,
						l = e.scrollRef,
						s = (0, r.useState)(""),
						h = s[0],
						f = s[1],
						p = (0, i.C)(function(e)
						{
							return e.makeChat
						}),
						g = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						x = (0, i.T)(),
						y = function()
						{
							o(!1), f("")
						},
						b = function()
						{
							var e = [],
								n = {
									type: "reply",
									replyNo: p.replyNo,
									replyGroup: (null == t ? void 0 : t.replyGroup) || p.replyGroup,
									replyDepth: p.sReplyNo,
									sCharacter: d.I,
									content: h,
									isFirst: a
								},
								r = (0, u.ho)(p.chats, n);
							!r || r && p.chats.indexOf(r) === p.chats.length ? e.push.apply(e, (0, et.Z)(p.chats).concat([n])) : p.chats.forEach(function(t, o)
							{
								e.push(t), p.chats[o + 1] === r && e.push(n)
							}), a && x((0, eo.uE)(p.replyGroup + 1)), x((0, eo.U_)(e)), x((0, eo.I0)(p.replyNo + 1)), y(), setTimeout(function()
							{
								var e;
								null == l || null === (e = l.current) || void 0 === e || e.scrollIntoView(!1)
							}, 100)
						};
					return (0, m.jsx)(ea.Xf,
					{
						className: n ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							y()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: a ? F.Z.go_reply[g] : F.Z.add_reply[g]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										y()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsxs)(ea.$0,
							{
								children: [(0, m.jsx)(c.OP,
								{
									children: (0, m.jsx)(c.Kx,
									{
										className: "medium",
										placeholder: F.Z.input_comment[g],
										maxRows: 3,
										value: h,
										onChange: function(e)
										{
											f(e.currentTarget.value)
										}
									})
								}), (0, m.jsxs)(ea.$_,
								{
									children: [(0, m.jsx)(ea.Lw,
									{
										className: "bold",
										onClick: function()
										{
											y()
										},
										children: F.Z.cancel[g]
									}), (0, m.jsx)(ea.AZ,
									{
										className: "bold",
										disabled: h.length < 1,
										onClick: function()
										{
											b()
										},
										children: F.Z.confirm[g]
									})]
								})]
							})]
						})
					})
				},
				eu = function(e)
				{
					var n = e.show,
						t = e.handleShow,
						r = e.handleDeleteAll,
						o = (0, i.C)(function(e)
						{
							return e.global.lang
						});
					return (0, m.jsx)(m.Fragment,
					{
						children: (0, m.jsx)(ea.Xf,
						{
							className: n ? "visible medium" : "medium",
							onDoubleClick: function()
							{
								t(!1)
							},
							children: (0, m.jsxs)(ea.F0,
							{
								onDoubleClick: function(e)
								{
									return e.stopPropagation(), !1
								},
								children: [(0, m.jsxs)(ea.h4,
								{
									children: [(0, m.jsx)(ea.Dx,
									{
										className: "bold",
										children: F.Z.deleteTalk[o]
									}), (0, m.jsx)(ea.ec,
									{
										onClick: function()
										{
											t(!1)
										},
										children: (0, m.jsx)(c.j4,
										{})
									})]
								}), (0, m.jsxs)(ea.$0,
								{
									children: [(0, m.jsx)("span",
									{
										children: F.Z.ask_delete[o]
									}), (0, m.jsxs)("span",
									{
										style:
										{
											fontSize: "0.9rem",
											marginTop: "1rem"
										},
										children: ["※ ", F.Z.deleteTalk_comment[o]]
									}), (0, m.jsxs)(ea.$_,
									{
										children: [(0, m.jsx)(ea.Lw,
										{
											className: "bold",
											onClick: function()
											{
												t(!1)
											},
											children: F.Z.cancel[o]
										}), (0, m.jsx)(ea.AZ,
										{
											className: "bold",
											onClick: function()
											{
												r()
											},
											children: F.Z.confirm[o]
										})]
									})]
								})]
							})
						})
					})
				},
				ed = t(29),
				eh = t(7794),
				em = t.n(eh),
				ef = t(3162),
				ep = t(1120),
				eg = t.n(ep),
				ex = t(4306),
				ey = function()
				{
					var e, n = (0, ex.vC)(
						{
							fixedCacheKey: "account"
						}),
						t = (0, ec.Z)(n, 2),
						o = null === (e = (t[0], t[1]).data) || void 0 === e ? void 0 : e.NICKNAME,
						c = (0, i.C)(function(e)
						{
							return e.global.gameName
						}),
						a = (0, r.useState)("Mollu"),
						l = a[0],
						s = a[1];
					return (0, r.useEffect)(function()
					{
						s(o || c)
					}, [c, o, s]), [l, function(e)
					{
						s(e)
					}]
				},
				eb = function(e)
				{
					var n, t, o, a, l, d = e.show,
						h = e.handleShow,
						f = e.scrollRef,
						p = (0, i.T)(),
						g = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						x = (0, i.C)(function(e)
						{
							return e.global.isLoading
						}),
						y = (0, r.useState)(""),
						b = y[0],
						j = y[1],
						w = (0, r.useState)(""),
						_ = w[0],
						C = w[1],
						v = (0, r.useState)((t = {
							watermark: !0,
							title: !1,
							writer: !1
						}, "undefined" != typeof localStorage && (t.watermark = JSON.parse((null === (n = localStorage) || void 0 === n ? void 0 : n.getItem("watermark")) === null ? "true" : localStorage.getItem("watermark") || "false")), t)),
						k = v[0],
						Z = v[1],
						N = (0, r.useState)((a = 1, "undefined" != typeof localStorage && (a = Number.parseInt((null === (o = localStorage) || void 0 === o ? void 0 : o.getItem("imageQaulity")) || "1")), a)),
						S = N[0],
						P = N[1],
						I = (0, r.useRef)(null),
						B = ey(),
						T = (0, ec.Z)(B, 2),
						O = T[0],
						R = T[1],
						E = function()
						{
							C(""), b && (URL.revokeObjectURL(b), j("")), h(!1)
						},
						D = (l = (0, ed.Z)(em().mark(function e()
						{
							var n, t;
							return em().wrap(function(e)
							{
								for(;;) switch (e.prev = e.next)
								{
									case 0:
										if(p((0, s.jh)(!0)), null !== (n = f.current))
										{
											e.next = 4;
											break
										}
										return e.abrupt("return");
									case 4:
										t = function(e, n)
										{
											e.documentElement.style.fontSize = "16px", n.style.width = "500px";
											var t = F.Z.title[g] + " : " + ("" !== _ ? _ : F.Z.noTitle[g]),
												r = F.Z.writer[g] + " : " + ("" !== O ? O : F.Z.noName[g]),
												o = (0, u.Jx)(k, t, r);
											n.prepend(o)
										}, eg()(n,
										{
											logging: !1,
											allowTaint: !0,
											useCORS: !0,
											width: 500,
											windowWidth: 500,
											scale: 1 === S ? S + .1 : S,
											onclone: t
										}).then(function(e)
										{
											var n, t = e.toDataURL("image/png");
											j(t), null === (n = I.current) || void 0 === n || n.setAttribute("src", t), e.toBlob(function(e)
											{
												e && (0, ef.saveAs)(e, "MolluTalk_" + ("" !== _ ? _ : F.Z.noTitle[g] + ".png"))
											})
										}).catch(function()
										{
											p((0, er.Y2)(
											{
												isAlert: !0,
												title: F.Z.error[g],
												ment: F.Z.error_ment[g]
											}))
										}).finally(function()
										{
											p((0, s.jh)(!1))
										});
									case 6:
									case "end":
										return e.stop()
								}
							}, e)
						})), function()
						{
							return l.apply(this, arguments)
						}),
						L = function(e, n)
						{
							var t = e.target.checked,
								r = {
									watermark: k.watermark,
									title: k.title,
									writer: k.writer
								};
							r[n] = t, "watermark" !== n || (localStorage.setItem("watermark", String(t)), t || (r.title = !1, r.writer = !1)), Z(r)
						};
					return (0, m.jsx)(ea.Xf,
					{
						className: d ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							E()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: F.Z.download_to_image[g]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										E()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsxs)(ea.$0,
							{
								style:
								{
									minHeight: "20rem",
									overflow: "hidden"
								},
								children: [0 === b.length && (0, m.jsxs)(m.Fragment,
								{
									children: [(0, m.jsxs)(ew,
									{
										style:
										{
											flexDirection: "column",
											alignItems: "flex-start",
											lineHeight: "2rem"
										},
										children: [F.Z.title[g], (0, m.jsx)(c.OP,
										{
											style:
											{
												marginBottom: "1rem"
											},
											children: (0, m.jsx)(c.Kx,
											{
												className: "medium",
												placeholder: F.Z.title_comment[g],
												maxRows: 1,
												value: _,
												maxLength: 14,
												onChange: function(e)
												{
													var n = e.currentTarget.value;
													n.match("\n") || (C(n), Z(
													{
														watermark: !0,
														writer: !0,
														title: !0
													}))
												},
												onKeyDown: function(e) {}
											})
										}), F.Z.writer[g], (0, m.jsx)(c.OP,
										{
											children: (0, m.jsx)(c.Kx,
											{
												className: "medium",
												placeholder: F.Z.nickName_comment[g],
												maxRows: 1,
												value: O,
												maxLength: 9,
												onChange: function(e)
												{
													var n = e.currentTarget.value;
													n.match("\n") || (R(n), Z(
													{
														watermark: !0,
														writer: !0,
														title: !0
													}))
												}
											})
										})]
									}), (0, m.jsxs)(ew,
									{
										style:
										{
											fontSize: "1rem"
										},
										children: [(0, m.jsx)("span",
										{
											children: F.Z.image_qaulity[g]
										}), (0, m.jsx)("div",
										{
											style:
											{
												display: "flex",
												fontSize: "0.9rem",
												marginLeft: "1rem"
											},
											children: [1, 2, 3].map(function(e)
											{
												return (0, m.jsxs)(c.Jg,
												{
													style:
													{
														marginRight: "1rem"
													},
													htmlFor: "iq_".concat(e),
													children: [(0, m.jsx)("input",
													{
														type: "checkbox",
														id: "iq_".concat(e),
														checked: S === e,
														onChange: function()
														{
															P(e)
														},
														value: e
													}), e, "x"]
												}, e)
											})
										})]
									}), (0, m.jsx)(ew,
									{
										children: ej.map(function(e, n)
										{
											return (0, m.jsxs)(c.Jg,
											{
												style:
												{
													fontSize: "1rem",
													margin: "0 1rem"
												},
												htmlFor: e,
												children: [(0, m.jsx)("input",
												{
													type: "checkbox",
													id: e,
													checked: k[e],
													onChange: function(n)
													{
														return L(n, e)
													},
													value: n
												}), F.Z[e][g]]
											}, n)
										})
									}), (0, m.jsx)("span",
									{
										style:
										{
											textAlign: "center",
											fontSize: "0.9rem",
											marginBottom: "0.5rem"
										},
										children: F.Z.down_comment1[g]
									}), (0, m.jsx)("span",
									{
										style:
										{
											textAlign: "center",
											fontSize: "0.9rem"
										},
										children: F.Z.thanks[g]
									}), (0, m.jsxs)(ea.$_,
									{
										children: [(0, m.jsx)(ea.Lw,
										{
											className: "bold",
											onClick: function()
											{
												E()
											},
											children: F.Z.cancel[g]
										}), (0, m.jsx)(ea.AZ,
										{
											className: "bold",
											disabled: x,
											onClick: function()
											{
												D()
											},
											children: F.Z.confirm[g]
										})]
									})]
								}), (0, m.jsx)(e_,
								{
									children: (0, m.jsxs)(eC,
									{
										style:
										{
											display: b ? "block" : "none"
										},
										children: [(0, m.jsx)("div",
										{
											style:
											{
												fontSize: "1rem",
												marginBottom: "1rem"
											},
											children: F.Z.image_download[g]
										}), (0, m.jsx)(ev,
										{
											ref: I,
											alt: "download"
										})]
									})
								})]
							})]
						})
					})
				},
				ej = ["watermark", "title", "writer"],
				ew = o.ZP.div.withConfig(
				{
					displayName: "PopupImageDownload__Wrapper",
					componentId: "sc-uicakl-0"
				})(["", ";margin-bottom:1rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				e_ = o.ZP.div.withConfig(
				{
					displayName: "PopupImageDownload__ImgContainer",
					componentId: "sc-uicakl-1"
				})(["position:relative;width:100%;height:100%;"]),
				eC = o.ZP.div.withConfig(
				{
					displayName: "PopupImageDownload__ImgWrapper",
					componentId: "sc-uicakl-2"
				})(["height:100%;width:100%;text-align:center;position:absolute;"]),
				ev = o.ZP.img.withConfig(
				{
					displayName: "PopupImageDownload__DownloadImg",
					componentId: "sc-uicakl-3"
				})(["width:100%;"]),
				ek = t(5733),
				eZ = t.n(ek),
				eN = t(83),
				eS = function(e)
				{
					var n, t = e.show,
						o = e.handleShow,
						a = (0, i.T)(),
						s = (0, i.C)(function(e)
						{
							return e.makeChat
						}),
						d = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						h = (0, r.useState)(""),
						f = h[0],
						p = h[1],
						g = (0, r.useState)(""),
						x = g[0],
						y = g[1],
						b = (0, r.useState)([
							{
								title: "",
								nickname: "",
								date: "",
								replyNo: 0,
								replyGroup: 0,
								chars: []
							},
							[]
						]),
						j = b[0],
						w = b[1],
						_ = (0, r.useRef)(null),
						C = ey(),
						v = (0, ec.Z)(C, 2),
						k = v[0],
						Z = v[1],
						N = function()
						{
							o(!1), p(""), y("")
						},
						S = (n = (0, ed.Z)(em().mark(function e()
						{
							var n, t, r, o;
							return em().wrap(function(e)
							{
								for(;;) switch (e.prev = e.next)
								{
									case 0:
										return n = [], s.chats.forEach(function(e, t)
										{
											s.chats.findIndex(function(n, t)
											{
												return e.sCharacter.no === n.sCharacter.no
											}) === t && 0 !== e.sCharacter.no && n.push(e.sCharacter.no)
										}), r = [JSON.stringify([t = {
											title: "" !== f ? f : F.Z.noTitle[d],
											nickname: "" !== k ? k : F.Z.noName[d],
											date: (0, u._3)(!0, !0),
											replyNo: s.replyNo,
											replyGroup: s.replyGroup,
											chars: n
										}, (0, et.Z)(s.chats)])], e.next = 6, (0, u.rU)(r);
									case 6:
										o = e.sent, (0, ef.saveAs)(o, "MolluTalk_".concat(t.title, ".png")), N();
									case 9:
									case "end":
										return e.stop()
								}
							}, e)
						})), function()
						{
							return n.apply(this, arguments)
						}),
						P = function(e)
						{
							if(null !== e.currentTarget.files)
							{
								var n = new FileReader,
									t = e.currentTarget.files[0];
								n.onloadend = function()
								{
									if("string" != typeof n.result) return a((0, er.Y2)(
									{
										isAlert: !0,
										ment: F.Z.error[d],
										title: F.Z.no_support[d]
									}));
									w(JSON.parse(n.result)), y("upload")
								}, eZ().loadAsync(t).then(function(e)
								{
									e.forEach(function(e, t)
									{
										t.dir || t.async("blob").then(function(e)
										{
											n.readAsText(e)
										})
									})
								}, function(e)
								{
									t ? n.readAsText(t) : a((0, er.Y2)(
									{
										isAlert: !0,
										ment: F.Z.error[d],
										title: F.Z.no_support[d]
									}))
								})
							}
						},
						I = function()
						{
							a((0, eo.U_)(j[1])), a((0, eo.gW)(
							{
								sReplyNo: 0,
								replyNo: j[0].replyNo,
								replyGroup: j[0].replyGroup
							})), w([
								{
									title: "",
									nickname: "",
									date: "",
									replyNo: 0,
									replyGroup: 0,
									chars: []
								},
								[]
							]), N()
						};
					return (0, m.jsx)(ea.Xf,
					{
						className: t ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							N()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: F.Z.sharedFile[d]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										N()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsx)(ea.$0,
							{
								children: "" === x ? (0, m.jsxs)(m.Fragment,
								{
									children: [(0, m.jsx)("input",
									{
										type: "file",
										ref: _,
										style:
										{
											display: "none"
										},
										accept: "image/png, application/json",
										onChange: function(e)
										{
											P(e)
										}
									}), (0, m.jsxs)(eP,
									{
										onClick: function()
										{
											var e;
											null === (e = _.current) || void 0 === e || e.click()
										},
										children: [(0, m.jsx)(eI,
										{
											children: (0, m.jsx)(c.xL,
											{
												icon: l.cf$
											})
										}), (0, m.jsx)("span",
										{
											className: "bold",
											children: F.Z.upload[d]
										}), (0, m.jsx)("span",
										{
											style:
											{
												margin: "1rem",
												fontSize: "1rem"
											},
											children: F.Z.edit_comment[d]
										})]
									}), (0, m.jsx)(eN.HR,
									{
										style:
										{
											margin: "1rem 0"
										}
									}), (0, m.jsxs)(eP,
									{
										onClick: function()
										{
											s.chats.length > 0 && y("download")
										},
										children: [(0, m.jsx)(eI,
										{
											disabled: s.chats.length < 1,
											children: (0, m.jsx)(c.xL,
											{
												icon: l.q7m
											})
										}), (0, m.jsx)("span",
										{
											className: "bold",
											children: F.Z.download[d]
										}), (0, m.jsx)("span",
										{
											style:
											{
												margin: "1rem",
												fontSize: "1rem"
											},
											children: F.Z.down_comment2[d]
										}), (0, m.jsx)("span",
										{
											style:
											{
												fontSize: "1rem"
											},
											children: F.Z.down_comment3[d]
										})]
									})]
								}) : "download" === x ? (0, m.jsxs)(m.Fragment,
								{
									children: [(0, m.jsxs)(eB,
									{
										children: [F.Z.title[d], (0, m.jsx)(c.OP,
										{
											style:
											{
												marginBottom: "1rem"
											},
											children: (0, m.jsx)(c.Kx,
											{
												className: "medium",
												placeholder: F.Z.title_comment[d],
												maxRows: 1,
												value: f,
												maxLength: 20,
												onChange: function(e)
												{
													e.currentTarget.value.match("\n") || p(e.currentTarget.value)
												}
											})
										}), F.Z.writer[d], (0, m.jsx)(c.OP,
										{
											children: (0, m.jsx)(c.Kx,
											{
												className: "medium",
												placeholder: F.Z.nickName_comment[d],
												maxRows: 1,
												value: k,
												maxLength: 10,
												onChange: function(e)
												{
													e.currentTarget.value.match("\n") || Z(e.currentTarget.value)
												}
											})
										})]
									}), (0, m.jsx)("span",
									{
										style:
										{
											textAlign: "center",
											fontSize: "1rem",
											marginTop: "1rem"
										},
										children: F.Z.thanks[d]
									}), (0, m.jsxs)(ea.$_,
									{
										children: [(0, m.jsx)(ea.Lw,
										{
											className: "bold",
											onClick: function()
											{
												N()
											},
											children: F.Z.cancel[d]
										}), (0, m.jsx)(ea.AZ,
										{
											className: "bold",
											onClick: function()
											{
												S()
											},
											children: F.Z.confirm[d]
										})]
									})]
								}) : (0, m.jsxs)(m.Fragment,
								{
									children: [(0, m.jsx)("span",
									{
										children: F.Z.up_comment1[d]
									}), (0, m.jsxs)("div",
									{
										style:
										{
											margin: "1.5rem 0"
										},
										children: [(0, m.jsxs)(eT,
										{
											children: [F.Z.title[d], " : ", j[0].title]
										}), (0, m.jsxs)(eT,
										{
											children: [F.Z.writer[d], " : ", j[0].nickname]
										}), (0, m.jsxs)(eT,
										{
											children: [F.Z.date[d], " : ", j[0].date]
										})]
									}), (0, m.jsxs)("span",
									{
										style:
										{
											fontSize: "1rem"
										},
										children: ["※", F.Z.up_comment2[d]]
									}), (0, m.jsxs)(ea.$_,
									{
										children: [(0, m.jsx)(ea.Lw,
										{
											className: "bold",
											onClick: function()
											{
												N()
											},
											children: F.Z.cancel[d]
										}), (0, m.jsx)(ea.AZ,
										{
											className: "bold",
											onClick: function()
											{
												I()
											},
											children: F.Z.confirm[d]
										})]
									})]
								})
							})]
						})
					})
				},
				eP = o.ZP.div.withConfig(
				{
					displayName: "PopupFileShare__IconBox",
					componentId: "sc-ynp9rx-0"
				})(["", ";flex-direction:column;width:100%;text-align:center;cursor:pointer;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}),
				eI = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "PopupFileShare__ShareButton",
					componentId: "sc-ynp9rx-1"
				})(["margin-bottom:1rem;width:3rem;color:", ";"], function(e)
				{
					return e.theme.color.rgb45_70_100
				}),
				eB = o.ZP.div.withConfig(
				{
					displayName: "PopupFileShare__StyledForm",
					componentId: "sc-ynp9rx-2"
				})(["", ";line-height:2rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column",
						align: "flex-start"
					})
				}),
				eT = o.ZP.span.withConfig(
				{
					displayName: "PopupFileShare__InfoSpan",
					componentId: "sc-ynp9rx-3"
				})(["display:block;text-align:left;font-size:1.1rem;margin-bottom:1rem;"]),
				eO = t(1163),
				eR = t(5654);

			function eE(e, n)
			{
				var t = Object.keys(e);
				if(Object.getOwnPropertySymbols)
				{
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter(function(n)
					{
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					})), t.push.apply(t, r)
				}
				return t
			}

			function eD(e)
			{
				for(var n = 1; n < arguments.length; n++)
				{
					var t = null != arguments[n] ? arguments[n] :
					{};
					n % 2 ? eE(Object(t), !0).forEach(function(n)
					{
						(0, w.Z)(e, n, t[n])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eE(Object(t)).forEach(function(n)
					{
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					})
				}
				return e
			}
			var eF = function(e)
				{
					var n, t, o = e.show,
						a = e.handleShow,
						l = (0, i.T)(),
						d = (0, eO.useRouter)(),
						h = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						f = (0, i.C)(function(e)
						{
							return e.global.isLoading
						}),
						p = (0, i.C)(function(e)
						{
							return e.makeChat
						}),
						g = (0, ex.vC)(
						{
							fixedCacheKey: "account"
						}),
						x = (0, ec.Z)(g, 2),
						y = (x[0], x[1]),
						b = (0, ex.yg)(),
						j = (0, ec.Z)(b, 1)[0],
						w = [
						{
							no: -1,
							title: F.Z.none_series[h],
							idx: 0
						},
						{
							no: 0,
							title: F.Z.add_series[h],
							idx: 0
						}],
						_ = (0, r.useState)(""),
						C = _[0],
						v = _[1],
						k = (0, r.useState)(0),
						Z = k[0],
						N = k[1],
						S = (0, r.useState)(1),
						P = S[0],
						I = S[1],
						B = (0, r.useState)(w[0]),
						T = B[0],
						O = B[1],
						R = (0, r.useState)(""),
						E = R[0],
						D = R[1],
						L = (0, r.useState)(0),
						z = L[0],
						M = L[1],
						A = (0, ex.O_)(
						{
							MEMBER_NO: z,
							M_TYPE: P
						},
						{
							skip: 0 === z
						}),
						q = (0, r.useMemo)(function()
						{
							var e = [
							{
								no: -1,
								title: F.Z.none_series[h],
								idx: 0
							},
							{
								no: 0,
								title: F.Z.add_series[h],
								idx: 0
							}];
							return A.data && (e = e.concat((0, et.Z)(A.data).map(function(e)
							{
								return {
									no: e.SERIES_NO,
									title: e.TITLE,
									idx: e.SERIES_IDX || 0
								}
							}))), e
						}, [A, h]);
					(0, r.useEffect)(function()
					{
						y.data && M(y.data.MEMBER_NO)
					}, [y.data]);
					var U = function()
						{
							a(!1), v(""), I(1), N(0), O(w[0]), D("")
						},
						G = (n = (0, ed.Z)(em().mark(function e()
						{
							var n, t, r, o, i, c, a, m, g, x, b, w, _;
							return em().wrap(function(e)
							{
								for(;;) switch (e.prev = e.next)
								{
									case 0:
										if(!f)
										{
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										if(l((0, s.jh)(!0)), n = [], t = [], r = [], o = [], i = new Date().getTime().toString(36), c = [], a = 0, m = 1, p.chats.forEach(function(e, o)
										{
											var a, l = eD(
											{}, e);
											p.chats.findIndex(function(n, t)
											{
												return e.sCharacter.no === n.sCharacter.no
											}) === o && 0 !== e.sCharacter.no && (e.sCharacter.no && n.push(e.sCharacter.no), t.push(
											{
												no: e.sCharacter.no,
												idx: e.sCharacter.index
											})), e.file && e.file.length > 0 && (l.content = "getFile/".concat(null === (a = y.data) || void 0 === a ? void 0 : a.MEMBER_NO, "/").concat(i, "/mollu_").concat(m, ".png"), c.push(
											{
												file: e.file || "",
												name: "mollu_".concat(m, ".png")
											}), m++), r.push(eD(eD(
											{}, l),
											{},
											{
												file: ""
											}))
										}), c.forEach(function(e)
										{
											var n = atob(e.file.split(",")[1]);
											e.file = "";
											for(var t = Array(n.length), r = 0; r < t.length; r++) t[r] = n.charCodeAt(r);
											var i = new Blob([new Uint8Array(t)],
											{
												type: "image/png"
											});
											o.push(i), a += i.size / 1024 / 1024
										}), N(Number.parseFloat(a.toFixed(2))), !(a > 3))
										{
											e.next = 19;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											ment: F.Z.error[h],
											title: F.Z.error_image_size[h]
										})), l((0, s.jh)(!1)), e.next = 75;
										break;
									case 19:
										if(!(0 === C.trim().length || C.length > 30))
										{
											e.next = 24;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											ment: F.Z.error[h],
											title: F.Z.error_title_size[h]
										})), l((0, s.jh)(!1)), e.next = 75;
										break;
									case 24:
										if(!(0 === T.no && (0 === E.trim().length || E.length > 20)))
										{
											e.next = 29;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											title: F.Z.error[h],
											ment: F.Z.error_series_size[h]
										})), l((0, s.jh)(!1)), e.next = 75;
										break;
									case 29:
										if(!(n.length < 1))
										{
											e.next = 34;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											title: F.Z.error[h],
											ment: F.Z.error_noCharacter[h]
										})), l((0, s.jh)(!1)), e.next = 75;
										break;
									case 34:
										if(void 0 !== y.data)
										{
											e.next = 39;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											title: F.Z.error[h],
											ment: F.Z.error_ment[h]
										})), l((0, s.jh)(!1)), e.next = 75;
										break;
									case 39:
										return b = {
											title: C,
											nickname: null === (g = y.data) || void 0 === g ? void 0 : g.NICKNAME,
											date: (0, u._3)(!0, !0),
											replyNo: p.replyNo,
											replyGroup: p.replyGroup,
											chars: n
										}, c.unshift(
										{
											file: "",
											name: "mollu_0.json"
										}), o.unshift(new Blob([JSON.stringify([b, r])],
										{
											type: "application/json"
										})), w = new FormData, o.forEach(function(e, n)
										{
											w.append("file_blobs", e), w.append("names", c[n].name)
										}), w.append("chars", "|" + n.join("|") + "|"), w.append("info", C), w.append("info", String(y.data.MEMBER_NO)), w.append("info", String(P)), w.append("info", h), w.append("info", localStorage.getItem("local_no") || ""), w.append("info", null === (x = y.data) || void 0 === x ? void 0 : x.UID), w.append("info", i), w.append("series", String(T.no)), w.append("series", String((T.idx || 0) + 1)), w.append("series", E), w.append("profile", String(t[0].no)), w.append("profile", String(t[0].idx)), e.next = 59, j(w);
									case 59:
										if(console.log(_ = e.sent), l((0, s.jh)(!1)), U(), !("data" in _ && _.data > 0))
										{
											e.next = 74;
											break
										}
										l((0, er.Y2)(
										{
											isAlert: !0,
											title: F.Z.success[h],
											ment: F.Z.upload_comment[h]
										})), e.t0 = P, e.next = 1 === e.t0 ? 68 : 2 === e.t0 ? 70 : 72;
										break;
									case 68:
										return d.push("/creative/".concat(h, "/1")), e.abrupt("break", 72);
									case 70:
										return d.push("/private/".concat(h, "/1")), e.abrupt("break", 72);
									case 72:
										e.next = 75;
										break;
									case 74:
										l((0, er.Y2)(
										{
											isAlert: !0,
											title: F.Z.error[h],
											ment: F.Z.error_upload[h]
										}));
									case 75:
									case "end":
										return e.stop()
								}
							}, e)
						})), function()
						{
							return n.apply(this, arguments)
						});
					return (0, m.jsx)(ea.Xf,
					{
						className: o ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							U()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: F.Z.upload_to_server[h]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										U()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsxs)(ea.$0,
							{
								children: [(0, m.jsxs)(ez,
								{
									children: [(0, m.jsxs)("div",
									{
										style:
										{
											width: "100%",
											textAlign: "left",
											display: 2 === P ? "none" : "block"
										},
										children: [F.Z.series[h], (0, m.jsx)("div",
										{
											style:
											{
												marginBottom: "1rem",
												width: "100%"
											},
											children: (0, m.jsx)(eR.Z,
											{
												items: q,
												selected: T,
												setSelected: function(e)
												{
													O(e)
												}
											})
										})]
									}), 0 === T.no && (0, m.jsx)(c.OP,
									{
										style:
										{
											marginBottom: "1rem"
										},
										children: (0, m.jsx)(c.Kx,
										{
											className: "medium",
											placeholder: F.Z.series_title_comment[h],
											maxRows: 1,
											value: E,
											maxLength: 20,
											onChange: function(e)
											{
												e.currentTarget.value.match("\n") || D(e.currentTarget.value)
											}
										})
									}), F.Z.title[h], (0, m.jsx)(c.OP,
									{
										style:
										{
											marginBottom: "1rem"
										},
										children: (0, m.jsx)(c.Kx,
										{
											className: "medium",
											placeholder: F.Z.title_comment[h],
											maxRows: 1,
											value: C,
											maxLength: 30,
											onChange: function(e)
											{
												e.currentTarget.value.match("\n") || v(e.currentTarget.value)
											}
										})
									}), F.Z.writer[h], (0, m.jsx)(c.OP,
									{
										children: (0, m.jsx)(c.Kx,
										{
											className: "medium",
											maxRows: 1,
											value: null === (t = y.data) || void 0 === t ? void 0 : t.NICKNAME,
											readOnly: !0
										})
									})]
								}), (0, m.jsx)(eM,
								{
									children: ["creative", "private"].map(function(e, n)
									{
										var t;
										return (0, m.jsxs)(c.Jg,
										{
											style:
											{
												margin: "0 1rem"
											},
											htmlFor: "iq_".concat(n + 1),
											children: [(0, m.jsx)("input",
											{
												type: "checkbox",
												disabled: (null === (t = y.data) || void 0 === t ? void 0 : t.AUTH) === 0 && "official" === e,
												id: "iq_".concat(n + 1),
												checked: P === n + 1,
												onChange: function()
												{
													I(n + 1), O(w[0])
												},
												value: n + 1
											}), F.Z[e][h]]
										}, n + 1)
									})
								}), (0, m.jsxs)(eL,
								{
									children: [(0, m.jsxs)("span",
									{
										style: Z > 3 ?
										{
											color: "red"
										} :
										{},
										children: ["※ ", F.Z.image_max_comment[h], " (", Z, "/3mb)"]
									}), (0, m.jsxs)("span",
									{
										children: ["※ ", F.Z.rule_comment[h]]
									}), (0, m.jsx)("span",
									{
										children: F.Z.thanks[h]
									})]
								}), (0, m.jsxs)(ea.$_,
								{
									children: [(0, m.jsx)(ea.Lw,
									{
										className: "bold",
										onClick: function()
										{
											U()
										},
										children: F.Z.cancel[h]
									}), (0, m.jsx)(ea.AZ,
									{
										className: "bold",
										disabled: C.trim().length < 1 || Z > 5 || f,
										onClick: function()
										{
											G()
										},
										children: F.Z.confirm[h]
									})]
								})]
							})]
						})
					})
				},
				eL = o.ZP.div.withConfig(
				{
					displayName: "PopupServerUpload__SpanBox",
					componentId: "sc-155pfqz-0"
				})(["", ";font-size:0.9rem;line-height:1.5rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}),
				ez = o.ZP.div.withConfig(
				{
					displayName: "PopupServerUpload__Wrapper",
					componentId: "sc-155pfqz-1"
				})(["", ";line-height:2rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column",
						align: "flex-start"
					})
				}),
				eM = o.ZP.div.withConfig(
				{
					displayName: "PopupServerUpload__CBWrapper",
					componentId: "sc-155pfqz-2"
				})(["", ";width:auto;font-size:0.9rem;margin:1rem 0;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				eA = function(e)
				{
					var n = e.scrollRef,
						t = e.show,
						o = e.sendChat,
						a = (0, i.T)(),
						u = (0, i.C)(function(e)
						{
							return e.sCharacter.selected
						}),
						d = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						h = (0, i.C)(function(e)
						{
							return e.global.isScreenshot
						}),
						f = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						p = (0, ex.vC)(
						{
							fixedCacheKey: "account"
						}),
						g = (0, ec.Z)(p, 2),
						x = (g[0], g[1]),
						y = (0, r.useState)(!1),
						b = y[0],
						j = y[1],
						w = (0, r.useState)(!1),
						_ = w[0],
						C = w[1],
						v = (0, r.useState)(!1),
						k = v[0],
						Z = v[1],
						N = (0, r.useState)(!1),
						S = N[0],
						P = N[1],
						I = (0, r.useState)(!1),
						B = I[0],
						T = I[1],
						O = (0, r.useState)(!1),
						R = O[0],
						E = O[1],
						D = function()
						{
							if(x.data)
							{
								if(0 !== x.data.STATUS)
								{
									a((0, er.Y2)(
									{
										isAlert: !0,
										title: F.Z.error[f],
										ment: F.Z.cant_upload_comment[f]
									}));
									return
								}
								C(!0)
							}
							else a((0, s.Aj)(!0))
						};
					return (0, m.jsxs)(eq,
					{
						style: t ?
						{
							maxHeight: "12rem"
						} :
						{
							maxHeight: "0"
						},
						children: [(0, m.jsxs)(eU,
						{
							children: [(0, m.jsx)(eG,
							{
								title: "Reply",
								onClick: function()
								{
									P(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.Lh7
								})
							}), (0, m.jsx)(eG,
							{
								title: "Info",
								onClick: function()
								{
									E(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.DBf
								})
							}), (0, m.jsx)(eG,
							{
								disabled: 0 === u.no,
								title: "Relationship Event",
								onClick: function()
								{
									o("heart", "")
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.m6i
								})
							}), (0, m.jsx)(eG,
							{
								disabled: d.length < 1,
								title: "Delete ALL",
								onClick: function()
								{
									T(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.Vui
								})
							})]
						}), (0, m.jsxs)(eU,
						{
							children: [(0, m.jsx)(eG,
							{
								title: "ScreenShot Mode",
								className: h ? "dot" : "",
								onClick: function()
								{
									a((0, s.Wn)(!h))
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.QY_
								})
							}), (0, m.jsx)(eG,
							{
								disabled: d.length < 1,
								title: "Image Download",
								onClick: function()
								{
									j(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.wf8
								})
							}), (0, m.jsx)(eG,
							{
								title: "Share File",
								onClick: function()
								{
									Z(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.EdJ
								})
							}), (0, m.jsx)(eG,
							{
								disabled: d.length < 1,
								title: "File Upload",
								style:
								{
									width: "3rem"
								},
								onClick: function()
								{
									D()
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.wEO,
									className: "fa-solid fa-file-arrow-up"
								})
							})]
						}), (0, m.jsx)(eF,
						{
							show: _,
							handleShow: function(e)
							{
								C(e)
							}
						}), (0, m.jsx)(el,
						{
							show: R,
							handleShow: function(e)
							{
								E(e)
							},
							sendChat: o
						}), (0, m.jsx)(es,
						{
							show: S,
							handleShow: function(e)
							{
								P(e)
							},
							isFirst: !0,
							sReply: null,
							scrollRef: n
						}), (0, m.jsx)(eu,
						{
							show: B,
							handleShow: function(e)
							{
								T(e)
							},
							handleDeleteAll: function()
							{
								T(!1), a((0, eo.U_)([])), a((0, eo.gW)(
								{
									replyGroup: 1,
									replyNo: 1,
									sReplyNo: 0
								}))
							}
						}), (0, m.jsx)(eb,
						{
							show: b,
							handleShow: function(e)
							{
								j(e)
							},
							scrollRef: n
						}), (0, m.jsx)(eS,
						{
							show: k,
							handleShow: function(e)
							{
								Z(e)
							}
						})]
					})
				},
				eq = o.ZP.div.withConfig(
				{
					displayName: "ToolBox__Container",
					componentId: "sc-1ssk4pv-0"
				})(["", ";height:auto;border-top:2px solid ", ";transition:max-height 0.3s ease-in-out;overflow:hidden;box-sizing:border-box;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb230_233_235
				}),
				eU = o.ZP.div.withConfig(
				{
					displayName: "ToolBox__Wrapper",
					componentId: "sc-1ssk4pv-1"
				})(["", ";height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-around"
					})
				}),
				eG = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "ToolBox__ToolButton",
					componentId: "sc-1ssk4pv-2"
				})(["width:2.5rem;height:2.5rem;margin:1.5rem 0;color:", ";&.dot:after{content:'';display:block;background-color:red;width:0.5rem;height:0.5rem;transform:translate(500%,-550%);border-radius:50%;}"], function(e)
				{
					return e.theme.color.rgb45_70_100
				}),
				eY = function(e)
				{
					var n = e.show,
						t = e.handleShow,
						r = (0, i.T)(),
						o = (0, i.C)(function(e)
						{
							return e.sCharacter.selected
						}),
						a = (0, i.C)(function(e)
						{
							return e.makeChat
						}),
						l = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						s = function()
						{
							t(!1)
						},
						u = function(e)
						{
							var n = [],
								t = (0, et.Z)(a.chats).filter(function(e)
								{
									return e.replyDepth === a.sReplyNo
								}).pop(),
								i = {
									type: "image",
									replyNo: 0,
									replyGroup: 0,
									replyDepth: a.sReplyNo,
									sCharacter: o,
									content: e,
									isFirst: a.chats.length < 1 || a.chats[a.chats.length - 1].sCharacter !== o || a.chats[a.chats.length - 1].replyDepth !== a.sReplyNo
								};
							if(a.chats.length < 1) n.push(i);
							else if(t) a.chats.forEach(function(e)
							{
								n.push(e), e === t && (i.isFirst = "heart" === t.type || t.sCharacter !== o || t.replyDepth !== a.sReplyNo, n.push(i))
							});
							else
							{
								var c = (0, et.Z)(a.chats).filter(function(e)
								{
									return e.replyNo === a.sReplyNo
								}).pop();
								a.chats.forEach(function(e)
								{
									n.push(e), e === c && n.push(i)
								})
							}
							r((0, eo.U_)(n)), s()
						};
					return (0, m.jsx)(m.Fragment,
					{
						children: (0, m.jsx)(ea.Xf,
						{
							className: n ? "visible medium" : "medium",
							onDoubleClick: function()
							{
								s()
							},
							children: (0, m.jsxs)(ea.F0,
							{
								onDoubleClick: function(e)
								{
									return e.stopPropagation(), !1
								},
								children: [(0, m.jsxs)(ea.h4,
								{
									children: [(0, m.jsx)(ea.Dx,
									{
										className: "bold",
										children: F.Z.emoticon[l]
									}), (0, m.jsx)(ea.ec,
									{
										onClick: function()
										{
											s()
										},
										children: (0, m.jsx)(c.j4,
										{})
									})]
								}), (0, m.jsx)(eH,
								{
									children: (0, m.jsxs)(eK,
									{
										children: [Array(80).fill(0).map(function(e, n)
										{
											return (0, m.jsx)(eX,
											{
												alt: "emoji",
												height: 310,
												width: 310,
												onClick: function()
												{
													u("image/emoticon/".concat('zh_cn', "/ClanChat_Emoji_").concat(1, ".jpg"))
													//#u("image/emoticon/".concat(l, "/ClanChat_Emoji_").concat(n + 1, ".png"))
												},
												src: "".concat("image/emoticon/").concat('zh_cn', "/ClanChat_Emoji_").concat(1, ".jpg")
												//#src: "".concat("https://server.raun0129.com/asset/", "image/emoticon/").concat(l, "/ClanChat_Emoji_").concat(n + 1, ".png")
											}, n)
										}), [, , , , ].fill(0).map(function(e, n)
										{
											return (0, m.jsx)(eX,
											{
												alt: "emoji",
												height: 310,
												width: 310,
												onClick: function()
												{
													u("image/emoticon/dummy/ClanChat_Emoji_".concat(1, ".jpg"))
												},
												src: "".concat("image/emoticon/dummy/ClanChat_Emoji_").concat(1, ".jpg")
												//#src: "".concat("https://server.raun0129.com/asset/", "image/emoticon/dummy/ClanChat_Emoji_").concat(n + 1, ".png")
											}, n)
										})]
									})
								})]
							})
						})
					})
				},
				eH = (0, o.ZP)(ea.$0).withConfig(
				{
					displayName: "PopupEmoticonChat__Section2",
					componentId: "sc-vzjcea-0"
				})(["", ";overflow:hidden;overflow-y:auto;max-height:30rem;padding:0.5rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between",
						align: "flex-start"
					})
				}),
				eK = o.ZP.div.withConfig(
				{
					displayName: "PopupEmoticonChat__Body",
					componentId: "sc-vzjcea-1"
				})(["", ";flex-wrap:wrap;background-color:", ";border-radius:0.5rem;justify-content:space-between;padding:0.5rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}, function(e)
				{
					return e.theme.color.rgb216_218_220
				}),
				eX = (0, o.ZP)(c.Yo).withConfig(
				{
					displayName: "PopupEmoticonChat__ImgBox",
					componentId: "sc-vzjcea-2"
				})(["width:32%;border:2px solid ", ";background-color:", ";border-radius:10px;margin-bottom:0.5rem;cursor:pointer;&:active{transform:scale(0.95);}"], function(e)
				{
					return e.theme.color.rgb230_233_235
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}),
				eW = function(e)
				{
					var n = e.scrollRef,
						t = (0, i.T)(),
						o = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						a = (0, i.C)(function(e)
						{
							return e.makeChat.sReplyNo
						}),
						s = (0, i.C)(function(e)
						{
							return e.sCharacter.selected
						}),
						h = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						f = (0, r.useState)(!1),
						p = f[0],
						g = f[1],
						x = (0, r.useState)(!1),
						y = x[0],
						b = x[1],
						j = (0, r.useState)(" "),
						w = j[0],
						_ = j[1],
						C = (0, r.useState)(!1),
						v = C[0],
						k = C[1],
						Z = (0, r.useRef)(null),
						N = (0, r.useRef)(null);
					(0, r.useEffect)(function()
					{
						setTimeout(function()
						{
							_("")
						}, 500)
					}, []);
					var S = function(e)
					{
						b(e)
					};
					(0, r.useEffect)(function()
					{
						var e;
						"" === w && Z.current && v && (null === (e = Z.current) || void 0 === e || e.focus())
					}, [w, Z, v]);
					var P = function(e, n)
						{
							13 === (e.which || e.keyCode) && (e.ctrlKey || e.shiftKey) && (e.preventDefault(), "" !== e.currentTarget.value && n())
						},
						I = (0, r.useCallback)(function(e, r)
						{
							var i = {
								type: e,
								content: "",
								replyDepth: a,
								replyNo: 0,
								replyGroup: 0,
								sCharacter: s,
								isFirst: !0
							};
							"image" === e ? i.file = r : "chat" === e ? i.content = r : "info" === e && (i.content = r, i.sCharacter = d.I);
							var c = [],
								l = (0, et.Z)(o).filter(function(e)
								{
									return e.replyDepth === a
								}).pop();
							l && (i.isFirst = !("chat" === l.type && (0, u.Y)(l.sCharacter, s)) || l.replyDepth !== a);
							var h = (0, u.ho)(o, i);
							!h || h && o.indexOf(h) === o.length ? c.push.apply(c, (0, et.Z)(o).concat([i])) : o.forEach(function(e, n)
							{
								c.push(e), o[n + 1] === h && c.push(i)
							}), t((0, eo.U_)(c)), setTimeout(function()
							{
								var e;
								null === (e = n.current) || void 0 === e || e.scrollIntoView(!1)
							}, 100)
						}, [a, s, o, n, t]),
						B = function()
						{
							t((0, er.Y2)(
							{
								isAlert: !0,
								title: F.Z.error[h],
								ment: F.Z.no_support[h]
							}))
						};
					return (0, m.jsxs)(e$,
					{
						children: [(0, m.jsxs)(eJ,
						{
							children: [(0, m.jsx)(eV,
							{
								title: "open",
								onClick: function()
								{
									p ? g(!1) : g(!0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: p ? l.dWM : l.XSi
								})
							}), (0, m.jsx)("input",
							{
								type: "file",
								ref: N,
								style:
								{
									display: "none"
								},
								accept: "image/*",
								onChange: function(e)
								{
									(0, u.T6)(e, function(e)
									{
										I("image", e)
									}, B)
								}
							}), (0, m.jsx)(eV,
							{
								style:
								{
									paddingLeft: "0",
									width: "3rem"
								},
								title: "Image",
								onClick: function()
								{
									var e;
									null === (e = N.current) || void 0 === e || e.click()
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: ei.VmB
								})
							}), (0, m.jsx)("div",
							{
								style:
								{
									width: "100%",
									padding: "0.5rem 0"
								},
								children: (0, m.jsxs)(c.OP,
								{
									children: [(0, m.jsx)(c.Kx,
									{
										className: "medium",
										placeholder: F.Z.input_comment[h],
										maxRows: 5,
										value: w,
										ref: Z,
										onFocus: function()
										{
											g(!1), k(!0)
										},
										onKeyDown: function(e)
										{
											P(e, function()
											{
												I("chat", w), _("")
											})
										},
										onChange: function(e)
										{
											_(e.currentTarget.value)
										}
									}), (0, m.jsx)(eV,
									{
										style:
										{
											padding: "0.2rem",
											width: "2.2rem",
											height: "2.2rem"
										},
										title: "emoticon",
										onClick: function()
										{
											S(!0)
										},
										children: (0, m.jsx)(c.xL,
										{
											icon: ei.pkM
										})
									})]
								})
							}), (0, m.jsx)(eV,
							{
								style:
								{},
								title: "send",
								disabled: w.length < 1,
								onClick: function()
								{
									I("chat", w), _("")
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: l.FQ0
								})
							})]
						}), (0, m.jsx)(eA,
						{
							show: p,
							scrollRef: n,
							sendChat: I
						}), (0, m.jsx)(eY,
						{
							show: y,
							handleShow: S
						})]
					})
				},
				e$ = o.ZP.div.withConfig(
				{
					displayName: "InputBar__Container",
					componentId: "sc-1fvyhr8-0"
				})(["", ";height:auto;background-color:", ";border-top:2px solid ", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb243_247_248
				}, function(e)
				{
					return e.theme.color.rgb230_233_235
				}),
				eJ = o.ZP.div.withConfig(
				{
					displayName: "InputBar__Wrapper",
					componentId: "sc-1fvyhr8-1"
				})(["display:flex;width:100%;height:auto;padding:0;"]),
				eV = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "InputBar__InputButton",
					componentId: "sc-1fvyhr8-2"
				})(["padding:0 1rem;width:4rem;height:100%;align-self:center;color:", ";"], function(e)
				{
					return e.theme.color.rgb45_70_100
				});

			function eQ(e, n)
			{
				var t = Object.keys(e);
				if(Object.getOwnPropertySymbols)
				{
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter(function(n)
					{
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					})), t.push.apply(t, r)
				}
				return t
			}

			function e0(e)
			{
				for(var n = 1; n < arguments.length; n++)
				{
					var t = null != arguments[n] ? arguments[n] :
					{};
					n % 2 ? eQ(Object(t), !0).forEach(function(n)
					{
						(0, w.Z)(e, n, t[n])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eQ(Object(t)).forEach(function(n)
					{
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					})
				}
				return e
			}
			var e1 = function(e)
				{
					var n = e.show,
						t = e.selectChat,
						o = e.handleShow,
						a = e.sChatModeType,
						l = e.setSChatModeType,
						s = (0, i.T)(),
						h = (0, i.C)(function(e)
						{
							return e.makeChat
						}),
						f = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						p = (0, i.C)(function(e)
						{
							return e.sCharacter.selected
						}),
						g = (0, r.useState)(t.type),
						x = g[0],
						y = g[1],
						b = (0, r.useState)(""),
						j = b[0],
						w = b[1],
						_ = (0, r.useRef)(null);
					(0, r.useEffect)(function()
					{
						w("edit" === a && "image" !== t.type ? t.content : "")
					}, [a, t, w]);
					var C = function e(n)
						{
							var t = [n];
							return h.chats.forEach(function(r)
							{
								n === r.replyDepth && "reply" === r.type && (t = [].concat((0, et.Z)(t), (0, et.Z)(e(r.replyNo))))
							}), t
						},
						v = function()
						{
							var e = [],
								n = !1,
								r = !1,
								o = C(t.replyNo);
							return h.chats.forEach(function(i)
							{
								if(r = o.filter(function(e)
								{
									return e === i.replyDepth
								}).length > 0, t === i || r) n = !0;
								else if(n && t.isFirst)
								{
									var c = e0(
									{}, i);
									c.isFirst = !0, e.push(c), n = !1
								}
								else e.push(i)
							}), e
						},
						k = function()
						{
							var e, n = [],
								r = !1;
							"delete" === a ? "reply" === t.type ? n = v() : h.chats.forEach(function(o)
							{
								e = e0(
								{}, o), r ? (r = !1, e.isFirst = !0, n.push(e)) : o !== t ? n.push(e) : r = !0
							}) : "edit" === a ? h.chats.forEach(function(r)
							{
								e = e0(
								{}, r), r === t && (e.content = j), n.push(e)
							}) : "time" === a ? h.chats.forEach(function(r)
							{
								e = e0(
								{}, r), r === t && (e.time = j), n.push(e)
							}) : "add" === a && ("reply" === x ? h.chats.forEach(function(o)
							{
								e = e0(
								{}, o), o === t ? (n.push(e0(
								{}, e)), e.type = x, e.replyNo = h.replyNo, e.replyGroup = h.replyGroup, e.replyDepth = h.sReplyNo, e.sCharacter = d.I, e.content = j, e.isFirst = !0, s((0, eo.gW)(
								{
									sReplyNo: h.sReplyNo,
									replyNo: h.replyNo + 1,
									replyGroup: h.replyGroup + 1
								})), r = !0) : r && (e.isFirst = !0, r = !1), n.push(e)
							}) : h.chats.forEach(function(o)
							{
								e = e0(
								{}, o), o === t ? (n.push(e0(
								{}, o)), e.type = x, e.replyNo = 0, e.replyGroup = 0, e.replyDepth = h.sReplyNo, e.sCharacter = "info" === x ? d.I : p, e.content = j, e.isFirst = !0, r = !0) : r && (e.isFirst = !0, r = !1), n.push(e)
							})), s((0, eo.U_)(n)), S()
						},
						Z = (0, r.useCallback)(function(e, n)
						{
							var r, i = [],
								c = !1;
							"edit" === a ? h.chats.forEach(function(e)
							{
								r = e0(
								{}, e), e === t && (r.file = n), i.push(r)
							}) : h.chats.forEach(function(o)
							{
								r = e0(
								{}, o), o === t ? (i.push(e0(
								{}, r)), r.type = e, r.replyNo = 0, r.replyGroup = 0, r.replyDepth = h.sReplyNo, r.sCharacter = p, r.content = "", r.isFirst = !0, r.file = n, c = !0) : c && (r.isFirst = !0, c = !1), i.push(r)
							}), s((0, eo.U_)(i)), o(!1, null, "delete"), w("")
						}, [a, h, t, s, p, o]),
						N = function()
						{
							s((0, er.Y2)(
							{
								isAlert: !0,
								title: F.Z.error[f],
								ment: F.Z.no_support[f]
							}))
						},
						S = function()
						{
							o(!1, null, "delete"), w("")
						},
						P = (0, r.useCallback)(function()
						{
							var e = !0;
							return "delete" !== a && "time" !== a ? "heart" !== x ? j.length > 0 && (e = !1) : "add" === a && "heart" === x && 0 !== p.no && (e = !1) : e = !1, e
						}, [a, x, j, p]),
						I = (0, r.useCallback)(function()
						{
							var e = "";
							return "add" !== a ? ("info" !== t.type && (e = (0, u.fY)(t.sCharacter.no, !0, f)), "heart" === t.type ? e += F.Z.go_relationship_event[f] : "image" === t.type ? "edit" === a ? e += " : " + F.Z.add_image[f] : e += " : " + F.Z.image[f] : "time" === a ? e += " : " + F.Z.time_comment[f] : "chat" === t.type ? e += " : " + t.content : e += t.content) : "chat" === x ? e = (0, u.fY)(p.no, !0, f) + " : " + F.Z.input_comment[f] : "image" === x ? e = (0, u.fY)(p.no, !0, f) + " : " + F.Z.add_image[f] : "reply" === x ? e = "Sensei : " + F.Z.input_comment[f] : "heart" === x ? e = 0 === p.no ? F.Z.select_char[f] : (0, u.fY)(p.no, !0, f) + F.Z.go_relationship_event[f] : "info" === x && (e = F.Z.input_comment[f]), e
						}, [a, x, f, t, p]);
					return (0, m.jsx)(ea.Xf,
					{
						className: n ? "visible medium" : "medium",
						onDoubleClick: function()
						{
							S()
						},
						children: (0, m.jsxs)(ea.F0,
						{
							onDoubleClick: function(e)
							{
								return e.stopPropagation(), !1
							},
							children: [(0, m.jsxs)(ea.h4,
							{
								children: [(0, m.jsx)(ea.Dx,
								{
									className: "bold",
									children: F.Z[t.type][f]
								}), (0, m.jsx)(ea.ec,
								{
									onClick: function()
									{
										S()
									},
									children: (0, m.jsx)(c.j4,
									{})
								})]
							}), (0, m.jsxs)(ea.$0,
							{
								children: [(0, m.jsx)(e2,
								{
									style:
									{
										justifyContent: "space-between"
									},
									children: L.ze.map(function(e, n)
									{
										return (0, m.jsx)(c.Bx,
										{
											style:
											{
												width: "23%"
											},
											className: a === e ? "selected medium" : "medium",
											onClick: function()
											{
												l(e)
											},
											disabled: "edit" === e && "heart" === t.type || "add" === e && "reply" === t.type || "time" === e && "chat" !== t.type,
											children: F.Z[e][f]
										}, n)
									})
								}), (0, m.jsx)(e2,
								{
									style:
									{
										justifyContent: "space-around",
										fontSize: "1rem"
									},
									children: L.PN.map(function(e, n)
									{
										return (0, m.jsxs)(c.Jg,
										{
											htmlFor: e,
											children: [(0, m.jsx)("input",
											{
												type: "checkbox",
												id: e,
												checked: t.type === e && "add" !== a || "add" === a && x === e,
												onChange: function(n)
												{
													w(""), y(e)
												},
												disabled: "add" !== a,
												value: e
											}), F.Z[e][f]]
										}, n)
									})
								}), (0, m.jsxs)(c.OP,
								{
									children: [(0, m.jsx)("input",
									{
										type: "file",
										ref: _,
										style:
										{
											display: "none"
										},
										accept: "image/*",
										onChange: function(e)
										{
											(0, u.T6)(e, function(e)
											{
												Z("image", e)
											}, N)
										}
									}), (0, m.jsx)(c.Kx,
									{
										className: "medium",
										placeholder: I(),
										maxRows: 5,
										readOnly: function()
										{
											if("delete" === a) return !0;
											if("edit" === a)
											{
												if("image" === t.type) return !0
											}
											else if("heart" === x || "image" === x) return !0;
											return !1
										}(),
										value: j,
										onClick: function(e)
										{
											var n;
											("image" === t.type && "edit" === a || "image" === x) && (null === (n = _.current) || void 0 === n || n.click())
										},
										onChange: function(e)
										{
											w(e.currentTarget.value)
										}
									})]
								}), (0, m.jsxs)(ea.$_,
								{
									children: [(0, m.jsx)(ea.Lw,
									{
										className: "bold",
										onClick: function()
										{
											S()
										},
										children: F.Z.cancel[f]
									}), (0, m.jsx)(ea.AZ,
									{
										className: "bold",
										disabled: P(),
										onClick: function()
										{
											k()
										},
										children: F.Z.confirm[f]
									})]
								})]
							})]
						})
					})
				},
				e2 = o.ZP.div.withConfig(
				{
					displayName: "PopupChatChange__Wrapper",
					componentId: "sc-11i0qdg-0"
				})(["", " height:auto;padding-bottom:1rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				e5 = function(e)
				{
					var n = e.character,
						t = (0, i.C)(function(e)
						{
							return e.global.lang
						});
					return (0, m.jsxs)(e3,
					{
						children: [(0, m.jsxs)(e4,
						{
							style:
							{
								alignItems: "center"
							},
							children: [(0, m.jsx)(e7,
							{}), (0, m.jsx)("span",
							{
								className: "bold",
								children: F.Z.relationship_event[t]
							})]
						}), (0, m.jsx)(eN.HR,
						{}), (0, m.jsx)(eN._x,
						{
							className: "medium",
							children: n + F.Z.go_relationship_event[t]
						})]
					})
				},
				e3 = o.ZP.div.withConfig(
				{
					displayName: "HeartBox__Container",
					componentId: "sc-cwriov-0"
				})(["", ";padding:0.5rem;font-size:1.1rem;height:auto;border:1px solid ", ";border-radius:1rem;color:", ";background-color:", ";background-image:url('image/background/Favor_Schedule_Deco.png');background-repeat:no-repeat;background-position:right;background-size:auto 100%;line-height:1.5rem;"], function(e)
				//#})(["", ";padding:0.5rem;font-size:1.1rem;height:auto;border:1px solid ", ";border-radius:1rem;color:", ";background-color:", ";background-image:url('/image/background/Favor_Schedule_Deco.png');background-repeat:no-repeat;background-position:right;background-size:auto 100%;line-height:1.5rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column",
						align: "flex-start"
					})
				}, function(e)
				{
					return e.theme.color.rgb221_210_216
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb252_238_240
				}),
				e4 = o.ZP.div.withConfig(
				{
					displayName: "HeartBox__Flex",
					componentId: "sc-cwriov-1"
				})(["", ";height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "flex-start"
					})
				}),
				e7 = o.ZP.div.withConfig(
				{
					displayName: "HeartBox__Border",
					componentId: "sc-cwriov-2"
				})(["border-left:2px solid ", ";height:1.1rem;margin-right:0.3rem;"], function(e)
				{
					return e.theme.color.rgb252_142_155
				}),
				e9 = function(e)
				{
					var n = e.chat,
						t = (0, i.T)(),
						o = (0, i.C)(function(e)
						{
							return e.global.isScreenshot
						}),
						a = (0, r.useState)(!1),
						l = a[0],
						s = a[1],
						u = (0, r.useState)("delete"),
						d = u[0],
						h = u[1],
						f = function(e, n, t)
						{
							s(e)
						};
					return (0, m.jsxs)(e6,
					{
						children: [o || (0, m.jsx)(e8,
						{
							"data-html2canvas-ignore": "true",
							onClick: function()
							{
								f(!0, null, "delete")
							},
							children: (0, m.jsx)(c.xL,
							{
								icon: ei.Yai
							})
						}), (0, m.jsx)(eN.g4,
						{
							onClick: function()
							{
								t((0, eo.Z8)(n.replyNo))
							},
							children: (0, m.jsx)(ne,
							{
								className: "medium",
								children: n.content
							})
						}), (0, m.jsx)(e1,
						{
							show: l,
							selectChat: n,
							handleShow: f,
							sChatModeType: d,
							setSChatModeType: function(e)
							{
								h(e)
							}
						})]
					})
				},
				e6 = o.ZP.div.withConfig(
				{
					displayName: "ReplyButtonBox__Container",
					componentId: "sc-15gyqnr-0"
				})(["", ";margin-bottom:0.5rem;height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{})
				}),
				e8 = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "ReplyButtonBox__EditButton",
					componentId: "sc-15gyqnr-1"
				})(["padding:0rem 0.5rem;color:", ";height:1.2rem;"], function(e)
				{
					return e.theme.color.rgb45_70_100
				}),
				ne = o.ZP.span.withConfig(
				{
					displayName: "ReplyButtonBox__Span",
					componentId: "sc-15gyqnr-2"
				})(["overflow:hidden;word-break:break-all;word-wrap:break-word;white-space:pre-wrap;line-break:loose;"]),
				nn = function(e)
				{
					var n = e.chat,
						t = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						o = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						a = (0, i.C)(function(e)
						{
							return e.global.isScreenshot
						}),
						s = (0, r.useState)(!1),
						u = s[0],
						d = s[1],
						h = function(e)
						{
							d(e)
						};
					return (0, m.jsxs)(nt,
					{
						children: [(0, m.jsxs)(nr,
						{
							style:
							{
								alignItems: "center"
							},
							children: [(0, m.jsx)(ni,
							{}), (0, m.jsx)("span",
							{
								className: "bold",
								children: F.Z.go_reply[o]
							})]
						}), (0, m.jsx)(eN.HR,
						{}), (0, m.jsx)(nr,
						{
							style:
							{
								flexDirection: "column"
							},
							children: t.map(function(e, t)
							{
								return n.replyGroup === e.replyGroup && (0, m.jsx)(e9,
								{
									chat: e
								}, t)
							})
						}), a || (0, m.jsx)(no,
						{
							"data-html2canvas-ignore": "true",
							onClick: function()
							{
								h(!0)
							},
							children: (0, m.jsx)(c.xL,
							{
								icon: l.r8p
							})
						}), (0, m.jsx)(es,
						{
							show: u,
							handleShow: h,
							isFirst: !1,
							sReply: n
						})]
					})
				},
				nt = o.ZP.div.withConfig(
				{
					displayName: "ReplyBox__Container",
					componentId: "sc-dwjyi3-0"
				})(["", ";height:auto;padding:0.5rem;font-size:1.1rem;border:1px solid ", ";border-radius:1rem;color:", ";background-color:", ";background-image:url('image/background/Popup_Img_Deco_2.png');background-repeat:no-repeat;background-position:right top;background-size:auto 10rem;line-height:1.5rem;"], function(e)
				//#})(["", ";height:auto;padding:0.5rem;font-size:1.1rem;border:1px solid ", ";border-radius:1rem;color:", ";background-color:", ";background-image:url('/image/background/Popup_Img_Deco_2.png');background-repeat:no-repeat;background-position:right top;background-size:auto 10rem;line-height:1.5rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb221_210_216
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb225_237_240
				}),
				nr = o.ZP.div.withConfig(
				{
					displayName: "ReplyBox__Flex",
					componentId: "sc-dwjyi3-1"
				})(["", ";height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "flex-start"
					})
				}),
				no = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "ReplyBox__PlusButton",
					componentId: "sc-dwjyi3-2"
				})(["margin:0;padding-left:0.05rem;align-self:center;border:2px solid ", ";border-radius:50%;height:1.5rem;width:1.5rem;font-size:1rem;color:", ";&:hover{background-color:", ";}"], function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb202_215_221
				}),
				ni = o.ZP.div.withConfig(
				{
					displayName: "ReplyBox__Line",
					componentId: "sc-dwjyi3-3"
				})(["border-left:2px solid ", ";height:1.1rem;margin-right:0.3rem;"], function(e)
				{
					return e.theme.color.rgb39_153_228
				}),
				nc = function(e)
				{
					var n = e.chat,
						t = e.index,
						o = e.handleShow,
						a = (0, i.T)(),
						l = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						s = (0, i.C)(function(e)
						{
							return e.makeChat.sReplyGroup
						}),
						d = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						h = (0, i.C)(function(e)
						{
							return e.global.isScreenshot
						}),
						f = (0, r.useRef)(null);
					(0, r.useEffect)(function()
					{
						if(n.replyGroup === s)
						{
							var e;
							null === (e = f.current) || void 0 === e || e.scrollIntoView(!0), a((0, eo.ZZ)(-1))
						}
					}, [s, n, a]);
					var p = function()
					{
						if(0 !== t)
						{
							var e = l[t],
								r = l[t - 1];
							if("heart" !== r.type && (0, u.Y)(e.sCharacter, r.sCharacter) && e.replyDepth === r.replyDepth)
							{
								var o = [];
								l.forEach(function(e)
								{
									n === e ? o.push(
									{
										type: e.type,
										replyNo: e.replyNo,
										replyDepth: e.replyDepth,
										replyGroup: e.replyGroup,
										sCharacter: e.sCharacter,
										content: e.content,
										isFirst: !e.isFirst
									}) : o.push(e)
								}), a((0, eo.U_)(o))
							}
						}
					};
					return (0, m.jsx)(eN.uU,
					{
						ref: f,
						style: n.isFirst ?
						{} :
						{
							padding: "0.5rem 1rem 0 1rem"
						},
						children: 0 === n.sCharacter.no || "heart" === n.type ? (0, m.jsxs)(m.Fragment,
						{
							children: ["info" === n.type || (0, m.jsx)(eN.xu,
							{
								style:
								{
									marginRight: "chat" === n.type || "image" === n.type ? "1.5rem" : "0"
								}
							}), (0, m.jsxs)(na,
							{
								children: ["reply" === n.type || h || (0, m.jsx)(nl,
								{
									"data-html2canvas-ignore": "true",
									onClick: function()
									{
										o(!0, n, "delete")
									},
									children: (0, m.jsx)(c.xL,
									{
										icon: ei.Yai
									})
								}), "chat" === n.type ? (0, m.jsxs)(m.Fragment,
								{
									children: [n.time && (0, m.jsx)(eN.i9,
									{
										style:
										{
											marginLeft: 0
										},
										children: n.time
									}), (0, m.jsx)(eN.LP,
									{
										onClick: function()
										{
											o(!0, n, "edit")
										},
										children: n.content
									}), (0, m.jsx)(eN.CJ,
									{})]
								}) : "image" === n.type ? (0, m.jsx)(eN.tG,
								{
									onClick: function()
									{
										o(!0, n, "edit")
									},
									src: n.file || (n.content.match("emoticon") ? n.content.replace(/^\//, "") : "https://server.raun0129.com/MolluSpringBoot/" + n.content)
									//#src: n.file || (n.content.match("emoticon") ? "/api/image?url=https://server.raun0129.com/asset/" + n.content.replace(/^\//, "") : "https://server.raun0129.com/MolluSpringBoot/" + n.content)
								}) : "info" === n.type ? (0, m.jsx)(eN.vD,
								{
									children: n.content
								}) : "reply" === n.type ? (0, m.jsx)(nn,
								{
									chat: n
								}) : "heart" === n.type ? (0, m.jsx)(e5,
								{
									character: (0, u.fY)(n.sCharacter.no, !0, d)
								}) : (0, m.jsx)(m.Fragment,
								{})]
							})]
						}) : (0, m.jsxs)(m.Fragment,
						{
							children: [(0, m.jsx)(eN.xu,
							{
								onClick: function()
								{
									p()
								},
								style:
								{
									cursor: "pointer"
								},
								children: (0, m.jsx)(eN.NZ,
								{
									style:
									{
										display: n.isFirst ? "block" : "none"
									},
									height: 252,
									width: 252,
									src: n.sCharacter.no > 999 ? (headarr["#"+n.sCharacter.no] ? headarr["#"+n.sCharacter.no] : loadhead(n.sCharacter.no)) : "char/ch".concat(n.sCharacter.no, "-").concat(n.sCharacter.index, ".jpg"),
									//#src: "/api/image?url=" + "".concat("https://server.raun0129.com/asset/", "image/character/ch").concat(n.sCharacter.no, "/profile/").concat(n.sCharacter.index, ".png"),//左方聊天记录框
									onError: function(e)
									{
										var n = e.currentTarget;
										(0, u.Mp)(n, "character")
									},
									alt: "profile"
								})
							}), (0, m.jsxs)(eN.Xp,
							{
								children: [(0, m.jsx)("span",
								{
									className: "bold",
									style: n.isFirst ?
									{
										height: "1.8rem",
										lineHeight: "1.5rem"
									} :
									{
										display: "none"
									},
									children: (0, u.fY)(n.sCharacter.no, !0, d)
								}), (0, m.jsxs)("div",
								{
									style:
									{
										display: "flex"
									},
									children: ["chat" === n.type ? n.isFirst ? (0, m.jsxs)(m.Fragment,
									{
										children: [(0, m.jsx)(eN.zC,
										{
											onClick: function()
											{
												o(!0, n, "edit")
											},
											children: n.content
										}), n.time && (0, m.jsx)(eN.i9,
										{
											style:
											{
												marginRight: 0
											},
											children: n.time
										})]
									}) : (0, m.jsxs)(m.Fragment,
									{
										children: [(0, m.jsx)(eN.Dt,
										{
											onClick: function()
											{
												o(!0, n, "edit")
											},
											children: n.content
										}), n.time && (0, m.jsx)(eN.i9,
										{
											style:
											{
												marginRight: 0
											},
											children: n.time
										})]
									}) : (0, m.jsx)(eN.tG,
									{
										onClick: function()
										{
											o(!0, n, "edit")
										},
										src: n.file || (n.content.match("emoticon") ? n.content.replace(/^\//, "") : "error.png" + n.content)
										//#src: n.file || (n.content.match("emoticon") ? "/api/image?url=https://server.raun0129.com/asset/" + n.content.replace(/^\//, "") : "https://server.raun0129.com/MolluSpringBoot/" + n.content)
									}), h || (0, m.jsx)(nl,
									{
										"data-html2canvas-ignore": "true",
										onClick: function()
										{
											o(!0, n, "delete")
										},
										children: (0, m.jsx)(c.xL,
										{
											icon: ei.Yai
										})
									})]
								})]
							})]
						})
					})
				},
				na = o.ZP.div.withConfig(
				{
					displayName: "Chat__Flex",
					componentId: "sc-5hhx0-0"
				})(["", ";height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "flex-end",
						align: "flex-start"
					})
				}),
				nl = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "Chat__EditButton",
					componentId: "sc-5hhx0-1"
				})(["align-self:end;margin:0rem 0.5rem;color:", ";height:1.2rem;width:1.2rem;flex-shrink:0;"], function(e)
				{
					return e.theme.color.rgb45_70_100
				}),
				ns = function(e)
				{
					var n = e.scrollRef,
						t = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						o = (0, i.C)(function(e)
						{
							return e.makeChat.sReplyNo
						}),
						a = (0, i.T)(),
						l = (0, r.useState)(!1),
						s = l[0],
						u = l[1],
						h = (0, r.useState)("delete"),
						f = h[0],
						p = h[1],
						g = (0, r.useState)(!1),
						x = g[0],
						y = g[1];
					(0, r.useEffect)(function()
					{
						u(0 !== o)
					}, [o]);
					var b = (0, r.useState)(
						{
							type: "chat",
							isFirst: !0,
							replyNo: 0,
							replyDepth: 0,
							replyGroup: 0,
							sCharacter: d.I,
							content: ""
						}),
						j = b[0],
						w = b[1],
						_ = function(e, n, t)
						{
							p(t), y(e), null !== n && w(n)
						},
						C = function(e)
						{
							var n = 0,
								r = 0;
							t.forEach(function(e)
							{
								e.replyNo === o && (n = e.replyDepth, r = e.replyGroup)
							}), -1 === e ? a((0, eo.Z8)(n)) : a((0, eo.Z8)(0)), a((0, eo.ZZ)(r))
						};
					return (0, m.jsxs)("div",
					{
						style:
						{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							height: "100%"
						},
						children: [(0, m.jsxs)(nh,
						{
							style:
							{
								display: s ? "flex" : "none"
							},
							children: [(0, m.jsx)(nm,
							{
								onClick: function()
								{
									C(-1)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: ei.O24
								})
							}), t.map(function(e, n)
							{
								return e.replyNo === o && 0 !== e.replyNo && (0, m.jsxs)(nf,
								{
									className: "bold",
									children: ["Re: ", e.content]
								}, n)
							}), (0, m.jsx)(nm,
							{
								onClick: function()
								{
									C(0)
								},
								children: (0, m.jsx)(c.xL,
								{
									icon: ei.WA2
								})
							})]
						}), (0, m.jsx)(nu,
						{
							children: (0, m.jsx)(nd,
							{
								ref: n,
								children: t.map(function(e, n)
								{
									return e.replyDepth === o && !("reply" === e.type && !1 === e.isFirst) && (0, m.jsx)(nc,
									{
										index: n,
										handleShow: _,
										chat: e
									}, n)
								})
							})
						}), (0, m.jsx)(e1,
						{
							show: x,
							handleShow: _,
							selectChat: j,
							sChatModeType: f,
							setSChatModeType: function(e)
							{
								p(e)
							}
						})]
					})
				},
				nu = o.ZP.div.withConfig(
				{
					displayName: "Talk__Container",
					componentId: "sc-1uzn66i-0"
				})(["display:inline-block;height:100%;width:100%;background-color:", ";overflow-y:auto;overflow-y:overlay;overflow-x:hidden;position:relative;&::-webkit-scrollbar{display:inline-block;width:0.4rem;}&::-webkit-scrollbar-thumb{height:17%;background-color:", ";border-radius:1rem;}"], function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb210_210_210
				}),
				nd = o.ZP.div.withConfig(
				{
					displayName: "Talk__CContainer",
					componentId: "sc-1uzn66i-1"
				})(["", ";position:absolute;flex-direction:column;height:max-content;padding-bottom:1rem;background-color:", ";color:", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}),
				nh = o.ZP.div.withConfig(
				{
					displayName: "Talk__Header",
					componentId: "sc-1uzn66i-2"
				})(["", ";background-color:", ";border-bottom:2px solid ", ";height:4rem;padding:0 1rem;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						justify: "space-between"
					})
				}, function(e)
				{
					return e.theme.color.rgb243_247_248
				}, function(e)
				{
					return e.theme.color.rgb230_233_235
				}),
				nm = (0, o.ZP)(c.hU).withConfig(
				{
					displayName: "Talk__BackButton",
					componentId: "sc-1uzn66i-3"
				})(["color:", ";width:2.5rem;"], function(e)
				{
					return e.theme.color.rgb45_70_100
				}),
				nf = o.ZP.span.withConfig(
				{
					displayName: "Talk__Span",
					componentId: "sc-1uzn66i-4"
				})(["margin:auto 1rem;overflow:hidden;word-break:break-all;white-space:pre-wrap;line-break:loose;"]),
				np = function()
				{
					var e = (0, i.C)(function(e)
						{
							return e.global.lang
						}),
						n = (0, i.C)(function(e)
						{
							return e.makeChat.chats
						}),
						t = (0, r.useRef)(null);
					return (0, m.jsxs)(ng,
					{
						children: [(0, m.jsx)(nx,
						{
							style:
							{
								display: n.length > 0 ? "none" : "flex"
							},
							children: (0, m.jsx)("span",
							{
								style:
								{
									fontSize: "1.1rem"
								},
								children: F.Z.select_char[e]
							})
						}), (0, m.jsx)(nx,
						{
							style:
							{
								display: n.length > 0 ? "flex" : "none"
							},
							children: (0, m.jsx)(ns,
							{
								scrollRef: t
							})
						}), (0, m.jsx)(eW,
						{
							scrollRef: t
						})]
					})
				},
				ng = o.ZP.div.withConfig(
				{
					displayName: "RightScreen__Container",
					componentId: "sc-1fwinj2-0"
				})(["", " flex-shrink:1;min-width:340px;@media screen and (max-width:768px){min-width:100vw;}"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}),
				nx = o.ZP.div.withConfig(
				{
					displayName: "RightScreen__Box",
					componentId: "sc-1fwinj2-1"
				})(["", " background-color:", ";color:", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				}, function(e)
				{
					return e.theme.color.rgb255_255_255
				}, function(e)
				{
					return e.theme.color.rgb111_119_127
				}),
				ny = t(9008),
				nb = t.n(ny),
				nj = t(5615),
				nw = function()
				{
					return (0, m.jsxs)(n_,
					{
						children: [(0, m.jsxs)(nb(),
						{
							children: [(0, m.jsx)("title",
							{
								children: "MolluTalk"
								//#children: "MolluTalk"
							}), (0, m.jsx)("meta",
							{
								name: "description",
								content: "MolluTalk is a Blue Archive Fandom Site. (몰루톡/モルトーク)"
							}), (0, m.jsx)("meta",
							{
								name: "keywords",
								content: "몰루톡, MolluTalk, モルトーク"
							}), (0, m.jsx)("meta",
							{
								property: "og:title",
								content: "MolluTalk"
							}), (0, m.jsx)("meta",
							{
								property: "og:image",
								content: "https://mollutalk.com/ogImage.png"
							}), (0, m.jsx)("meta",
							{
								property: "og:site_name",
								content: "Make"
							}), (0, m.jsx)("meta",
							{
								property: "og:description",
								content: "MolluTalk is a Blue Archive Fandom Site. (몰루톡/モルトーク)"
							}), (0, m.jsx)("meta",
							{
								name: "twitter:title",
								content: "MolluTalk"
							}), (0, m.jsx)("meta",
							{
								name: "twitter:description",
								content: "MolluTalk is a Blue Archive Fandom Site. (몰루톡/モルトーク)"
							}), (0, m.jsx)("meta",
							{
								name: "twitter:image",
								content: "https://mollutalk.com/ogImage.png"
							}), (0, m.jsx)("meta",
							{
								name: "twitter:card",
								content: "summary_large_image"
							})]
						}), (0, m.jsx)(nj.Z,
						{
							childrens: [(0, m.jsx)(Q,
							{}, 0), (0, m.jsx)(np,
							{}, 1)]
						}), (0, m.jsx)(f,
						{})]
					})
				},
				n_ = o.ZP.div.withConfig(
				{
					displayName: "pages__Container",
					componentId: "sc-ll9qpl-0"
				})(["", ""], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column"
					})
				})
		},
		83: function(e, n, t)
		{
			"use strict";
			t.d(n,
			{
				CJ: function()
				{
					return h
				},
				Dt: function()
				{
					return u
				},
				HR: function()
				{
					return p
				},
				LP: function()
				{
					return d
				},
				NZ: function()
				{
					return b
				},
				Xp: function()
				{
					return a
				},
				YJ: function()
				{
					return y
				},
				_x: function()
				{
					return f
				},
				g4: function()
				{
					return g
				},
				i9: function()
				{
					return x
				},
				tG: function()
				{
					return l
				},
				uU: function()
				{
					return i
				},
				vD: function()
				{
					return m
				},
				xu: function()
				{
					return c
				},
				zC: function()
				{
					return s
				}
			});
			var r = t(9521),
				o = t(1563),
				i = r.ZP.div.withConfig(
				{
					displayName: "talk__ChatContainer",
					componentId: "sc-eq7cqw-0"
				})(["", ";padding:1rem 1rem 0 1rem;font-size:1.1rem;height:auto;"], function(e)
				{
					return e.theme.common.flexBox(
					{
						align: "stretch"
					})
				}),
				c = r.ZP.div.withConfig(
				{
					displayName: "talk__Box",
					componentId: "sc-eq7cqw-1"
				})(["display:flex;width:6rem;"]),
				a = r.ZP.div.withConfig(
				{
					displayName: "talk__ChatWrapper",
					componentId: "sc-eq7cqw-2"
				})(["", ";height:auto;font-size:1.2rem;color:", ";"], function(e)
				{
					return e.theme.common.flexBox(
					{
						direction: "column",
						align: "flex-start"
					})
				}, function(e)
				{
					return e.theme.color.rgb34_37_41
				}),
				l = r.ZP.img.withConfig(
				{
					displayName: "talk__ImgBox",
					componentId: "sc-eq7cqw-3"
				})(["max-width:90%;border:2px solid ", ";background-color:transparent;padding:0.5rem;border-radius:10px;"], function(e)
				{
					return e.theme.color.rgb230_233_235
				}),
				s = r.ZP.span.withConfig(
				{
					displayName: "talk__TextBox",
					componentId: "sc-eq7cqw-4"
				})(["user-select:text;position:relative;color:white;width:fit-content;border-radius:10px;background:", ";border:1px solid ", ";white-space:pre-wrap;overflow-wrap:break-word;word-break:break-all;word-wrap:break-all;line-break:loose;font-size:1.2rem;padding:0.6rem;line-height:1.7rem;::after{content:'';position:absolute;left:-0.5rem;top:0.6rem;border-top:0.3rem solid transparent;border-right:0.5rem solid ", ";border-bottom:0.3rem solid transparent;}"], function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}, function(e)
				{
					return e.theme.color.rgb76_91_111
				}),
				u = (0, r.ZP)(s).withConfig(
				{
					displayName: "talk__NTextBox",
					componentId: "sc-eq7cqw-5"
				})(["::after{content:none;}"]),
				d = (0, r.ZP)(s).withConfig(
				{
					displayName: "talk__STextBox",
					componentId: "sc-eq7cqw-6"
				})(["background:", ";border:1px solid ", ";::after{content:none;}"], function(e)
				{
					return e.theme.color.rgb74_138_202
				}, function(e)
				{
					return e.theme.color.rgb74_138_202
				}),
				h = r.ZP.div.withConfig(
				{
					displayName: "talk__Triangle",
					componentId: "sc-eq7cqw-7"
				})(["position:relative;::after{content:'';position:absolute;left:0;top:0.6rem;height:0;border-top:0.3rem solid transparent;border-bottom:0.3rem solid transparent;border-left:0.5rem solid ", ";}"], function(e)
				{
					return e.theme.color.rgb74_138_202
				}),
				m = r.ZP.span.withConfig(
				{
					displayName: "talk__InfoBox",
					componentId: "sc-eq7cqw-8"
				})(["user-select:text;position:relative;color:", ";width:100%;border-radius:10px;background:", ";text-align:center;white-space:pre-wrap;overflow-wrap:break-word;word-break:break-all;word-wrap:break-all;line-break:loose;font-size:1rem;padding:0.2rem 1rem;line-height:1.5rem;"], function(e)
				{
					return e.theme.color.rgb69_78_89
				}, function(e)
				{
					return e.theme.color.rgb220_229_232
				}),
				f = (0, r.ZP)(o.Mm).withConfig(
				{
					displayName: "talk__HeartButton",
					componentId: "sc-eq7cqw-9"
				})(["padding:0.5rem;height:max-content;color:white;background-color:", ";border-radius:0.5rem;border:none;border-bottom:0.1rem solid ", ";box-shadow:0rem 0.05rem 0.2rem ", ";line-height:1.5rem;&:hover{background-color:", ";}"], function(e)
				{
					return e.theme.color.rgb252_135_155
				}, function(e)
				{
					return e.theme.color.rgb169_136_136
				}, function(e)
				{
					return e.theme.color.rgb215_165_165
				}, function(e)
				{
					return e.theme.color.rgb223_109_128
				}),
				p = r.ZP.hr.withConfig(
				{
					displayName: "talk__HR",
					componentId: "sc-eq7cqw-10"
				})(["border:0;height:1px;background:", ";width:100%;"], function(e)
				{
					return e.theme.color.rgb218_225_229
				}),
				g = (0, r.ZP)(o.Mm).withConfig(
				{
					displayName: "talk__ReplyButton",
					componentId: "sc-eq7cqw-11"
				})(["text-align:center;height:100%;width:100%;padding:0.7rem 0.5rem;border:none;border-bottom:0.1rem solid ", ";box-shadow:0rem 0.05rem 0.2rem ", ";border-radius:0.5rem;line-height:1.5rem;"], function(e)
				{
					return e.theme.color.rgb174_174_174
				}, function(e)
				{
					return e.theme.color.rgb180_188_192
				}),
				x = r.ZP.span.withConfig(
				{
					displayName: "talk__TimeSpan",
					componentId: "sc-eq7cqw-12"
				})(["color :", ";font-size :0.9rem;margin:auto 0.5rem 0 0.5rem;flex-shrink:0;"], function(e)
				{
					return e.theme.color.rgb69_78_89
				}),
				y = (0, r.ZP)(o.xL).withConfig(
				{
					displayName: "talk__CheckedIcon",
					componentId: "sc-eq7cqw-13"
				})(["width:1.1rem;height:1.1rem;margin-right:0.5rem;"]),
				b = r.ZP.img.withConfig(
				{
					displayName: "talk__Profile",
					componentId: "sc-eq7cqw-14"
				})(["box-sizing:border-box;margin:0rem;width:4rem;height:4rem;object-fit:contain;border-radius:50%;"])
		},
		8312: function(e, n, t)
		{
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function()
			{
				return t(583)
			}])
		}
	},
	function(e)
	{
		e.O(0, [443, 288, 876, 774, 888, 179], function()
		{
			return e(e.s = 8312)
		}), _N_E = e.O()
	}
]);