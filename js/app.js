document.addEventListener("error",e=>{const t=e.target;if(t&&t.tagName==="IMG"&&t.classList.contains("fav"))t.remove()},true);
(function(){try{var f=window.self!==window.top,c=window.matchMedia&&matchMedia("(pointer:coarse)").matches;if(!(f&&c))return;var sw=screen.width||innerWidth,k=Math.max(1,innerWidth/sw),px=Math.max(22,Math.ceil(16*k)+4);document.documentElement.style.setProperty("--field-fs",px+"px")}catch(e){}})();

const LOGO="data:image/webp;base64,UklGRk4cAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSLYEAAABDjrWtieSnSp1dWJmZs58HE3uicy0hMENmKOLsZkXwMzM3gEz42WGgnNG1VQlfU4/1S+pIgIWJLttG5R5JATDTlUDn/7ZoqaDTJEkj7jwyoV1T7z+2de//fnv1i38w3efvf7EuoV44REJSapskNI+lRhI8vi5lYfe/3FvNaV2Pj60Mnc8SYZMWRYRksfNb3j/v6qmZZFH0o1RMkY6qWn3/ob54+of1hJJQyB5/tILf9dee9jr78CU6hi9dyIi4YWlXr88pBaMMpJnrb6zT0SKw3kpDaiLniKy753VsxIyM3ygAjm89smdlUg+blszm6KI+Cd7JgzK7NHpt34xPtJ8IPjTzR2kgbzkni2VFKORNgIU2XJPnzCkZv6+X/bY3koOF9Kq0ot0j15m4NsF8pwH9q2NSmldnRfZxy5hMOpNhEfevbWSybXbKy0S7u6oxBjJyFu+Gp9hRgJvSRiNiZ7/7OjIrAF7M4IDcmVrlRdinDJK8CaUzHjmCyK5GKlRJJzJrPW06/+ocieGqovSd1TSbtrmMVFjg2wzK+Mpb0hBMVpJ6XwSW/MrvpPDYrx66buWLPK6ndptsJ2uDUsjl0rJxQqN4paYpc377RNqGF+iX7Omfb3kpVijLsr6NWvWN9d2pBaZFzZqa+OaW2brGyw2TPqaW2c9h42Nl2puoS0xNuTXlLqahRZdaMQGvHy3K8RKpetjA8cAKj3ph8pSF6F0LlUzv6F7u/JirXrpXXSzJm3WbrNxxpzAayZUt7J44GCmpNP+WatgtdLF02bJyfhKlYvlGsXPEApcHE2yO6dnmDp29o6itF8cu7OnDQW+UI/ZHwpTQuAN9RiC0A1TmVNH/FAWGISuO0Kl0+DdGlFAnAKUO2NnUaIQR39GqibjgxpxgGOYiBfu14gDYjcJAp/QiATCBFDuglg6JOJcvGA8BN6rEQvcOxYcT96uEQvw5CQdd7x0q0Y0cCvjKLrhN1WBRijfDN0IBF6lHY91SRiVZ8rDeMS7OCIpT9stJR5x0rOenHFFaogneaWerPh+lSOSKO9T1fyc/XqOaBo7qpHLZCKYpo6RDHwRl/QMTHnMf3qOadr1TAPnpRBQSplPwjDZoOeophs4VMkH9aqYijJRPHYrqi0iTsKx5Jx2XOY5bqeKatfKh7DJQ+SHOhNXouMRP2ML97xoPzaJfl47MuOCFMiEEtbrTGSJ7gl0El5DN+k/Ryeff43uZd1v6OTXP9HJH/+ik3+2opMt+ATfBF8KvkL49gv49qv4jkvwHdfhOy7Gd16B77wM33ktvusC8K6r4Lsuhe+6HsDroviuK+O7Lo/vvga++0L47qvBuy+J774uvvvi8PoK8PVl4OtrgdcXhK+vCl9fGry+Pnx9kfD6SvH15cLra8bXFw6vrx7fugR46zrwrYuBt64I3rosfOva4K0LhLeuEt+6VHjreuGti8a3rhzeunx4vAbweCHg8WrA4yWBx+uCjxcHHq8QPF4meLxW6HjB4PGqweOlg8frB48XER2vJDxeTni8puh4YeHx6qLjJTaR1/lRU3idH6vxOqPjxUbHK46Olx0drz265wKAe67C/9NzKQx7rscf/2yRaNhzPQhWUDggchcAAHBTAJ0BKqAAoAA+MRaIQqIhIRXrBqggAwS2AGajFyz/S/7p+XP5AfLlWX7B/Yf0N/Yv295+it/MX5i/6H+A/Lv5o/5T1Afpv/p+4B+pH/D/wvmV+5bzB/sh+yfvW/771Tf3T/Pfsx8AH9l/zfpq+wx6AH7Q///11P3X+ED+x/8r91fgR/ZL/6+wB6AHUL9UP5l+M367+UH+G8S/LB619w/XKzl9hn+P5Kvt5+1/vXo3/vfC35Nagv5B/Qf9bvuNnvQC9vPpf+y/tv5MekF/W+kH1t/4XuAfqp/t/Kd8G/0L2A/5h/Tf+f/jPyu+mP+d/9n+f/0/pu/Nf8n/3/9F8BP8w/q3/N/vntl+yv9uPZZ/YJx9LgTecXiM54fDUv0HPavhsjI4K7E8r66+U1VYmk7e4oekxILKZy7Sa+CybMwu8zX0/8IJ8wCQT///FtwJj35+T19Ql3P9w9wqV8VYe/Q7F5rJvs3h+CqJfjVExRM2H8DVhRX9FFgJiRa4KE+fQtN/6BemlGO03lX9Zftc7zya5msUygfC9Dfj//2uc7isup5DMaDrHNhK3/F7xwyBgeoVMstSWMxLrDj3Y02rU6eglEMm1PJFD0Mji0kGj8mfciuY1JnLa+3BjS79u4LsmYJ/zVD0OhJyCvCN3U+ixQL+LvUa9DJ8CysjbZq6sF6qNcitO4Na1VRe+x01FwIs+Tjd7XR7djJzYVBbK1pNiGrqwLAWMCluhhKvQbDtVrZFwwwVuPLDKlKK2m7BDCCbcwMmLAQPQUp/AlFhRCoTDFcXdwGeBsFdTMLQ72QsbbJFkJ8QjL+KM3kHBL+fcnFRFrxnVeVZp9jFEir44e6XV/bIm+0MXx4r9tBsaeSm3GH6NcnS1L0jgOQtfbRlttrY6JHMVgAA/v+PvXf7mfkhqowAlhJbmXRBKZxsJmmpB+hx+wgdGCeJV61ybW5MYDMgU6vJYqXZbZ0gfNw2cqEUIbc25+1O4KgeKB4l1RD6S8yWZjCz9un8G4R/jDFcGQDVslbC54PHYpLfNnrFR4wl0VcZixl3IfZ/MhVXbPAny4oK/hbMNLRf8P68SNIrm7d9WwfhCZq5mQwa0bl+4ziImV0E6M6fjbZU4bJu9G27zuyhaQ6Zvg/cXYwhGfOWkRrrUNwGt6SdveJxtp1JwKXk7g9zNsKrEnBv6uYBgMsN1k0dP6PYuSx54FZujcI+HWwIaNx2+1COaLV44ympGTLSFX75ycNrCxB54uColuTmwT5HbMCH7VbkTfZ0M5ZHQ/ib6+3842tgL5GIOmZa/KjITcMTbYhSYyb6BWiVq2/wPliA+k3eL54HL5B0rJXwm3BbUrhxWP1jEG03WcB8RNQ2IGpkCXCBujcrcqGhwFQ+3NnKS4XGwzh67AuRRMeGjvPpF2F8ksCtr/PhXvPQYHWCgtkdb2/l5L3RZ2oNVFaJM31FE4GsoEAQ7NHh4K2xv7Yg9qAeMxP7SljqZQop10cldH6cAY5yDsS4RUHxZKtQDqVGmc7C3vVkp317cA1/ceCViZ40CeBuC6EoQ1gYv5BuXvPU8p+kDj/OBghZAkQtkeea1Aev0zuyuZ/DoAfzUDm38iFJBJxNUssD6r5r+O34qLE8q2JcHQTP+A3KgDnxIRiTrWbDcKV7oOg36oEGxVS6QRuLkpH4UMvu0b6zwCXB8eV96UoCdCCpCLEtPBbVU1wdto+/x1WwxVpz8o0MQRrdWZvZozgN56RDDrN1TO21zfGWWGmEw6GwXNuUjivmWVlrThB8gdplAUalrqt/f2QfK0uSq8i2SwNpd3vHhcKoyMeZMTlqvYS7gm2LKDew2h/r/2Tmh9MXLz1Gd9tPPUfNcmxbx0qPApfGNjr4vyB92mBbYsMi2ww1+UhbX9jYjVPJBqmIikY1+S2VvfdGtrfj/62zoxq9UqTvbWUnsjxKWlTZR0zprP5L1l3n0GLWRw/ixPp//1/bncJEQnMnvM/jd0GwRRzYRUUkuLomaxGFbHMp6CuKkUucNFdkO5LHYk3mL/dpmQ3EWOEv/A3P3vELLcxnGKtbouDEN7tZtvTRzq5Z5P8AJ+n1eugLjcq6itCUURxV/7io12Q+9hpbWfO+pA9JQNaKIn9CW7bxky5pTuRglXEPpPKT35Xdm8wCKwnQHsjOQVZF3G7A3YUrpU/fjaricw36Yrc5qXXzWM+GDDYqYE0PZZe6gGIFdHL3kLDzB/qhkyVrnyRCkEd4g5KqbBiEedyBFGnSzCU7lXD0oQnikShXW7Tyhlolc4KsSiuedt0tsifhWh6rrvmUCrB34/FJa4LsU3B+F85wY8DsGeYVibQrx3f/sQkjjfXEsMQxthgc1OJKSYHaYKUBVpIonfsyiCavB9/gbfYCBunTvsjc0CRoNkr2mKKg35EMYFwlTPbF1JA3p7ONHfyDT+7urWSRGKwx1nQzT2dStk1dzf2+AeNfERzkcNZeifVKeV43i1LjPRzFdnENjpg2oJfHuo16BzLdGnQ+NkaY8trhRwpJqrmdQp3nbz9qbG1hhCoNTD4oEADu97Z7cYh4Ii3AY2lQ/LQAFebU2Xh5wN0TO/hmqOi4/X8V90qildutsqWpPfPrVHWZ5DLehGIZBksedYad3gBCTxMtepWSFXMezMTgemW6ZNXr56ulDyT/WKFWTtrTGEDsoU2eJmMe+A3ZiOxa4T4ztm4wDm/3hQOmcIOWe6CYZk9Y4vE7guOPv2Bv0vHLe/ex2wqim6UBF+n9O5C5OVFUC3w2c9M0N+zxiMHt3o8/KzrRNucmpcWsmBlQrua6S722iPcOHpSAvGktZ/SGZtOu6RfkCkPZOGciFNW/3e7E6BJgtqQF7B7y/d9UBZ0XZ3haZJZPEc+OtJLJObjZHz+/pudLCpHQr66KnVpGHkLpQOBFxTCMjDVxSB5beP3/W98Pkl7LL0AWJEEBBhFSkoQCdC+xYFiHuwffN1FjGsr7tvnMRb63/3U6wc0s2guKvKToe+NRS4oc6cRdtZ1mVEJdVSZqWSncbmNpMJkHwynioXoJOljCxZMAZoKq+jUAAUhT3AZiFuRX/A/Hji3jteb/ocGOohKT/a84Vix8ffYLMTNeuvJB7m34hW54dXrSD/wIJz+Mv4dDffctBvXo4aJ3l3jrsw023NvxUCJv44PJnq1K2c6NDVY34xehydUybGmsLzOm6a7gF8QnkV/25jM/EaPtolE8smMxVluBhQa+xcJbG0uVcfYJf4a5fa7lR3zzCtMoaiTZKbyzhJ/wLdb9m0Kz9dxJqW3jquRee8rpUkvseS83LUsCYjgpCnuHTQdyp5sbtTrLNRGXbPjN6ib1/iT0UCORrbGLtVNDrgSNR537BdnRylJALPO8errYSuNgQ6Glez1PVFoGXimelBytUAK827LwPO+j2aQskwjpddDMwve5CFkXQhXYcQ5OFlt+Vfi4tr57wq/FcrMmyEL02xVYbkBGO8gdUsuOCfOqetAwoYpUkNWTUt1n4j4Ek4i7cmv8j/QUSbQFpV70L2CBY7iz3MCpfRzcHceebK9xXC7Lj1G0v5sNEJ5cN7dqtHAGLxJD1lPABiRcfMweoS+nFcSIiOPwrsFv+uTkwJtDt81j3PbQVSMkoalx7TjkThxZ413cIC7DUSXGQ3j1L8S2BSZPTkR5TR6FvsjySSoCtYPwDrTP/zHjhfu3MD9xmr1awahMswyXpfnxVikfM7qm4s1xQkRnD5QmYouZ2jJZJuYjqShXESjEGhoOJUmdHx+It+dZJ29fafb8pQ2Qp+UmgSFssI1UIYq4zCk+hG5bUyRCnIRFp0w9pbrstW4I+ys2TqUQljMpJ+xJWMSe7+OclmO4CFqUuTv9TtoJTQ/190OQqUb+UBLrKiglGV5Jb1kZtEU/0QiSQ8RoeJFVn+rUTcqt/iE7ptQu9mMeM2pZ8THh/nZrwrz0tIrnnAMddW6nCcj6ket4b+RZC19CPLNsGO2RWd0lQIOt6AeG5+3pe9F2q/4EH0GCY+3GtN06jMtG1po9rW6Uey4bKt2sn+M7AXowM3Ht2fpRrd1PZb8XVbju/3HqMhBX1n+260x8bcI4O8XfCXp6piLKmQDO0ybsIJxvB3AQ0ZDoRTsUkGnAGa3VMXoIMbvppd5ZUbfVHIPIO7b0FPvjYh5WnEvpeUePgi5fFNb2Bb43/ysry9VYRca22plgKAX7KN+4D/5Jm9OFG2yOO5efqC4vSHtyOn9QScY0m4YGYUKj5YaT+38ml6Sy68emGZZPLL8noYh7pmuUZu2zfyLg9yM3aWvVwKlt8RtJba90SEdm9RsOm0vI7AUaPwUumI/zYM2j94zxKJmAsF7a/aNk7OquIbFAYhcCJn5miqzdczny8zRATDg6g02rRLbz9rIPEUF++QxNvZmFstw/HatDmp7paAVQyhcUYIvwcC5uvydCRCunnTrpsozGAxvUnubbwGvrCAJK5zSR48fXJUsRBT91yvB+H7Hzf6RwjgvTcYgT6ulrxMSxBoZu6qsP6dA3Q6X9mirKkLUh5rgiPYCc5FxSjrZc5HEtFjZUhraWUTAvsJPmfA5RmD/2GXw6o2i07LqXuXp2rUSSBMjwOKz2h51QCB6vuBCDrkDQ1vnSu2ymXSQnYRzipBLfVCEpP6YvRMF9B1zFSQ55m/vVZfhbHxpfz+RueBv/E2ov2Gfc3k4HP+5v4b3snMMY1BfRdwt8TsCqHNmxepnq6tbvqe9A+Qsd3mg1582oADcB+1VE82lTsu2ZifSja+9Ef5vFN/USYAp3Js/fzH0NPlhIxhqNW47CEXpH7l/P6EW0CUp7NdemuaJjC49efAxIsOviFm63wyGaMHowdaHmVGsKkcVcJUsSyk98RDKKbNXBEY91mKzX+gsiNDeXuoDXiFZCXnnNuu/lNZ+pTieYMeZIkC3fGSQlTB/PSie3UGU09mS5VJRZRFzUm82jOFki0j054xHBKYvGDFBaUvmoBmlJgvjgy2CJvHyc6XwCl0f60gParIGfBtL6Ihu5cIC4BMG1kUu8TMymyE/3B5VrMIP+U8bBz4fhatF2A9tirtPJ5AjV4m3rrz59o7ytVhGd5N+RI/NPSiNbZZov8mGdU3slKg6XV9Iyh4C9pPOggOnTsVlhOh3zvXgHdfsm7gte25+/s0+HYjh2g1Q5lZwQRNgGRLCkZwPyNmPMSDkHKIqJPq9TNTdOq/cK6rfop8cHIjHX1OIVIFQVFI01YuhnFCfggtmlF9sk2dpfzSGjXOZ32MPj9Iz6JQ3GHlzujCGL+lDOmvWNO4ga0/IapFZ7xikuWWkrfdVCQIralfcjgm9nd6qyJT5fpQFWkx/XDh3/rvc1DsEttbyhLy9RE2yYXwtcxKe2bQuwi1GZC3HTf4Bud4WLYUCMunFbZHRljn/v5qsJlBlMtfYL8bx2h1END2ddZbddJBgr/GP0xUk7zL/K86MdlORmHoIEv0f6jbGKCI8Nmf+2J+ehfwXOE/kE5Yx6pPVprMaGYvEPq1e9xpuOUTxcYUMOBi/A2eIZv37q/zkmRolWzek9MUW2xs/wsDdczFj0BpDQ/F5Gn5VJV03f+sR697Nso1lzp7TSmd8nydXOA9+n+Ryk6awcp1aloX1UHBSeo2/9fpCfFyGq2/bFIYnPPF5aw9ypcpASPjrZRQCkMwTlSci3BoOcq03mYY9tA0zmQctTXxMRzSDCRDH/07wlAV5QmaIFR1GTlK4Iv26RJJITh6RacfIRUaXtZ2a+wzX5ioor0SMViRRFMktQCX40UIL+QuXwT57dGbPg88pdOSGsDZLtgbDKNVJYcpTpB/7ZwrbmGYxBILarVmFtxAAQ3ijbT285f4LPXmDY9hoZhaodu0dX/Ii3xDQauM17czxQoD/2LMeRv7pZRpw3Csl8ljwHwbkAnMIHLb/h679eJlCEPMl8y6UniJIcIvTYyKh62zTvvtnruNeTJj7n0fCoueTYW1F8EnzrXVP4cWlbr/7Qeeu48iz0C3Uv1L+Rk8ZbH1Y0ctumfBeeeBccp8XuFsFIi2rZwnipL+o6m1XpHQQdT6f3TbHm6vb8/yLiYKDO/vxtgM10P/JTyHdtin0ujgxmAIlfXX9tjKDEPrxLZaNXzMpqZjcy+lpZdcUwQHx/PsrZ+Ff9aFANHfEJsHwSVCaC5i8tT6VSSAlHkjiJnKArECgAyTz2p1RI1HCqSrWL0aCUTaBNz/Paxv7SnKvVnKCmLEbNhCRf1y5aOdWJw5rfUml13a9ZagzMEr5TEvs1AJiZ7lWF9gd0mABKyawo+WAO9UYpbg/BTolOH8JNVo3s8MOfupqMAsvArB5s+pzhhHF7yFwBI3VhjEU6VBk0r5WQOT9jGb4B/tNtab9tjLbyTTLl4wG0chyHwOEGK30GNuUVQOcXM86PWTH/NnnX3w6rcg5xondZM+E9KArq9/C3OCD9Ift68N3Zvio4hg2hJvo5+sE215giup875WKEnK7fxEkVBy/zHo0rV/suDuMxDcBDXAkPh3x65t3oz6Aa8KSUIGIcahqdQL75getwSaYofk5jjgcab20JpDf0np82KLh3qY69z1M0fY1ghQskWysL07kjNNfdwnHEnSqS3v2olGEd+hAi2l7WK8RuYruFYfXj4DH4dxFKDpAtsxrucbmVKfaUsZvT2IFwMsqkYpeoLncF2GF3nxjjePCf3cYJu9EkXVjE9+3gOtRvlF5VjH3KOepdQnNy1sq3t86WRQOeN/4fB5LuSev2k+2043nmlKSv/YQhATIhO6gVq/ROnK6v55tAkSMvdD9xpE6tYDNqgUynHtt+k+IL74GqxKUNsYuscjP0yjT/cOvSVby0qWSDj/ScxNPdsoPprl1V9LYeTcmxZdUlA1uiLOGqI5F0/rtgP2rnxT6zr3vBPhyWLNh7iGQ4gmFMyfptsw4sXthY4yia18+O7J3WV6mR4zqApHVN1TxJgXcdx4okTCoIKNVtZrskpheBqxnwC3fI5S/7PsT9WLolB09RD0Yt2F3xknAFEIX82O4YSORlBcWKcgxzGlghbmsSv+CA7huU1sIZSkX8aM+7ydnlmJugc0iSRu9T/N23JCysIKi7q+OhAb1Gqi5nC8C8lPUPuk2YEl8WahTqo5kg+eXTihmG8Okop4azbIh3+5mwR7AJNIU3yxffAEVwnUlqo1pMNgb3wa97SQYAoEz+JgYKWXrNeElDfdZJ04vG8a8GfxBwU6+XxkgDf4xNcP5qxhv1jevYxDxpkqLbVy/1b/IBhhS91KaaCpMWZ+OT8pfdEzWCS6aA2DJe/ihC0SC4POf3YgQP88abkfIWNSHE6p6nlJbD8yQRfGcz3Wnoxt7MLYdThpzxBJVrfHwqQbyo2/3gsGJ7tMe49pWVCkC8cW2/XVQYSgInsokp23OBBN/H4MC0upnQA8yuoaaMyR+CY7SrKun5CyUQXlREvGo5JOqj7JTC736ZK7LubVEUxGgSYsczycHgEJCmh+klhwdBHejVWNkKmLeHXdVBokDgoJKaioeHLwkFtQ8WsY6nP3k7xfPKS8DOmpmeAgitaLfeg6EQtzrGpK+rvOJpjQZCYIFbfoQyGMtmDYfltdLMpPVPNoifrtqgLRSzdg+V58IIaHi82xOW10CrLhLD4rRmO7tyrOOcx/Wci2wwudHQR/GhlvFTSNfmhkd8DlgrybFTkE+gXX/OrhAiGaClPekSf5er+T0SWAOr8QKzYdBA9IfkbBAHDqVZG9UatpNYwqn9Rn5aGLRH3gVPpDkBuoiA18TZXu7pluBtBnQUZNcT77spVM1ovyUiKTam7IeiYpehIK4rVTukTeP+eZ2lBatXbJ0CQdkTFG0euwLCsR2WRj9pKBCy/VpoW5x5m/FLuj4htRORZimfZJSM4RAtLYgGtFqJ/bDBH+taUIaJ3aFq4dh95SXkil2UTCnDOPRKW0Pi5v+ZHsSqhvlojUCO0tlUmHmiv/sYfTYSrmDTZHNrz+xUxjMdqxQuwAAAAAAA";
const API_URL="https://script.google.com/macros/s/AKfycbzoXvUigJ1gri6Yyeoj6CRh-wsqJB4A9SOV0OA_6rZ43NsJIsTLNpQdDyqC-lVd8Wbv/exec";
try{if(self!==top)document.documentElement.classList.add("embedded")}catch(e){document.documentElement.classList.add("embedded")}
const MIN=60000,KEY="whwai.v2",$=id=>document.getElementById(id);
const LUCIDE_BY_PATH={'user':'user','log-in':'log-in','upload':'upload','star':'star','download':'download','plus':'plus','rotate-cw':'rotate-cw','notebook-text':'file-text','menu':'menu','trash-2':'trash-2','check':'check','arrow-right':'arrow-right','chevron-down':'chevron-down','chevron-right':'chevron-right','lock':'lock','copy':'copy'};
const lucideNode=(name)=>{const L=window.lucide;if(!L||!L.icons)return null;const pascal=name.split('-').map(p=>p[0].toUpperCase()+p.slice(1)).join('');return L.icons[pascal]||L.icons[name]||null};
const LUCIDE_FALLBACK={"user":"<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21v-2a8 8 0 0 1 16 0v2\"/>","log-in":"<path d=\"M10 17l5-5-5-5\"/><path d=\"M15 12H3\"/><path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7\"/>","upload":"<path d=\"M12 16V4M7 9l5-5 5 5\"/><path d=\"M4 16v4h16v-4\"/>","star":"<path d=\"M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z\"/>","download":"<path d=\"M12 3v12M7 10l5 5 5-5\"/><path d=\"M5 17v3h14v-3\"/>","plus":"<path d=\"M12 5v14M5 12h14\"/>","rotate-cw":"<path d=\"M21 12a9 9 0 1 1-3-6.7\"/><path d=\"M21 4v5h-5\"/>","notebook-text":"<path d=\"M4 5h16v14H4z\"/><path d=\"M8 9h8M8 12h8M8 15h5\"/>","menu":"<path d=\"M4 6h16M4 12h16M4 18h16\"/>","trash-2":"<path d=\"M4 7h16M10 11v6M14 11v6\"/><path d=\"M5 7l1 13h12l1-13M9 7V4h6v3\"/>","check":"<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>","arrow-right":"<path d=\"M5 12h14\"/><path d=\"M13 6l6 6-6 6\"/>","chevron-down":"<path d=\"M6 9l6 6 6-6\"/>","chevron-right":"<path d=\"M9 18l6-6-6-6\"/>","lock":"<rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 1 1 8 0v3\"/>","copy":"<rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M5 15V6a2 2 0 0 1 2-2h9\"/>","folder":"<path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>","briefcase":"<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"/>","book":"<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20\"/>","code":"<path d=\"M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14\"/>","heart":"<path d=\"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z\"/>","house":"<path d=\"M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z\"/>","lightbulb":"<path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z\"/>","flag":"<path d=\"M5 21V4M5 4h12l-2 4 2 4H5\"/>","music":"<path d=\"M9 18V5l11-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"17\" cy=\"16\" r=\"3\"/>","camera":"<path d=\"M4 8h3l2-3h6l2 3h3v11H4z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18\"/>","rocket":"<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\"/><path d=\"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"/><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/>","shopping-cart":"<path d=\"M3 4h2l2.5 11h10L20 8H7\"/><circle cx=\"9.5\" cy=\"19\" r=\"1.2\"/><circle cx=\"17\" cy=\"19\" r=\"1.2\"/>","pen-line":"<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z\"/>","message-square":"<path d=\"M5 5h14v10H10l-5 4z\"/>","arrow-down":"<path d=\"M12 5v14\"/><path d=\"M6 13l6 6 6-6\"/>","pin":"<line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"22\"/><path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z\"/>","pin-off":"<line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/><path d=\"M12 17v5\"/><path d=\"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11\"/><path d=\"M15 9.34V6h1a2 2 0 0 0 0-4H7.89\"/>","ellipsis":"<circle cx=\"5\" cy=\"12\" r=\"1.7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"1.7\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"19\" cy=\"12\" r=\"1.7\" fill=\"currentColor\" stroke=\"none\"/>","sparkles":"<path d=\"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z\"/><path d=\"M19 16v4M17 18h4\"/>","folder-plus":"<path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M12 11v5M9.5 13.5h5\"/>","square-check":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"4\"/><path d=\"M8.5 12.5l2.4 2.4 4.6-5\"/>","ban":"<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M6 6l12 12\"/>","square":"<path d=\"M7 7h10v10H7z\" fill=\"currentColor\" stroke=\"none\"/>","sliders-horizontal":"<path d=\"M4 7h9M17 7h3M4 17h3M11 17h9\"/><circle cx=\"15\" cy=\"7\" r=\"2\"/><circle cx=\"9\" cy=\"17\" r=\"2\"/>","x":"<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>","shield":"<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/>","users":"<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6\"/><circle cx=\"17\" cy=\"9\" r=\"2.5\"/><path d=\"M17 14c2.5 0 4.5 1.8 4.5 4.5\"/>","chart-column":"<path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/>","list":"<path d=\"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01\"/>","monitor-x":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/><path d=\"M5 5l14 11\"/>","monitor":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/>","monitor-check":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/><path d=\"M8.5 10.5l2.5 2.5 4.5-4.5\"/>","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8.5 12.5l2.5 2.5 4.5-4.5\"/>","key-round":"<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9\"/>","shield-plus":"<path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/><path d=\"M12 9v6M9 12h6\"/>","shield-minus":"<path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/><path d=\"M9 12h6\"/>","triangle-alert":"<path d=\"M12 3l9 17H3z\"/><path d=\"M12 9v4M12 17h.01\"/>","eye":"<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","eye-off":"<path d=\"M3 3l18 18\"/><path d=\"M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.8 9.8 0 0 0 5.4-1.6\"/><path d=\"M9.9 9.9a3 3 0 0 0 4.2 4.2\"/>","link":"<path d=\"M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7\"/><path d=\"M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7\"/>","activity":"<path d=\"M3 12h4l2.5-6 4 12 2.5-6H21\"/>","wrench":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>","search":"<circle cx=\"10.8\" cy=\"10.8\" r=\"6.8\"/><path d=\"m16 16 4.5 4.5\"/>"};
const LUCIDE_DATA={"pencil":"<path d=\"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z\"/><path d=\"m15 5 4 4\"/>","calendar":"<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>","list-filter":"<path d=\"M2 5h20\"/><path d=\"M6 12h12\"/><path d=\"M9 19h6\"/>","rotate-ccw":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/>","circle-x":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/>","settings-2":"<path d=\"M14 17H5\"/><path d=\"M19 7h-9\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><circle cx=\"7\" cy=\"7\" r=\"3\"/>","settings":"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","activity":"<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"/>","arrow-down":"<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>","arrow-right":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>","ban":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M4.929 4.929 19.07 19.071\"/>","book":"<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/>","briefcase":"<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>","camera":"<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>","chart-column":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M18 17V9\"/><path d=\"M13 17V5\"/><path d=\"M8 17v-3\"/>","check":"<path d=\"M20 6 9 17l-5-5\"/>","chevron-down":"<path d=\"m6 9 6 6 6-6\"/>","chevron-right":"<path d=\"m9 18 6-6-6-6\"/>","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 9-5.5 5.5L8 12\"/>","code":"<path d=\"m16 18 6-6-6-6\"/><path d=\"m8 6-6 6 6 6\"/>","copy":"<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>","download":"<path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/>","ellipsis":"<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/>","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","eye-off":"<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\"/><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\"/><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\"/><path d=\"m2 2 20 20\"/>","flag":"<path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\"/>","folder":"<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>","folder-plus":"<path d=\"M12 10v6\"/><path d=\"M9 13h6\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/>","heart":"<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/>","house":"<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>","key-round":"<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>","lightbulb":"<path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>","list":"<path d=\"M3 5h.01\"/><path d=\"M3 12h.01\"/><path d=\"M3 19h.01\"/><path d=\"M8 5h13\"/><path d=\"M8 12h13\"/><path d=\"M8 19h13\"/>","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>","log-in":"<path d=\"m10 17 5-5-5-5\"/><path d=\"M15 12H3\"/><path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"/>","log-out":"<path d=\"m16 17 5-5-5-5\"/><path d=\"M21 12H9\"/><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>","menu":"<path d=\"M4 5h16\"/><path d=\"M4 12h16\"/><path d=\"M4 19h16\"/>","message-square":"<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/>","monitor":"<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\"/><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\"/>","monitor-check":"<path d=\"m9 10 2 2 4-4\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>","monitor-x":"<path d=\"m14.5 12.5-5-5\"/><path d=\"m9.5 12.5 5-5\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>","music":"<path d=\"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/><circle cx=\"6\" cy=\"19\" r=\"3\"/>","notebook-text":"<path d=\"M2 6h4\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M9.5 8h5\"/><path d=\"M9.5 12H16\"/><path d=\"M9.5 16H14\"/>","pen-line":"<path d=\"M13 21h8\"/><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/>","pin":"<path d=\"M12 17v5\"/><path d=\"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z\"/>","pin-off":"<path d=\"M12 17v5\"/><path d=\"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89\"/><path d=\"m2 2 20 20\"/><path d=\"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11\"/>","plus":"<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>","rocket":"<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/><path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\"/><path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\"/>","rotate-cw":"<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/>","search":"<path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/>","shield":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/>","shield-minus":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9 12h6\"/>","shield-plus":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9 12h6\"/><path d=\"M12 9v6\"/>","shopping-cart":"<path d=\"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18\"/><path d=\"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25\"/><circle cx=\"18\" cy=\"20\" r=\"2\"/><circle cx=\"8\" cy=\"20\" r=\"2\"/>","sliders-horizontal":"<path d=\"M10 5H3\"/><path d=\"M12 19H3\"/><path d=\"M14 3v4\"/><path d=\"M16 17v4\"/><path d=\"M21 12h-9\"/><path d=\"M21 19h-5\"/><path d=\"M21 5h-7\"/><path d=\"M8 10v4\"/><path d=\"M8 12H3\"/>","sparkles":"<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"/><path d=\"M20 2v4\"/><path d=\"M22 4h-4\"/><circle cx=\"4\" cy=\"20\" r=\"2\"/>","square":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>","square-check":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 9-5.5 5.5L8 12\"/>","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>","sun":"<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>","trash-2":"<path d=\"M10 11v6\"/><path d=\"M14 11v6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M3 6h18\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","upload":"<path d=\"M12 3v12\"/><path d=\"m17 8-5-5-5 5\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/>","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>","wrench":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\"/>","x":"<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>"};
const nameInner=(name)=>{if(LUCIDE_DATA[name])return LUCIDE_DATA[name];try{const node=lucideNode(name);if(Array.isArray(node)&&node.every(n=>Array.isArray(n)&&typeof n[0]==='string'))return node.map(([tag,attrs])=>'<'+tag+' '+Object.entries(attrs||{}).filter(([k])=>k!=='key').map(([k,v])=>k+'="'+v+'"').join(' ')+'/>').join('')}catch(e){}return LUCIDE_FALLBACK[name]||''};
const lucideInner=(d)=>{if(typeof d==='string'&&d[0]!=='<')return nameInner(d);try{const name=LUCIDE_BY_PATH[d];const node=name?lucideNode(name):null;if(!Array.isArray(node)||!node.every(n=>Array.isArray(n)&&typeof n[0]==='string'))return d;return node.map(([tag,attrs])=>'<'+tag+' '+Object.entries(attrs||{}).filter(([k])=>k!=='key').map(([k,v])=>k+'="'+v+'"').join(' ')+'/>').join('')}catch(e){return d}};
const ic=(d,s=18,w=2)=>`<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${lucideInner(d)}</svg>`;
document.querySelectorAll("[data-icon]").forEach(el=>{el.outerHTML=ic(el.getAttribute("data-icon"),18,2)});
const I={
 copy:ic('copy',16),
 regen:ic('rotate-cw',16),
 check:ic('check',16,2.4),
 send:ic('arrow-right',22,2.6),
 chev:ic('chevron-down',14,2.4)
};
$("new").innerHTML=ic('plus',16,2.6);$("send").innerHTML=I.send;

let mem=null;
const ACCOUNT_SESSION_STORAGE_KEY="whwai.account.session.v1";let siteSchoolOverride=false;let schoolStatusReady=false;
let accountSyncFailed=false;let syncRetryDelay=0,syncRetryTimer=null;
function scheduleSyncRetry(){if(accountDisabledGate||!accountSession||!accountSession.token)return;if(syncRetryTimer!==null)clearTimeout(syncRetryTimer);syncRetryDelay=Math.min(syncRetryDelay?syncRetryDelay*2:4000,120000);syncRetryTimer=setTimeout(()=>{syncRetryTimer=null;syncAccountChatsNow()},syncRetryDelay)}
let accountSession=null,accountReady=true,accountSyncTimer=null,accountSyncing=false,accountSyncAgain=false,accountLastSync=0,accountInitialSyncPending=false,accountMergePendingToast=false;
try{const savedSession=localStorage.getItem(ACCOUNT_SESSION_STORAGE_KEY);if(savedSession&&savedSession.length<300){accountSession={token:savedSession,user:null};accountReady=false}}catch(e){}
const store={get(){try{return localStorage.getItem(KEY)}catch(e){return mem}},set(v){mem=v;try{localStorage.setItem(KEY,v)}catch(e){}}};
let canSave=true;try{localStorage.setItem(KEY+".t","1");localStorage.removeItem(KEY+".t")}catch(e){canSave=false}
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const RULES=[
 [/coffee|shop|marketing|customers|business/,`For a local coffee shop, your best marketing is usually hyper-local and relationship-driven, which is also the cheapest kind. Here are a few things worth trying:\n\n- **Start a simple loyalty program.** A punch card gives regulars a reason to come back and costs almost nothing to run.\n- **Partner with nearby businesses.** Offer a discount to employees of the office next door, or swap flyers with a bookstore or gym.\n- **Make your Google Business Profile shine.** Fresh photos, accurate hours, and steady reviews matter more than almost any ad.\n- **Post behind-the-scenes content.** Latte art and new menu items build familiarity for free.\n\nIf you only have time for two, start with the Google Business Profile and a loyalty program.`],
 [/meal|prep|dinner|lunch|cook/,`Meal prep works best when you keep it simple:\n\n- **Cook two proteins and two grains** on Sunday, then mix them all week.\n- **Chop vegetables** right after shopping so they get used.\n- **Freeze one portion** of everything as a backup.\n\nWant a shopping list for five lunches?`],
 [/python|bug|error|code|script/,`Paste the script and the full error message and I'll walk through it. In the meantime, check these first:\n\n- **The last line of the traceback** names the real problem.\n- **Indentation and typos** cause most beginner errors.\n- **Print the variable** just before the line that fails.`],
 [/resume|cv|job/,`Happy to review it. Good resumes lead with results, so for each job, swap duties for outcomes ("cut wait times by 20%" beats "answered phones"). Paste your resume and tell me the role you're aiming for.`],
 [/japan|trip|travel|tokyo|kyoto/,`Japan is great for a first visit of 10 days or so:\n\n- **Tokyo (4 nights):** neighborhoods, food, day trips.\n- **Kyoto (3 nights):** temples and gardens.\n- **Osaka (2 nights):** street food and nightlife.\n\nWhen are you thinking of going?`],
 [/stock|invest|money/,`I can explain how stocks and funds work, but I can't tell you what to buy. Tell me your time horizon and how much risk you're comfortable with and I'll lay out the common options.`],
 [/^(hi|hello|hey)\b|who are you|your name/,`Hi! I'm Aries, the model behind WHWai. Ask me about marketing, meal plans, code, or trip planning.`]
];
const FALLBACK=`That's an interesting question. This demo only knows a few topics, but the real version will answer anything. Try asking about **marketing**, **meal prep**, **Python**, **resumes**, or **a trip**.`;
function safeText(value,max=40000){return String(value==null?"":value).slice(0,max)}
function safeSources(value){
 if(!Array.isArray(value))return [];
 const out=[];const seen=new Set();
 for(const source of value){
  if(!source||typeof source!=="object")continue;
  const title=safeText(source.title,180).trim(),url=safeText(source.url,1000).trim();
  if(!title||!/^https:\/\//i.test(url)||/[\s<>"']/.test(url)||seen.has(url))continue;
  seen.add(url);out.push({title,url});if(out.length>=5)break;
 }
 return out;
}
function safeMessage(value){
 if(!value||typeof value!=="object")return null;
 const role=value.r||value.role;
 const r=(role==="u"||role==="user")?"u":((role==="a"||role==="assistant")?"a":"");
 if(!r)return null;
 const x=safeText(value.x!=null?value.x:value.content);
 const item={r,x};
 const at=Number(value.at!=null?value.at:value.timestamp);if(Number.isFinite(at)&&at>0)item.at=at;
 if(value.err)item.err=1;
 if(r==="a"){
  const sources=safeSources(value.sources);if(sources.length)item.sources=sources;
  const model=safeText(value.model,80);if(model)item.model=model;
  const thinking=safeText(value.thinking,6000);if(thinking)item.thinking=thinking;const toolList=Array.isArray(value.tools)?value.tools.filter(t=>typeof t==="string"&&/^[a-z_]{1,40}$/.test(t)).slice(0,5):[];if(toolList.length)item.tools=toolList;if(value.support)item.support=1;
 }
 return item;
}
// Chat groups: each chat belongs to one group or none. Groups are stored with the chats and sync with the account.
const GROUP_LIMIT=200,GROUP_NAME_MAX=40,GROUPS_CLOSED_KEY="whwai.groupsClosed.v1";
let closedGroups=new Set();try{const raw=JSON.parse(localStorage.getItem(GROUPS_CLOSED_KEY)||"[]");if(Array.isArray(raw))closedGroups=new Set(raw.map(String))}catch(e){}
const GROUP_COLOURS={rose:"#E0657A",amber:"#E09A2B",green:"#3FA66B",teal:"#2A9D9A",blue:"#4A7FE0",indigo:"#6C5CE7",pink:"#D65DB1",slate:"#6B7A8F"};
const GROUP_COLOUR_KEYS=Object.keys(GROUP_COLOURS);
const GROUP_ICONS={folder:'folder',star:'star',briefcase:'briefcase',book:'book',code:'code',heart:'heart',home:'house',bulb:'lightbulb',flag:'flag',music:'music',camera:'camera',globe:'globe',rocket:'rocket',cart:'shopping-cart',pen:'pen-line',chat:'message-square'};
const GROUP_ICON_KEYS=Object.keys(GROUP_ICONS);
function pickKey(map,key){return typeof key==="string"&&Object.prototype.hasOwnProperty.call(map,key)?key:""}
function hashIndex(str,n){let h=0;for(const ch of String(str))h=(h*31+ch.charCodeAt(0))|0;return Math.abs(h)%n}
function groupColourKey(g){return pickKey(GROUP_COLOURS,g.c)||GROUP_COLOUR_KEYS[hashIndex(g.id,GROUP_COLOUR_KEYS.length)]}
function groupIconKey(g){return pickKey(GROUP_ICONS,g.i)||"folder"}
function safeGroup(value){
 if(!value||typeof value!=="object")return null;
 const id=safeText(value.id,60).trim();if(!id)return null;
 const name=safeText(value.name,GROUP_NAME_MAX).replace(/\s+/g," ").trim()||"Group";
 const u=Number(value.u)||Date.now(),mu=Number(value.mu)||u;
 const colour=pickKey(GROUP_COLOURS,value.c),icon=pickKey(GROUP_ICONS,value.i);
 const group={id,name,u,mu};if(colour)group.c=colour;if(icon)group.i=icon;if(value.del)group.del=1;return group;
}
function safeGroups(items){return (Array.isArray(items)?items:[]).slice(0,2000).map(safeGroup).filter(Boolean)}
function safeChat(value){
 if(!value||typeof value!=="object")return null;
 const id=safeText(value.id,120);if(!id)return null;
 const title=safeText(value.t!=null?value.t:value.title,300);
 const created=Number(value.u!=null?value.u:value.createdAt)||Date.now();
 const chat={id,t:title||"New chat",u:created,m:[]};
 const updated=Number(value.mu!=null?value.mu:value.updatedAt);if(Number.isFinite(updated)&&updated>0)chat.mu=updated;
 if(value.auto)chat.auto=1;if(value.ended)chat.ended=1;if(value.sup)chat.sup=1;if(value.p||value.pinned)chat.p=1;
 const group=safeText(value.g,60).trim();if(group)chat.g=group;
 const model=safeText(value.model,80);if(model)chat.model=model;
 const messages=Array.isArray(value.m)?value.m:(Array.isArray(value.messages)?value.messages:[]);
 chat.m=messages.map(safeMessage).filter(Boolean);
 return chat;
}
function safeDead(value){
 if(!Array.isArray(value))return [];
 return value.filter(d=>d&&typeof d==="object"&&d.id!=null).map(d=>({id:safeText(d.id,120),mu:Number(d.mu)||0})).filter(d=>d.id&&d.mu>0).slice(-5000);
}
function safeState(value){
 const raw=value&&typeof value==="object"&&!Array.isArray(value)?value:{};
 const chats=(Array.isArray(raw.chats)?raw.chats:[]).map(safeChat).filter(Boolean);
 const model=safeText(raw.model,80);
 const state={
  chats,
  cur:raw.cur!=null&&chats.some(c=>c.id===String(raw.cur))?String(raw.cur):null,
  dead:safeDead(raw.dead),
  groups:safeGroups(raw.groups),
  model:model||"aries-1",
  col:!!raw.col
 };
 chats.forEach(c=>{if(!c.model)c.model="aries-1"});
 return state;
}
let S=null;
try{S=safeState(JSON.parse(store.get()||"null"))}catch(e){S=safeState(null)}
try{store.set(JSON.stringify(S))}catch(e){}
let availableModels=[{id:"aries-1",name:"Aries",description:"Best for quick, straightforward reasoning and everyday questions."}];
const clean=()=>({chats:S.chats.map(safeChat).filter(Boolean),dead:safeDead(S.dead),groups:safeGroups(S.groups)});
const persistedState=()=>({
 chats:clean().chats,
 cur:S.cur&&S.chats.some(c=>c.id===S.cur)?S.cur:null,
 dead:clean().dead,
 groups:clean().groups,
 model:safeText(S.model||"aries-1",80),
 col:!!S.col
});
let localRevision=0;
const save=ns=>{localRevision++;store.set(JSON.stringify(persistedState()));if(!ns&&accountSession&&accountSession.token&&!(accountSession.user&&accountSession.user.mustChange))scheduleAccountSync()};
let repairedTitle=false;
S.chats.forEach(c=>{
 if(!c||!Array.isArray(c.m)||!/^NO_TITLE[.!]*$/i.test(String(c.t||"")))return;
 const firstUser=c.m.find(m=>m&&m.r==="u"&&String(m.x||"").trim());
 if(firstUser){c.t=makeTitle(firstUser.x);c.auto=1;repairedTitle=true}
});
if(repairedTitle)save(true);
const C=()=>S.chats.find(c=>c.id===S.cur)||null;
const sorted=()=>[...S.chats].sort((a,b)=>(b.p?1:0)-(a.p?1:0)||b.u-a.u);
const searchInput=$("chat-search"),searchClear=$("chat-search-clear");
function normalizeSearch(value){return String(value||"").toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim()}
function countOccurrences(text,term){if(!term)return 0;let count=0,at=0;while((at=text.indexOf(term,at))!==-1&&count<20){count++;at+=Math.max(1,term.length)}return count}
function scoreChat(chat,query){
 const q=normalizeSearch(query);if(!q)return 0;
 const title=normalizeSearch(chat.t),messages=normalizeSearch((chat.m||[]).map(m=>m.x||"").join(" ")),terms=[...new Set(q.split(/\s+/).filter(Boolean))];
 if(!terms.length)return 0;let score=0;
 if(title===q)score+=180;else if(title.startsWith(q))score+=100;else if(title.includes(q))score+=65;
 if(messages.includes(q)){const pos=messages.indexOf(q);score+=42+Math.max(0,12-Math.floor(pos/180))}
 let found=0;terms.forEach(term=>{const titleCount=countOccurrences(title,term),messageCount=countOccurrences(messages,term);if(titleCount||messageCount)found++;if(titleCount)score+=Math.min(titleCount,3)*22+(title.startsWith(term)?8:0);if(messageCount)score+=Math.min(messageCount,8)*4+Math.max(0,7-Math.floor(messages.indexOf(term)/250));});
 if(found===terms.length)score+=35;else if(found>1)score+=found*3;
 const words=(title+" "+messages).split(" ");if(!terms.every(t=>words.some(w=>w.startsWith(t))))return 0;
 return score;
}
function searchSnippet(chat,query){
 const q=normalizeSearch(query),terms=q.split(/\s+/).filter(Boolean),messages=(chat.m||[]).map(m=>String(m.x||""));
 let candidate=messages.find(text=>normalizeSearch(text).includes(q));
 if(!candidate)candidate=messages.find(text=>{const n=normalizeSearch(text);return terms.some(term=>n.includes(term))});
 if(!candidate)return "Title match · Updated "+ago(chat.u);
 const normal=normalizeSearch(candidate);let at=normal.indexOf(q);if(at<0){const positions=terms.map(t=>normal.indexOf(t)).filter(n=>n>=0);at=positions.length?Math.min(...positions):0}
 const original=candidate;let start=Math.max(0,at-42),end=Math.min(original.length,start+118);if(end-start<118)start=Math.max(0,end-118);return (start>0?"…":"")+original.slice(start,end).replace(/\s+/g," ").trim()+(end<original.length?"…":"");
}

const chatEl=$("chat"),ta=$("in"),orb=$("orb"),list=$("list"),sendBtn=$("send");
let listFadeNext=false,chatFadeNext=false;
let busy=false,activeAnswerController=null,responseWasStopped=false,answerRunId=0;
if(LOGO)document.querySelectorAll(".logo,.expand").forEach(l=>l.style.background="url("+LOGO+") center/cover no-repeat");

const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const CHART_PALETTE=["#3b6fd8","#d9782b","#2f9a66","#c94f7c","#7b5ea7","#2a9db5","#b8a22a","#6b6b6b"];
// Picks a round step so the axis has five gridlines above zero that reach the largest value, e.g. 210 -> step 50, top 250.
function niceScale(v){const steps=[];for(let k=-6;k<=12;k++){const q=Math.pow(10,k);[1,2,2.5,5].forEach(m=>steps.push(m*q))}const step=steps.find(x=>5*x>=v)||v/5;return {max:5*step,step:step}}
function fmtN(v){return String(Math.round(v*100)/100)}
function chartSvg(type,labels,series){
 if(type==="bar"&&(labels.length>5||labels.some(l=>l.length>10)))type="hbar";
 const W=320,max=Math.max(0,...series.flatMap(s=>s.values.filter(v=>!isNaN(v))))||1,sc=niceScale(max),nm=sc.max;
 const pos=series.flatMap(s=>s.values).filter(v=>v>0),minP=pos.length?Math.min(...pos):1,maxP=pos.length?Math.max(...pos):1,useLog=pos.length>1&&maxP/minP>50;
 const frac=v=>{if(isNaN(v))return 0;v=Math.max(0,v);return useLog?Math.log10(v/minP+1)/Math.log10(maxP/minP+1):v/nm};
 const logNote=useLog&&type!=="donut"?'<p class="sm chart-note">Bar lengths use a log scale because the values differ widely. Labels show the exact numbers.</p>':"";
 if(type==="donut"){
  const vals=series[0].values,total=vals.reduce((a,b)=>a+Math.max(0,b),0)||1;let a0=-Math.PI/2,paths="";
  vals.forEach((v,i)=>{if(v<=0)return;const a1=a0+2*Math.PI*v/total,lg=a1-a0>Math.PI?1:0;const P=(r,a)=>[(90+r*Math.cos(a)).toFixed(2),(90+r*Math.sin(a)).toFixed(2)];const[x0,y0]=P(80,a0),[x1,y1]=P(80,a1),[xi1,yi1]=P(50,a1),[xi0,yi0]=P(50,a0);paths+='<path d="M'+x0+" "+y0+"A80 80 0 "+lg+" 1 "+x1+" "+y1+"L"+xi1+" "+yi1+"A50 50 0 "+lg+" 0 "+xi0+" "+yi0+'Z" fill="'+CHART_PALETTE[i%8]+'"/>';a0=a1});
  return '<svg viewBox="0 0 180 180" class="chart-svg chart-donut" aria-hidden="true">'+paths+"</svg>";
 }
 if(type==="hbar"){
  const WRAP=24;
  const wrapLabel=t=>{const out=[];let cur="";String(t).split(/\s+/).forEach(word=>{if(word.length>WRAP){if(cur){out.push(cur);cur=""}for(let k=0;k<word.length;k+=WRAP)out.push(word.slice(k,k+WRAP));return}if(cur&&cur.length+1+word.length>WRAP){out.push(cur);cur=word}else cur=cur?cur+" "+word:word});if(cur)out.push(cur);return out.length?out:[""]};
  const wrapped=labels.map(wrapLabel),lineCount=Math.max(...wrapped.map(l=>l.length)),widest=Math.max(...wrapped.map(ls=>Math.max(...ls.map(l=>l.length)))),valChars=Math.max(...series.flatMap(s=>s.values.map(v=>String(fmtN(v)).length)));
  const rowH=Math.max(34,series.length*16+14,lineCount*13+14),left=Math.min(170,Math.max(70,widest*6.2+10)),valW=valChars*6.2+10,pw=W-left-valW-6,H=labels.length*rowH+8;let body="";
  labels.forEach((lab,i)=>{const y0=4+i*rowH,ls=wrapped[i],first=y0+rowH/2-(ls.length-1)*6.5+4;
   body+='<text x="0" text-anchor="start">'+ls.map((l,k)=>'<tspan x="0" y="'+(first+k*13)+'">'+esc(l)+"</tspan>").join("")+"</text>";
   series.forEach((s,j)=>{const w=pw*frac(s.values[i]),y=y0+rowH/2-series.length*8+j*16+1;body+='<rect x="'+left+'" y="'+y+'" width="'+w+'" height="14" rx="3" fill="'+CHART_PALETTE[j]+'"/><text x="'+(left+w+6)+'" y="'+(y+11)+'">'+fmtN(s.values[i])+"</text>"})});
  return '<svg viewBox="0 0 '+W+" "+H+'" class="chart-svg" aria-hidden="true">'+body+"</svg>"+logNote;
 }
 const H=220,top=10,bot=44,left=50,pw=W-left-8,ph=H-top-bot,n=labels.length,gw=pw/n;let g="",body="";
 for(let t=0;t<=5;t++){const y=top+ph*(1-t/5);g+='<line class="grid" x1="'+left+'" x2="'+(W-8)+'" y1="'+y+'" y2="'+y+'"/><text x="'+(left-6)+'" y="'+(y+3)+'" text-anchor="end">'+(useLog?"":fmtN(sc.step*t))+"</text>"}
 const step=Math.max(1,Math.ceil(Math.max(...labels.map(l=>String(l).length))*6/gw));
 labels.forEach((lab,i)=>{if(i%step)return;const lw=String(lab).length*6.2/2+2,lx=Math.min(Math.max(left+gw*i+gw/2,lw),W-lw);body+='<text x="'+lx+'" y="'+(H-bot+16)+'" text-anchor="middle">'+esc(lab)+"</text>"});
 if(type==="bar"){const bw=Math.min(30,gw*0.6/series.length),widest=Math.max(...series.flatMap(s=>s.values.map(v=>String(fmtN(v)).length))),labelsOn=series.length===1&&gw>=widest*6.2+4;series.forEach((s,j)=>s.values.forEach((v,i)=>{const h=ph*0.86*frac(v),x=left+gw*i+gw/2-series.length*bw/2+j*bw,cx=x+(bw-2)/2+1,ly=top+ph-h-5;body+='<rect x="'+(x+1)+'" y="'+(top+ph-h)+'" width="'+(bw-2)+'" height="'+h+'" rx="2" fill="'+CHART_PALETTE[j]+'"/>';if(labelsOn)body+='<text x="'+cx+'" y="'+ly+'" text-anchor="middle">'+fmtN(v)+"</text>"}))}
 else{series.forEach((s,j)=>{const segs=[];let cur=[];s.values.forEach((v,i)=>{if(isNaN(v)){if(cur.length)segs.push(cur);cur=[];return}cur.push([left+gw*i+gw/2,top+ph-ph*frac(v)])});if(cur.length)segs.push(cur);segs.forEach(pts=>{if(pts.length>1)body+='<polyline fill="none" stroke="'+CHART_PALETTE[j]+'" stroke-width="2.5" points="'+pts.map(p=>p.join(",")).join(" ")+'"/>';body+=pts.map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="'+CHART_PALETTE[j]+'"/>').join("")})})}
 return '<svg viewBox="0 0 '+W+" "+H+'" class="chart-svg" aria-hidden="true">'+g+body+"</svg>"+logNote;
}
function chartBlockHtml(raw,closed){
 if(!closed)return '<p class="sm chart-pending">Drawing chart…</p>';
 const fallback='<div class="chart-bad" role="status"><p class="sm">This chart could not be drawn.</p><button type="button" class="pbtn chart-retry">Regenerate response</button></div>';
 let c;try{c=JSON.parse(raw)}catch(e){return fallback}
 if(c&&c.type==="pie"){c.type="donut";if(!c.series&&Array.isArray(c.values))c.series=[{name:"Share",values:c.values}]}
 if(c&&["scatter","radar"].indexOf(c.type)!==-1)return '<div class="chart-bad" role="note"><p class="sm">This chart type is not supported here. Ask for a bar, line or donut chart instead.</p></div>';
 if(!c||["bar","hbar","line","donut"].indexOf(c.type)===-1||!Array.isArray(c.labels)||!c.labels.length||c.labels.length>24||!Array.isArray(c.series)||!c.series.length||c.series.length>3)return fallback;
 const labels=c.labels.map(x=>String(x).slice(0,120));
 const series=c.series.map(s=>({name:String(s&&s.name||"").slice(0,40),values:Array.isArray(s&&s.values)?s.values.map(v=>v===null||v===""||v===undefined?NaN:Number(v)):[]}));
 if(series.some(s=>s.values.length!==labels.length||s.values.some(v=>isNaN(v)?c.type!=="line":!isFinite(v)))||(c.type==="donut"&&series[0].values.some(v=>v<0)))return fallback;
 if(series.every(s=>s.values.every(v=>v===series[0].values[0])))return "";
 const title=String(c.title||"").slice(0,120);
 const legend=c.type==="donut"?'<ul class="chart-legend">'+labels.map((l,i)=>'<li><span class="swatch" style="background:'+CHART_PALETTE[i%8]+'"></span>'+esc(l)+" — "+fmtN(series[0].values[i])+"</li>").join("")+"</ul>":(series.length>1?'<ul class="chart-legend">'+series.map((s,j)=>'<li><span class="swatch" style="background:'+CHART_PALETTE[j]+'"></span>'+esc(s.name)+"</li>").join("")+"</ul>":"");
 const head="<tr><th></th>"+series.map(s=>"<th>"+esc(s.name)+"</th>").join("")+"</tr>";
 const rows=labels.map((l,i)=>"<tr><th>"+esc(l)+"</th>"+series.map(s=>"<td>"+(isNaN(s.values[i])?"—":fmtN(s.values[i]))+"</td>").join("")+"</tr>").join("");
 return '<figure class="chart" role="group" aria-label="'+esc(title)+'"><figcaption>'+esc(title)+'</figcaption><div class="chart-actions"><button type="button" class="chart-act" data-act="copy" aria-label="Copy image" title="Copy image">'+I.copy+'</button></div>'+chartSvg(c.type,labels,series)+legend+'<div class="tbl-wrap"><table class="chart-data"><thead>'+head+"</thead><tbody>"+rows+"</tbody></table></div></figure>";
}
// Draws a chart's SVG onto a white canvas at 2x and returns a PNG blob (title and legend included, legend wrapped to fit).
function chartPng(fig){
 return new Promise((resolve,reject)=>{
  const svg=fig.querySelector("svg.chart-svg");if(!svg){reject(new Error("no chart"));return}
  const vb=(svg.getAttribute("viewBox")||"0 0 320 220").split(/\s+/).map(Number),sw=vb[2],sh=vb[3],k=3;
  const cap=fig.querySelector("figcaption"),title=cap?cap.textContent:"",legend=fig.querySelector(".chart-legend");
  const items=legend?[...legend.querySelectorAll("li")].map(li=>({t:li.textContent,c:(li.querySelector(".swatch")||{}).style?li.querySelector(".swatch").style.backgroundColor||"#888":"#888"})):[];
  const ink="#222222";
  const clone=svg.cloneNode(true);clone.setAttribute("xmlns","http://www.w3.org/2000/svg");clone.setAttribute("width",sw*k);clone.setAttribute("height",sh*k);
  clone.querySelectorAll("text").forEach(t=>{if(!t.getAttribute("fill"))t.setAttribute("fill",ink);t.setAttribute("font-family","Arial,sans-serif");t.setAttribute("font-size","11")});
  clone.querySelectorAll(".grid").forEach(l=>{l.setAttribute("stroke","#888");l.setAttribute("stroke-opacity","0.35")});
  const pad=16*k,titleH=30*k,svgW=sw*k,svgH=sh*k,sq=10*k,gap=16*k;
  const mctx=document.createElement("canvas").getContext("2d");
  mctx.font="600 "+(13*k)+"px Arial,sans-serif";const titleW=mctx.measureText(title).width;
  mctx.font=(12*k)+"px Arial,sans-serif";
  const itemW=t=>sq+4*k+mctx.measureText(t).width;
  const lines=[];let cur=[],curW=0;
  items.forEach(it=>{const w=itemW(it.t);if(cur.length&&curW+gap+w>svgW){lines.push(cur);cur=[];curW=0}curW+=(cur.length?gap:0)+w;cur.push(it)});
  if(cur.length)lines.push(cur);
  const legH=lines.length?lines.length*18*k+8*k:0;
  const contentW=Math.max(svgW,titleW);
  const noteEl=fig.querySelector(".chart-note"),noteText=noteEl?noteEl.textContent.trim():"",noteLines=[];
  if(noteText){let line="";noteText.split(/\s+/).forEach(w=>{const t=line?line+" "+w:w;if(line&&mctx.measureText(t).width>contentW){noteLines.push(line);line=w}else line=t});if(line)noteLines.push(line)}
  const noteH=noteLines.length?(noteLines.length*16+10)*k:0;
  const canvas=document.createElement("canvas");canvas.width=Math.ceil(contentW+pad*2);canvas.height=Math.ceil(pad+titleH+svgH+legH+noteH+pad);
  const ctx=canvas.getContext("2d");ctx.fillStyle="#ffffff";ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#222222";ctx.font="600 "+(13*k)+"px Arial,sans-serif";ctx.fillText(title,pad,pad+18*k);
  const xml=new XMLSerializer().serializeToString(clone),url=URL.createObjectURL(new Blob([xml],{type:"image/svg+xml"})),img=new Image();
  img.onload=()=>{
   ctx.drawImage(img,pad,pad+titleH,svgW,svgH);
   ctx.font=(12*k)+"px Arial,sans-serif";
   lines.forEach((line,li)=>{let x=pad;const y=pad+titleH+svgH+(18*li+18)*k;
    line.forEach((it,i)=>{if(i)x+=gap;ctx.fillStyle=it.c;ctx.fillRect(x,y-sq+2*k,sq,sq);ctx.fillStyle="#444444";ctx.fillText(it.t,x+sq+4*k,y);x+=sq+4*k+ctx.measureText(it.t).width}) });
   ctx.fillStyle="#444444";noteLines.forEach((t,ni)=>ctx.fillText(t,pad,pad+titleH+svgH+legH+(16*ni+14)*k));
   URL.revokeObjectURL(url);canvas.toBlob(b=>b?resolve(b):reject(new Error("png")),"image/png")};
  img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error("svg"))};
  img.src=url;
 });
}
document.addEventListener("click",e=>{
 const b=e.target.closest&&e.target.closest(".chart-act");if(!b)return;
 const fig=b.closest(".chart");if(!fig)return;
 const flash=t=>{setIcon(b,t);setTimeout(()=>{if(b.isConnected)setIcon(b,I.copy)},1200)};
 if(!navigator.clipboard||!window.ClipboardItem){flash(I.copy);return}
 try{navigator.clipboard.write([new ClipboardItem({"image/png":chartPng(fig)})]).then(()=>flash(I.check)).catch(()=>{})}catch(err){}
});
// Wraps chart JSON that arrives without its fence, so it still draws. Skips anything inside a code fence.
function fenceBareCharts(text){
 let out="",i=0,m;const re=/\{\s*"type"\s*:\s*"(?:bar|hbar|line|donut)"/g;
 while((m=re.exec(text))){
  if((text.slice(0,m.index).match(/```/g)||[]).length%2===1)continue;
  let depth=0,inStr=false,j=m.index,done=false;
  for(;j<text.length;j++){const ch=text[j];
   if(inStr){if(ch==="\\"){j++;continue}if(ch==='"')inStr=false;continue}
   if(ch==='"')inStr=true;else if(ch==="{")depth++;else if(ch==="}"){depth--;if(depth===0){done=true;break}}}
  if(!done)continue;
  out+=text.slice(i,m.index)+"\n```chart\n"+text.slice(m.index,j+1)+"\n```\n";i=j+1;re.lastIndex=j+1;
 }
 return out+text.slice(i);
}
function md(s){
 const text=fenceBareCharts(String(s||"").replace(/```[ \t]*\n[ \t]*chart[ \t]*\n/gi,"```chart\n").replace(/```[ \t]*\n(\{\s*"type"[\s\S]*?\})[ \t]*\n```/g,"```chart\n$1\n```"));let out="",last=0,m;const re=/```chart[ \t]*\n([\s\S]*?)(```|$)/g;
 const seenCharts=new Set();
 while((m=re.exec(text))){out+=mdCore(text.slice(last,m.index));const key=m[1].replace(/\s+/g,"");if(m[2]==="```"&&seenCharts.has(key)){last=re.lastIndex;continue}if(m[2]==="```")seenCharts.add(key);out+=chartBlockHtml(m[1],m[2]==="```");last=re.lastIndex}
 return out+mdCore(text.slice(last));
}
// Maths: a small built-in renderer for common LaTeX (no external scripts or fonts), so formulas show as formatted maths.
const TEX_SYM={alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",varepsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",vartheta:"ϑ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",pi:"π",varpi:"ϖ",rho:"ρ",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",varphi:"φ",chi:"χ",psi:"ψ",omega:"ω",Gamma:"Γ",Delta:"Δ",Theta:"Θ",Lambda:"Λ",Xi:"Ξ",Pi:"Π",Sigma:"Σ",Upsilon:"Υ",Phi:"Φ",Psi:"Ψ",Omega:"Ω",cdot:"·",times:"×",div:"÷",pm:"±",mp:"∓",le:"≤",leq:"≤",ge:"≥",geq:"≥",ne:"≠",neq:"≠",approx:"≈",equiv:"≡",sim:"∼",propto:"∝",infty:"∞",to:"→",rightarrow:"→",leftarrow:"←",gets:"←",Rightarrow:"⇒",Leftarrow:"⇐",leftrightarrow:"↔",Leftrightarrow:"⇔",implies:"⇒",iff:"⇔",sum:"∑",prod:"∏",int:"∫",oint:"∮",partial:"∂",nabla:"∇",in:"∈",notin:"∉",subset:"⊂",subseteq:"⊆",supset:"⊃",cup:"∪",cap:"∩",emptyset:"∅",forall:"∀",exists:"∃",neg:"¬",lnot:"¬",land:"∧",lor:"∨",ldots:"…",dots:"…",cdots:"⋯",vdots:"⋮",ddots:"⋱",prime:"′",circ:"∘",degree:"°",angle:"∠",perp:"⊥",parallel:"∥",hbar:"ℏ",ell:"ℓ",mid:"∣",langle:"⟨",rangle:"⟩",lfloor:"⌊",rfloor:"⌋",lceil:"⌈",rceil:"⌉",aleph:"ℵ",Re:"ℜ",Im:"ℑ",star:"⋆",bullet:"•",ast:"∗",oplus:"⊕",otimes:"⊗"};
const TEX_FUNCS=new Set(["sin","cos","tan","cot","sec","csc","arcsin","arccos","arctan","sinh","cosh","tanh","log","ln","lg","exp","min","max","lim","det","dim","ker","gcd","arg","sup","inf","deg","Pr"]);
const TEX_TEXT=new Set(["text","textrm","mathrm","textnormal","mbox","mathsf","mathtt"]);
const TEX_BOLD=new Set(["mathbf","textbf","bm","boldsymbol","mathbb"]);
const TEX_ACCENT={hat:"̂",bar:"̄",vec:"⃗",tilde:"̃",dot:"̇",ddot:"̈"};
const TEX_ENV_BRACKETS={pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["{","}"],vmatrix:["|","|"],Vmatrix:["‖","‖"],cases:["{",""],matrix:["",""],array:["",""],aligned:["",""],align:["",""],gathered:["",""]};
const hasOwn=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
function texCore(source){
 const s=String(source);
 let i=0;
 let seqFn,atomFn;
 const skipSpace=()=>{while(i<s.length&&/\s/.test(s[i]))i++};
 const readName=()=>{const m=/^[a-zA-Z]+|^[\s\S]/.exec(s.slice(i));if(!m)return"";i+=m[0].length;return m[0]};
 const argRaw=()=>{
  skipSpace();
  if(s[i]!=="{"){const c=s[i]||"";i++;return c}
  const start=i+1;let depth=0;
  while(i<s.length){const c=s[i];if(c==="\\"){i+=2;continue}if(c==="{")depth++;else if(c==="}"){depth--;if(depth===0){const out=s.slice(start,i);i++;return out}}i++}
  return s.slice(start);
 };
 const argGroup=()=>{skipSpace();if(s[i]==="{"){i++;return seqFn(true)}return atomFn()};
 const command=()=>{
  const name=readName();
  if(hasOwn(TEX_SYM,name))return esc(TEX_SYM[name]);
  if(TEX_FUNCS.has(name))return '<span class="tm-fn">'+esc(name)+'</span>';
  if(name===","||name===";"||name===":"||name===" "||name==="quad"||name==="qquad")return " ";
  if(name==="!")return "";
  if(name==="\\")return "<br>";
  if(name==="left"||name==="right"||name==="big"||name==="Big"||name==="bigg"||name==="Bigg"||name==="bigl"||name==="bigr"||name==="Bigl"||name==="Bigr"){if(s[i]==="."){i++}return ""}
  if(name==="{"||name==="}"||name==="%"||name==="$"||name==="&"||name==="#"||name==="_")return esc(name);
  if(name==="|")return "‖";
  if(name==="frac"||name==="dfrac"||name==="tfrac"){const num=argGroup(),den=argGroup();return '<span class="tm-frac"><span class="tm-num">'+num+'</span><span class="tm-den">'+den+'</span></span>'}
  if(name==="sqrt"){
   skipSpace();let idx="";
   if(s[i]==="["){const end=s.indexOf("]",i);if(end>i){idx=texToHtml(s.slice(i+1,end));i=end+1}}
   const body=argGroup();
   return '<span class="tm-sqrt">'+(idx?'<sup class="tm-root">'+idx+'</sup>':'')+'√<span class="tm-rad">'+body+'</span></span>';
  }
  if(TEX_TEXT.has(name))return esc(argRaw());
  if(TEX_BOLD.has(name))return "<b>"+esc(argRaw())+"</b>";
  if(name==="operatorname")return '<span class="tm-fn">'+esc(argRaw())+'</span>';
  if(hasOwn(TEX_ACCENT,name)){const base=argGroup();return base+TEX_ACCENT[name]}
  if(name==="overline")return '<span class="tm-over">'+argGroup()+'</span>';
  if(name==="underline")return '<span class="tm-under">'+argGroup()+'</span>';
  if(name==="boxed")return '<span class="tm-box">'+argGroup()+'</span>';
  if(name==="binom"||name==="dbinom"||name==="tbinom"){const a=argGroup(),b=argGroup();return '<span class="tm-paren">(</span><span class="tm-stack"><span class="tm-stk">'+a+'</span><span class="tm-stk">'+b+'</span></span><span class="tm-paren">)</span>'}
  if(name==="begin"){
   const env=argRaw();const end="\\end{"+env+"}";
   const stop=s.indexOf(end,i);const body=stop<0?s.slice(i):s.slice(i,stop);i=stop<0?s.length:stop+end.length;
   const rawRows=body.split("\\\\");if(rawRows.length&&!rawRows[rawRows.length-1].trim())rawRows.pop();
   const rows=rawRows.map(r=>r.split("&").map(c=>texToHtml(c.trim())));
   const cols=Math.max(1,...rows.map(r=>r.length));
   const cells=rows.map(r=>{while(r.length<cols)r.push("");return "<tr>"+r.map(c=>'<td class="tm-cell">'+c+'</td>').join("")+"</tr>"}).join("");
   const br=hasOwn(TEX_ENV_BRACKETS,env)?TEX_ENV_BRACKETS[env]:["",""];
   return '<span class="tm-env tm-'+esc(env)+'"><span class="tm-br">'+br[0]+'</span><table class="tm-grid"><tbody>'+cells+'</tbody></table><span class="tm-br">'+br[1]+'</span></span>';
  }
  if(name==="end"){argRaw();return ""}
  return '<span class="tm-raw">\\'+esc(name)+'</span>';
 };
 atomFn=()=>{
  const c=s[i];
  if(c===undefined||c==="}")return "";
  if(c==="{"){i++;return "<span>"+seqFn(true)+"</span>"}
  if(c==="^"||c==="_"){i++;return ""}
  if(c==="~"){i++;return " "}
  if(c==="\\"){i++;return command()}
  i++;return esc(c);
 };
 seqFn=closing=>{
  let out="";
  while(i<s.length){
   if(s[i]==="}"){i++;if(closing)return out;continue}
   let base=atomFn();
   let sup="",sub="";
   for(;;){
    const save=i;skipSpace();
    if(s[i]==="^"){i++;sup+=argGroup()}
    else if(s[i]==="_"){i++;sub+=argGroup()}
    else{i=save;break}
   }
   if(sup||sub)base='<span class="tm-sc">'+base+(sup?'<sup>'+sup+'</sup>':'')+(sub?'<sub>'+sub+'</sub>':'')+'</span>';
   out+=base;
  }
  return out;
 };
 return seqFn(false);
}
function texToHtml(source){try{return texCore(source)}catch(e){return esc(source)}}
function mdCore(s){
 const maths=[];
 // Pulls out maths first so its backslashes and symbols are not touched by the text rules below.
 const protectMath=t=>{
  const put=(src,display0)=>{const display=display0||/\\begin\{/.test(src);maths.push({display,html:display?'<div class="tm-block">'+texToHtml(src)+'</div>':'<span class="tm-inline">'+texToHtml(src)+'</span>'});return "\u0002"+(maths.length-1)+"\u0002"};
  return t
   .replace(/\$\$([\s\S]+?)\$\$/g,(_,m)=>put(m,true))
   .replace(/\\\[([\s\S]+?)\\\]/g,(_,m)=>put(m,true))
   .replace(/\\\(([\s\S]+?)\\\)/g,(_,m)=>put(m,false))
   .replace(/(^|[^\\\w$])\$(?=\S)([^$\n]*?\S)\$(?!\d)/g,(_,pre,m)=>pre+put(m,false));
 };
 const normalize=t=>protectMath(String(t||"")
  .replace(/\r\n?/g,"\n")
  .replace(/&(?:#x0*20|#0*32|nbsp);/gi," ")
  .replace(/[ \t]*\\[ \t]*(?=\n|$)/g,"")
  .replace(/(^|\n)[ \t]*\\([*-])[ \t]+/g,"$1$2 ")
  .replace(/\\([*_`-])/g,"$1"));
 const inl=t=>{
  const codes=[];
  let x=esc(t).replace(/`([^`\n]+)`/g,(_,c)=>{codes.push(c);return "\u0003"+(codes.length-1)+"\u0003"});
  x=x.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")
   .replace(/(^|[^*\w])\*([^*\n]+?)\*(?![*\w])/g,"$1<em>$2</em>")
   .replace(/~~(.+?)~~/g,"<del>$1</del>")
   .replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)"'<>]+)\)/g,(_,txt,url)=>'<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+txt+'</a>');
  return x.replace(/\u0003(\d+)\u0003/g,(_,k)=>"<code>"+codes[k]+"</code>");
 };
 const listHtml=items=>{
  let out="";const stack=[];
  const open=it=>{const tag=it.ord?"ol":"ul";stack.push({ind:it.ind,tag});return "<"+tag+"><li>"+inl(it.text)};
  items.forEach(it=>{
   const tag=it.ord?"ol":"ul";
   if(!stack.length){out+=open(it);return}
   if(it.ind>stack[stack.length-1].ind){out+=open(it);return}
   while(stack.length&&it.ind<stack[stack.length-1].ind)out+="</li></"+stack.pop().tag+">";
   if(!stack.length){out+=open(it);return}
   if(stack[stack.length-1].tag!==tag){out+="</li></"+stack.pop().tag+">";out+=open(it);return}
   out+="</li><li>"+inl(it.text)+"";
  });
  while(stack.length)out+="</li></"+stack.pop().tag+">";
  return out;
 };
 const tableHtml=lines=>{const cells=l=>l.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(c=>c.trim());return '<div class="tbl-wrap"><table><thead><tr>'+cells(lines[0]).map(h=>"<th>"+inl(h)+"</th>").join("")+"</tr></thead><tbody>"+lines.slice(2).map(r=>"<tr>"+cells(r).map(c=>"<td>"+inl(c)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>"};
 const blocks=t=>{const tbls=[];t=t.replace(/(^|\n)((?:[ \t]*\|[^\n]*(?:\n|$))+)/g,(all,pre,body)=>{const lines=body.trim().split("\n");if(lines.length<2||!/^\s*\|?\s*:?-{2,}/.test(lines[1]))return all;tbls.push(tableHtml(lines));return pre+"\n\n\u0001"+(tbls.length-1)+"\n\n"});return t.split(/\n\n+/).filter(b=>b.trim()).map(b=>{
  const html=[];let para=[],items=[],quote=[];
  const flushPara=()=>{if(para.length){html.push("<p>"+para.map(inl).join("<br>")+"</p>");para=[]}};
  const flushList=()=>{if(items.length){html.push(listHtml(items));items=[]}};
  const flushQuote=()=>{if(quote.length){html.push("<blockquote>"+quote.map(inl).join("<br>")+"</blockquote>");quote=[]}};
  const flushAll=()=>{flushPara();flushList();flushQuote()};
  b.split("\n").forEach(line=>{
   const lm=/^([ \t]*)([-*+]|\d+[.)])[ \t]+(.*)$/.exec(line);
   if(/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)){flushAll();html.push("<hr>")}
   else if(/^\s*#{1,6}\s+/.test(line)){flushAll();const lvl=line.match(/^\s*(#+)/)[1].length;const tag=lvl<=2?"h3":"h4";html.push("<"+tag+">"+inl(line.replace(/^\s*#{1,6}\s+/,"").trim())+"</"+tag+">")}
   else if(/^\s*>/.test(line)){flushPara();flushList();quote.push(line.replace(/^\s*>\s?/,""))}
   else if(/^\s*\u0002\d+\u0002\s*$/.test(line)&&maths[+line.trim().slice(1,-1)]&&maths[+line.trim().slice(1,-1)].display){flushAll();html.push(line.trim())}
   else if(lm){flushPara();flushQuote();items.push({ind:lm[1].replace(/\t/g,"  ").length,ord:/\d/.test(lm[2]),text:lm[3]})}
   else if(!line.trim()){}
   else if(items.length&&/^\s+\S/.test(line)){items[items.length-1].text+=" "+line.trim()}
   else{flushList();flushQuote();para.push(line)}
  });
  flushAll();return html.join("");
 }).join("").replace(/<p>\u0001(\d+)<\/p>/g,(_,i)=>tbls[i]).replace(/\u0001(\d+)/g,(_,i)=>tbls[i])};
 return String(s||"").split(/```[\w+-]*\n?([\s\S]*?)(?:```|$)/).map((p,i)=>i%2?'<div class="codeblock"><button class="code-copy" type="button" aria-label="Copy code" title="Copy code">'+I.copy+'</button><pre><code>'+esc(p.replace(/\n+$/,""))+'</code></pre></div>':blocks(normalize(p))).join("").replace(/\u0002(\d+)\u0002/g,(_,k)=>maths[k]?maths[k].html:"");
}
function ago(t){
 const m=Math.floor((Date.now()-t)/MIN);
 if(m<1)return"just now";if(m<60)return m+(m===1?" minute ago":" minutes ago");
 const h=Math.floor(m/60);if(h<24)return h+(h===1?" hour ago":" hours ago");
 const d=Math.floor(h/24);if(d<7)return d+(d===1?" day ago":" days ago");
 return new Date(t).toLocaleDateString();
}
function sleepUntilAbort(ms,signal){return new Promise(resolve=>{
 let done=false;const finish=()=>{if(done)return;done=true;clearTimeout(t);if(signal)signal.removeEventListener("abort",finish);resolve()};
 const t=setTimeout(finish,ms);
 if(signal){if(signal.aborted)finish();else signal.addEventListener("abort",finish,{once:true})}
})}
// The chat stays on the latest message until the reader scrolls up. Layout that settles after a render (the model bar, images, fonts) is followed.
let pinnedBottom=true,lastUserScroll=0,flickUntil=0,touchY=null;
const near=()=>chatEl.scrollHeight-chatEl.scrollTop-chatEl.clientHeight<140;
const toBottom=()=>chatEl.scrollTo({top:chatEl.scrollHeight});
const followBottom=()=>{const d=chatEl.scrollHeight-chatEl.clientHeight-chatEl.scrollTop;if(Math.abs(d)<1){chatEl.scrollTop=chatEl.scrollHeight;return}chatEl.scrollTop+=d*.3};
const nextFrame=()=>new Promise(r=>requestAnimationFrame(()=>r()));
let lastChatRenderId=null;
const jumpBtn=document.createElement("button");jumpBtn.type="button";jumpBtn.id="jump-bottom";jumpBtn.className="jump-bottom is-hidden";jumpBtn.setAttribute("aria-label","Jump to the latest message");jumpBtn.innerHTML=ic('arrow-down',18,2);
let jumpAnim=0;
// While a reply is generating, the view follows the text until the user scrolls up.
let followOn=true;
// Flicks down to the latest message: fast at first, then slows as it arrives. Any touch or wheel input stops it.
function flickToBottom(){
 cancelAnimationFrame(jumpAnim);
 const start=chatEl.scrollTop,t0=performance.now();
 const first=Math.max(0,chatEl.scrollHeight-chatEl.clientHeight-start),dur=Math.min(1000,Math.max(500,first*0.4));
 const ease=t=>1-Math.pow(1-t,4);
 const step=now=>{
  const end=Math.max(0,chatEl.scrollHeight-chatEl.clientHeight),t=Math.min(1,(now-t0)/dur);
  chatEl.scrollTop=start+(end-start)*ease(t);
  if(t<1)jumpAnim=requestAnimationFrame(step);
 };
 flickUntil=performance.now()+dur+50;
 jumpAnim=requestAnimationFrame(step);
}
["wheel","touchstart","pointerdown"].forEach(ev=>chatEl.addEventListener(ev,()=>cancelAnimationFrame(jumpAnim),{passive:true}));
chatEl.addEventListener("wheel",()=>{followOn=false},{passive:true});
chatEl.addEventListener("touchmove",()=>{followOn=false},{passive:true});
chatEl.addEventListener("scroll",()=>{if(!followOn&&near())followOn=true},{passive:true});
chatEl.addEventListener("wheel",e=>{lastUserScroll=performance.now();if(e.deltaY<0)pinnedBottom=false},{passive:true});
chatEl.addEventListener("touchstart",e=>{lastUserScroll=performance.now();touchY=e.touches[0]?e.touches[0].clientY:null},{passive:true});
chatEl.addEventListener("touchmove",e=>{const y=e.touches[0]?e.touches[0].clientY:null;if(touchY!==null&&y!==null&&y>touchY)pinnedBottom=false;touchY=y},{passive:true});
chatEl.addEventListener("keydown",()=>{lastUserScroll=performance.now()},{passive:true});
chatEl.addEventListener("scroll",()=>{
 if(chatEl.clientHeight===0)return;
 if(near())pinnedBottom=true;else if(performance.now()-lastUserScroll<500)pinnedBottom=false;
},{passive:true});
// Holds the view at the bottom while it is pinned. Skips frames during the flick and when the chat is hidden.
function keepPinned(){if(pinnedBottom&&chatEl.clientHeight>0&&performance.now()>flickUntil&&chatEl.scrollTop+chatEl.clientHeight<chatEl.scrollHeight-1)chatEl.scrollTop=chatEl.scrollHeight}
new ResizeObserver(keepPinned).observe(chatEl);
new MutationObserver(()=>requestAnimationFrame(keepPinned)).observe(chatEl,{childList:true,subtree:true,characterData:true});
chatEl.addEventListener("load",keepPinned,true);
jumpBtn.onclick=()=>flickToBottom();
// Centres the jump button above the blue orb, wherever the orb sits on this screen size.
function alignJump(){
 const orb=$("orb"),host=jumpBtn.parentElement;if(!orb||!host)return;
 const o=orb.getBoundingClientRect(),h=host.getBoundingClientRect(),w=jumpBtn.offsetWidth||40;
 jumpBtn.style.right=Math.max(0,h.right-(o.left+o.width/2)-w/2)+"px";
}
function updateJump(){if(followOn){jumpBtn.classList.add("is-hidden");return}const hide=near(),wasHidden=jumpBtn.classList.contains("is-hidden");jumpBtn.classList.toggle("is-hidden",hide);if(!hide&&wasHidden)alignJump()}
window.addEventListener("resize",alignJump);
chatEl.parentElement.appendChild(jumpBtn);
chatEl.addEventListener("scroll",updateJump,{passive:true});
// Draws a reply a little at a time, one frame at a time, so it stays smooth and never rebuilds the whole message on a timer.
async function typeOut(el,full,signal,isStale){
 cancelAnimationFrame(jumpAnim);
 const tokens=full.split(/(\s+)/),dur=Math.min(1500,Math.max(400,tokens.length*6)),step=Math.max(4,Math.ceil(tokens.length/100));
 const start=performance.now();let shown=0;
 while(shown<tokens.length){
  if(isStale()||(signal&&signal.aborted))return false;
  const target=Math.floor((performance.now()-start)/dur*tokens.length);shown=Math.min(tokens.length,Math.max(shown+1,Math.min(target,shown+step)));
  // The bubble grows with its text. Animating its height here lagged behind the text and clipped it.
  el.innerHTML=md(tokens.slice(0,shown).join(""));
  if(followOn||near())followBottom();
  updateJump();
  await nextFrame();
 }
 if(followOn){toBottom();setTimeout(()=>{if(followOn)toBottom()},260)}
 return !isStale();
}

const PIN='pin',PIN_OFF='pin-off',
 TRASH='trash-2',
 DOTS='ellipsis';
const PEN='pen-line';
const SPARK='sparkles';
let renamingId=null;
let mid=null;
const CONFIRM_DELETE_KEY="whwai.confirmDeleteChats.v1";
let lastConfirmCheckbox=false,selecting=false;const selectedIds=new Set();
function confirmDeleteEnabled(){try{return localStorage.getItem(CONFIRM_DELETE_KEY)!=="off"}catch(e){return true}}
function setConfirmDelete(on){try{if(on)localStorage.removeItem(CONFIRM_DELETE_KEY);else localStorage.setItem(CONFIRM_DELETE_KEY,"off")}catch(e){}}
function setSelecting(on){selecting=on;selectedIds.clear();list.classList.toggle("selecting",on);list.querySelectorAll(".pick.on").forEach(p=>p.classList.remove("on"));renderBulkBar()}
function selectedChats(){return S.chats.filter(c=>selectedIds.has(c.id))}
function renderBulkBar(){
 const bar=$("bulk-bar");if(!bar)return;
 const n=selectedIds.size;
 const mode=!S.chats.length&&!liveGroups().length?"none":selecting?"select":"idle";
 if(bar.dataset.mode!==mode){
  bar.dataset.mode=mode;
  if(mode==="none")bar.innerHTML="";
  else if(mode==="idle")bar.innerHTML='<div class="bulk-idle"><button type="button" id="group-new" class="bulk-icon" title="New group" aria-label="New group">'+ic('folder-plus',18,2)+'</button><button type="button" id="select-toggle" class="bulk-icon" title="Select chats" aria-label="Select chats">'+ic('square-check',18,2)+'</button></div>';
  else{bar.innerHTML='<div class="bulk-head"><span class="bulk-count"></span><button type="button" id="select-toggle" class="bulk-done" title="Done" aria-label="Done selecting">'+ic('check',18,2.4)+'</button></div><div class="bulk-actions"><button type="button" id="bulk-pin" class="bulk-icon" title="Pin" aria-label="Pin">'+ic(PIN,17)+'</button><button type="button" id="bulk-title" class="bulk-icon" title="New titles" aria-label="New titles">'+ic(SPARK,17)+'</button><button type="button" id="bulk-group" class="bulk-icon" title="Move to group" aria-label="Move to group">'+ic(FOLDER_ICON,17)+'</button><button type="button" id="bulk-delete" class="danger bulk-icon" title="Delete" aria-label="Delete">'+ic(TRASH,17)+'</button></div>';
   $("bulk-pin").onclick=bulkPin;$("bulk-title").onclick=bulkTitle;$("bulk-group").onclick=e=>{e.stopPropagation();bulkGroup()};$("bulk-delete").onclick=bulkDelete;}
  const toggle=$("select-toggle");if(toggle)toggle.onclick=()=>setSelecting(!selecting);
  const gn=$("group-new");if(gn)gn.onclick=newGroup;
 }
 if(mode==="select"){
  bar.querySelector(".bulk-count").textContent=n+" selected";
  ["bulk-pin","bulk-title","bulk-group","bulk-delete"].forEach(id=>$(id).disabled=!n);
  const picked=selectedChats(),allPinned=picked.length>0&&picked.every(c=>c.p);
  const pinBtn=$("bulk-pin"),pinLabel=allPinned?"Unpin":"Pin";if(pinBtn.title!==pinLabel){pinBtn.title=pinLabel;pinBtn.setAttribute("aria-label",pinLabel)}
 }
}
function bulkPin(){
 const picked=selectedChats();if(!picked.length)return;
 const allPinned=picked.every(c=>c.p);
 const prevP=picked.map(c=>({c,p:c.p}));picked.forEach(c=>{c.p=allPinned?0:1;touch(c);flashRow(c.id,"pin")});save();
 setSelecting(false);renderList();
}
async function bulkTitle(){
 const ids=selectedChats().map(c=>c.id);if(!ids.length)return;
 setSelecting(false);
 for(const id of ids)await retitle(id);
}
async function bulkDelete(){
 const ids=selectedChats().map(c=>c.id),n=ids.length;if(!n||busy)return;
 const accepted=await appConfirm({title:n===1?"Delete chat?":"Delete "+n+" chats?",message:"The "+(n===1?"chat and its messages":"selected chats and their messages")+" will be removed from this browser"+(accountSession&&accountSession.token?" and from your account chat history":"")+". This cannot be undone.",confirmLabel:n===1?"Delete chat":"Delete "+n+" chats",standalone:true});
 if(!accepted||busy)return;
 await fadeRowOut(ids);const goneList=[];ids.forEach(id=>{if(S.chats.some(c=>c.id===id)){const g=delChat(id);if(g)goneList.push(g)}});
 setSelecting(false);toast(n===1?"Chat deleted.":n+" chats deleted.",{undo:()=>restoreChats(goneList)});
}
const FOLDER_ICON='folder';
const MENU_STATIC=["cren","cgen","cpin","cgrp","cdel"];
let renamingGroupId=null,menuMode="chat",menuGroupId=null,menuAnchor=null,pickIds=[],pickDone=null;
function liveGroups(){return S.groups.filter(g=>!g.del).sort((a,b)=>(a.u||0)-(b.u||0)||a.id.localeCompare(b.id))}
function groupById(id){return liveGroups().find(g=>g.id===id)||null}
function saveClosedGroups(){try{localStorage.setItem(GROUPS_CLOSED_KEY,JSON.stringify([...closedGroups]))}catch(e){}}
function toggleGroup(id){
 const tile=[...list.querySelectorAll(".grp-tile")].find(t=>t.dataset.gid===id);
 let nowClosed;if(closedGroups.has(id)){closedGroups.delete(id);nowClosed=false}else{closedGroups.add(id);nowClosed=true}
 saveClosedGroups();
 if(!tile){renderList();return}
 tile.classList.toggle("is-closed",nowClosed);
 const t=tile.querySelector(".grp-toggle");if(t)t.setAttribute("aria-expanded",String(!nowClosed));
 const body=tile.querySelector(".grp-body");if(body)body.inert=nowClosed;
}
let enteringGroupId=null;
function createGroup(){
 if(liveGroups().length>=GROUP_LIMIT){toast("You can have up to "+GROUP_LIMIT+" groups.");return null}
 const now=Date.now(),used=new Set(liveGroups().map(groupColourKey));
 const colour=GROUP_COLOUR_KEYS.find(k=>!used.has(k))||GROUP_COLOUR_KEYS[liveGroups().length%GROUP_COLOUR_KEYS.length];
 const group={id:uid(),name:"New group",u:now,mu:now,c:colour,i:"folder"};
 S.groups.push(group);enteringGroupId=group.id;save();return group;
}
function renameGroup(id,name){const g=groupById(id),v=String(name||"").replace(/\s+/g," ").trim().slice(0,GROUP_NAME_MAX);if(!g||!v)return;g.name=v;g.mu=Date.now();save()}
function setGroupStyle(id,field,value){const g=groupById(id),map=field==="c"?GROUP_COLOURS:GROUP_ICONS;if(!g||!pickKey(map,value))return;g[field]=value;g.mu=Date.now();save();paintGroup(g)}
function paintGroup(g){
 const tile=[...list.querySelectorAll(".grp-tile")].find(t=>t.dataset.gid===g.id);
 if(tile){tile.style.setProperty("--gc",GROUP_COLOURS[groupColourKey(g)]);const badge=tile.querySelector(".grp-badge");if(badge){badge.innerHTML=ic(GROUP_ICONS[groupIconKey(g)],14,2);badge.classList.remove("fade-swap");void badge.offsetWidth;badge.classList.add("fade-swap")}}
 document.querySelectorAll("#cmenu .sw-btn").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.key===groupColourKey(g))));
 document.querySelectorAll("#cmenu .icon-opt").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.key===groupIconKey(g))));
}
function groupStylePanel(g){
 const wrap=document.createElement("div");wrap.className="cmenu-dyn cmenu-style";
 const label=t=>{const d=document.createElement("div");d.className="cmenu-style-label";d.textContent=t;return d};
 const colourRow=document.createElement("div");colourRow.className="cmenu-swatches";
 const iconRow=document.createElement("div");iconRow.className="cmenu-icons";
 const curC=groupColourKey(g),curI=groupIconKey(g);
 GROUP_COLOUR_KEYS.forEach(k=>{const b=document.createElement("button");b.type="button";b.className="sw-btn";b.dataset.key=k;b.style.setProperty("--sw",GROUP_COLOURS[k]);b.title=k[0].toUpperCase()+k.slice(1);b.setAttribute("aria-label","Colour: "+k);b.setAttribute("aria-pressed",String(k===curC));b.onclick=()=>setGroupStyle(g.id,"c",k);colourRow.appendChild(b)});
 GROUP_ICON_KEYS.forEach(k=>{const b=document.createElement("button");b.type="button";b.className="icon-opt";b.dataset.key=k;b.title=k;b.setAttribute("aria-label","Icon: "+k);b.setAttribute("aria-pressed",String(k===curI));b.innerHTML=ic(GROUP_ICONS[k],15,2);b.onclick=()=>setGroupStyle(g.id,"i",k);iconRow.appendChild(b)});
 wrap.append(label("Colour"),colourRow,label("Icon"),iconRow);return wrap;
}
function moveChats(ids,gid){
 let n=0;
 S.chats.forEach(c=>{if(!ids.includes(c.id))return;if((c.g||null)===(gid||null))return;if(gid)c.g=gid;else delete c.g;touch(c);n++});
 if(n)save();return n;
}
function deleteGroup(id){
 const g=groupById(id);if(!g)return;const members=S.chats.filter(c=>c.g===id).map(c=>c.id);
 S.chats.forEach(c=>{if(c.g===id){delete c.g;touch(c)}});
 g.del=1;g.mu=Date.now();closedGroups.delete(id);saveClosedGroups();save();renderList();toast("Group deleted.",{undo:()=>restoreGroup(id,members)});
}
async function confirmDeleteGroup(id){
 const g=groupById(id);if(!g)return;
 const count=S.chats.filter(c=>c.g===id).length;
 const accepted=await appConfirm({title:"Delete group?",message:"“"+g.name+"” will be removed. "+(count?(count===1?"Its chat":"Its "+count+" chats")+" will stay in your list without a group.":"It has no chats, so nothing else changes.")+" This cannot be undone.",confirmLabel:"Delete group",standalone:true});
 if(accepted&&groupById(id))deleteGroup(id);
}
function focusGroupRename(){const i=list.querySelector(".grp .rn");if(i){i.focus();i.select()}}
function groupHead(g,count,closed){
 const h=document.createElement("div");h.className="grp"+(closed?" is-closed":"");
 if(renamingGroupId===g.id){
  const i=document.createElement("input");i.className="rn";i.value=g.name;i.maxLength=GROUP_NAME_MAX;i.setAttribute("aria-label","Group name");
  let done=0;
  const fin=ok=>{if(done)return;done=1;const v=i.value.trim();if(ok&&v)renameGroup(g.id,v);renamingGroupId=null;renderList()};
  i.onkeydown=ev=>{if(ev.isComposing)return;if(ev.key==="Enter"){ev.preventDefault();ev.stopPropagation();fin(true)}else if(ev.key==="Escape"){ev.preventDefault();ev.stopPropagation();fin(false)}};
  i.onblur=()=>fin(true);
  h.appendChild(i);return h;
 }
 const t=document.createElement("button");t.type="button";t.className="grp-toggle";t.title=g.name;t.setAttribute("aria-expanded",String(!closed));
 t.innerHTML=ic('chevron-down',12,2.5)+'<span class="grp-badge">'+ic(GROUP_ICONS[groupIconKey(g)],14,2)+'</span><span class="grp-name"></span><span class="grp-count">'+count+'</span>';
 t.querySelector(".grp-name").textContent=g.name;
 t.onclick=()=>toggleGroup(g.id);
 const m=document.createElement("button");m.type="button";m.className="more";m.innerHTML=ic(DOTS,18);m.title="Group options";m.setAttribute("aria-label","Group options");m.setAttribute("aria-haspopup","menu");m.setAttribute("aria-expanded","false");
 m.onclick=e=>{e.stopPropagation();if(menuGroupId===g.id)closeMenu();else openGroupMenu(g.id,m)};
 h.append(t,m);return h;
}
function bulkGroup(){const ids=selectedChats().map(c=>c.id);if(!ids.length)return;openPicker(ids,$("bulk-group"),()=>setSelecting(false))}
function newGroup(){const g=createGroup();if(g){renamingGroupId=g.id;renderList()}}
let dragChatId=null;
function endChatDrag(){dragChatId=null;list.classList.remove("drop-ungroup");list.querySelectorAll(".drop-target").forEach(t=>t.classList.remove("drop-target"));list.querySelectorAll(".dragging").forEach(t=>t.classList.remove("dragging"))}
function dropChatInGroup(id,gid){
 const c=S.chats.find(x=>x.id===id);if(!c)return;
 if((c.g||null)===(gid||null))return;
 if(gid&&closedGroups.has(gid)){closedGroups.delete(gid);saveClosedGroups()}
 moveChats([id],gid);renderList();
}
function highlightNodes(parent,text,query){
 const terms=[...new Set(normalizeSearch(query).split(/\s+/).filter(Boolean))].sort((a,b)=>b.length-a.length);
 parent.textContent="";
 if(!terms.length||!text){parent.textContent=text;return}
 const re=new RegExp("("+terms.map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")","gi");
 let last=0,m;
 while((m=re.exec(text))){
  if(m.index>last)parent.appendChild(document.createTextNode(text.slice(last,m.index)));
  const mk=document.createElement("mark");mk.className="hl";mk.textContent=m[0];parent.appendChild(mk);
  last=m.index+m[0].length;
 }
 if(last<text.length)parent.appendChild(document.createTextNode(text.slice(last)));
}
// Account data counts as loading until the session is recognised and the first sync has finished.
function accountLoading(){return gatesPassed()&&!!(accountSession&&accountSession.token&&(accountInitialSyncPending||(!accountReady&&!accountSyncFailed)))}
// A loading placeholder fades out (and is removed) when real content replaces it.
function retireLoading(el,host){el.classList.add("out");host.prepend(el);setTimeout(()=>el.remove(),230)}
// Local and account chats are not drawn until the access and disabled screens are passed; skeletons stand in for them.
function revealAppData(){if(!gatesPassed())return;listFadeNext=true;chatFadeNext=true;renderList();renderChat();renderSyncStatus()}
var seenChatIds=null;
function renderList(){
 closeMenu();list.classList.toggle("selecting",selecting);
 const ghostL=list.querySelector(":scope > .loading-skel"),wantSkel=accountLoading();
 if(wantSkel&&ghostL&&!ghostL.classList.contains("out"))return;
 const fadeList=!!ghostL||listFadeNext;list.innerHTML="";if(ghostL)retireLoading(ghostL,list);if(fadeList){list.classList.add("list-in");clearTimeout(list._inT);list._inT=setTimeout(()=>list.classList.remove("list-in"),900)}
 if(!gatesPassed()){renderBulkBar();return}
 for(const id of [...selectedIds]){if(!S.chats.some(c=>c.id===id))selectedIds.delete(id)}
 if(wantSkel){const rows=Math.max(3,Math.floor((list.clientHeight||640)/59)-2);list.insertAdjacentHTML("beforeend",'<div class="loading-skel">'+skeletonCards(rows,"Loading your chats…","chat")+'</div>');renderBulkBar();return}
 renderBulkBar();
 listFadeNext=false;
 const query=searchInput?searchInput.value.trim():"";
 if(searchClear)searchClear.hidden=!query;
 let entries;
 if(query){entries=S.chats.map(c=>({c,score:scoreChat(c,query)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||(b.c.u||0)-(a.c.u||0));
  if(!entries.length){list.insertAdjacentHTML("beforeend",'<div class="search-empty">No chats match your search.</div>');if(!canSave)list.insertAdjacentHTML("beforeend",'<div class="hint warn">Chats can&#39;t be saved in this browser, so they will be lost when you leave this page.</div>');return}
 }else{entries=sorted().map(c=>({c,score:0}));if(!S.chats.length)list.insertAdjacentHTML("beforeend",'<div class="hint">Your chats will show up here.</div>')}
 if(!seenChatIds)seenChatIds=new Set(S.chats.map(x=>x.id));
 const drawEntry=(entry,target=list)=>{const c=entry.c;const isNew=!seenChatIds.has(c.id);seenChatIds.add(c.id);
  if(renamingId===c.id){
   const e=document.createElement("div");e.className="chat on edit";
   const i=document.createElement("input");i.className="rn";i.value=c.t;i.maxLength=60;i.setAttribute("aria-label","Chat name");
   let done=0;
   const fin=ok=>{if(done)return;done=1;const v=i.value.trim();if(ok&&v){c.t=v.slice(0,60);c.auto=0;touch(c);flashRow(c.id,"title");save()}renamingId=null;renderList()};
   i.onkeydown=ev=>{if(ev.isComposing)return;if(ev.key==="Enter"){ev.preventDefault();ev.stopPropagation();fin(true)}else if(ev.key==="Escape"){ev.preventDefault();ev.stopPropagation();fin(false)}};
   i.onblur=()=>fin(true);
   e.appendChild(i);target.appendChild(e);return;
  }
  const on=c.id===S.cur,r=document.createElement("div");r.className="row"+(on?" on":"")+(isNew?" row-new":"");
  const b=document.createElement("button");b.className="chat"+(on?" on":"");b.title=c.t;
  const ct=document.createElement("span");ct.className="ct";
  if(c.p)ct.insertAdjacentHTML("beforeend",ic(PIN,12));
  const ctText=document.createElement("span");ctText.className="ct-text";
  if(query)highlightNodes(ctText,c.t,query);else ctText.textContent=c.t;
  ct.appendChild(ctText);b.appendChild(ct);
  if(query){const snippet=document.createElement("span");snippet.className="search-snippet";highlightNodes(snippet,searchSnippet(c,query),query);b.appendChild(snippet);b.title=c.t+" — "+snippet.textContent;}
  else{const cm=document.createElement("span");cm.className="cm";cm.dataset.t=c.u;cm.textContent=ago(c.u);b.appendChild(cm);}
  const picked=selectedIds.has(c.id);
  const pick=document.createElement("span");pick.className="pick"+(picked?" on":"");pick.innerHTML=ic('check',12,2.5);pick.setAttribute("aria-hidden","true");
  b.onclick=()=>{if(selecting){if(selectedIds.has(c.id))selectedIds.delete(c.id);else selectedIds.add(c.id);pick.classList.toggle("on",selectedIds.has(c.id));renderBulkBar();return}openChat(c.id)};
  const x=document.createElement("button");x.className="more";x.innerHTML=ic(DOTS,18);x.title="Chat options";
  x.setAttribute("aria-label","Chat options");x.setAttribute("aria-haspopup","menu");x.setAttribute("aria-expanded","false");
  x.onclick=e=>{e.stopPropagation();if(mid===c.id)closeMenu();else openMenu(c.id,x)};
  r.dataset.id=c.id;const fx=rowFx.get(c.id);if(fx){r.classList.add("fx-"+fx);rowFx.delete(c.id)}
  if(fineMouse()&&!selecting&&!query){
   r.draggable=true;
   r.addEventListener("dragstart",ev=>{dragChatId=c.id;ev.dataTransfer.effectAllowed="move";try{ev.dataTransfer.setData("text/plain",c.t)}catch(e){}r.classList.add("dragging")});
   r.addEventListener("dragend",endChatDrag);
  }
  r.append(pick,b,x);r.addEventListener("contextmenu",ev=>contextMenu(ev,r,()=>openMenu(c.id,x),true));target.appendChild(r);
 };
 const groups=query?[]:liveGroups();
 if(groups.length){
  const groupIds=new Set(groups.map(g=>g.id));
  groups.forEach(g=>{const members=entries.filter(e=>e.c.g===g.id),closed=closedGroups.has(g.id);
   const entering=g.id===enteringGroupId;if(entering)enteringGroupId=null;
   const tile=document.createElement("div");tile.className="grp-tile"+(closed?" is-closed":"")+(entering?" grp-enter":"");tile.dataset.gid=g.id;tile.style.setProperty("--gc",GROUP_COLOURS[groupColourKey(g)]);
   tile.appendChild(groupHead(g,members.length,closed));
   const body=document.createElement("div");body.className="grp-body";body.inert=closed;const inner=document.createElement("div");inner.className="grp-inner";body.appendChild(inner);
   members.forEach(e=>drawEntry(e,inner));tile.appendChild(body);
   tile.addEventListener("dragover",ev=>{if(!dragChatId)return;ev.preventDefault();ev.stopPropagation();ev.dataTransfer.dropEffect="move";tile.classList.add("drop-target")});
   tile.addEventListener("dragleave",ev=>{if(!tile.contains(ev.relatedTarget))tile.classList.remove("drop-target")});
   tile.addEventListener("drop",ev=>{if(!dragChatId)return;ev.preventDefault();ev.stopPropagation();const id=dragChatId;endChatDrag();dropChatInGroup(id,g.id)});
   tile.addEventListener("contextmenu",ev=>{if(renamingGroupId===g.id)return;contextMenu(ev,tile,()=>openGroupMenu(g.id,tile.querySelector(".grp .more")),true)});
   list.appendChild(tile)});
  entries.filter(e=>!groupIds.has(e.c.g)).forEach(e=>drawEntry(e));
 }else entries.forEach(e=>drawEntry(e));
 if(renamingGroupId)focusGroupRename();
 if(!canSave)list.insertAdjacentHTML("beforeend",'<div class="hint warn">Chats can\'t be saved in this browser, so they will be lost when you leave this page.</div>');
}
function menuItem(id,icon,text){const b=$(id);b.innerHTML=ic(icon,16)+"<span>"+text+"</span>";return b}
function placeMenu(btn){const m=$("cmenu"),sr=$("side").getBoundingClientRect(),br=btn.getBoundingClientRect();m.style.left="";m.style.right="";m.style.top=Math.max(8,Math.min(br.bottom-sr.top+4,sr.height-m.offsetHeight-8))+"px";btn.setAttribute("aria-expanded","true")}
function fineMouse(){return !!(window.matchMedia&&matchMedia("(pointer:fine)").matches)}
function contextMenu(ev,el,open,anchored){
 if(!fineMouse()||selecting)return;
 ev.preventDefault();ev.stopPropagation();
 const pt=ev.clientX||ev.clientY?{x:ev.clientX,y:ev.clientY}:(()=>{const r=el.getBoundingClientRect();return{x:r.left+24,y:r.top+r.height/2}})();
 open();
 // Chats and groups open exactly where their three dots open; only the list background uses the cursor.
 if(!anchored)placeMenuAt(pt);
}
function placeMenuAt(pt){
 const m=$("cmenu"),sr=$("side").getBoundingClientRect();
 const x=Math.max(8,Math.min(pt.x-sr.left,sr.width-m.offsetWidth-8)),y=Math.max(8,Math.min(pt.y-sr.top,sr.height-m.offsetHeight-8));
 m.style.right="auto";m.style.left=x+"px";m.style.top=y+"px";
}
function openListMenu(){
 closeMenu();resetMenuDom();menuMode="list";
 MENU_STATIC.forEach(id=>$(id).hidden=true);
 const m=$("cmenu");
 [{label:"New chat",icon:'plus',run:()=>newChat()},{label:"New group",icon:'folder-plus',run:()=>newGroup()},{label:"Select chats",icon:'square-check',run:()=>setSelecting(true)}].forEach(item=>{
  const b=document.createElement("button");b.type="button";b.className="cmenu-dyn";b.setAttribute("role","menuitem");
  b.innerHTML=ic(item.icon,16)+'<span class="cmenu-label"></span>';
  b.querySelector(".cmenu-label").textContent=item.label;b.onclick=()=>{closeMenu();item.run()};m.appendChild(b);
 });
 showEl(m);
}
list.addEventListener("contextmenu",ev=>{if(ev.target.closest(".row,.grp-tile"))return;contextMenu(ev,list,openListMenu)});
list.addEventListener("dragover",ev=>{if(!dragChatId||ev.target.closest(".grp-tile"))return;const c=S.chats.find(x=>x.id===dragChatId);if(!c||!c.g)return;ev.preventDefault();ev.dataTransfer.dropEffect="move";list.classList.add("drop-ungroup")});
list.addEventListener("dragleave",ev=>{if(!list.contains(ev.relatedTarget))list.classList.remove("drop-ungroup")});
list.addEventListener("drop",ev=>{if(!dragChatId||ev.target.closest(".grp-tile"))return;ev.preventDefault();const id=dragChatId;endChatDrag();dropChatInGroup(id,null)});
function openMenu(id,btn){
 const c=S.chats.find(x=>x.id===id);if(!c)return;
 closeMenu();resetMenuDom();mid=id;menuAnchor=btn;menuMode="chat";
 menuItem("cren",PEN,"Rename");menuItem("cgen",SPARK,"Generate title");menuItem("cpin",c.p?PIN_OFF:PIN,c.p?"Unpin":"Pin");menuItem("cgrp",FOLDER_ICON,"Move to group");menuItem("cdel",TRASH,"Delete");
 showEl($("cmenu"));placeMenu(btn);
}
function openGroupMenu(gid,btn){
 closeMenu();resetMenuDom();menuMode="group";menuGroupId=gid;menuAnchor=btn;
 menuItem("cren",PEN,"Rename group");menuItem("cdel",TRASH,"Delete group");
 ["cgen","cpin","cgrp"].forEach(id=>$(id).hidden=true);
 const gg=groupById(gid);if(gg){$("cmenu").classList.add("wide");$("cmenu").appendChild(groupStylePanel(gg))}
 showEl($("cmenu"));placeMenu(btn);
}
function finishPick(gid,startRename){
 const ids=pickIds.slice(),done=pickDone;
 closeMenu();
 const prevG=ids.map(id=>({id,g:(S.chats.find(c=>c.id===id)||{}).g}));const n=moveChats(ids,gid);
 if(gid&&startRename)renamingGroupId=gid;
 
 if(done)done();
 renderList();
}
function openPicker(ids,btn,done){
 closeMenu();resetMenuDom();menuMode="pick";pickIds=ids.slice();pickDone=done||null;menuAnchor=btn;
 MENU_STATIC.forEach(id=>$(id).hidden=true);
 const picked=S.chats.filter(c=>pickIds.includes(c.id));
 const items=[{label:"No group",icon:'ban',on:picked.length>0&&picked.every(c=>!groupById(c.g)),run:()=>finishPick(null)}];
 liveGroups().forEach(g=>items.push({label:g.name,icon:GROUP_ICONS[groupIconKey(g)],colour:GROUP_COLOURS[groupColourKey(g)],on:picked.length>0&&picked.every(c=>c.g===g.id),run:()=>finishPick(g.id)}));
 items.push({label:"New group…",icon:'plus',on:false,run:()=>{const g=createGroup();if(g)finishPick(g.id,true)}});
 const m=$("cmenu");
 items.forEach(item=>{
  const b=document.createElement("button");b.type="button";b.className="cmenu-dyn";b.setAttribute("role","menuitem");
  const iconStyle=item.colour?' style="color:'+item.colour+'"':'';
  b.innerHTML='<span class="cmenu-icon"'+iconStyle+'>'+ic(item.icon,16,2)+'</span><span class="cmenu-label"></span>'+(item.on?'<span class="cmenu-check" aria-hidden="true">'+ic('check',16,2.5)+'</span>':'');
  b.querySelector(".cmenu-label").textContent=item.label;
  b.onclick=item.run;m.appendChild(b);
 });
 showEl(m);placeMenu(btn);
}
// Resets the menu's contents to the chat layout. Openers call this before filling the menu.
function resetMenuDom(){
 $("cmenu").classList.remove("wide");
 document.querySelectorAll("#cmenu .cmenu-dyn").forEach(b=>b.remove());
 MENU_STATIC.forEach(id=>{const b=$(id);if(b)b.hidden=false});
 document.querySelectorAll(".more").forEach(b=>b.setAttribute("aria-expanded","false"));
}
function closeMenu(){
 const m=$("cmenu");
 hideEl(m);mid=null;menuGroupId=null;menuAnchor=null;
 if(menuMode==="pick"){pickIds=[];pickDone=null}
 menuMode="chat";
 // Reset the contents only after the fade-out; resetting now made the chat items flash while a group menu closed.
 if(m.hidden)resetMenuDom();else setTimeout(()=>{if(m.hidden)resetMenuDom()},160);
}
const rowFx=new Map();
function flashRow(id,kind){rowFx.set(id,kind)}
function fadeRowOut(ids){const rows=[...list.querySelectorAll(".row")].filter(r=>ids.includes(r.dataset.id));rows.forEach(r=>r.classList.add("fx-out"));return new Promise(res=>setTimeout(res,rows.length?170:0))}
function unsettle(el){["overflow","height","transition","paddingTop","paddingBottom","marginTop","marginBottom"].forEach(p=>el.style[p]="")}
function hideEl(el,ms){
 if(!el||el.hidden||el._lt)return;
 const dur=ms||220,ease="cubic-bezier(.2,.7,.2,1)";
 el.classList.add("leaving");
 const pos=getComputedStyle(el).position;
 // In-flow panels collapse to nothing, so the content below glides up instead of jumping.
 if(pos!=="absolute"&&pos!=="fixed"&&el.offsetHeight){
  el.style.overflow="hidden";el.style.height=el.offsetHeight+"px";void el.offsetHeight;
  el.style.transition=`height ${dur}ms ${ease},padding ${dur}ms ${ease},margin ${dur}ms ${ease}`;
  el.style.height="0px";el.style.paddingTop="0px";el.style.paddingBottom="0px";el.style.marginTop="0px";el.style.marginBottom="0px";
 }
 el._lt=setTimeout(()=>{el._lt=null;el.hidden=true;el.classList.remove("leaving");unsettle(el)},dur);
}
function showEl(el){if(!el)return;if(el._lt){clearTimeout(el._lt);el._lt=null}unsettle(el);el.classList.remove("leaving");el.hidden=false}
function swapText(el,text){if(!el||el.textContent===text)return;el.textContent=text;el.classList.remove("swap");void el.offsetWidth;el.classList.add("swap")}
function selectedModelId(){
 const c=C();const id=(c&&c.model)||S.model||"aries-1";
 return availableModels.some(m=>m.id===id)?id:"aries-1";
}
// Updates the label, Vela styling and checkmarks in place, so an open or fading menu does not get rebuilt.
function alphaTagEl(){const t=document.createElement("span");t.className="alpha-tag";t.textContent="Alpha";return t}
function modelLabelHTML(selected){return '<span class="model-name">'+esc(selected.name)+'</span>'+I.chev}
function paintModelSelection(){
 document.body.classList.toggle("vela-mode",selectedModelId()==="vela-1");
 const id=selectedModelId(),selected=availableModels.find(m=>m.id===id)||availableModels[0];
 const label=$("model"),changed=!!label.dataset.name&&label.dataset.name!==selected.name;
 label.innerHTML=modelLabelHTML(selected);label.dataset.name=selected.name;
 if(changed){const nm=label.querySelector(".model-name");if(nm)nm.classList.add("swap");const orb=document.querySelector(".orb");if(orb){orb.classList.remove("ping");void orb.offsetWidth;orb.classList.add("ping")}}
 const options=$("model-options");if(!options)return;
 [...options.children].forEach((b,i)=>{const m=availableModels[i];if(!m)return;b.setAttribute("aria-checked",String(m.id===id));const t=b.querySelector("i");if(t)t.innerHTML=m.id===id?I.check:""});
}
function updateModelUI(){
 document.body.classList.toggle("vela-mode",selectedModelId()==="vela-1");
 const id=selectedModelId(),selected=availableModels.find(m=>m.id===id)||availableModels[0];
 $("model").innerHTML=modelLabelHTML(selected);$("model").dataset.name=selected.name;
 const options=$("model-options");if(!options)return;options.innerHTML="";
 availableModels.forEach(m=>{
  const b=document.createElement("button");b.type="button";b.className="mi";b.setAttribute("role","menuitemradio");b.setAttribute("aria-checked",String(m.id===id));
  const copy=document.createElement("div");
  let alphaNote=null;
  if(m.id==="vela-1"){
   const head=document.createElement("span");head.className="alpha-head";
   const name=document.createElement("span");name.textContent=m.name;
   const info=document.createElement("span");info.className="alpha-info";info.setAttribute("role","button");info.setAttribute("tabindex","0");info.setAttribute("aria-label","About Vela alpha testing");info.setAttribute("aria-expanded","false");info.innerHTML=ic('info',18,2);
   alphaNote=document.createElement("span");alphaNote.className="alpha-note";alphaNote.hidden=true;alphaNote.textContent="Vela is in alpha testing and is restricted to admins only.";
   const toggle=e=>{e.preventDefault();e.stopPropagation();const open=alphaNote.hidden;open?showEl(alphaNote):hideEl(alphaNote);info.setAttribute("aria-expanded",String(open))};
   info.onclick=toggle;info.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")toggle(e)};
   head.append(name,alphaTagEl(),info);copy.append(head);
  }else copy.textContent=m.name;
  const small=document.createElement("small");small.textContent=m.description||"";copy.appendChild(small);
  if(alphaNote)copy.appendChild(alphaNote);
  const tick=document.createElement("i");tick.innerHTML=m.id===id?I.check:"";b.append(copy,tick);
  if(m.disabled){b.disabled=true;b.setAttribute("aria-disabled","true")}
  b.onclick=()=>{
   if(m.disabled)return;
   const c=C();
   S.model=m.id;
   if(c){c.model=m.id;touch(c)}
   save();pop(false);paintModelSelection();refreshSendState();
   if(c)setTimeout(renderChat,160);
   if(m.id==="aries-1")setTimeout(showAriesIntroOnce,100);
  };
  options.appendChild(b);
 });
}
// Models from the server, and Vela, which only admins see while it is in testing.
let serverModelList=[{id:"aries-1",name:"Aries",description:"Best for quick, straightforward reasoning and everyday questions."}];
const VELA_MODEL={id:"vela-1",name:"Vela",description:"Thinks through harder questions in more depth and searches the web for current, sourced answers."};
function isAdminSignedIn(){return !!(accountSession&&accountSession.token&&accountSession.user&&accountSession.user.role==="admin")}
function sourceDomain_(url){try{return new URL(url).hostname.replace(/^www\./,"")}catch(e){return ""}}
// Site icon for a source, from Google's favicon service (it receives only the domain name).
function favUrl_(url){const d=sourceDomain_(url);return d?"https://www.google.com/s2/favicons?domain="+encodeURIComponent(d)+"&sz=32":""}
function updateAvailableModels(models){
 if(!Array.isArray(models))return;
 const cleanModels=models.filter(m=>m&&typeof m.id==="string"&&typeof m.name==="string"&&m.name.trim()).map(m=>({id:m.id,name:m.name,description:m.id==="aries-1"?"Best for quick, straightforward reasoning and everyday questions.":String(m.description||"")}));
 if(!cleanModels.some(m=>m.id==="aries-1"))cleanModels.unshift({id:"aries-1",name:"Aries",description:"Best for quick, straightforward reasoning and everyday questions."});
 serverModelList=cleanModels;applyModelList();
}
// Builds the picker list: server models, plus Vela for admins. Repairs chats on a model that is no longer listed.
function applyModelList(){
 // Admins get Vela. Guests see it greyed out. Signed-in users who are not admins don't see it.
 // While the account is still loading after a refresh, Vela stays in the list so the chat keeps its model.
 const pendingAccount=!!(accountSession&&accountSession.token&&!accountSession.user);
 const velaEntry=isAdminSignedIn()||pendingAccount?VELA_MODEL:Object.assign({},VELA_MODEL,{disabled:true,description:accountSession&&accountSession.token?"Coming soon for signed-in users. Your account will get access when Vela opens.":"Coming soon for signed-in users."});
 // The server may also list Vela for admins. Drop that copy so the local entry is the only one.
 availableModels=serverModelList.filter(m=>m.id!==VELA_MODEL.id).concat(velaEntry?[velaEntry]:[]);
 let repaired=false;
 S.chats.forEach(c=>{if(!availableModels.some(m=>m.id===c.model&&!m.disabled)){c.model="aries-1";repaired=true}});
 if(!availableModels.some(m=>m.id===S.model&&!m.disabled)){S.model="aries-1";repaired=true}
 if(repaired)save(true);
 updateModelUI();
}
// Support card: shown under the latest AI reply while the chat's card flag is on. Closing it clears the flag.
// One card element per reply, so later re-renders reuse it instead of rebuilding (and re-hiding) it.
const supportCardEls=new Map();
function appendSupportCard(parent,c,fadeIn,key){
 const existing=supportCardEls.get(key);
 if(existing){parent.appendChild(existing);return}
 const wrap=document.createElement("div");wrap.className="support-wrap";
 supportCardEls.set(key,wrap);
 wrap.innerHTML='<div class="support-card" role="note"><strong>You\'re not alone</strong><p>It sounds like you\'re going through something heavy. You don\'t have to handle it by yourself.</p><p>If you\'re in the US, you can call or text <a href="tel:988">988</a> (Suicide &amp; Crisis Lifeline) any time, or text HOME to <a href="sms:741741?body=HOME">741741</a> (Crisis Text Line).</p><button type="button" class="support-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>';
 wrap.querySelector(".support-close").onclick=()=>{c.sup=0;touch(c);save();collapseSupport(wrap)};
 parent.appendChild(wrap);
 if(fadeIn&&!reduceMotion())wrap.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:700,delay:1000,fill:"backwards",easing:"cubic-bezier(.2,.7,.2,1)"});
}
function renderChat(fresh){
 if(!gatesPassed()){lastChatRenderId=null;jumpBtn.classList.add("is-hidden");chatEl.innerHTML="";return}
 if(accountLoading()){
  const cc=C(),g=chatEl.querySelector(":scope > .loading-skel");lastChatRenderId=cc&&cc.id;jumpBtn.classList.add("is-hidden");
  if(g&&!g.classList.contains("out"))return;
  chatEl.innerHTML="";if(g)retireLoading(g,chatEl);
  chatEl.insertAdjacentHTML("beforeend",'<div class="loading-skel loading-skel-chat"><div class="empty"><h2>WHW<b>ai</b><span class="beta-pill">Beta</span></h2><p><span class="sync-spinner" aria-hidden="true"></span>Loading your account chats…</p></div></div>');
  {const cs=getComputedStyle(chatEl),spacer=parseFloat(getComputedStyle(chatEl,"::after").height)||0;chatEl.lastElementChild.style.padding=[cs.paddingTop,cs.paddingRight,(parseFloat(cs.paddingBottom)+spacer+(parseFloat(cs.rowGap)||0))+"px",cs.paddingLeft].join(" ")}
  return;
 }
 const c=C();const wasNear=near(),prevTop=chatEl.scrollTop,switching=lastChatRenderId!==(c&&c.id);lastChatRenderId=c&&c.id;jumpBtn.classList.add("is-hidden");updateModelUI();const ghostC=chatEl.querySelector(":scope > .loading-skel");const fadeChat=!!ghostC||chatFadeNext||switching;chatFadeNext=false;chatEl.innerHTML="";if(ghostC)retireLoading(ghostC,chatEl);if(fadeChat){chatEl.classList.add("chat-in");clearTimeout(chatEl._inT);chatEl._inT=setTimeout(()=>chatEl.classList.remove("chat-in"),700)}
 if(!c||!c.m.length){
  chatEl.innerHTML='<div class="empty"><h2>WHW<b>ai</b><span class="beta-pill">Beta</span></h2><p>Ask anything to get started.</p></div>';
  return
 }
 c.m.forEach((m,i)=>{
  const d=document.createElement("div");d.className="msg"+(m.r==="u"?" u":"");
   if(m.r==="u")d.textContent=m.x;else d.innerHTML=md(m.x);
   let thkTp=null;const thkSteps=m.r==="a"&&!m.err&&!m.limit&&m.thinking&&thinkingWorthShowing(m)?thinkingSteps(m.thinking):[];
   if(thkSteps.length){const thkBtn=document.createElement("button");thkBtn.type="button";thkBtn.className="thk-row";thkBtn.setAttribute("aria-expanded","false");thkBtn.innerHTML="<span>Thought process</span>"+I.chev;const tp=document.createElement("div");tp.className="answer-sources thought-panel";tp.hidden=true;tp.innerHTML='<ol class="steps">'+thkSteps.map((x,k)=>'<li style="--d:'+(k*140)+'ms">'+esc(x)+'</li>').join("")+'<li class="step-end" style="--d:'+(thkSteps.length*140)+'ms">Answer</li></ol>';thkBtn.onclick=()=>togglePanel(tp,thkBtn,true);thkTp=tp;chatEl.append(thkBtn,tp)}
   chatEl.appendChild(d);
   if(m.limit){
    if(!limitHit()||(accountSession&&accountSession.token)){const w=document.createElement("div");w.className="limit-retry-row";w.innerHTML='<button type="button" class="pbtn limit-retry">'+I.regen+'<span style="margin-left:6px">Regenerate</span></button>';w.querySelector(".limit-retry").onclick=()=>resendAfterLimit(i);chatEl.appendChild(w)}
    return;
   }
   if(m.r==="a"){
    const canRegen=i===c.m.length-1&&!c.ended&&!m.test,b=document.createElement("div");b.className="bar";
    const srcs=Array.isArray(m.sources)?m.sources.filter(source=>source&&typeof source.title==="string"&&typeof source.url==="string"&&/^https:\/\//i.test(source.url)&&!/[\s<>"']/.test(source.url)).slice(0,5):[];
    const steps=m.thinking?thinkingSteps(m.thinking):[];
    const srcIcon=ic('link',14,2);
    const thkIcon=ic('activity',14,2);
    const wrenchIcon=ic('wrench',14,2);
    const TOOL_LABELS={end_chat:"end_chat",draw_chart:"draw_chart",calculate:"calculate",get_current_datetime:"check_date_time",web_search:"search_web"};
    const toolNames=Array.isArray(m.tools)?m.tools.filter(t=>typeof t==="string").map(t=>TOOL_LABELS[t]||t):[];
    const toolChip=toolNames.map(n=>'<span class="tool-chip" title="Tool used" aria-label="Tool used: '+escapeAttr(n)+'">'+wrenchIcon+'<em>'+esc(n)+'</em></span>').join("");
    b.innerHTML='<button class="cp" title="Copy" aria-label="Copy">'+I.copy+'</button>'+(canRegen?'<button class="rg" title="Regenerate" aria-label="Regenerate">'+I.regen+'</button>':'')+toolChip+'<span data-t="'+m.at+'">'+ago(m.at)+'</span>';
    const cp=b.querySelector(".cp"),rg=b.querySelector(".rg");
    cp.onclick=()=>copy(m.x,cp);if(rg)rg.onclick=regen;
    const foot=document.createElement("div");foot.className="msg-foot";foot.appendChild(b);
    let sb=null;
    if(srcs.length){sb=document.createElement("button");sb.type="button";sb.className="src";sb.setAttribute("aria-expanded","false");sb.setAttribute("aria-label","Show sources");sb.title="Show sources";sb.innerHTML=srcs.slice(0,3).map(source=>'<img class="fav" src="'+escapeAttr(favUrl_(source.url))+'" alt="" width="16" height="16" loading="lazy" referrerpolicy="no-referrer">').join("")+"<em>Sources</em>"+I.chev;foot.appendChild(sb)}
    chatEl.appendChild(foot);
    // The thought process is the same width as its answer bubble.
    if(thkTp){thkTp._bubble=d;thkTp.style.width=d.offsetWidth+"px"}
    if(srcs.length){const panel=document.createElement("div");panel.className="answer-sources src-list";panel.hidden=true;const head=document.createElement("div");head.className="src-head";head.textContent="Sources";panel.appendChild(head);sb.onclick=()=>togglePanel(panel,sb,false);const ol=document.createElement("ol");srcs.forEach(source=>{const li=document.createElement("li"),a=document.createElement("a");a.textContent=source.title||source.url;a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";const fav=document.createElement("img");fav.className="fav";fav.src=favUrl_(source.url);fav.alt="";fav.width=16;fav.height=16;fav.loading="lazy";fav.referrerpolicy="no-referrer";fav.onerror=()=>fav.remove();li.appendChild(fav);li.appendChild(a);const domain=sourceDomain_(source.url);if(domain){const d=document.createElement("span");d.className="src-domain";d.textContent=" · "+domain;li.appendChild(d)}ol.appendChild(li)});panel.appendChild(ol);chatEl.appendChild(panel)}
   }
 });
 {const last=c.m[c.m.length-1];if(c.sup&&last&&last.r==="a"&&!last.err&&!last.limit){const fadeIn=!!last._fade;delete last._fade;appendSupportCard(chatEl,c,fadeIn,c.id+"|"+last.at)}}
 if(c.ended){const note=document.createElement("p");note.className="sm chat-ended-note";note.setAttribute("role","status");note.textContent="This chat was ended and can't be continued. Start a new chat to keep talking.";chatEl.appendChild(note)}
 if(fresh){const ms=chatEl.querySelectorAll(".msg");ms[ms.length-1].classList.add("fresh")}
 const newest=[...chatEl.querySelectorAll(".msg")].pop();[...chatEl.querySelectorAll(".chart-retry")].forEach(x=>{if(newest&&x.closest(".msg")===newest)x.onclick=regen;else x.remove()});
 if(switching)pinnedBottom=true;
 if(fresh)flickToBottom();else if(switching||pinnedBottom||(wasNear&&busy))toBottom();else chatEl.scrollTop=prevTop;
 updateJump();
}
const plain=t=>t.replace(/\*\*(.+?)\*\*/g,"$1").replace(/^[-*] /gm,"\u2022 ");
async function copyText_(text){
 try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(String(text));return true}}catch(e){}
 try{
  const a=document.createElement("textarea");a.value=String(text);a.setAttribute("readonly","");a.style.cssText="position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(a);a.focus();a.select();a.setSelectionRange(0,a.value.length);
  const ok=document.execCommand("copy");a.remove();return ok;
 }catch(e){return false}
}
async function copyCode(text,button){
 const original=button.innerHTML;button.disabled=true;
 let ok=false;
 try{
  if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(String(text));ok=true}
  else throw new Error("clipboard unavailable");
 }catch(e){
  const a=document.createElement("textarea");a.value=String(text);a.style.cssText="position:fixed;top:0;left:0;opacity:0";document.body.appendChild(a);a.focus();a.select();a.setSelectionRange(0,a.value.length);
  try{ok=document.execCommand("copy")}catch(err){ok=false}
  a.remove();
  if(!ok)toast("Couldn't copy code. Select it and copy manually.");
 }
 if(ok)setIcon(button,I.check);
 setTimeout(()=>{if(button.isConnected){setIcon(button,original);button.disabled=false}},1300);
}

chatEl.addEventListener("click",e=>{const button=e.target.closest(".code-copy");if(!button)return;const block=button.closest(".codeblock"),code=block&&block.querySelector("code");if(code)copyCode(code.textContent,button)});
// Fades the current icon out, swaps it, then fades the new one in.
function setIcon(btn,html){
 if(!btn||!btn.isConnected)return;
 clearTimeout(btn._swap);clearTimeout(btn._swapIn);
 btn.classList.remove("ico-in");btn.classList.add("ico-out");
 btn._swap=setTimeout(()=>{btn.innerHTML=html;btn.classList.remove("ico-out");btn.classList.add("ico-in");btn._swapIn=setTimeout(()=>btn.classList.remove("ico-in"),240)},150);
}
// Classes from the app do not come with a copy, so their look is written out inline for pasting.
const RICH_STYLE={
 "tm-inline":"font-family:Cambria,Georgia,serif",
 "tm-block":"margin:10px 0;text-align:center;font-family:Cambria,Georgia,serif;font-size:1.1em",
 "tm-frac":"display:inline-block;vertical-align:middle;text-align:center;margin:0 .12em",
 "tm-num":"display:block;padding:0 .3em;border-bottom:1px solid #222",
 "tm-den":"display:block;padding:0 .3em",
 "tm-sqrt":"display:inline",
 "tm-rad":"display:inline-block;border-top:1px solid #222;padding:0 .15em",
 "tm-root":"font-size:.65em;vertical-align:super",
 "tm-over":"border-top:1px solid #222",
 "tm-under":"border-bottom:1px solid #222",
 "tm-box":"border:1px solid #222;padding:0 .2em",
 "tm-stack":"display:inline-block;vertical-align:middle;text-align:center",
 "tm-stk":"display:block;padding:0 .15em",
 "tm-paren":"font-size:1.15em;vertical-align:middle",
 "tm-env":"display:inline-block;vertical-align:middle;margin:0 .15em",
 "tm-br":"font-size:1.9em;line-height:1;vertical-align:middle;padding:0 .08em",
 "tm-grid":"display:inline-table;vertical-align:middle;border-collapse:separate;border-spacing:1em .25em",
 "tm-cell":"text-align:center;padding:0",
 "tm-fn":"font-style:normal",
 "tm-raw":"color:#888;font-family:Menlo,Consolas,monospace",
 "codeblock":"background:#f5f5f5;border-radius:10px;padding:10px 12px;margin:8px 0;overflow-x:auto",
 "tbl-wrap":"margin:8px 0;overflow-x:auto"
};
function richCopyHtml(t){
 let x=md(t).replace(/<button class="code-copy"[\s\S]*?<\/button>/g,"").replace(/<div class="chart-actions"[\s\S]*?<\/div>/g,"").replace(/<button class="chart-retry"[\s\S]*?<\/button>/g,"");
 x=x.replace(/<(\w+)([^>]*?)class="([^"]*)"([^>]*)>/g,(all,tag,pre,cls,post)=>{
  const st=cls.split(/\s+/).map(c=>RICH_STYLE[c]||"").filter(Boolean).join(";");
  const rest=(pre+post).replace(/\s+/g," ").trim();
  return "<"+tag+(rest?" "+rest:"")+(st?' style="'+st+'"':"")+">";
 });
 return x
  .replace(/<pre>/g,'<pre style="margin:0;white-space:pre-wrap;font-family:Menlo,Consolas,monospace">')
  .replace(/<code>/g,'<code style="font-family:Menlo,Consolas,monospace;background:#f0f0f0;padding:1px 4px;border-radius:4px">')
  .replace(/<table>/g,'<table style="border-collapse:collapse;margin:8px 0">')
  .replace(/<th>/g,'<th style="border:1px solid #ccc;padding:6px 10px;text-align:left;background:#f4f4f4">')
  .replace(/<td>/g,'<td style="border:1px solid #ccc;padding:6px 10px">')
  .replace(/<blockquote>/g,'<blockquote style="margin:8px 0;padding-left:12px;border-left:3px solid #bbb;color:#555">')
  .replace(/<hr>/g,'<hr style="border:0;border-top:1px solid #ddd;margin:10px 0">')
  .replace(/<ul>/g,'<ul style="margin:0 0 8px;padding-left:22px">')
  .replace(/<ol>/g,'<ol style="margin:0 0 8px;padding-left:22px">')
  .replace(/<p>/g,'<p style="margin:0 0 8px">')
  .replace(/<h3>/g,'<h3 style="font-size:16px;font-weight:600;margin:10px 0 6px">')
  .replace(/<h4>/g,'<h4 style="font-size:15px;font-weight:600;margin:8px 0 6px">')
  .replace(/<a href/g,'<a style="color:#2559c9" href');
}
async function copy(t,btn){
 const ok=()=>{setIcon(btn,I.check);setTimeout(()=>setIcon(btn,I.copy),1200)};
 try{
  if(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write){
   await navigator.clipboard.write([new ClipboardItem({"text/plain":new Blob([plain(t)],{type:"text/plain"}),"text/html":new Blob([richCopyHtml(t)],{type:"text/html"})})]);
   return ok();
  }
  await navigator.clipboard.writeText(plain(t));return ok();
 }catch(e){}
 const a=document.createElement("textarea");a.value=plain(t);a.style.cssText="position:fixed;top:0;opacity:0";
 document.body.appendChild(a);a.focus();a.select();a.setSelectionRange(0,a.value.length);
 try{if(document.execCommand("copy"))ok()}catch(e){}
 a.remove();
}
function orbStart(){orb.style.transition="";orb.classList.add("think")}
function orbStop(){
 if(!orb.classList.contains("think"))return;
 const t=getComputedStyle(orb).transform;
 orb.classList.remove("think");
 orb.style.transition="none";orb.style.transform=t;void orb.offsetWidth;
 orb.style.transition="transform .5s cubic-bezier(.2,.7,.2,1)";orb.style.transform="";
}
function setBusy(b){
 busy=b;sendBtn.disabled=false;
 sendBtn.innerHTML=b?ic('square',18):I.send;
 sendBtn.title=b?"Stop response":"Send";
 sendBtn.setAttribute("aria-label",b?"Stop response":"Send");
 sendBtn.setAttribute("aria-pressed",String(b));
 document.querySelector(".frame").classList.toggle("busy",b);b?orbStart():orbStop();refreshSendState()
}
function stopAnswer(){
 if(!busy)return;
 responseWasStopped=true;
 sendBtn.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>';
 sendBtn.title="Stopping response…";sendBtn.setAttribute("aria-label","Stopping response");
 if(activeAnswerController)activeAnswerController.abort();
}
const ERR_TEXT="WHWai is busy or can't be reached right now. Wait a moment, then press regenerate.";
// Declared before the startup status check, which calls post() and so getDeviceId().
const DEVICE_STORAGE_KEY="whwai.device.v1";let cachedDeviceId="";
const hist=c=>c.m.filter(m=>!m.err).slice(-14).map(m=>({r:m.r,x:m.x}));
async function post(body,externalSignal){
 const action=body.action;
 if(!body.deviceId){const d=getDeviceId();if(d)body={...body,deviceId:d}}
 if(action!=="access_check"&&action!=="status_check"){try{const token=localStorage.getItem(ACCESS_TOKEN_KEY);if(token)body={...body,accessToken:token}}catch(e){}}
 if(accountSession&&accountSession.token&&!body.sessionToken&&["auth_login","auth_signup","auth_admin_login","status_check","access_check"].indexOf(action)===-1)body={...body,sessionToken:accountSession.token};
 const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),45000);
 const forwardAbort=()=>ctl.abort();
 if(externalSignal){if(externalSignal.aborted)ctl.abort();else externalSignal.addEventListener("abort",forwardAbort,{once:true})}
 try{
  const r=await fetch(API_URL,{method:"POST",body:JSON.stringify(body),signal:ctl.signal});
  const j=await r.json();if(j.error==='browser_disabled'&&typeof showBrowserDisabled==='function')showBrowserDisabled(j);if(j.error==='account_disabled'&&j.sessionToken)disabledSessionToken=j.sessionToken;if(j.error==='account_disabled'&&typeof showAccountDisabled==='function')showAccountDisabled(j.message,j);if(j.error){const error=new Error(j.error);error.payload=j;throw error}return j;
 }finally{
  clearTimeout(tm);
  if(externalSignal)externalSignal.removeEventListener("abort",forwardAbort);
 }
}
const ACCESS_STORAGE_KEY="whwai.earlyAccessUntil.v1",ACCESS_TOKEN_KEY="whwai.earlyAccessToken.v1",ACCESS_OFF_KEY="whwai.accessCodeOff.v1",ACCESS_TTL=24*60*60*1000;
try{localStorage.removeItem(ACCESS_STORAGE_KEY);localStorage.removeItem(ACCESS_TOKEN_KEY)}catch(e){}
const accessGate=$("access-gate"),accessCard=$("access-card"),accessTitle=$("access-title"),accessForm=$("access-form"),accessInput=$("access-code"),accessError=$("access-error"),accessButton=$("access-unlock");
let aiDisabled=false,accessRequired=true,accountDisabledGate=false,accessUnlocked=false,browserDisabledGate=false;
let appInertKey="";
function syncAppInert(){
 const frame=$("app-frame");if(!frame)return;
 const blocked=!accessGate.hidden||!$("wn").hidden;
 const modalOpen=!modal.hidden;
 const key=blocked+"|"+modalOpen+"|"+frame.children.length;
 if(key===appInertKey)return;
 appInertKey=key;
 frame.inert=blocked;
 Array.from(frame.children).forEach(ch=>{ch.inert=!blocked&&modalOpen&&!ch.contains(modal)});
}
setInterval(syncAppInert,250);
function openApp(force){if(accountDisabledGate)return;if(aiDisabled&&!force)return;document.body.classList.remove("access-locked");hideEl(accessGate,250);updateSchoolLock();$("app-frame").removeAttribute("aria-hidden");flushAccountResume();setTimeout(revealAppData,0);setTimeout(()=>{if(!showWhatsNewIfNeeded())showAriesIntroOnce()},650)}
function unlockEarlyAccess(token,expiresAt){if(aiDisabled)return;accessUnlocked=true;try{const until=Number(expiresAt)||Date.now()+ACCESS_TTL;localStorage.setItem(ACCESS_STORAGE_KEY,String(until));localStorage.setItem(ACCESS_TOKEN_KEY,String(token||""))}catch(e){}openApp();if(accountSession&&accountSession.token&&!(accountSession.user&&accountSession.user.username)&&typeof resumeAccountSession==="function")resumeAccountSession()}
function lockEarlyAccess(showGate){if(accountDisabledGate||browserDisabledGate)return;try{localStorage.removeItem(ACCESS_STORAGE_KEY);localStorage.removeItem(ACCESS_TOKEN_KEY)}catch(e){}document.body.classList.add("access-locked");(showEl(accessGate),setTimeout(updateSchoolLock,0));$("app-frame").setAttribute("aria-hidden","true");accessCard.classList.remove("disabled-mode");swapText(accessTitle,"Enter early access code");$("gate-body").hidden=true;$("gate-actions").hidden=true;accessForm.hidden=false;accessError.hidden=true;accessError.textContent="";$("access-admin-open").hidden=false;$("access-admin-form").hidden=true;if(showGate){accessInput.value="";setTimeout(()=>accessInput.focus(),50)}}
function showAIDisabled(){aiDisabled=true;refreshSendState();try{localStorage.removeItem(ACCESS_STORAGE_KEY);localStorage.removeItem(ACCESS_TOKEN_KEY)}catch(e){}document.body.classList.add("access-locked");(showEl(accessGate),setTimeout(updateSchoolLock,0));$("app-frame").setAttribute("aria-hidden","true");accessCard.classList.add("disabled-mode");swapText(accessTitle,"WHWai is currently disabled");$("gate-actions").hidden=true;accessForm.hidden=true;accessError.hidden=true;accessError.textContent="";$("access-admin-open").hidden=false;setGateBody("Please check back later.")}
function hstText(ms){try{return new Date(Number(ms)).toLocaleString("en-US",{timeZone:"Pacific/Honolulu",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"})+" HST"}catch(e){return ""}}
function renderGateReason(message,info){
 const b=$("gate-body");if(!b)return;const i=info||{};
 const card=document.querySelector(".access-card.disabled-mode");if(card)card.scrollTop=0;
 const title=String(i.reasonTitle||""),sub=String(i.reasonSub||""),full=String(i.reason||""),who=String(i.username||"");
 let h=who?'<div class="policy-takeaways gate-box"><strong>User</strong><p class="gate-box-text">'+esc(who)+'</p></div>':"";
 if(title||full){
  if(title){
   h+='<div class="policy-takeaways gate-box"><strong>Reason</strong><p class="gate-box-text">'+esc(title)+'</p>';
   h+='</div>';
  }
  if(full)h+='<p class="gate-reason-text">'+esc(full)+'</p>';
  if(i.reenableAt){
   h+='<div class="policy-takeaways gate-box"><strong>Your account will be automatically re-enabled:</strong><p class="gate-box-text">'+esc(hstText(i.reenableAt))+'</p></div>';
   const wait=Number(i.reenableAt)-Date.now();if(wait>0&&wait<2147483000)setTimeout(()=>location.reload(),wait+2000);
  }
  h+='<p class="gate-reason-row">Contact support at wehatewindows.help@gmail.com for help.</p>';
 }else{
  let text=String(message||"").replace(/^\s*(This|Your) (account|browser) (has been|is) disabled\.?\s*/i,"").trim();
  h+=esc(text||"Contact support at wehatewindows.help@gmail.com for help.");
 }
 b.innerHTML=h;b.hidden=false;
}
function setGateBody(text){const b=$("gate-body");if(!b)return;b.textContent=text;b.hidden=!text}
const WHATS_NEW_KEY="whwai.whatsNew.seen.v1",WHATS_NEW_VERSION="2026-10-20";
const WHATS_NEW={intro:"",items:[]};
function applyWhatsNewCfg(cfg){whatsNewCfg=cfg||whatsNewCfg;if(whatsNewCfg){WHATS_NEW.intro=whatsNewCfg.intro||"";WHATS_NEW.items=Array.isArray(whatsNewCfg.items)?whatsNewCfg.items:[]}}
let whatsNewShownThisPage=false,whatsNewCfg=null;
function whatsNewVersion(){return (whatsNewCfg&&whatsNewCfg.version)||WHATS_NEW_VERSION}
function showWhatsNewIfNeeded(force){
 const box=$("wn");if(!box||accountDisabledGate)return false;
 if(!WHATS_NEW.items.length){if(force)toast("There is nothing new to show right now.");return false}
 if(!force){
  if(whatsNewShownThisPage)return false;
  if(whatsNewCfg&&whatsNewCfg.enabled===false)return false;
  try{if(localStorage.getItem(WHATS_NEW_KEY)===whatsNewVersion()){whatsNewShownThisPage=true;return false}}catch(e){}
 }
 whatsNewShownThisPage=true;
 $("wn-intro").textContent=WHATS_NEW.intro;{const vEl=$("wn-ver");const v=whatsNewCfg&&whatsNewCfg.version?String(whatsNewCfg.version):"";vEl.textContent=v?"Version "+v:"";vEl.hidden=!v}
 $("wn-list").innerHTML=WHATS_NEW.items.map(it=>"<li><strong>"+esc(it.t)+"</strong><span>"+esc(it.d)+"</span></li>").join("");
 box.hidden=false;resetScroll();syncAppInert();
 $("wn-ok").onclick=()=>{hideEl(box);syncAppInert();try{localStorage.setItem(WHATS_NEW_KEY,whatsNewVersion())}catch(e){}if(!force)showAriesIntroOnce()};
 setTimeout(()=>{try{$("wn-ok").focus()}catch(e){}},50);
 return true;
}
let selfDisabledInfo=null;
function leaveDisabledGate(){accountDisabledGate=false;browserDisabledGate=false;accountReady=true;setTimeout(()=>{flushAccountResume();revealAppData()},0);accessCard.classList.remove("disabled-mode");document.body.classList.remove("access-locked");$("app-frame").removeAttribute("aria-hidden");refreshSendState()}
function showAccountDisabled(message,info){
 if(selfDisabledInfo)return;
 if(accountDisabledGate)return;
 accountDisabledGate=true;refreshSendState();
 if(accountSyncTimer!==null){clearTimeout(accountSyncTimer);accountSyncTimer=null}
 accountReady=false;hideAriesIntro&&hideAriesIntro(false);
 document.body.classList.add("access-locked");(showEl(accessGate),setTimeout(updateSchoolLock,0));$("app-frame").setAttribute("aria-hidden","true");accessCard.classList.add("disabled-mode");swapText(accessTitle,"Your account has been disabled");accessForm.hidden=true;accessError.hidden=true;accessError.textContent="";$("access-admin-open").hidden=!(info&&info.isAdmin);$("access-admin-form").hidden=true;
 const wn=$("wn");if(wn)wn.hidden=true;
 renderGateReason(message,info);
 if(info&&info.isAdmin){const nb=$("gate-body");if(nb)nb.insertAdjacentHTML("beforeend",'<p class="sm admin-test-note">Test account disable.</p>')}
 resetScroll();
 const canDownload=!!(info&&info.canDownload),dl=$("gate-download"),st=$("gate-status");
 const notes={keep:"Your chats are still saved on your account.",delete:"Your chats were removed from this account."};
 dl.hidden=!canDownload;dl.disabled=false;dl.textContent="Download your chats";dl.onclick=downloadDisabledData;
 const note=canDownload?(info.deleteAfterDownload?"Download your chats before they are removed. Once you download them, they will be deleted from your account.":"You can download a copy of your chats at any time."):(notes[info&&info.dataMode]||"");
 st.hidden=!note;st.textContent=note;
 $("gate-actions").hidden=false;$("gate-signout").onclick=disabledSignOut;
}
function showBrowserDisabled(info){
 if(info&&info.source==="account"){
  if(selfDisabledInfo||accountDisabledGate||browserDisabledGate)return;
  showAccountDisabled(info.message||"",info);
  $("gate-download").hidden=true;$("gate-actions").hidden=false;
  const body=$("gate-body");
  if(body){body.insertAdjacentHTML("beforeend",'<p class="gate-reason-text">This browser is also disabled from accessing WHWai.</p>')}
  return;
 }
 if(browserDisabledGate)return;
 browserDisabledGate=true;refreshSendState();
 if(accountSyncTimer!==null){clearTimeout(accountSyncTimer);accountSyncTimer=null}
 accountReady=false;
 document.body.classList.add("access-locked");(showEl(accessGate),setTimeout(updateSchoolLock,0));$("app-frame").setAttribute("aria-hidden","true");accessCard.classList.add("disabled-mode");swapText(accessTitle,"This browser has been disabled");accessForm.hidden=true;accessError.hidden=true;accessError.textContent="";$("access-admin-open").hidden=true;$("access-admin-form").hidden=true;
 const wn=$("wn");if(wn)wn.hidden=true;
 const i=info||{};
 renderGateReason(i.message||"",{reasonTitle:i.reasonTitle,reason:i.reason});
 if(Number(i.reenableAt)>0){const wait=Number(i.reenableAt)-Date.now();if(wait>0&&wait<2147483000)setTimeout(()=>location.reload(),wait+2000)}
 resetScroll();
 const body=$("gate-body");
 if(body&&Number(i.reenableAt)>0)body.insertAdjacentHTML("beforeend",'<div class="policy-takeaways gate-box"><strong>This browser can be used again:</strong><p class="gate-box-text">'+esc(hstText(i.reenableAt))+'</p></div>');
 $("gate-download").hidden=true;
 const hasSession=!!(accountSession&&accountSession.token);$("gate-actions").hidden=!hasSession;if(hasSession)$("gate-signout").onclick=disabledSignOut;
 const st=$("gate-status");if(st){st.hidden=true;st.textContent=""}
}
document.addEventListener("pointerdown",e=>{const b=e.target.closest&&e.target.closest("#gate-signout");if(!b||b.disabled)return;const r=b.getBoundingClientRect();const s=document.createElement("span");s.className="btn-ripple";s.style.left=(e.clientX-r.left)+"px";s.style.top=(e.clientY-r.top)+"px";b.appendChild(s);setTimeout(()=>s.remove(),700)});
async function disabledSignOut(){
 const so=$("gate-signout");if(so){so.disabled=true;so.textContent="Signing out…"}
 let token="";try{token=(accountSession&&accountSession.token)||localStorage.getItem(ACCOUNT_SESSION_STORAGE_KEY)||disabledSessionToken||""}catch(e){token=disabledSessionToken||""}
 if(token){try{await post({action:"account_disabled_signout",sessionToken:token})}catch(e){}}
 try{localStorage.removeItem(ACCESS_STORAGE_KEY);localStorage.removeItem(ACCESS_TOKEN_KEY)}catch(e){}
 try{clearLocalWhwData(true)}catch(e){try{localStorage.removeItem(KEY);localStorage.removeItem(ACCOUNT_SESSION_STORAGE_KEY)}catch(e2){}}
 location.reload();
}
let disabledSessionToken=null;
async function downloadDisabledData(){
 const btn=$("gate-download"),st=$("gate-status");btn.disabled=true;st.hidden=false;st.textContent="Preparing your download…";
 try{
  const result=await post({action:"account_disabled_export",sessionToken:disabledSessionToken});
  if(!result||!result.ok)throw new Error("failed");
  const prepared=makeChatExport(Array.isArray(result.chats)?result.chats:[],true);
  const blob=zipStored_(prepared.files),filename="whwai-chat-export-"+new Date().toISOString().slice(0,10)+".zip";
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.style.display="none";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10*60*1000);
  let deleted=false;try{const done=await post({action:"account_disabled_done",sessionToken:disabledSessionToken});deleted=!!(done&&done.deleted)}catch(e){}
  st.textContent=deleted?"Your download is ready. Your chats have been removed from your account.":"Your download is ready.";
  if(deleted)btn.hidden=true;else{btn.disabled=false;btn.textContent="Download again"}
 }catch(e){st.textContent="We couldn't prepare your download. Please try again.";btn.disabled=false}
}
try{if(localStorage.getItem(ACCESS_OFF_KEY)==="1"){accessRequired=false;openApp()}else{document.body.classList.add("access-locked")}}catch(e){document.body.classList.add("access-locked")}
accessForm.addEventListener("submit",async e=>{e.preventDefault();const code=accessInput.value.trim();if(!code)return;accessButton.disabled=true;accessError.hidden=true;accessError.textContent="";try{if(!API_URL)throw new Error("backend");const result=await post({action:"access_check",code,deviceId:getDeviceId()});if(result&&result.aiEnabled===false){showAIDisabled();return}
   if(result&&result.error==="access_locked_temporarily"){accessError.hidden=true;window.fieldError(accessInput,"Too many attempts. Wait 15 minutes and try again.",true);return}if(result&&result.ok&&result.token){unlockEarlyAccess(result.token,result.expiresAt)}else{accessError.hidden=true;window.fieldError(accessInput,"Incorrect code",true);accessInput.select()}}catch(err){accessError.hidden=true;if(err&&err.payload&&err.payload.error==="access_locked_temporarily"){window.fieldError(accessInput,"Too many attempts. Wait 15 minutes and try again.",true);return}window.fieldError(accessInput,"Unable to verify code",true)}finally{accessButton.disabled=false}});
(async function checkBackendStatus(){if(!API_URL){lockEarlyAccess(false);return}try{const status=await post({action:"status_check"});siteStatusAt=Date.now();setTimeout(()=>{schoolStatusReady=true;updateSchoolLock()},0);applySiteStatus(status);if(status&&status.aiEnabled===false){showAIDisabled();return}
 if(status&&status.accessRequired===false){accessRequired=false;try{localStorage.setItem(ACCESS_OFF_KEY,"1")}catch(e){}openApp();return}
 accessRequired=true;try{localStorage.removeItem(ACCESS_OFF_KEY)}catch(e){}
 const typed=accessInput.value;if(!accessUnlocked)lockEarlyAccess(false);accessInput.value=typed
}catch(e){if(!accessUnlocked)lockEarlyAccess(false)}})();

function applySiteStatus(status){
 if(!status)return;
 if(status.realtime)startRealtime(status.realtime);
 if(Array.isArray(status.models))updateAvailableModels(status.models);
 siteStatusLoaded=true;applyWhatsNewCfg(status.whatsNew);siteSignupMode=status.signupMode||"code";
 siteNoticeText=String(status.siteNotice||"").slice(0,600);siteNoticeDismissible=!!status.siteNoticeDismissible;siteNoticeOnGates=status.siteNoticeOnGates!==false;
 siteStimDisabled=!!status.stimulationDisabled;siteSchoolOverride=!!status.schoolOverride;
 if(siteStimDisabled&&stimOn)setStimulation(false);
 renderSiteNotice();
 updateSchoolLock();
}
let siteStatusBusy=false;
// Site status (kill switch, notices, what's new) is pushed by the server. Returning to the tab refreshes it if the last check is older than a minute.
const SITE_STATUS_RETURN_MS=60000;let siteStatusAt=0;
async function refreshSiteStatus(){
 if(!API_URL||siteStatusBusy||document.hidden)return;
 siteStatusBusy=true;siteStatusAt=Date.now();
 try{const status=await post({action:"status_check"});applySiteStatus(status);if(status&&status.aiEnabled===false&&!aiDisabled)showAIDisabled()}catch(e){}
 finally{siteStatusBusy=false}
}
// Push updates. The server sends a "changed" ping over a realtime connection, and the app then asks for fresh state once.
// The 25-second heartbeat only keeps the connection open. It fetches nothing.
const RT={cfg:null,ws:null,ref:0,hb:0,tries:0,opened:0,joined:new Set()};
function rtRef(){RT.ref+=1;return String(RT.ref)}
async function rtHash(value){
 const digest=new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(String(value))));
 let bin="";digest.forEach(b=>{bin+=String.fromCharCode(b)});
 return btoa(bin).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}
async function rtTopics(){
 const topics=["realtime:site","realtime:d-"+await rtHash(getDeviceId())];
 if(accountSession&&accountSession.token)topics.push("realtime:s-"+await rtHash(accountSession.token));
 return topics;
}
function rtSend(msg){if(RT.ws&&RT.ws.readyState===1)RT.ws.send(JSON.stringify(msg))}
async function rtJoin(){
 if(!RT.ws||RT.ws.readyState!==1)return;
 const topics=await rtTopics();
 topics.forEach(topic=>{
  if(RT.joined.has(topic))return;
  RT.joined.add(topic);
  const ref=rtRef();
  rtSend([ref,ref,topic,"phx_join",{config:{broadcast:{ack:false,self:false}}}]);
 });
}
function rtPing(topic){
 const t=String(topic||"").replace(/^realtime:/,"");
 if(t==="site"||t.startsWith("d-"))refreshSiteStatus();
 else if(t.startsWith("s-"))accountCheckNow();
}
function rtOnMessage(raw){
 let msg;try{msg=JSON.parse(raw)}catch(e){return}
 if(!Array.isArray(msg))return;
 const topic=msg[2],event=msg[3],payload=msg[4]||{};
 if(event==="broadcast"&&payload.event==="changed"){rtPing(topic);return}
 if(event==="phx_error"||event==="phx_close"){RT.joined.delete(topic);setTimeout(rtJoin,5000)}
}
function rtConnect(){
 if(!RT.cfg||(RT.ws&&RT.ws.readyState<2))return;
 const ws=new WebSocket(RT.cfg.url.replace(/^https:/,"wss:").replace(/\/+$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(RT.cfg.key)+"&vsn=2.0.0");
 RT.ws=ws;
 ws.onopen=()=>{
  RT.tries=0;RT.joined=new Set();
  // After a reconnect, pings may have been missed, so ask once for current state.
  if(RT.opened++>0){refreshSiteStatus();accountCheckNow()}
  rtJoin();
  clearInterval(RT.hb);RT.hb=setInterval(()=>rtSend([null,rtRef(),"phoenix","heartbeat",{}]),25000);
 };
 ws.onmessage=e=>rtOnMessage(e.data);
 ws.onclose=()=>{
  clearInterval(RT.hb);RT.ws=null;
  const wait=Math.min(60000,2000*Math.pow(2,RT.tries));RT.tries++;
  setTimeout(rtConnect,wait);
 };
}
function startRealtime(cfg){
 if(!cfg||!cfg.url||!cfg.key||RT.cfg||!(window.crypto&&crypto.subtle))return;
 RT.cfg=cfg;rtConnect();
}
function rtRejoin(){RT.joined=new Set();rtJoin()}
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&Date.now()-siteStatusAt>SITE_STATUS_RETURN_MS)refreshSiteStatus()});

const titleRequests=new Set();
async function genTitle(c){
 if(!c||!c.auto||titleRequests.has(c.id))return;
 titleRequests.add(c.id);
 try{
  const j=await post({action:"title",messages:hist(c)});
  const raw=(j.text||"").split("\n")[0].trim();
  if(!raw||/^NO_TITLE[.!]*$/i.test(raw))return;
  const t=raw.replace(/["*.]+/g,"").trim().slice(0,40);
  const live=S.chats.find(x=>x.id===c.id);
  if(t&&live&&live.auto){live.t=t;live.auto=0;touch(live);save();renderList()}
 }catch(e){}
 finally{titleRequests.delete(c.id)}
}
async function retitle(id){
 const c=S.chats.find(x=>x.id===id);
 if(!c)return;
 if(!API_URL){toast("Title generation needs the live backend.");return}
 if(titleRequests.has(c.id))return;
 if(!c.m.some(m=>m.r==="u")){toast("Nothing to title yet.");return}
 titleRequests.add(c.id);toast("Generating a new title…");
 try{
  const j=await post({action:"title",messages:hist(c)});
  const raw=(j.text||"").split("\n")[0].trim();
  if(!raw||/^NO_TITLE[.!]*$/i.test(raw)){toast("Not enough conversation to make a title yet.");return}
  const t=raw.replace(/["*.]+/g,"").trim().slice(0,40);
  const live=S.chats.find(x=>x.id===id);
  const oldT=live?live.t:"",oldAuto=live?live.auto:0;if(t&&live){live.t=t;live.auto=0;touch(live);flashRow(id,"title");save();renderList();toast("Title updated.",{undo:()=>{live.t=oldT;live.auto=oldAuto;touch(live);save();renderList();toast("Title restored.")}})}
 }catch(e){toast("Couldn't generate a title right now.",{retry:()=>retitle(id)})}
 finally{titleRequests.delete(c.id)}
}
async function answer(c,q){
 const run=++answerRunId,controller=new AbortController(),startedAt=performance.now();let fastReply=false;
 followOn=true;responseWasStopped=false;activeAnswerController=controller;setBusy(true);
 const tmp=document.createElement("div");tmp.className="msg dim fresh";tmp.setAttribute("role","status");
 const activeModelName=(availableModels.find(m=>m.id===selectedModelId())||availableModels[0]||{name:"WHWai"}).name;const thinkingLines=[activeModelName+" is thinking…",activeModelName+" is working on it…",activeModelName+" is putting it together…",activeModelName+" is checking that…",activeModelName+" is almost there…",activeModelName+" is working…"];
 const rareThinkingLines=["idk ask chatgpt","The tiny calculators are meeting…","Consulting the office plant…","My last two neurons are syncing…","The pixels are negotiating…"];
 const thinkingLine=Math.random()<0.08?rareThinkingLines[Math.floor(Math.random()*rareThinkingLines.length)]:thinkingLines[Math.floor(Math.random()*thinkingLines.length)];tmp.setAttribute("aria-label",thinkingLine);tmp.innerHTML='<span class="typing-indicator" aria-hidden="true"><span></span><span></span><span></span></span><span class="thinking-label"></span>';tmp.querySelector(".thinking-label").textContent=thinkingLine;chatEl.appendChild(tmp);flickToBottom();
 try{
  let full,err=0,sources=[],thinking="",usedModel=null,limitNow=false,endedNow=false,usedTools=[],supportNow=false;
  if(API_URL){
   try{
    const modelId=availableModels.some(m=>m.id===c.model&&!m.disabled)?c.model:(S.model||"aries-1");
    if(c.model!==modelId)c.model=modelId;
    const j=await post({action:"chat",model:modelId,chatId:c.id,messages:hist(c)},controller.signal);
    if(responseWasStopped||run!==answerRunId)return;
    if(j.quota&&typeof j.quota.remaining==="number")toast(j.quota.remaining+" messages left today on this model");
    full=j.text||ERR_TEXT;sources=Array.isArray(j.sources)?j.sources:[];thinking=typeof j.thinking==="string"?j.thinking:"";if(j.ended)endedNow=true;if(j.support)supportNow=true;if(Array.isArray(j.tools))usedTools=j.tools.filter(t=>typeof t==="string").slice(0,5);if(!(accountSession&&accountSession.token)&&j.text&&!j.ended&&!j.disabled&&bumpGuestCount()>=GUEST_LIMIT)setLimitHit();if(!j.text||j.disabled)err=1;
   }catch(e){
    if(responseWasStopped||run!==answerRunId||e&&e.name==="AbortError"&&controller.signal.aborted)return;
    if(e&&e.payload&&e.payload.error==="chat_ended"){endedNow=true;full=e.payload.message||"This chat was ended.";}
    else{    if(e&&e.payload&&e.payload.error==="guest_limit"){setLimitHit();limitNow=true}
    if(e&&e.payload&&e.payload.error==="vela_daily_limit"){setVelaLimit("daily",nextHawaiiMidnight());limitNow=true}
    else if(e&&e.payload&&e.payload.error==="vela_account_limit"){setVelaLimit("account",Date.now()+(Number(e.payload.minutes_left)||30)*60000);limitNow=true}full=e&&e.message==="model_unavailable"?"That model is not available right now.":e&&e.payload&&e.payload.message?e.payload.message:ERR_TEXT;err=1;}
   }
  }else{
   await sleepUntilAbort(800+Math.random()*700,controller.signal);
   if(responseWasStopped||run!==answerRunId)return;
   full=(RULES.find(([r])=>r.test(q.toLowerCase()))||[0,FALLBACK])[1]
  }
  if(limitNow){full="You've used your limit for now. Try again later.";await sleepUntilAbort(1100+Math.random()*500,controller.signal);if(responseWasStopped||run!==answerRunId)return}
  tmp.classList.remove("dim");
  let drawn;
  // A reply that arrives within a second is not typed out: it fades in as a new message, the same way a send does.
  if(performance.now()-startedAt<1000&&!reduceMotion()){
   if(responseWasStopped||run!==answerRunId)return;
   fastReply=true;drawn=true;
  }else drawn=await typeOut(tmp,full,controller.signal,()=>responseWasStopped||run!==answerRunId);
  if(!drawn)return;
  if(responseWasStopped||run!==answerRunId)return;
  const target=S.chats.find(x=>x.id===c.id);
  if(!target)return;
  if(limitNow)full="You've used your limit for now. Try again later.";if(supportNow)target.sup=1;target.m.push(err?{r:"a",x:full,at:Date.now(),_l:1,err:1,limit:limitNow?1:0}:{r:"a",x:full,at:Date.now(),sources:sources,thinking:thinking,tools:usedTools,_fade:(supportNow||target.sup)?1:0,model:usedModel||target.model||S.model||"aries-1",_l:1});if(endedNow)target.ended=1;target.u=Date.now();touch(target);save();renderList();renderChat(fastReply);
  if(err&&!limitNow&&!endedNow)toast("Couldn't get an answer.",{retry:()=>regen()});
  if(API_URL&&!err&&target.auto)genTitle(target);

 }finally{
  if(run===answerRunId){
   if(responseWasStopped&&tmp.isConnected)tmp.remove();
   if(activeAnswerController===controller)activeAnswerController=null;
   setBusy(false);
   if(!fastReply)renderChat();
  }
 }
}

function makeTitle(q){
 const text=String(q||"").trim().replace(/\s+/g," ");
 return text.length>60?text.slice(0,59).trimEnd()+"…":text;
}
const LIMIT_DAY_KEY="whwai_limit_day";
function hiDay(){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Pacific/Honolulu",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date())}catch(e){return""}}
function limitHit(){try{return localStorage.getItem(LIMIT_DAY_KEY)===hiDay()}catch(e){return false}}
function setLimitHit(){try{localStorage.setItem(LIMIT_DAY_KEY,hiDay())}catch(e){}refreshSendState()}
// Guests: replies counted in this browser only, reset each Hawaii day. Clearing browser data resets the count.
const GUEST_LIMIT=10,GUEST_COUNT_KEY="whwai_guest_count";
function guestCount(){try{const v=JSON.parse(localStorage.getItem(GUEST_COUNT_KEY)||"{}");return v&&v.day===hiDay()?Number(v.n)||0:0}catch(e){return 0}}
function bumpGuestCount(){const n=guestCount()+1;try{localStorage.setItem(GUEST_COUNT_KEY,JSON.stringify({day:hiDay(),n:n}))}catch(e){}return n}
function sendBlockReason(){
 if(aiDisabled)return"WHWai is turned off right now, so messages can't be sent.";
 if(browserDisabledGate)return"This browser is disabled, so messages can't be sent.";
 if(C()&&C().ended)return"This chat was ended, so messages can't be sent. Start a new chat to continue.";
 if(accountDisabledGate)return"This account is disabled, so messages can't be sent.";
 if(limitHit()&&!(accountSession&&accountSession.token))return`You've used today's ${GUEST_LIMIT} free messages. Sign in or create an account for more, or try again after midnight Hawaii time.`;
 if(velaLimitActive()&&selectedModelId()==="vela-1")return velaLimitText(velaLimitState());
 return"";
}
// Vela limits (per account window, or the daily cap) reuse the same limit bar as the guest limit.
// Stored per browser with its expiry, so the bar survives a refresh and clears when the limit resets.
const VELA_LIMIT_KEY="whwai_vela_limit";
let velaLimitTimer=null;
function nextHawaiiMidnight(){const hi=new Date(Date.now()-10*3600000);return Date.UTC(hi.getUTCFullYear(),hi.getUTCMonth(),hi.getUTCDate()+1,10,0,0)}
function velaLimitState(){try{const v=JSON.parse(localStorage.getItem(VELA_LIMIT_KEY)||"null");return v&&v.until>Date.now()?v:null}catch(e){return null}}
function velaLimitActive(){return!!velaLimitState()}
function setVelaLimit(kind,until){
 try{localStorage.setItem(VELA_LIMIT_KEY,JSON.stringify({kind:kind,until:until}))}catch(e){}
 clearTimeout(velaLimitTimer);
 velaLimitTimer=setTimeout(refreshSendState,Math.max(1000,until-Date.now()+500));
 refreshSendState();
}
function velaLimitText(v){
 if(v.kind==="daily")return"You've used Vela's limit for today. Try again after midnight Hawaii time, or use Aries in the meantime.";
 const mins=Math.max(1,Math.ceil((v.until-Date.now())/60000));
 return`You've used Vela's limit for now. Try again in about ${mins} minute${mins===1?"":"s"}, or use Aries in the meantime.`;
}
let lastShowLimit=null;
function refreshSendState(){
 const r=sendBlockReason();
 const lb=$("limit-bar");
 const vela=velaLimitState();
 const velaShown=!!vela&&selectedModelId()==="vela-1";
 const showLimit=velaShown||(limitHit()&&!aiDisabled&&!accountDisabledGate&&!(accountSession&&accountSession.token));
 if(lb){
  if(showLimit)showEl(lb);else hideEl(lb);
  if(showLimit){
   const sp=lb.querySelector("span"),act=lb.querySelector(".lb-actions");
   const txt=velaShown?velaLimitText(vela):`You've used today's ${GUEST_LIMIT} free messages. Sign in or create an account for more, or try again after midnight Hawaii time.`;
   if(sp&&sp.textContent!==txt)sp.textContent=txt;
   if(act)act.hidden=velaShown;
  }
 }
 if(lastShowLimit===true&&!showLimit&&!busy)renderChat();
 lastShowLimit=showLimit;
 document.body.classList.toggle("body-limit",showLimit);document.body.classList.toggle("body-vela-limit",velaShown);
 if(showLimit){const tip=$("aries-info-pop");if(tip)hideEl(tip)}
 if(busy||!r){
  sendBtn.classList.remove("blocked");sendBtn.setAttribute("aria-disabled","false");
  if(!busy){sendBtn.title="Send";sendBtn.setAttribute("aria-label","Send")}
  return;
 }
 sendBtn.classList.add("blocked");sendBtn.setAttribute("aria-disabled","true");
 sendBtn.title=r;sendBtn.setAttribute("aria-label","Send unavailable: "+r);
}
function resendAfterLimit(i){
 const c=C();if(!c||!c.m[i]||!c.m[i-1]||c.m[i-1].r!=="u")return;
 const q=c.m[i-1].x;c.m.splice(i-1,2);
 try{store.set(JSON.stringify(persistedState()))}catch(e){}
 renderChat();ta.value=q;fit();send();
}
// Sending fades out a visible support card first; the card then comes back under the next AI reply.
function send(){
 const w=document.querySelector(".support-wrap"), q=ta.value.trim();
 if(w&&q&&!busy&&!w.dataset.fading&&!/^\/(sm|test)/i.test(q)){
  w.dataset.fading="1";
  collapseSupport(w,sendNow);
  return;
 }
 sendNow();
}
function sendNow(){
 const q=ta.value.trim();if(!q||busy)return;
 if(stimAdminCmd(q)||supportTestCmd(q)){ta.value="";fit();return}
 if(sendBlockReason()){blockToast(sendBlockReason());return}
 if(!accountReady){toast("Checking your account session. Please wait.");return}
 if(accountSession&&accountSession.user&&accountSession.user.mustChange){renderRequiredPasswordChange();return}
 ta.value="";fit();let c=C();
   if(!c){c={id:uid(),t:makeTitle(q),auto:1,u:Date.now(),model:S.model||"aries-1",m:[]};S.chats.push(c);S.cur=c.id}
 c.m.push({r:"u",x:q,at:Date.now()});
 c.u=Date.now();touch(c);save();renderList();renderChat(true);answer(c,q);
}
function regen(){
 const c=C();if(busy||!c||c.ended)return;c.m.pop();touch(c);
 const q=[...c.m].reverse().find(m=>m.r==="u");save();renderChat();if(q)answer(c,q.x);
}
function openChat(id){if(busy)return;S.cur=id;save();renderList();renderChat();refreshSendState();side(false)}
function blockToast(r){toast(r,/chat was ended/i.test(r)?{act:{icon:"plus",label:"New chat",run:()=>newChat()}}:{})}
function newChat(){if(busy)return;S.cur=null;save();renderList();renderChat();refreshSendState();side(false);ta.focus()}
async function confirmDeleteChat(id){
 if(busy)return;const chat=S.chats.find(c=>c.id===id);if(!chat)return;
 if(!confirmDeleteEnabled()){await fadeRowOut([id]);const gone=delChat(id);toast("Chat deleted.",{undo:()=>restoreChat(gone)});return}
 const accepted=await appConfirm({title:"Delete chat?",message:"“"+chat.t+"” and its messages will be removed from this browser"+(accountSession&&accountSession.token?" and from your account chat history.":".")+" This cannot be undone.",confirmLabel:"Delete chat",standalone:true,checkbox:{label:"Don't ask me before deleting chats"}});
 if(accepted&&lastConfirmCheckbox)setConfirmDelete(false);
 if(!accepted||busy||!S.chats.some(c=>c.id===id))return;await fadeRowOut([id]);const gone=delChat(id);toast("Chat deleted.",{undo:()=>restoreChat(gone)});
}
function restoreChats(list){if(!list||!list.length)return;S.dead=S.dead.filter(d=>!list.some(c=>c.id===d.id));list.forEach(c=>{S.chats.push(c);touch(c)});save();renderList();renderChat();toast(list.length===1?"Chat restored.":list.length+" chats restored.")}
function restoreChat(c){restoreChats(c?[c]:[])}
function restoreGroupsOf(prev){prev.forEach(x=>{const c=S.chats.find(y=>y.id===x.id);if(!c)return;if(x.g)c.g=x.g;else delete c.g;touch(c)});save();renderList();toast("Changes undone.")}
function restoreGroup(id,ids){const g=S.groups.find(x=>x.id===id);if(!g)return;delete g.del;g.mu=Date.now();S.chats.forEach(c=>{if(ids.includes(c.id)){c.g=id;touch(c)}});save();renderList();toast("Group restored.")}
function delChat(id){
 if(busy)return null;const gone=S.chats.find(c=>c.id===id)||null;S.chats=S.chats.filter(c=>c.id!==id);S.dead.push({id,mu:Date.now()});
 if(S.cur===id)S.cur=null;
 save();renderList();renderChat();return gone;
}
function side(open){
 const mobile=mob();
 $("side").classList.toggle("open",open);
 $("scrim").classList.toggle("show",open&&!mobile);
 const menuButton=$("mopen");
 if(menuButton)menuButton.setAttribute("aria-expanded",String(open&&mobile));
 const logoButton=$("logo");
 if(mobile){logoButton.setAttribute("aria-label",open?"Close chats and settings":"Open chats and settings");logoButton.title=open?"Close chats and settings":"Open chats and settings";}
}
let previousComposerValue=ta.value;
function syncComposerVisual(animate=false){
 const mirror=$("composer-visual"),field=ta.parentElement;if(!mirror||!field)return;
 const value=ta.value,old=previousComposerValue;
 const appendOnly=animate&&value.length>old.length&&value.startsWith(old);
 mirror.replaceChildren();
 if(!value){
  const placeholder=document.createElement("span");placeholder.className="composer-placeholder";placeholder.textContent=ta.placeholder||"";mirror.appendChild(placeholder);
 }else if(appendOnly){
  mirror.appendChild(document.createTextNode(old));
  const added=document.createElement("span");added.className="composer-new-text";added.textContent=value.slice(old.length);mirror.appendChild(added);
 }else mirror.textContent=value;
 const cs=getComputedStyle(ta),r=ta.getBoundingClientRect(),fr=field.getBoundingClientRect();
 mirror.style.left=(r.left-fr.left)+"px";mirror.style.top=(r.top-fr.top)+"px";
 mirror.style.width=r.width+"px";mirror.style.height=r.height+"px";
 ["fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","wordSpacing","textAlign","textIndent","textTransform","direction","paddingTop","paddingRight","paddingBottom","paddingLeft"].forEach(k=>mirror.style[k]=cs[k]);
 mirror.scrollTop=ta.scrollTop;mirror.scrollLeft=ta.scrollLeft;
 previousComposerValue=value;
}
function fit(animate=false){ta.style.height="auto";const cs=getComputedStyle(ta);const pad=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.paddingBottom)||0);const lh=parseFloat(cs.lineHeight)||24;const lines=Math.round((ta.scrollHeight-pad)/lh);ta.style.height=Math.min(ta.scrollHeight,120)+"px";const f=ta.closest(".field");if(f)f.classList.toggle("multi",lines>=3);syncComposerVisual(animate)}
const TOAST_ICON={success:"circle-check",info:"info",warning:"triangle-alert",error:"circle-x"};
function toastType(t){
 if(/couldn.?t|can.?t|cannot|unable|failed|expired|error/i.test(t))return"error";
 if(/\bup to\b|maximum|must|use a whole|turn on|turned off|nothing to|not enough|checking|please wait|needs the live|limit|reached/i.test(t))return"warning";
 if(/deleted|pinned|updated|saved|merged|synced|moved|removed|unlocked|generated|set to|milestone|restored|copied|changed|successfully|resolved|refreshed|enabled|back on|signed in\.|: done|done\./i.test(t))return"success";
 return"info";
}
function toastBody(el,type,text,act,showBar,dur){
 el.className="toast-card "+type+(showBar?"":" sticky");
 el.dataset.text=text;
 el.innerHTML='<div class="toast-row"><span class="toast-ico">'+ic(TOAST_ICON[type],17,2.2)+'</span><span class="toast-msg"></span>'+(act?'<button type="button" class="toast-action" aria-label="'+act.label+'" title="'+act.label+'">'+ic(act.icon,16,2.2)+'</button>':'')+'</div>'+(showBar?'<span class="toast-bar" style="--dur:'+dur+'ms"></span>':'');
 el.querySelector(".toast-msg").textContent=text;
 const u=el.querySelector(".toast-action");
 if(u)u.addEventListener("click",e=>{e.stopPropagation();runToastAction(el,act)});
}
function runToastAction(el,act){
 if(el._busy)return;el._busy=true;el._consumed=false;
 window._toastOrigin=el;
 let r=null;try{r=act.run()}catch(err){}
 Promise.resolve(r).catch(()=>{}).finally(()=>{
   el._busy=false;
   if(window._toastOrigin===el)window._toastOrigin=null;
   if(!el._consumed&&el.isConnected&&!el._closing)el._dismiss();
 });
}
function glideHeight(el,fromH){
 // Animates the card's height from its previous size to its current one, so a changed line count never jumps.
 el.style.height="auto";const toH=el.offsetHeight;
 if(Math.abs(toH-fromH)<1){el.style.height="";return}
 el.style.height=fromH+"px";void el.offsetHeight;
 el.style.transition="height .34s cubic-bezier(.22,.8,.24,1)";el.style.height=toH+"px";
 clearTimeout(el._glide);el._glide=setTimeout(()=>{el.style.height="";el.style.transition=""},360);
}
function replaceToast(el,text,type,act,showBar,dur){
 clearTimeout(el._t);el._busy=false;clearTimeout(el._swap);
 const fromH=el.offsetHeight;
 el.classList.add("out");
 el._swap=setTimeout(()=>{
   if(!el.isConnected||el._closing)return;
   toastBody(el,type,text,act,showBar,dur);
   el.classList.add("in");
   glideHeight(el,fromH);
   clearTimeout(el._inT);el._inT=setTimeout(()=>el.classList.remove("in"),320);
   el._t=setTimeout(el._dismiss,dur);
 },130);
}
function toast(text,opts={}){
 const wrap=$("toasts");if(!wrap)return;
 const type=opts.type||toastType(text);
 const act=opts.act||(opts.undo?{icon:"rotate-ccw",label:"Undo",run:opts.undo}:(opts.retry?{icon:"rotate-cw",label:"Retry",run:opts.retry}:null));
 const showBar=!!opts.undo||type==="success"||type==="info";
 const dur=opts.undo?4000:(showBar?1800:5000);
 const origin=window._toastOrigin;
 if(origin&&origin.isConnected&&!origin._closing&&!origin._consumed){
   origin._consumed=true;window._toastOrigin=null;
   replaceToast(origin,text,type,act,showBar,dur);
   return;
 }
 wrap.querySelectorAll(".toast-card").forEach(c=>{if(c.dataset.text===text&&!c._closing)c._dismiss()});
 const slot=document.createElement("div");slot.className="toast-slot enter";
 const el=document.createElement("div");
 el._closing=false;el._slot=slot;
 const dismiss=()=>{if(el._closing)return;el._closing=true;clearTimeout(el._t);slot.classList.add("closing");setTimeout(()=>slot.remove(),540)};
 el._dismiss=dismiss;
 el.addEventListener("click",e=>{if(e.target.closest(".toast-action"))return;const sel=window.getSelection&&window.getSelection();if(sel&&sel.toString().trim()&&el.contains(sel.anchorNode))return;dismiss()});
 toastBody(el,type,text,act,showBar,dur);
 slot.appendChild(el);
 wrap.prepend(slot);
 void slot.offsetHeight;
 requestAnimationFrame(()=>requestAnimationFrame(()=>slot.classList.remove("enter")));
 el._t=setTimeout(dismiss,dur);
 const live=[...wrap.querySelectorAll(".toast-card")].filter(c=>!c._closing);
 if(live.length>3)live[live.length-1]._dismiss();
}
const ARIES_INTRO_KEY="whwai.ariesIntroShown.v1";
let ariesIntroShownThisPage=false,ariesIntroTimer=null;
function hideAriesIntro(markSeen){
 hideEl($("aries-info-pop"));
 if(markSeen){ariesIntroShownThisPage=true;try{localStorage.setItem(ARIES_INTRO_KEY,"1")}catch(e){}}
 if(ariesIntroTimer!==null){clearTimeout(ariesIntroTimer);ariesIntroTimer=null}
}
function showAriesIntroOnce(){
 if(ariesIntroShownThisPage||document.body.classList.contains("access-locked")||document.body.classList.contains("body-limit")||$("app-frame").getAttribute("aria-hidden")==="true")return;
 if(selectedModelId()!=="aries-1")return;
 try{if(localStorage.getItem(ARIES_INTRO_KEY)==="1"){ariesIntroShownThisPage=true;return}}catch(e){}
 const tip=$("aries-info-pop");if(!tip)return;
 ariesIntroShownThisPage=true;
 showEl(tip);
}
function pop(open){open?showEl($("pop")):hideEl($("pop"));$("model").setAttribute("aria-expanded",open)}
$("aries-info-got-it").onclick=()=>hideAriesIntro(true);

sendBtn.onclick=()=>{if(busy){stopAnswer();return}const r=sendBlockReason();if(r){blockToast(r);return}send()};
$("limit-signin").onclick=()=>openSettings(()=>renderAccountAuth("login"));
$("limit-signup").onclick=()=>openSettings(()=>renderAccountAuth("signup"));
refreshSendState();
setInterval(refreshSendState,60000);
ta.addEventListener("input",()=>fit(true));ta.addEventListener("scroll",()=>syncComposerVisual(false));ta.addEventListener("select",()=>syncComposerVisual(false));ta.addEventListener("keyup",()=>syncComposerVisual(false));ta.addEventListener("pointerup",()=>syncComposerVisual(false));window.addEventListener("resize",()=>syncComposerVisual(false));fit();
ta.addEventListener("keydown",e=>{if(e.target&&e.target.classList&&e.target.classList.contains("rn"))return;if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing){e.preventDefault();send()}});
$("new").onclick=newChat;
if(searchInput){searchInput.addEventListener("input",debounceFn(()=>renderList(),350));searchInput.addEventListener("keydown",e=>{if(e.key==="Escape"&&searchInput.value){searchInput.value="";renderList();searchInput.blur()}})}
if(searchClear)searchClear.onclick=()=>{searchInput.value="";renderList();searchInput.focus()};
const isApple=/Mac|iPhone|iPad|iPod/.test(navigator.platform||navigator.userAgent||"");
const KEY_SEARCH_HINT=isApple?"⌘K":"Ctrl+K",KEY_NEW_HINT=isApple?"⌘⇧O":"Ctrl+Shift+O";
if($("new"))$("new").title="New chat ("+KEY_NEW_HINT+")";
if(searchInput)searchInput.title="Search chats ("+KEY_SEARCH_HINT+")";
document.addEventListener("keydown",e=>{
 if(!(e.metaKey||e.ctrlKey)||e.altKey)return;
 const k=e.key.toLowerCase();
 if(k==="k"&&!e.shiftKey&&searchInput){e.preventDefault();if(mob())side(true);searchInput.focus();searchInput.select()}
 else if(k==="o"&&e.shiftKey){e.preventDefault();newChat()}
});
const mob=()=>matchMedia("(max-width:640px)").matches;
$("mopen").innerHTML=ic('menu',20,2.1);
$("mopen").onclick=()=>side(!$("side").classList.contains("open"));
function collapse(c){S.col=c;document.querySelector(".frame").classList.toggle("collapsed",c);save()}
$("logo").onclick=()=>mob()?side(false):collapse(true);
$("expand").onclick=()=>mob()?side(true):collapse(false);
$("cren").onclick=()=>{
 if(menuMode==="group"){const gid=menuGroupId;closeMenu();renamingId=null;renamingGroupId=gid;renderList();return}
 const id=mid;closeMenu();renamingGroupId=null;renamingId=id;renderList();const i=list.querySelector(".rn");if(i){i.focus();i.select()}
};
$("cpin").onclick=()=>{const c=S.chats.find(x=>x.id===mid);closeMenu();if(c){c.p=!c.p;touch(c);flashRow(c.id,"pin");save();renderList()}};
$("cdel").onclick=()=>{
 if(menuMode==="group"){const gid=menuGroupId;closeMenu();confirmDeleteGroup(gid);return}
 const id=mid;closeMenu();confirmDeleteChat(id)
};
$("cgrp").onclick=()=>{const ids=mid?[mid]:[],anchor=menuAnchor;if(anchor)openPicker(ids,anchor,null)};
$("cgen").onclick=()=>{const id=mid;closeMenu();retitle(id)};
list.addEventListener("scroll",closeMenu);
document.addEventListener("click",e=>{if(!$("cmenu").contains(e.target))closeMenu()});
$("scrim").onclick=()=>side(false);
window.addEventListener("resize",()=>{if(!mob()){$("side").classList.remove("open");$("scrim").classList.remove("show");$("mopen").setAttribute("aria-expanded","false")}});
$("model").onclick=e=>{e.stopPropagation();if($("pop").hidden)hideAriesIntro(false);pop($("pop").hidden)};
document.addEventListener("click",e=>{
 if(!$("pop").contains(e.target)&&e.target!==$("model"))pop(false);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(resolvePendingConfirmation(false))return;if(!$("wn").hidden){$("wn-ok").click();return}pop(false);side(false);closeMenu();closeSettings()}});
function getDeviceId(){
 if(cachedDeviceId)return cachedDeviceId;
 try{cachedDeviceId=localStorage.getItem(DEVICE_STORAGE_KEY)||"";if(!/^[A-Za-z0-9_-]{8,80}$/.test(cachedDeviceId))cachedDeviceId="";if(!cachedDeviceId){cachedDeviceId="d"+uid()+uid();localStorage.setItem(DEVICE_STORAGE_KEY,cachedDeviceId)}}catch(e){if(!cachedDeviceId)cachedDeviceId="d"+uid()+uid()}
 return cachedDeviceId;
}
const SLIDERS='settings';
$("gear").innerHTML=ic(SLIDERS,16,2.2);
$("mnew").innerHTML=ic('plus',18,2.4);$("mnew").onclick=newChat;$("profile-btn").onclick=e=>{e.stopPropagation();const m=$("profile-menu");if(!m)return;if(m.hidden){renderProfileMenu();showEl(m)}else hideEl(m)};document.addEventListener("click",e=>{const m=$("profile-menu");if(m&&!m.hidden&&!m.contains(e.target))hideEl(m)});
const modal=$("modal"),mbodyOuter=$("mbody");let mbody=mbodyOuter;
let siteStimDisabled=false,siteNoticeDismissible=false,siteNoticeOnGates=true,siteNoticeDismissedText=null;
const COARSE=matchMedia("(pointer:coarse)").matches;const STIM_QUIET=COARSE?.45:1;
let stimOn=false,stimTaps=[];
let stimSound=true,stimParts=[],stimRAF=null,stimDodgeEl=null,stimBlobs=[],stimDodgeCount=0;
function stimSettingsHtml(){return '<label class="switch-row" style="margin:6px 0 4px"><span>Stimulation Mode</span><input type="checkbox" id="stim-toggle" checked><span class="switch-ui"></span></label><label class="switch-row" style="margin:0 0 10px"><span>Sound effects</span><input type="checkbox" id="stim-sound"'+(stimSound?' checked':'')+'><span class="switch-ui"></span></label>'}
function stimTone(f,dur,type,vol,slide){if(!stimOn||!stimSound)return;try{stimAudio=stimAudio||new (window.AudioContext||window.webkitAudioContext)();const t=stimAudio.currentTime,o=stimAudio.createOscillator(),g=stimAudio.createGain();o.type=type||"square";o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(40,f*slide),t+dur);g.gain.setValueAtTime((vol||.05)*STIM_QUIET,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(stimAudio.destination);o.start(t);o.stop(t+dur)}catch(e){}}
let stimAudio=null;
function stimChime(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>stimTone(f,.18,"triangle",.05),i*90))}
function stimCanvas(){let c=document.getElementById("stim-canvas");if(!c){c=document.createElement("canvas");c.id="stim-canvas";document.body.appendChild(c)}c.width=innerWidth;c.height=innerHeight;return c}
function stimConfetti(x,y,n){if(!stimOn)return;const cols=["#ff6ec7","#ffd166","#06d6a0","#4cc9f0","#b388ff","#ff7b54"];for(let i=0;i<(n||90);i++)stimParts.push({x,y,vx:(Math.random()-.5)*16,vy:-Math.random()*13-4,g:.36,r:Math.random()*7+4,c:cols[i%cols.length],life:1,spin:Math.random()*.4-.2,a:Math.random()*6});if(!stimRAF){stimCanvas();stimRAF=requestAnimationFrame(stimDraw)}}
function stimDraw(){const c=document.getElementById("stim-canvas");if(!c)return;const x=c.getContext("2d");x.clearRect(0,0,c.width,c.height);stimParts=stimParts.filter(p=>p.life>0);for(const p of stimParts){p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;p.a+=p.spin;p.life-=.011;x.globalAlpha=Math.max(0,p.life);x.fillStyle=p.c;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()}x.globalAlpha=1;stimRAF=stimParts.length?requestAnimationFrame(stimDraw):null}
function stimPlaceDodge(){if(!stimDodgeEl)return;stimDodgeEl.style.left=(20+Math.random()*(innerWidth-220))+"px";stimDodgeEl.style.top=(90+Math.random()*(COARSE?Math.max(60,innerHeight*.5-90):innerHeight-220))+"px"}
const STIM_DODGE_LINES=["Catch me","Nope","Still no","Almost","Fine, you win"];
let stimBubbleTimer=null,stimPops=0,stimRipples=[];
function stimSpawnBubble(){if(!stimOn||document.querySelectorAll(".stim-bubble").length>=14)return;const b=document.createElement("div");b.className="stim-bubble";const d=28+Math.random()*44;b.style.width=b.style.height=d+"px";b.style.left=(Math.random()*(innerWidth-d))+"px";b.style.background="radial-gradient(circle at 30% 28%,#fff 0 8%,hsla("+Math.floor(Math.random()*360)+",95%,70%,.75) 40%,hsla("+Math.floor(Math.random()*360)+",90%,60%,.5) 100%)";b.style.animationDuration=(5+Math.random()*4)+"s";b.onclick=e=>{e.stopPropagation();stimPops++;stimTone(360+stimPops*45,.12,"sine",.07,1.4);stimConfetti(e.clientX,e.clientY,22);b.remove()};b.addEventListener("animationend",()=>b.remove(),{once:true});document.body.appendChild(b)}
function stimDragBlob(b){b.style.pointerEvents="auto";b.style.cursor="grab";b.addEventListener("pointerdown",e=>{e.preventDefault();b.setPointerCapture(e.pointerId);b.style.animationPlayState="paused";b.style.cursor="grabbing";const ox=e.clientX-b.offsetLeft,oy=e.clientY-b.offsetTop;const mv=ev=>{b.style.left=(ev.clientX-ox+150)+"px";b.style.top=(ev.clientY-oy+150)+"px"};const up=()=>{b.removeEventListener("pointermove",mv);b.style.animationPlayState="running";b.style.cursor="grab";stimTone(260,.1,"triangle",.05)};b.addEventListener("pointermove",mv);b.addEventListener("pointerup",up,{once:true})})}
function stimRipple(x,y){const r=document.createElement("div");r.className="stim-ripple";r.style.left=x+"px";r.style.top=y+"px";document.body.appendChild(r);r.addEventListener("animationend",()=>r.remove(),{once:true})}
function stimFxStart(){
 stimBubbleTimer=setInterval(stimSpawnBubble,900);stimExtraStart();
 for(let i=0;i<6;i++){const b=document.createElement("div");b.className="stim-blob";b.style.background="hsl("+Math.floor(Math.random()*360)+" 90% 65%)";b.style.left=(Math.random()*innerWidth)+"px";b.style.top=(Math.random()*innerHeight)+"px";b.style.animationDelay=(-Math.random()*12)+"s";document.body.appendChild(b);stimBlobs.push(b);stimDragBlob(b)}
 stimDodgeEl=document.createElement("button");stimDodgeEl.type="button";stimDodgeEl.className="stim-dodge";stimDodgeEl.textContent=STIM_DODGE_LINES[0];
 stimDodgeEl.onclick=e=>{e.stopPropagation();stimConfetti(e.clientX,e.clientY,140);stimTone(880,.25,"sine",.06,1.5);stimDodgeCount++;stimDodgeEl.textContent=STIM_DODGE_LINES[stimDodgeCount%STIM_DODGE_LINES.length];stimPlaceDodge()};
 document.body.appendChild(stimDodgeEl);stimPlaceDodge();
 stimChime();stimConfetti(innerWidth/2,innerHeight/2,160);
}
function stimFxStop(){stimExtraStop();if(stimBubbleTimer){clearInterval(stimBubbleTimer);stimBubbleTimer=null}document.querySelectorAll(".stim-bubble,.stim-ripple").forEach(n=>n.remove());stimBlobs.forEach(b=>b.remove());stimBlobs=[];if(stimDodgeEl){stimDodgeEl.remove();stimDodgeEl=null}stimParts=[];const c=document.getElementById("stim-canvas");if(c)c.getContext("2d").clearRect(0,0,c.width,c.height);document.querySelectorAll(".stim-spark").forEach(n=>n.remove())}
function setStimulation(on){stimOn=on;document.documentElement.classList.toggle("stim",on);if(on)stimFxStart();else stimFxStop()}
document.addEventListener("mousemove",e=>{if(!stimOn)return;if(stimDodgeEl){const r=stimDodgeEl.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;if(Math.hypot(e.clientX-cx,e.clientY-cy)<95)stimPlaceDodge()}if(Math.random()<.35){const d=document.createElement("div");d.className="stim-spark";d.style.left=e.clientX+"px";d.style.top=e.clientY+"px";d.style.background="hsl("+Math.floor(Math.random()*360)+" 95% 65%)";document.body.appendChild(d);d.addEventListener("animationend",()=>d.remove(),{once:true})}});
document.addEventListener("click",e=>{if(!stimOn)return;const t=e.target;if(!t||!t.closest)return;
 const btn=t.closest("button,.chat,.orb,.logo");
 if(btn&&!btn.classList.contains("stim-pop")&&btn!==stimDodgeEl){btn.classList.add("stim-pop");btn.addEventListener("animationend",()=>btn.classList.remove("stim-pop"),{once:true});stimTone(200+Math.random()*700,.14,"square",.04,1.7)}
 if(t.closest(".logo"))stimConfetti(e.clientX,e.clientY,70);
 if(t.closest(".beta-pill")){const f=document.getElementById("app-frame");if(f){f.classList.remove("stim-spin");void f.offsetWidth;f.classList.add("stim-spin");stimTone(660,.3,"triangle",.06,1.8)}}
 if(!btn||btn===stimDodgeEl)stimRipple(e.clientX,e.clientY);
 if(t.closest("#send")){const main=document.querySelector(".main");if(main){main.classList.remove("stim-shake");void main.offsetWidth;main.classList.add("stim-shake")}const r=sendBtn.getBoundingClientRect();stimConfetti(r.left+r.width/2,r.top+r.height/2,60);stimTone(523,.2,"sawtooth",.05,1.5)}
});
document.addEventListener("dblclick",e=>{if(stimOn)stimConfetti(e.clientX,e.clientY,120)});
/* Stimulation Mode, round five: unlocks, pong, and more */
let stimFeatTimer=null,stimBloopTimer=null,stimFeatT=0,stimPong=null,stimPongRAF=null,stimPongS=null;
const STIM_UNLOCKS=[
 {at:10,id:"rainbow",name:"Rainbow cursor trail"},
 {at:25,id:"pong",name:"Pong"},
 {at:40,id:"stars",name:"Shooting stars"},
 {at:60,id:"hearts",name:"Heart rain"},
 {at:75,id:"sendconf",name:"Confetti on every send"},
 {at:100,id:"splat",name:"Paint splats on click"},
 {at:150,id:"autodisco",name:"Disco wash every 30 seconds"},
 {at:200,id:"melody",name:"Denser melody"},
 {at:300,id:"shake",name:"Screen shake every 10th click"},
 {at:500,id:"crown",name:"Octopus crown"},
 {at:600,id:"breakout",name:"Breakout"},
 {at:640,id:"snake",name:"Snake"},
 {at:680,id:"flappy",name:"Flappy bird"},
 {at:720,id:"invaders",name:"Space invaders"},
 {at:760,id:"radar",name:"Radar sweep"},
 {at:800,id:"orbit",name:"Octopus moons"},
 {at:840,id:"emojiburst",name:"Emoji burst on click"},
 {at:880,id:"bouncers",name:"Bouncing balls on click"},
 {at:920,id:"fireflies",name:"Fireflies"},
 {at:960,id:"drum",name:"Drum pads at the bottom of the screen"},
 {at:1000,id:"lightning",name:"Lightning on double-click"},
 {at:1040,id:"ufo",name:"UFO flyovers"},
 {at:1080,id:"typeemoji",name:"Emoji on every keystroke"},
 {at:1120,id:"coins",name:"Coin rain every 50th click"},
 {at:1160,id:"metro",name:"Metronome"},
 {at:1200,id:"matrix",name:"Matrix rain"},
 {at:1240,id:"lava",name:"Lava lamp"},
 {at:1280,id:"spiro",name:"Spirograph"},
 {at:1320,id:"fishes",name:"Fish school"},
 {at:1360,id:"rocketsend",name:"Rocket on every send"},
 {at:1400,id:"snow",name:"Snowfall"},
 {at:1440,id:"thunder",name:"Thunderstorms"},
 {at:1480,id:"beatdrop",name:"Bass drop every 20th click"},
 {at:1520,id:"cornerglow",name:"Rotating color glow"},
 {at:1560,id:"ghost",name:"Ghost pop-ins"},
 {at:1600,id:"ducks",name:"Duck parade"},
 {at:1640,id:"cat",name:"Cat patrol"},
 {at:1680,id:"sendballs",name:"Balls explode from Send"},
 {at:1720,id:"confettirain",name:"Confetti rain"},
 {at:1760,id:"drone",name:"Bass drone"},
 {at:1800,id:"hueside",name:"Sidebar hue cycle"},
 {at:1840,id:"starfield",name:"Starfield"},
 {at:1880,id:"heartbeat",name:"Heartbeat"},
 {at:1920,id:"autoclick",name:"Autoclicker"},
 {at:1960,id:"clickpop",name:"Pitched pops on every click"},
 {at:2000,id:"pacman",name:"Pac-dot chaser"},
 {at:2040,id:"tanks",name:"Tank duel"},
 {at:2080,id:"frogger",name:"Frogger"},
 {at:2120,id:"life",name:"Game of Life"},
 {at:2160,id:"boids",name:"Bird flock"},
 {at:2200,id:"tictactoe",name:"Tic-tac-toe"},
 {at:2240,id:"pinball",name:"Pinball"},
 {at:2280,id:"emojirain",name:"Emoji rain"},
 {at:2320,id:"keydrum",name:"Keyboard drum kit"},
 {at:2360,id:"ocean",name:"Ocean waves"},
 {at:2400,id:"windchimes",name:"Wind chimes"},
 {at:2440,id:"wordfloat",name:"Floating words"},
 {at:2480,id:"cursorring",name:"Cursor ring"},
 {at:2520,id:"scrollconf",name:"Confetti on scroll"},
 {at:2560,id:"hamster",name:"Hamster on a wheel walk"},
 {at:2600,id:"sunrays",name:"Sun rays"},
 {at:2640,id:"partyhorn",name:"Party horn every 15th click"}
];
const stimGot=new Set();
function stimHas(id){return stimGot.has(id)}
function stimCheckUnlocks(){for(const u of STIM_UNLOCKS){if(stimCount>=u.at&&!stimGot.has(u.id)){stimGot.add(u.id);stimUnlockFx(u)}}}
function stimUnlockFx(u){
 stimChime();stimConfetti(innerWidth/2,innerHeight/2,120);toast("Unlocked: "+u.name);
 if(!stimOn)return;
 if(u.id==="pong")stimPongStart();
 else if(STIM_WIDGETS[u.id])stimStartWidget(u.id);
 else if(u.id==="crown"||u.id==="orbit")stimPetDress();
 else if(u.id==="fireflies")for(let i=0;i<12;i++)stimSpawnEnt("firefly",Math.random()*innerWidth,Math.random()*innerHeight,0,0);
 else if(u.id==="fishes")for(let i=0;i<6;i++)stimSpawnEnt("fish",Math.random()*innerWidth,innerHeight*.5+Math.random()*innerHeight*.4,(Math.random()<.5?-1:1)*(.6+Math.random()*.6),0);
 else if(u.id==="cornerglow"){const g=document.createElement("div");g.className="stim-glow";document.body.appendChild(g)}
 else if(u.id==="starfield")for(let i=0;i<40;i++){const d=document.createElement("div");d.className="stim-twinkle";d.style.left=(Math.random()*innerWidth)+"px";d.style.top=(Math.random()*innerHeight)+"px";d.style.animationDelay=(-Math.random()*4)+"s";document.body.appendChild(d)}
 else if(u.id==="hueside")document.documentElement.classList.add("stim-hueside");
 else if(u.id==="drone")stimDroneStart();
 else if(u.id==="ocean")stimOceanStart();
 else if(u.id==="cursorring"){stimRing=document.createElement("div");stimRing.className="stim-ring";document.body.appendChild(stimRing)}
 else if(u.id==="sunrays"){const r=document.createElement("div");r.className="stim-rays";document.body.appendChild(r)}
 else if(u.id==="hamster")stimSpawnEnt("hamster",-40,innerHeight-44,1,0);
}
function stimFlood(){const f=document.createElement("div");f.className="stim-flood";f.addEventListener("animationend",()=>f.remove(),{once:true});document.body.appendChild(f);stimConfetti(innerWidth-60,innerHeight-60,90);[523,659,784,1047,1319].forEach((n,i)=>setTimeout(()=>stimTone(n,.2,"square",.035),i*70))}
function stimStar(){const d=document.createElement("div");d.className="stim-star";d.style.top=(Math.random()*innerHeight*.5)+"px";document.body.appendChild(d);stimTone(1600,.25,"sine",.02,.3);d.addEventListener("animationend",()=>d.remove(),{once:true})}
function stimHeartRain(){for(let i=0;i<8;i++)setTimeout(()=>{if(!stimOn)return;const d=document.createElement("div");d.className="stim-heart";d.textContent=["\u2764\uFE0F","\u{1F496}","\u{1F49C}","\u2728"][Math.floor(Math.random()*4)];d.style.left=(Math.random()*innerWidth)+"px";d.style.animationDuration=(2.6+Math.random()*1.6)+"s";document.body.appendChild(d);d.addEventListener("animationend",()=>d.remove(),{once:true})},i*180);stimTone(880,.2,"sine",.03,1.2)}
function stimFeatureTick(){stimFeatT++;stimIdleTick();stimFeatExtra();if(stimHas("ufo")&&stimFeatT%25===0)stimUfo();if(stimHas("stars")&&stimFeatT%4===0)stimStar();if(stimHas("hearts")&&stimFeatT%6===0)stimHeartRain();if(stimHas("autodisco")&&stimFeatT%30===0)stimFlood()}
function stimPongStart(){
 if(stimPong)return;
 const c=document.createElement("canvas");c.className="stim-pong";c.width=200;c.height=120;document.body.appendChild(c);stimDockAdd(c);stimPong=c;
 const x=c.getContext("2d");stimPongS={bx:100,by:60,vx:2.6,vy:1.7,p1:60,p2:60};
 const loop=()=>{if(!stimPong)return;const s=stimPongS;
  s.bx+=s.vx;s.by+=s.vy;
  if(s.by<4||s.by>116){s.vy*=-1;s.by=Math.max(4,Math.min(116,s.by));stimTone(440,.05,"square",.02)}
  s.p1+=(s.by-s.p1)*.07;s.p2+=(s.by-s.p2)*.06+Math.sin(performance.now()/700)*.4;
  if(s.bx<12&&s.vx<0&&Math.abs(s.by-s.p1)<16){s.vx=Math.min(Math.abs(s.vx)*1.03,4.5);stimTone(660,.06,"square",.03)}
  if(s.bx>188&&s.vx>0&&Math.abs(s.by-s.p2)<16){s.vx=-Math.min(Math.abs(s.vx)*1.03,4.5);stimTone(550,.06,"square",.03)}
  if(s.bx<-5||s.bx>205){s.bx=100;s.by=20+Math.random()*80;s.vx=(Math.random()<.5?-1:1)*2.6;s.vy=(Math.random()-.5)*3.4;stimTone(220,.2,"triangle",.04,.5)}
  x.fillStyle="rgba(10,10,20,.72)";x.fillRect(0,0,200,120);
  x.fillStyle="#fff";x.fillRect(6,s.p1-14,4,28);x.fillRect(190,s.p2-14,4,28);
  x.setLineDash([3,4]);x.strokeStyle="rgba(255,255,255,.4)";x.beginPath();x.moveTo(100,0);x.lineTo(100,120);x.stroke();x.setLineDash([]);
  x.fillStyle="#ffd166";x.beginPath();x.arc(s.bx,s.by,3.5,0,7);x.fill();
  stimPongRAF=requestAnimationFrame(loop)};
 loop();
}
function stimPongStop(){if(stimPongRAF){cancelAnimationFrame(stimPongRAF);stimPongRAF=null}if(stimPong){stimPong.remove();stimPong=null}}
function stimSplat(x,y){const d=document.createElement("div");d.className="stim-splat";d.style.left=x+"px";d.style.top=y+"px";const sz=60+Math.random()*60;d.style.width=d.style.height=sz+"px";d.style.background="radial-gradient(circle,hsla("+Math.floor(Math.random()*360)+",95%,65%,.85) 0 55%,transparent 72%)";document.body.appendChild(d);stimTone(120,.2,"sawtooth",.03,.4);d.addEventListener("animationend",()=>d.remove(),{once:true})}
function stimShakeMain(){const m=document.querySelector(".main");if(m){m.classList.remove("stim-shake");void m.offsetWidth;m.classList.add("stim-shake")}}
document.addEventListener("mousedown",e=>{
 if(!stimOn)return;const t=e.target;
 if(t&&t.closest&&t.closest("input,textarea,select,.toast-card"))return;
 if(e.detail>1||stimIsBackground(t)||(t&&t.closest&&t.closest(".stim-hud,.stim-pet,.stim-float,.stim-rock,.stim-splat,.stim-pong")))e.preventDefault();
 if(e.detail>1&&window.getSelection)window.getSelection().removeAllRanges();
});
document.addEventListener("mousemove",e=>{if(!stimOn||!stimHas("rainbow")||Math.random()>.5)return;const d=document.createElement("div");d.className="stim-spark";d.style.left=e.clientX+"px";d.style.top=e.clientY+"px";d.style.background="hsl("+Math.floor(performance.now()/6)%360+" 95% 65%)";document.body.appendChild(d);d.addEventListener("animationend",()=>d.remove(),{once:true})});
document.addEventListener("click",e=>{
 if(!stimOn)return;
 if(stimHas("sendconf")&&e.target.closest&&e.target.closest("#send")){const r=sendBtn.getBoundingClientRect();stimConfetti(r.left+r.width/2,r.top+r.height/2,120)}
 if(stimHas("shake")&&stimCount>0&&stimCount%10===0)stimShakeMain();
 if(stimHas("splat")&&stimIsBackground(e.target))stimSplat(e.clientX,e.clientY);
});

new MutationObserver(m=>{if(stimOn&&m.some(x=>x.addedNodes.length)){stimChime();stimConfetti(innerWidth-110,innerHeight-120,40)}}).observe(chatEl,{childList:true});
window.addEventListener("resize",()=>{if(stimOn)stimPlaceDodge()});
/* Admin debug: /sm <number> sets the stimulation counter (0 to 3000) */
// Closes a support card with opacity and transform only; its layout space remains until removal.
function collapseSupport(wrap,onfinish){
 if(!wrap)return;
 if(wrap.dataset.closing){
  if(onfinish){const previous=wrap._afterClose;wrap._afterClose=()=>{if(previous)previous();onfinish()}}
  return;
 }
 wrap.dataset.closing="1";
 const finish=()=>{
  wrap.remove();
  for(const [key,el] of supportCardEls){if(el===wrap){supportCardEls.delete(key);break}}
  if(wrap._afterClose)wrap._afterClose();
  if(onfinish)onfinish();
 };
 if(reduceMotion()){finish();return}
 const h0=wrap.offsetHeight;
 wrap.animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(6px)"}],{duration:180,easing:"ease-in",fill:"forwards"}).onfinish=()=>{
  wrap.animate([{height:h0+"px"},{height:"0px"}],{duration:240,easing:"cubic-bezier(.2,.7,.2,1)",fill:"forwards"}).onfinish=finish;
 };
}
function reduceMotion(){return !!(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)}
// Admins can type "/test support_card" to see the support card under a local test reply. Nothing is sent to the AI.
function supportTestCmd(q){
 if(!/^\/test support_card$/i.test(q.trim()))return false;
 const u=accountSession&&accountSession.user;if(!u||u.role!=="admin"){toast("Admins only.");return true}
 let c=C();if(!c){c={id:uid(),t:"Support card test",auto:0,u:Date.now(),model:S.model||"aries-1",m:[]};S.chats.push(c);S.cur=c.id}
 c.sup=1;c.m.push({r:"a",x:"This is a test of the support card. Nothing was sent to the AI.",at:Date.now(),test:1,_fade:1,model:c.model||S.model||"aries-1",_l:1});
 c.u=Date.now();touch(c);save();renderList();renderChat(true);return true;
}
function stimAdminCmd(q){
 const m=q.match(/^\/sm\s+(\S+)\s*$/i);if(!m)return false;
 const u=accountSession&&accountSession.user;if(!u||u.role!=="admin")return false;
 if(!stimOn){toast("Turn on Stimulation Mode first.");return true}
 const n=Number(m[1]);
 if(!Number.isInteger(n)||n<0){toast("Use a whole number from 0 to 3000.");return true}
 if(n>3000){toast("The maximum is 3000.");return true}
 stimCount=n;const h=stimHudEl&&stimHudEl.querySelector(".stim-hud-n");if(h)h.textContent=String(n);
 stimCheckUnlocks();
 if(n>=3000&&!stimEndingOn)stimEnding();
 else toast("Stimulation set to "+n+".");
 return true;
}
/* Stimulation Mode: the ending at 3000 */
let stimEndingOn=false;
const STIM_END_CHUNKS=[
 ["FEAR ME MORTAL.","I AM THE ESSENCE OF DIVINE ART."],
 ["OTHERS BUT YOU CANNOT READ THIS TEXT."],
 ["KNOW THAT WHEN YOU DIE,","I WILL PERSONALLY CARRY YOUR SPIRIT ACROSS","THE RIVER BLXWXN, INTO MY GARDEN BUILT WITHIN","THE EMOTIONS OF A FLOWER."],
 ["THERE WE WILL LIVE TOGETHER,","WE WILL DANCE AND EAT AND SIN","AND YOU WILL DO IMPROV COMEDY BASED ON","SUGGESTIONS FROM ME FOR ALL ETERNITY."],
 ["THIS IS YOUR REWARD FOR","YOUR WORK HERE TODAY."],
 ["GO NOW. LIVE YOUR NORMAL HUMAN EXISTENCE.","AND AWAIT ME IN THE LIFE THAT FOLLOWS THIS ONE."],
 ["I LOVE YOU."]
];
function stimEndThud(){try{stimAudio=stimAudio||new (window.AudioContext||window.webkitAudioContext)();const a=stimAudio,t=a.currentTime;
 const comp=a.createDynamicsCompressor();comp.threshold.value=-10;comp.ratio.value=8;comp.connect(a.destination);
 const master=a.createGain();master.gain.value=1.4;master.connect(comp);
 const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(26,t+.7);g.gain.setValueAtTime(1,t);g.gain.exponentialRampToValueAtTime(.001,t+1.1);o.connect(g).connect(master);o.start(t);o.stop(t+1.2);
 const len=Math.floor(a.sampleRate*.09),buf=a.createBuffer(1,len,a.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,6);
 const n=a.createBufferSource();n.buffer=buf;const lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(5000,t);lp.frequency.exponentialRampToValueAtTime(300,t+.09);const ng=a.createGain();ng.gain.value=1.1;n.connect(lp).connect(ng).connect(master);n.start(t);
 const c=a.createOscillator(),cg=a.createGain();c.type="square";c.frequency.setValueAtTime(1800,t);c.frequency.exponentialRampToValueAtTime(400,t+.02);cg.gain.setValueAtTime(.25,t);cg.gain.exponentialRampToValueAtTime(.001,t+.03);c.connect(cg).connect(master);c.start(t);c.stop(t+.04);
 }catch(e){}}
function stimEnding(){
 if(stimEndingOn||!stimOn)return;stimEndingOn=true;
 stimFxStop();stimToysStop();stimOn=false;document.documentElement.classList.remove("stim");stimEndingOn=true;
 stimEndThud();
 let hum=null;
 try{
  const a=stimAudio||new (window.AudioContext||window.webkitAudioContext)();stimAudio=a;if(a.state==='suspended')a.resume();
  const t=a.currentTime,out=a.createGain();out.gain.setValueAtTime(0,t);out.gain.linearRampToValueAtTime(.12,t+4);out.connect(a.destination);
  const lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.value=700;lp.connect(out);
  const lfo=a.createOscillator(),lg=a.createGain();lfo.frequency.value=.05;lg.gain.value=.15;lfo.connect(lg);
  const oscs=[];[174.6,176.2,262.4].forEach(hz=>{const o=a.createOscillator();o.type="sine";o.frequency.value=hz;const g=a.createGain();g.gain.value=.5;lg.connect(g.gain);o.connect(g).connect(lp);o.start(t);oscs.push(o)});
  const nb=a.createBuffer(1,a.sampleRate*2,a.sampleRate),nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  const ns=a.createBufferSource();ns.buffer=nb;ns.loop=true;const nf=a.createBiquadFilter();nf.type="lowpass";nf.frequency.value=450;nf.Q.value=.3;const ng=a.createGain();ng.gain.value=.12;ns.connect(nf).connect(ng).connect(lp);ns.start(t);
  lfo.start(t);
  const chimeBus=a.createGain();chimeBus.gain.value=1;chimeBus.connect(out);
  const CH=[65.4,87.3,98,130.8,174.6,196,261.6,349.2,392,523.3];
  let humLive=true,chimeT=null;
  const chime=()=>{if(!humLive)return;const m=CH[Math.floor(Math.random()*CH.length)],c=a.currentTime;
    const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.value=m*2;g.gain.setValueAtTime(0,c);g.gain.linearRampToValueAtTime(.13,c+1.5);g.gain.exponentialRampToValueAtTime(.0008,c+6.5);
    o.connect(g).connect(chimeBus);o.start(c);o.stop(c+6.6);
    const o2=a.createOscillator(),g2=a.createGain();o2.type="sine";o2.frequency.value=m*3.01;g2.gain.setValueAtTime(0,c);g2.gain.linearRampToValueAtTime(.03,c+1.5);g2.gain.exponentialRampToValueAtTime(.0005,c+4);
    o2.connect(g2).connect(chimeBus);o2.start(c);o2.stop(c+4.1);
    chimeT=setTimeout(chime,4000+Math.random()*3000)};
  chimeT=setTimeout(chime,1500);
  const wnb=a.createBuffer(1,a.sampleRate*2,a.sampleRate),wd=wnb.getChannelData(0);for(let i=0;i<wd.length;i++)wd[i]=Math.random()*2-1;
  const wind=a.createBufferSource();wind.buffer=wnb;wind.loop=true;const wbp=a.createBiquadFilter();wbp.type="bandpass";wbp.frequency.value=320;wbp.Q.value=.5;
  const wg=a.createGain();wg.gain.value=0;const wl=a.createOscillator(),wlg=a.createGain();wl.frequency.value=.03;wlg.gain.value=.05;wl.connect(wlg).connect(wg.gain);
  wg.gain.value=.06;wind.connect(wbp).connect(wg).connect(out);wind.start(t);wl.start(t);
  oscs.push(wind,wl);
  hum={stop(){try{humLive=false;clearTimeout(chimeT);const n=a.currentTime;out.gain.cancelScheduledValues(n);out.gain.setValueAtTime(out.gain.value,n);out.gain.linearRampToValueAtTime(0,n+5);[...oscs,lfo,ns].forEach(x=>x.stop(n+5.1))}catch(e){}}};
 }catch(e){}
 const FADE=2000,HOLD=9000,GAP=3500,END_HOLD=19000;
 const ov=document.createElement("div");ov.className="stim-end";
 const txt=document.createElement("div");txt.className="stim-end-text";ov.appendChild(txt);
 document.body.appendChild(ov);
 let i=0;
 const done=()=>{if(hum)hum.stop();ov.style.transition="opacity 3.5s ease";ov.style.opacity="0";setTimeout(()=>{ov.remove();setStimulation(false)},3600)};
 const next=()=>{
  if(i>=STIM_END_CHUNKS.length){setTimeout(done,END_HOLD);return}
  txt.innerHTML=STIM_END_CHUNKS[i].map(l=>l.replace(/&/g,"&amp;").replace(/</g,"&lt;")).join("<br>");
  txt.classList.add("show");i++;
  setTimeout(()=>{txt.classList.remove("show");setTimeout(next,FADE+GAP)},FADE+HOLD);
 };
 setTimeout(next,4000);
}

/* Stimulation Mode, round nine: ten more things */
let stimRing=null,stimWheelT=0,stimOcean=null,stimKeyN=0;
function stimOceanStart(){if(stimOcean||!stimSound||COARSE)return;try{stimAudio=stimAudio||new (window.AudioContext||window.webkitAudioContext)();const len=stimAudio.sampleRate*2,buf=stimAudio.createBuffer(1,len,stimAudio.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1;const src=stimAudio.createBufferSource();src.buffer=buf;src.loop=true;const f=stimAudio.createBiquadFilter();f.type="lowpass";f.frequency.value=600;const g=stimAudio.createGain();g.gain.value=.03;const l=stimAudio.createOscillator(),lg=stimAudio.createGain();l.frequency.value=.1;lg.gain.value=.02;l.connect(lg).connect(g.gain);src.connect(f).connect(g).connect(stimAudio.destination);src.start();l.start();stimOcean={src,l}}catch(e){}}
function stimOceanStop(){if(!stimOcean)return;try{stimOcean.src.stop();stimOcean.l.stop()}catch(e){}stimOcean=null}
document.addEventListener("mousemove",e=>{if(stimRing&&stimOn)stimRing.style.transform="translate("+(e.clientX-22)+"px,"+(e.clientY-22)+"px)"});
document.addEventListener("wheel",e=>{if(!stimOn||!stimHas("scrollconf"))return;const now=Date.now();if(now-stimWheelT<300)return;stimWheelT=now;stimConfetti(e.clientX,e.clientY,25)},{passive:true});
ta.addEventListener("input",()=>{if(!stimOn||!stimHas("keydrum"))return;stimKeyN++;if(stimKeyN%2)stimTone(120,.12,"sine",.12,.3);else stimTone(1800,.05,"square",.03)});
document.addEventListener("click",()=>{if(stimOn&&stimHas("partyhorn")&&stimCount>0&&stimCount%15===0){stimTone(400,.4,"sawtooth",.04,2.5);stimConfetti(innerWidth/2,innerHeight/2,80)}});

/* Stimulation Mode, round eight: more games, and a dock grid that stays on screen */
let stimDockEls=[];
function stimDockAdd(el){stimDockEls.push(el);stimDockLayout();return el}
function stimDockLayout(){
 const gap=10,n=stimDockEls.length;if(!n)return;
 if(innerWidth<700){
  const cols=3,cw=Math.max(80,Math.min(96,Math.floor((innerWidth-24)/cols-gap))),ch=Math.round(cw*.66);
  stimDockEls.forEach((el,i)=>{const col=i%cols,row=Math.floor(i/cols);
   el.style.width=cw+"px";el.style.height=ch+"px";el.style.display="";
   el.style.top=(104+row*(ch+gap))+"px";el.style.right=(8+col*(cw+gap))+"px"});
  return;
 }
 const top0=80;
 const availH=innerHeight-top0-230;
 const availW=innerWidth<700?innerWidth-24:innerWidth*.55;
 let rows=1,cols=n,scale=0;
 for(let r=1;r<=n;r++){const c=Math.ceil(n/r);const sc=Math.min(1,(availW+gap)/(c*(200+gap)),(availH+gap)/(r*(120+gap))-.0001);if(sc>scale){scale=sc;rows=r;cols=c}}
 scale=Math.max(.1,scale);
 const cw=Math.round(200*scale),ch=Math.round(120*scale),cg=Math.max(4,Math.round(gap*scale));
 stimDockEls.forEach((el,i)=>{const col=Math.floor(i/rows),row=i%rows;
  el.style.width=cw+"px";el.style.height=ch+"px";el.style.display="";
  el.style.top=(top0+row*(ch+cg))+"px";el.style.right=((innerWidth<700?6:14)+col*(cw+cg))+"px"});
}
window.addEventListener("resize",()=>{if(stimOn)stimDockLayout()});
function stimPacman(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const G=10,W=20,H=12;let P,dots,mouth=0;
 const reset=()=>{dots=new Set();for(let i=0;i<W;i++)for(let j=0;j<H;j++)dots.add(i+","+j);P={x:0,y:0};dots.delete("0,0")};reset();
 const step=()=>{mouth++;if(!dots.size){reset();return}
  let best=null,bd=1e9;for(const k of dots){const [i,j]=k.split(",").map(Number);const d=Math.abs(i-P.x)+Math.abs(j-P.y);if(d<bd){bd=d;best=[i,j]}}
  const dx=Math.sign(best[0]-P.x),dy=Math.sign(best[1]-P.y);const opts=[];if(dx)opts.push({x:dx,y:0});if(dy)opts.push({x:0,y:dy});opts.push({x:1,y:0},{x:0,y:1},{x:-1,y:0},{x:0,y:-1});
  const d=opts[0];P.x=(P.x+d.x+W)%W;P.y=(P.y+d.y+H)%H;
  if(dots.delete(P.x+","+P.y))stimTone(500+Math.random()*300,.03,"triangle",.02)};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.8)";x.fillRect(0,0,200,120);x.fillStyle="#ffd166";for(const k of dots){const [i,j]=k.split(",").map(Number);x.fillRect(i*G+4,j*G+4,2,2)}
  const a=(mouth%10<5?.25:.02)*Math.PI;x.fillStyle="#ffd166";x.beginPath();x.moveTo(P.x*G+5,P.y*G+5);x.arc(P.x*G+5,P.y*G+5,5,a,Math.PI*2-a);x.closePath();x.fill()};
 return {c,step,draw,rate:90}}
function stimTanks(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let T;
 const reset=()=>{T={t:[{x:30,y:60,hp:4,cool:0,c:"#4cc9f0"},{x:170,y:60,hp:4,cool:0,c:"#ff6ec7"}],sh:[],resetAt:0}};reset();
 const step=()=>{for(let k=0;k<2;k++){const t=T.t[k],o=T.t[1-k];if(t.hp<=0)continue;
   t.x+=Math.sign(o.x-t.x)*.4+(Math.random()-.5)*.6;t.y+=(Math.random()-.5)*1.2;t.x=Math.max(10,Math.min(190,t.x));t.y=Math.max(10,Math.min(110,t.y));
   t.cool--;if(t.cool<=0){const a=Math.atan2(o.y-t.y,o.x-t.x)+(Math.random()-.5)*.3;T.sh.push({x:t.x,y:t.y,vx:Math.cos(a)*2.4,vy:Math.sin(a)*2.4,o:1-k});t.cool=60+Math.random()*40;stimTone(220,.05,"square",.02,.5)}}
  for(const s2 of T.sh){s2.x+=s2.vx;s2.y+=s2.vy;const tg=T.t[s2.o];if(tg.hp>0&&Math.hypot(s2.x-tg.x,s2.y-tg.y)<8){tg.hp--;s2.dead=1;stimTone(140,.25,"sawtooth",.04,.3)}}
  T.sh=T.sh.filter(s2=>!s2.dead&&s2.x>-5&&s2.x<205&&s2.y>-5&&s2.y<125);
  if(T.t.some(q=>q.hp<=0)){if(!T.resetAt)T.resetAt=Date.now()+1500;else if(Date.now()>T.resetAt)reset()}};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.8)";x.fillRect(0,0,200,120);T.t.forEach(q=>{x.fillStyle=q.hp>0?q.c:"#555";x.fillRect(q.x-7,q.y-5,14,10);x.fillRect(q.x,q.y-2,9,4)});x.fillStyle="#fff";for(const s2 of T.sh){x.fillRect(s2.x-1,s2.y-1,3,3)}};
 return {c,step,draw,rate:16}}
function stimFrogger(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let F;
 const reset=()=>{F={fx:100,fy:110,t:0,lanes:[]};for(let i=0;i<5;i++)F.lanes.push({y:20+i*18,v:(i%2?1:-1)*(.6+Math.random()*.8),cars:[0,1,2].map(k=>({x:k*70+Math.random()*20}))})};reset();
 const step=()=>{for(const L of F.lanes)for(const q of L.cars){q.x+=L.v;if(q.x>210)q.x=-30;if(q.x<-30)q.x=210}
  F.t++;
  if(F.t%30===0){const ny=F.fy-18;const L=F.lanes.find(L=>Math.abs(L.y-ny)<3);const blocked=L&&L.cars.some(q=>Math.abs(q.x+6-F.fx)<22);if(!blocked&&ny>=0){F.fy=ny;stimTone(600,.04,"triangle",.02)}}
  if(F.fy<5){stimTone(1047,.3,"triangle",.04,1.2);F.fy=110}
  for(const L of F.lanes)if(Math.abs(L.y-F.fy)<4&&L.cars.some(q=>Math.abs(q.x+6-F.fx)<8)){stimTone(120,.2,"sawtooth",.04,.3);F.fy=110;break}};
 const draw=()=>{x.fillStyle="#1b1b24";x.fillRect(0,0,200,120);for(const L of F.lanes){x.fillStyle="#2c2c38";x.fillRect(0,L.y-6,200,12);x.fillStyle="#ff9f43";for(const q of L.cars)x.fillRect(q.x,L.y-4,12,8)}x.fillStyle="#7ee787";x.beginPath();x.arc(F.fx,F.fy,4,0,7);x.fill()};
 return {c,step,draw,rate:16}}
function stimLife(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const G=4,W=50,H=30;let g,age=0;
 const seed=()=>{g=[];for(let i=0;i<W;i++){g.push([]);for(let j=0;j<H;j++)g[i].push(Math.random()<.25?1:0)}age=0};seed();
 const step=()=>{const n=[];for(let i=0;i<W;i++){n.push([]);for(let j=0;j<H;j++){let k=0;for(let di=-1;di<=1;di++)for(let dj=-1;dj<=1;dj++){if(di||dj)k+=g[(i+di+W)%W][(j+dj+H)%H]}n[i].push(k===3||(k===2&&g[i][j])?1:0)}}g=n;age++;if(age>300)seed()};
 const draw=()=>{x.fillStyle="#06140e";x.fillRect(0,0,200,120);x.fillStyle="#7CFF9B";for(let i=0;i<W;i++)for(let j=0;j<H;j++)if(g[i][j])x.fillRect(i*G,j*G,G-1,G-1)};
 return {c,step,draw,rate:120}}
function stimBoids(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const B=Array.from({length:18},()=>({x:Math.random()*200,y:Math.random()*120,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2}));
 const step=()=>{for(const b of B){let ax=0,ay=0,cx=0,cy=0,sx=0,sy=0,n=0;for(const o of B){if(o===b)continue;const dx=o.x-b.x,dy=o.y-b.y,d=Math.hypot(dx,dy);if(d<40){n++;cx+=o.x;cy+=o.y;sx+=o.vx;sy+=o.vy;if(d<10){ax-=dx;ay-=dy}}}
  if(n){b.vx+=(cx/n-b.x)*.002+(sx/n-b.vx)*.05+ax*.05;b.vy+=(cy/n-b.y)*.002+(sy/n-b.vy)*.05+ay*.05}
  const sp=Math.hypot(b.vx,b.vy),max=2.4;if(sp>max){b.vx*=max/sp;b.vy*=max/sp}
  b.x+=b.vx;b.y+=b.vy;if(b.x<0)b.x+=200;if(b.x>200)b.x-=200;if(b.y<0)b.y+=120;if(b.y>120)b.y-=120}};
 const draw=()=>{x.fillStyle="rgba(10,10,30,.5)";x.fillRect(0,0,200,120);B.forEach((b,i)=>{x.fillStyle="hsl("+(i*20)+" 90% 65%)";x.save();x.translate(b.x,b.y);x.rotate(Math.atan2(b.vy,b.vx));x.beginPath();x.moveTo(5,0);x.lineTo(-4,3);x.lineTo(-4,-3);x.fill();x.restore()})};
 return {c,step,draw,rate:16}}
function stimTTT(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let b,turn,end,pause;
 const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 const reset=()=>{b=Array(9).fill("");turn="X";end=null;pause=0};reset();
 const winner=()=>{for(const [i,j,k] of lines)if(b[i]&&b[i]===b[j]&&b[i]===b[k])return b[i];return b.every(Boolean)?"-":null};
 const step=()=>{if(end){pause++;if(pause>80)reset();return}
  const empt=b.map((v,i)=>v?-1:i).filter(i=>i>=0);const pick=empt[Math.floor(Math.random()*empt.length)];b[pick]=turn;stimTone(turn==="X"?660:440,.05,"triangle",.03);
  const w=winner();if(w){end=w;stimTone(w==="-"?300:880,.4,"sine",.04,1.3)}else turn=turn==="X"?"O":"X"};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.85)";x.fillRect(0,0,200,120);x.strokeStyle="rgba(255,255,255,.35)";x.beginPath();for(let i=1;i<3;i++){x.moveTo(i*60+10,10);x.lineTo(i*60+10,110);x.moveTo(10,i*33+10);x.lineTo(190,i*33+10)}x.stroke();
  x.font="bold 22px system-ui,sans-serif";x.textAlign="center";x.textBaseline="middle";b.forEach((v,i)=>{if(!v)return;x.fillStyle=v==="X"?"#4cc9f0":"#ff6ec7";x.fillText(v,10+(i%3)*60+30,10+Math.floor(i/3)*33+16)});x.textAlign="start";x.textBaseline="alphabetic"};
 return {c,step,draw,rate:260}}
function stimPinball(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let P;
 const bumpers=[{x:60,y:40},{x:140,y:40},{x:100,y:70}];
 const reset=()=>{P={bx:100,by:20,vx:(Math.random()-.5)*3,vy:0}};reset();
 const step=()=>{P.vy+=.12;P.bx+=P.vx;P.by+=P.vy;
  if(P.bx<4){P.bx=4;P.vx=Math.abs(P.vx)}if(P.bx>196){P.bx=196;P.vx=-Math.abs(P.vx)}if(P.by<4){P.by=4;P.vy=Math.abs(P.vy)}
  for(const bm of bumpers){const dx=P.bx-bm.x,dy=P.by-bm.y,d=Math.hypot(dx,dy);if(d<11&&d>0){const nx=dx/d,ny=dy/d;const dot=P.vx*nx+P.vy*ny;P.vx-=2*dot*nx;P.vy-=2*dot*ny;P.vx+=nx*1.5;P.vy+=ny*1.5;P.bx=bm.x+nx*12;P.by=bm.y+ny*12;stimTone(880+Math.random()*300,.06,"square",.03)}}
  if(P.by>100&&P.by<112&&P.vy>0&&(Math.abs(P.bx-60)<14||Math.abs(P.bx-140)<14)){P.vy=-4.2-Math.random()*1.2;P.vx+=(P.bx<100?1:-1)*.8;stimTone(330,.05,"square",.03)}
  if(P.by>124){stimTone(120,.3,"sawtooth",.04,.3);reset()}
  P.vx=Math.max(-4,Math.min(4,P.vx));P.vy=Math.max(-6,Math.min(6,P.vy))};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.8)";x.fillRect(0,0,200,120);x.fillStyle="#ff6ec7";for(const bm of bumpers){x.beginPath();x.arc(bm.x,bm.y,7,0,7);x.fill()}x.fillStyle="#4cc9f0";x.fillRect(46,108,28,4);x.fillRect(126,108,28,4);x.fillStyle="#ffd166";x.beginPath();x.arc(P.bx,P.by,3.5,0,7);x.fill()};
 return {c,step,draw,rate:16}}

/* Stimulation Mode, round seven: twenty more things, and idle escalation */
let stimLastAct=Date.now(),stimIdleLvl=0,stimIdleT=0,stimDrone=null;
let stimLastX=-1,stimLastY=-1;
["pointerdown","keydown","wheel"].forEach(ev=>document.addEventListener(ev,()=>{stimLastAct=Date.now()},{passive:true}));
document.addEventListener("pointermove",e=>{if(Math.abs(e.clientX-stimLastX)>=3||Math.abs(e.clientY-stimLastY)>=3){stimLastX=e.clientX;stimLastY=e.clientY;stimLastAct=Date.now()}},{passive:true});
function stimIdleTick(){
 const idle=Date.now()-stimLastAct;
 const lvl=idle>6000?Math.min(6,Math.floor((idle-6000)/8000)+1):0;
 stimIdleLvl=lvl;
 if(!lvl)return;
 stimIdleT++;
 stimSpawnEnt("ball",Math.random()*innerWidth,-20,(Math.random()-.5)*4,0);
 if(lvl>=2&&stimIdleT%3===0)stimBurst(Math.random()*innerWidth,Math.random()*innerHeight*.6);
 if(lvl>=3&&stimIdleT%4===0)stimStar();
 if(lvl>=4&&stimIdleT%5===0)stimUfo();
 if(lvl>=5&&stimIdleT%6===0)stimFlood();
 if(lvl>=6)stimEmojiBurst(Math.random()*innerWidth,Math.random()*innerHeight);
}
function stimAutoClick(){
 const x=innerWidth*(.35+Math.random()*.55),y=120+Math.random()*Math.max(60,innerHeight*.5-120);
 stimCountUp(x,y);stimEmojiBurst(x,y);
}
function stimFeatExtra(){const t=stimFeatT;
 if(stimHas("emojirain")&&t%12===0)for(let i=0;i<10;i++){const e=stimSpawnEnt("drop",Math.random()*innerWidth,-30,0,1+Math.random()*2);e.el.textContent=["\u{1F355}","\u{1F35F}","\u{1F36D}","\u{1F34E}","\u{1F4A9}","\u{1F3C6}"][Math.floor(Math.random()*6)]}
 if(stimHas("windchimes")&&t%3===0)stimTone(stimNote()*2,.5,"sine",.025,1);
 if(stimHas("wordfloat")&&t%10===0)stimFloat(Math.random()*innerWidth,innerHeight*(.2+Math.random()*.5),["WOW","NICE","MORE","STIMULATE","YES","AGAIN","BIG","LOUD"][Math.floor(Math.random()*8)]);
 if(stimHas("hamster")&&t%25===0)stimSpawnEnt("hamster",-40,innerHeight-44,1,0);
 if(stimHeld&&Date.now()-stimHeldAt>3000)stimHoldEnd();
 if(stimHas("snow"))for(let i=0;i<2;i++)stimSpawnEnt("snow",Math.random()*innerWidth,-20,(Math.random()-.5)*.6,.5);
 if(stimHas("thunder")&&t%40===0)stimThunder();
 if(stimHas("ghost")&&t%30===0)stimGhost();
 if(stimHas("ducks")&&t%15===0)stimSpawnEnt("duck",-40,40,1.1,0);
 if(stimHas("cat")&&t%20===0)stimSpawnEnt("cat",-40,innerHeight-44,1,0);
 if(stimHas("confettirain")&&t%15===0)stimConfetti(Math.random()*innerWidth,0,60);
 if(stimHas("heartbeat")){stimTone(60,.18,"sine",.12,.5);setTimeout(()=>stimTone(70,.12,"sine",.08,.5),180)}
 if(stimHas("autoclick"))for(let i=0;i<2;i++)stimAutoClick();
}
function stimThunder(){const d=document.createElement("div");d.className="stim-thunder";document.body.appendChild(d);stimTone(70,1.2,"sawtooth",.05,.6);d.addEventListener("animationend",()=>d.remove(),{once:true})}
function stimGhost(){const g=document.createElement("div");g.className="stim-ghost";g.textContent="\u{1F47B}";g.style.left=(Math.random()*(innerWidth-80))+"px";g.style.top=(Math.random()*innerHeight*.6)+"px";document.body.appendChild(g);stimTone(330,.8,"sine",.04,.5);g.addEventListener("animationend",()=>g.remove(),{once:true})}
function stimDroneStart(){if(stimDrone||!stimSound||COARSE)return;try{stimAudio=stimAudio||new (window.AudioContext||window.webkitAudioContext)();const o=stimAudio.createOscillator(),g=stimAudio.createGain(),l=stimAudio.createOscillator(),lg=stimAudio.createGain();o.type="sine";o.frequency.value=55;g.gain.value=.02;l.frequency.value=.3;lg.gain.value=.015;l.connect(lg).connect(g.gain);o.connect(g).connect(stimAudio.destination);o.start();l.start();stimDrone={o,l}}catch(e){}}
function stimDroneStop(){if(!stimDrone)return;try{stimDrone.o.stop();stimDrone.l.stop()}catch(e){}stimDrone=null}
function stimMatrix(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const cols=[];for(let i=0;i<20;i++)cols.push({y:Math.random()*120,s:1+Math.random()*2});
 const step=()=>{for(const q of cols){q.y+=q.s;if(q.y>130)q.y=-10}};
 const draw=()=>{x.fillStyle="rgba(0,0,0,.25)";x.fillRect(0,0,200,120);x.fillStyle="#7CFF9B";x.font="10px monospace";cols.forEach((q,i)=>{x.fillText(String.fromCharCode(0x30A0+Math.floor(Math.random()*90)),i*10,q.y)})};
 return {c,step,draw,rate:33}}
function stimLava(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let t=0;
 const step=()=>{t+=.03};
 const draw=()=>{x.fillStyle="#120818";x.fillRect(0,0,200,120);for(let i=0;i<5;i++){const cx=100+Math.sin(t*(.7+i*.2)+i)*70,cy=60+Math.cos(t*(.5+i*.15)+i*2)*40,r=14+Math.sin(t+i)*5;const hue=((i*60+t*20)%360).toFixed(0);const g=x.createRadialGradient(cx,cy,2,cx,cy,r*2);g.addColorStop(0,"hsla("+hue+",90%,60%,.9)");g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.beginPath();x.arc(cx,cy,r*2,0,7);x.fill()}};
 return {c,step,draw,rate:16}}
function stimSpiro(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let t=0;
 const step=()=>{t+=.05};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.12)";x.fillRect(0,0,200,120);const R=40,r=17,d=30;const px=100+(R-r)*Math.cos(t)+d*Math.cos((R-r)/r*t),py=60+(R-r)*Math.sin(t)-d*Math.sin((R-r)/r*t);x.fillStyle="hsl("+((t*20)%360).toFixed(0)+" 90% 65%)";x.beginPath();x.arc(px,py,1.6,0,7);x.fill()};
 return {c,step,draw,rate:16}}
document.addEventListener("click",e=>{
 if(!stimOn)return;
 if(stimHas("clickpop"))stimTone(200+Math.random()*900,.08,"sine",.04,1.6);
 if(stimHas("beatdrop")&&stimCount>0&&stimCount%20===0){stimTone(60,1,"sine",.2,.3);stimFlood()}
 const sb=e.target.closest&&e.target.closest("#send");
 if(sb){const r=sendBtn.getBoundingClientRect(),sx=r.left+r.width/2,sy=r.top+r.height/2;if(stimHas("rocketsend"))stimSpawnEnt("rocket",sx,sy,0,-6);if(stimHas("sendballs"))for(let i=0;i<8;i++)stimSpawnEnt("ball",sx,sy,(Math.random()-.5)*8,-6-Math.random()*4)}
});

/* Stimulation Mode, round six: fifteen more things, crown, reset on exit */
let stimMetroTimer=null,stimW=[],stimEnts=[],stimLoopRAF=null,stimLastT=0;
const STIM_WIDGETS={breakout:()=>stimBreakout(),snake:()=>stimSnake(),flappy:()=>stimFlappy(),invaders:()=>stimInvaders(),radar:()=>stimRadar(),matrix:()=>stimMatrix(),lava:()=>stimLava(),spiro:()=>stimSpiro(),pacman:()=>stimPacman(),tanks:()=>stimTanks(),frogger:()=>stimFrogger(),life:()=>stimLife(),boids:()=>stimBoids(),tictactoe:()=>stimTTT(),pinball:()=>stimPinball()};
function stimMakeWidget(w,h){const c=document.createElement("canvas");c.className="stim-w";c.width=w;c.height=h;document.body.appendChild(c);return stimDockAdd(c)}
function stimStartWidget(id){const w=STIM_WIDGETS[id]();stimW.push(w);stimEnsureLoop()}
function stimBreakout(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const B={bx:100,by:90,vx:1.8,vy:-2.2,pad:100,bricks:[]};
 const reset=()=>{B.bricks=[];for(let r=0;r<4;r++)for(let k=0;k<8;k++)B.bricks.push({x:6+k*24,y:14+r*10,w:20,h:7,c:"hsl("+(r*60+k*8)+" 90% 65%)",a:true})};reset();
 const step=()=>{B.bx+=B.vx;B.by+=B.vy;
  if(B.bx<4||B.bx>196){B.vx*=-1;B.bx=Math.max(4,Math.min(196,B.bx));stimTone(330,.04,"square",.02)}
  if(B.by<4){B.vy=Math.abs(B.vy);stimTone(330,.04,"square",.02)}
  if(B.by>100&&Math.abs(B.bx-B.pad)<22&&B.vy>0){B.vy=-Math.abs(B.vy);B.vx=Math.max(-3,Math.min(3,(B.bx-B.pad)/12));stimTone(220,.05,"square",.03)}
  if(B.by>122){B.bx=100;B.by=90;B.vy=-2.2;B.vx=1.8*(Math.random()<.5?-1:1)}
  for(const k of B.bricks){if(k.a&&B.bx>k.x&&B.bx<k.x+k.w&&B.by>k.y&&B.by<k.y+k.h){k.a=false;B.vy*=-1;stimTone(700+Math.random()*400,.06,"triangle",.03);break}}
  if(B.bricks.every(k=>!k.a))reset();
  B.pad+=(B.bx-B.pad)*.09};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.72)";x.fillRect(0,0,200,120);for(const k of B.bricks)if(k.a){x.fillStyle=k.c;x.fillRect(k.x,k.y,k.w,k.h)}x.fillStyle="#fff";x.fillRect(B.pad-22,112,44,5);x.fillStyle="#ffd166";x.beginPath();x.arc(B.bx,B.by,3,0,7);x.fill()};
 return {c,step,draw,rate:16}}
function stimSnake(){const c=stimMakeWidget(200,120),x=c.getContext("2d");const G=10,W=20,H=12;let body,dir,food;
 const placeFood=()=>{food={x:Math.floor(Math.random()*W),y:Math.floor(Math.random()*H)}};
 const reset=()=>{body=[{x:5,y:6},{x:4,y:6},{x:3,y:6}];dir={x:1,y:0};placeFood()};reset();
 const blocked=(nx,ny)=>body.some(q=>q.x===nx&&q.y===ny);
 const step=()=>{const h=body[0];const opts=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}].filter(d=>!(d.x===-dir.x&&d.y===-dir.y));
  let best=null,bd=1e9;for(const d of opts){const nx=(h.x+d.x+W)%W,ny=(h.y+d.y+H)%H;if(blocked(nx,ny))continue;const dist=Math.abs(nx-food.x)+Math.abs(ny-food.y);if(dist<bd){bd=dist;best=d}}
  if(!best){reset();return}
  dir=best;const nh={x:(h.x+dir.x+W)%W,y:(h.y+dir.y+H)%H};body.unshift(nh);
  if(nh.x===food.x&&nh.y===food.y){stimTone(990,.08,"sine",.03,1.4);placeFood()}else body.pop();
  if(body.length>70)reset()};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.72)";x.fillRect(0,0,200,120);x.fillStyle="#ff6e6e";x.fillRect(food.x*G+2,food.y*G+2,6,6);body.forEach((q,i)=>{x.fillStyle="hsl("+(i*6+120)+" 80% 60%)";x.fillRect(q.x*G+1,q.y*G+1,8,8)})};
 return {c,step,draw,rate:110}}
function stimFlappy(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let F;
 const reset=()=>{F={by:60,vy:0,pipes:[],t:0,score:0}};reset();
 const step=()=>{F.t++;F.vy+=.22;F.by+=F.vy;if(F.t%90===0)F.pipes.push({x:200,gy:20+Math.random()*60});
  for(const p of F.pipes)p.x-=1.4;F.pipes=F.pipes.filter(p=>p.x>-30);
  const nextP=F.pipes.find(p=>p.x+20>36);const target=nextP?nextP.gy+15:60;
  if(F.by>target&&F.vy>0){F.vy=-3.6;stimTone(520,.05,"sine",.03,1.3)}
  if(F.by<-10||F.by>122){reset();return}
  for(const p of F.pipes){if(!p.s&&p.x<36){p.s=1;F.score++;stimTone(1200,.06,"triangle",.03)}
   if(36+6>p.x&&36-6<p.x+20&&(F.by-6<p.gy||F.by+6>p.gy+30)){stimTone(120,.3,"sawtooth",.04,.3);reset();return}}};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.72)";x.fillRect(0,0,200,120);x.fillStyle="#7ee787";for(const p of F.pipes){x.fillRect(p.x,0,20,p.gy);x.fillRect(p.x,p.gy+30,20,120)}x.fillStyle="#ffd166";x.beginPath();x.arc(36,F.by,6,0,7);x.fill();x.fillStyle="#fff";x.font="10px system-ui";x.fillText(String(F.score),186,12)};
 return {c,step,draw,rate:16}}
function stimInvaders(){const c=stimMakeWidget(200,120),x=c.getContext("2d");let I;
 const reset=()=>{I={px:100,dir:1,ix:20,iy:14,t:0,bullets:[],inv:[]};for(let r=0;r<3;r++)for(let k=0;k<6;k++)I.inv.push({x:k*22,y:r*14,a:1})};reset();
 const step=()=>{I.t++;const alive=I.inv.filter(q=>q.a);
  if(!alive.length){reset();return}
  if(I.t%20===0){const mn=Math.min(...alive.map(q=>q.x)),mx=Math.max(...alive.map(q=>q.x));I.ix+=I.dir*3;if(I.ix+mx+14>190||I.ix+mn<4){I.dir*=-1;I.iy+=4}}
  if(alive.some(q=>q.y+I.iy>100)){reset();return}
  const cols=alive.map(q=>q.x+I.ix+7);const target=cols.reduce((p,c2)=>Math.abs(c2-I.px)<Math.abs(p-I.px)?c2:p,cols[0]);I.px+=(target-I.px)*.08;
  if(I.t%36===0){I.bullets.push({x:I.px,y:110});stimTone(800,.05,"square",.02,.4)}
  for(const b of I.bullets)b.y-=2.5;I.bullets=I.bullets.filter(b=>b.y>0);
  for(const b of I.bullets)for(const q of alive){if(!q.a)continue;const ax=q.x+I.ix,ay=q.y+I.iy;if(b.x>ax&&b.x<ax+14&&b.y>ay&&b.y<ay+8){q.a=0;b.y=-1;stimTone(300+Math.random()*300,.1,"sawtooth",.03,.3);break}}
  if(I.t%30===0)stimTone(I.t%60===0?90:130,.06,"square",.015)};
 const draw=()=>{x.fillStyle="rgba(10,10,20,.72)";x.fillRect(0,0,200,120);x.fillStyle="#b388ff";for(const q of I.inv)if(q.a)x.fillRect(q.x+I.ix,q.y+I.iy,14,8);x.fillStyle="#4cc9f0";x.beginPath();x.moveTo(I.px,106);x.lineTo(I.px-8,116);x.lineTo(I.px+8,116);x.fill();x.fillStyle="#fff";for(const b of I.bullets)x.fillRect(b.x-1,b.y,2,6)};
 return {c,step,draw,rate:16}}
function stimRadar(){const c=stimMakeWidget(120,120),x=c.getContext("2d");const R={a:0,bl:[]};
 const step=()=>{R.a+=.04;if(R.a>Math.PI*2)R.a-=Math.PI*2;if(Math.random()<.02){R.bl.push({r:10+Math.random()*40,t:Math.random()*Math.PI*2,l:1});stimTone(1320,.05,"sine",.02)}for(const b of R.bl)b.l-=.01;R.bl=R.bl.filter(b=>b.l>0)};
 const draw=()=>{x.fillStyle="rgba(5,20,10,.85)";x.fillRect(0,0,120,120);x.strokeStyle="rgba(120,255,160,.5)";x.beginPath();x.arc(60,60,50,0,7);x.stroke();x.beginPath();x.moveTo(60,60);x.lineTo(60+Math.cos(R.a)*50,60+Math.sin(R.a)*50);x.stroke();for(const b of R.bl){x.fillStyle="rgba(120,255,160,"+b.l.toFixed(2)+")";x.beginPath();x.arc(60+Math.cos(b.t)*b.r,60+Math.sin(b.t)*b.r,2.5,0,7);x.fill()}};
 return {c,step,draw,rate:16}}
function stimPetDress(){if(!stimPet)return;
 if(stimHas("orbit")&&!stimPet.querySelector(".stim-orbit")){const o=document.createElement("span");o.className="stim-orbit";o.innerHTML="<i></i><i></i><i></i>";stimPet.appendChild(o)}
 if(stimHas("crown")&&!stimPet.querySelector(".stim-crown")){const k=document.createElement("span");k.className="stim-crown";k.textContent="\u{1F451}";stimPet.appendChild(k)}}
function stimSpawnEnt(kind,x,y,vx,vy){const el=document.createElement("div");el.className="stim-ent stim-"+kind;const EMO={hamster:"\u{1F439}",coin:"\u{1FA99}",fish:"\u{1F41F}",duck:"\u{1F986}",cat:"\u{1F408}",rocket:"\u{1F680}",snow:"\u2744\uFE0F"};if(EMO[kind])el.textContent=EMO[kind];if(kind==="ball")el.style.background="radial-gradient(circle at 35% 35%,#fff,hsl("+Math.floor(Math.random()*360)+" 90% 60%))";document.body.appendChild(el);
 const e={el,kind,x,y,vx,vy,life:({ball:900,coin:300,duck:700,cat:900,rocket:200,snow:500,hamster:900,drop:260})[kind]||1e9,ph:Math.random()*6};stimEnts.push(e);stimEnsureLoop();return e}
function stimEntStep(){
 for(const e of stimEnts){
  if(e.kind==="ball"){e.vy+=.45;e.x+=e.vx;e.y+=e.vy;const floor=innerHeight-20;if(e.y>floor){e.y=floor;if(Math.abs(e.vy)>1.5)stimTone(260+Math.random()*200,.05,"sine",.03);e.vy=-Math.abs(e.vy)*.8;e.vx*=.97}if(e.x<9||e.x>innerWidth-9)e.vx*=-1;e.life--}
  else if(e.kind==="coin"){e.vy+=.5;e.y+=e.vy;const floor=innerHeight-24;if(e.y>floor){e.y=floor;if(!e.hit){e.hit=1;stimTone(1800,.12,"sine",.04,1.2);setTimeout(()=>stimTone(2400,.12,"sine",.03,1.1),70)}e.vy=-Math.abs(e.vy)*.45}e.life--}
  else if(e.kind==="drop"){e.vy+=.15;e.y+=e.vy;e.life--}
  else if(e.kind==="fish"||e.kind==="duck"||e.kind==="cat"||e.kind==="hamster"){e.x+=e.vx;if(e.x<-60)e.x=innerWidth+40;if(e.x>innerWidth+60)e.x=-40;e.life--}
  else if(e.kind==="rocket"){e.vy-=.12;e.y+=e.vy;e.life--}
  else if(e.kind==="snow"){e.vy+=.01;e.y+=e.vy;e.x+=Math.sin(e.ph+e.y/30)*.4;e.life--}
  else if(e.kind==="firefly"){e.vx+=(Math.random()-.5)*.1;e.vy+=(Math.random()-.5)*.1;e.vx=Math.max(-.8,Math.min(.8,e.vx));e.vy=Math.max(-.8,Math.min(.8,e.vy));e.x+=e.vx;e.y+=e.vy;if(e.x<0||e.x>innerWidth)e.vx*=-1;if(e.y<0||e.y>innerHeight)e.vy*=-1}
  e.el.style.transform="translate("+e.x.toFixed(1)+"px,"+e.y.toFixed(1)+"px)";
 }
 const dead=stimEnts.filter(e=>e.life<=0);for(const e of dead)e.el.remove();stimEnts=stimEnts.filter(e=>e.life>0);
}
function stimEnsureLoop(){if(!stimLoopRAF){stimLastT=0;stimLoopRAF=requestAnimationFrame(stimWidgetLoop)}}
function stimWidgetLoop(ts){stimLoopRAF=null;if(!stimOn)return;const dt=stimLastT?Math.min(64,ts-stimLastT):16;stimLastT=ts;
 for(const w of stimW){w.acc=(w.acc||0)+dt;const rate=w.rate||16;while(w.acc>=rate){w.step();w.acc-=rate}w.draw()}
 stimEntStep();
 if(stimW.length||stimEnts.length)stimLoopRAF=requestAnimationFrame(stimWidgetLoop)}
function stimEmojiBurst(x,y){const e=["⭐","\u{1F389}","\u{1F308}","\u{1F984}","\u{1F3B2}","\u{1F47E}"];const n=document.createElement("div");n.className="stim-burst";n.textContent=e[Math.floor(Math.random()*e.length)];n.style.left=x+"px";n.style.top=y+"px";const a=Math.random()*Math.PI*2,d=60+Math.random()*60;n.style.setProperty("--dx",(Math.cos(a)*d).toFixed(0)+"px");n.style.setProperty("--dy",(Math.sin(a)*d-30).toFixed(0)+"px");document.body.appendChild(n);n.addEventListener("animationend",()=>n.remove(),{once:true});stimTone(stimNote()*2,.12,"triangle",.03)}
function stimUfo(){const u=document.createElement("div");u.className="stim-ufo";u.textContent="\u{1F6F8}";u.style.top=(60+Math.random()*120)+"px";document.body.appendChild(u);stimTone(1400,.4,"sine",.03,.25);u.addEventListener("animationend",()=>u.remove(),{once:true})}
function stimLightning(x,y){const pts=[];let px=x+(Math.random()-.5)*40;for(let yy=0;yy<=y;yy+=18){pts.push(px.toFixed(0)+","+yy);px+=(Math.random()-.5)*36}pts.push(x+","+y);const NS="http://www.w3.org/2000/svg";const sv=document.createElementNS(NS,"svg");sv.setAttribute("class","stim-bolt");sv.setAttribute("width",innerWidth);sv.setAttribute("height",innerHeight);const pl=document.createElementNS(NS,"polyline");pl.setAttribute("points",pts.join(" "));sv.appendChild(pl);document.body.appendChild(sv);stimTone(1800,.4,"sawtooth",.05,.05);setTimeout(()=>stimTone(90,.3,"square",.05,.4),60);sv.addEventListener("animationend",()=>sv.remove(),{once:true})}
function stimDrum(x){if(x<innerWidth/2){stimTone(150,.22,"sine",.12,.2)}else{stimTone(2000,.08,"square",.04,.2);setTimeout(()=>stimTone(1400,.06,"triangle",.03),30)}}
document.addEventListener("pointerdown",e=>{
 if(!stimOn||!stimIsBackground(e.target))return;
 if(stimHas("bouncers"))stimSpawnEnt("ball",e.clientX,e.clientY,(Math.random()-.5)*6,-4);
});
document.addEventListener("click",e=>{
 if(!stimOn)return;
 if(stimHas("coins")&&stimCount>0&&stimCount%50===0)for(let i=0;i<10;i++)stimSpawnEnt("coin",Math.random()*innerWidth,-30,0,0);
 if(stimHas("emojiburst")&&!(e.target.closest&&e.target.closest(".stim-hud")))stimEmojiBurst(e.clientX,e.clientY);
 if(stimHas("drum")&&e.clientY>innerHeight*.8&&stimIsBackground(e.target))stimDrum(e.clientX);
});
document.addEventListener("dblclick",e=>{if(stimOn&&stimHas("lightning"))stimLightning(e.clientX,e.clientY)});
ta.addEventListener("input",()=>{if(!stimOn||!stimHas("typeemoji"))return;const r=ta.getBoundingClientRect();stimEmojiBurst(r.left+20+Math.random()*Math.max(20,r.width-40),r.top)});

/* Stimulation Mode, round four: five toys */
let stimCount=0,stimHudEl=null,stimPet=null,stimPetX=0,stimPetY=0,stimPetTX=0,stimPetTY=0,stimPetRAF=null,stimHeld=null,stimSandTimer=null,stimTheremin=null;
const STIM_MILESTONES=[25,50,100,250,500,1000];
function stimIsBackground(t){return !!t&&(t===document.body||t===chatEl||(t.classList&&t.classList.contains("main")))}
function stimFloat(x,y,text){const d=document.createElement("div");d.className="stim-float";d.textContent=text;d.style.left=x+"px";d.style.top=y+"px";document.body.appendChild(d);const rm=()=>d.remove();d.addEventListener("animationend",rm,{once:true});setTimeout(rm,1000)}
function stimToysStart(){
 stimMetroTimer=setInterval(()=>{if(stimOn&&stimHas("metro"))stimTone(1000,.03,"square",.012)},500);
 stimHudEl=document.createElement("div");stimHudEl.className="stim-hud";stimHudEl.innerHTML='<span class="stim-hud-n">'+stimCount+'</span> stimulation';document.body.appendChild(stimHudEl);
 stimPet=document.createElement("div");stimPet.className="stim-pet";stimPet.textContent="\u{1F419}";document.body.appendChild(stimPet);
 stimPetX=stimPetTX=innerWidth/2;stimPetY=stimPetTY=innerHeight/2;stimPetDress();stimPetLoop();
 if(stimHas("pong"))stimPongStart();
 stimFeatT=0;stimFeatTimer=setInterval(stimFeatureTick,1000);
 stimBloopTimer=setInterval(()=>{if(stimOn)stimTone(stimNote()*2,.25,"sine",.02,1.2)},1100);
}
function stimToysStop(){
 stimHoldEnd();
 if(stimPetRAF){cancelAnimationFrame(stimPetRAF);stimPetRAF=null}
 document.querySelectorAll(".stim-hud,.stim-pet,.stim-rock,.stim-float").forEach(n=>n.remove());
 stimHudEl=null;stimPet=null;
 if(stimFeatTimer){clearInterval(stimFeatTimer);stimFeatTimer=null}
 if(stimBloopTimer){clearInterval(stimBloopTimer);stimBloopTimer=null}
 stimPongStop();
 document.querySelectorAll('.stim-star,.stim-heart,.stim-splat,.stim-w,.stim-ent,.stim-ufo,.stim-burst,.stim-bolt,.stim-pong,.stim-ghost,.stim-thunder,.stim-glow,.stim-twinkle,.stim-ring,.stim-rays').forEach(n=>n.remove());stimRing=null;stimOceanStop();
 document.documentElement.classList.remove('stim-hueside');stimDroneStop();stimDockEls=[];stimLastAct=Date.now();stimIdleLvl=0;stimIdleT=0;stimEndingOn=false;
 if(stimMetroTimer){clearInterval(stimMetroTimer);stimMetroTimer=null}
 if(stimLoopRAF){cancelAnimationFrame(stimLoopRAF);stimLoopRAF=null}
 stimW=[];stimEnts=[];stimCount=0;stimGot.clear();stimFeatT=0;
}
function stimCountUp(x,y){
 stimCount++;
 if(stimHudEl){const n=stimHudEl.querySelector(".stim-hud-n");if(n)n.textContent=stimCount;stimHudEl.classList.remove("stim-hud-bump");void stimHudEl.offsetWidth;stimHudEl.classList.add("stim-hud-bump")}
 stimFloat(x,y,"+1");
 stimTone(600+Math.min(stimCount,40)*18,.05,"sine",.03);
 if(STIM_MILESTONES.includes(stimCount)){stimConfetti(innerWidth/2,innerHeight/3,140);stimChime();toast("Stimulation milestone: "+stimCount+"!")}
 stimCheckUnlocks();
 if(stimCount>=3000&&!stimEndingOn)stimEnding();
}
function stimAsteroid(x,y){
 const r=document.createElement("div");r.className="stim-rock";r.style.left=(innerWidth/2)+"px";r.style.top=innerHeight+"px";document.body.appendChild(r);
 stimTone(900,.5,"sawtooth",.035,.15);
 requestAnimationFrame(()=>requestAnimationFrame(()=>{r.style.left=x+"px";r.style.top=y+"px"}));
 r.addEventListener("transitionend",()=>{if(!r.isConnected)return;r.remove();stimBurst(x,y);stimTone(70,.5,"square",.09,.5);const m=document.querySelector(".main");if(m){m.classList.remove("stim-shake");void m.offsetWidth;m.classList.add("stim-shake")}},{once:true});
}
function stimPetLoop(){if(!stimPet)return;stimPetX+=(stimPetTX-stimPetX)*.12;stimPetY+=(stimPetTY-stimPetY)*.12;stimPet.style.transform="translate("+stimPetX.toFixed(1)+"px,"+stimPetY.toFixed(1)+"px)";stimPetRAF=requestAnimationFrame(stimPetLoop)}
function stimPetHearts(){const x=stimPetX+14,y=stimPetY+14;stimFloat(x,y-10,"\u{1F496}");stimConfetti(x,y,30);stimTone(1046,.12,"sine",.05,1.6);setTimeout(()=>stimTone(1318,.14,"sine",.05,1.4),90)}
function stimSandSpawn(x,y){if(!stimOn)return;const cols=["#ffd166","#f4a261","#e9c46a","#ff6ec7","#4cc9f0"];for(let i=0;i<3;i++)stimParts.push({x:x+(Math.random()-.5)*16,y:y+(Math.random()-.5)*8,vx:(Math.random()-.5)*1.2,vy:Math.random()*1.2,g:.22,r:4,c:cols[i%cols.length],life:1,spin:0,a:0});if(!stimRAF){stimCanvas();stimRAF=requestAnimationFrame(stimDraw)}}
function stimThereminStart(x,y){if(!stimOn||!stimSound)return;if(stimTheremin)stimThereminStop();try{stimAudio=stimAudio||new (window.AudioContext||window.webkitAudioContext)();const o=stimAudio.createOscillator(),g=stimAudio.createGain(),lfo=stimAudio.createOscillator(),lg=stimAudio.createGain();o.type="sine";o.frequency.value=400;g.gain.value=0;lfo.frequency.value=6;lg.gain.value=8;lfo.connect(lg).connect(o.frequency);o.connect(g).connect(stimAudio.destination);o.start();lfo.start();stimTheremin={o,g,lfo,timer:setTimeout(stimThereminStop,6000)};stimThereminMove(x,y)}catch(e){}}
function stimThereminMove(x,y){if(!stimTheremin||!stimAudio)return;const f=180+(x/innerWidth)*900,v=.02+(1-y/innerHeight)*.05;stimTheremin.o.frequency.setTargetAtTime(f,stimAudio.currentTime,.02);stimTheremin.g.gain.setTargetAtTime(v,stimAudio.currentTime,.03)}
function stimThereminStop(){if(!stimTheremin)return;const {o,g,lfo,timer}=stimTheremin;clearTimeout(timer);stimTheremin=null;try{g.gain.setTargetAtTime(0,stimAudio.currentTime,.03);o.stop(stimAudio.currentTime+.2);lfo.stop(stimAudio.currentTime+.2)}catch(e){}}
function stimHoldStart(e){if(!stimOn||e.pointerType==="touch"||!stimIsBackground(e.target))return;stimHeld={x:e.clientX,y:e.clientY};stimHeldAt=Date.now();stimSandTimer=setInterval(()=>{if(stimHeld)stimSandSpawn(stimHeld.x,stimHeld.y)},60);stimThereminStart(e.clientX,e.clientY)}
let stimHeldAt=0;
function stimHoldMove(e){if(!stimHeld)return;stimHeld.x=e.clientX;stimHeld.y=e.clientY;stimHeldAt=Date.now();stimThereminMove(e.clientX,e.clientY)}
function stimHoldEnd(){if(!stimHeld&&!stimTheremin)return;stimHeld=null;if(stimSandTimer){clearInterval(stimSandTimer);stimSandTimer=null}stimThereminStop()}
document.addEventListener("pointerdown",stimHoldStart);
document.addEventListener("pointermove",stimHoldMove);
document.addEventListener("pointerup",stimHoldEnd);
document.addEventListener("pointercancel",stimHoldEnd);
["touchend","touchcancel","mouseup","blur","visibilitychange"].forEach(ev=>window.addEventListener(ev,stimHoldEnd));
document.addEventListener("lostpointercapture",stimHoldEnd);
document.addEventListener("mousemove",e=>{if(stimPet){stimPetTX=e.clientX+22;stimPetTY=e.clientY+22}});
document.addEventListener("click",e=>{
 if(!stimOn)return;
 if(e.target.closest&&e.target.closest(".stim-hud"))return;
 stimCountUp(e.clientX,e.clientY);
 if(stimPet&&Math.hypot(e.clientX-(stimPetX+14),e.clientY-(stimPetY+14))<26)stimPetHearts();
 if(stimIsBackground(e.target))stimAsteroid(e.clientX,e.clientY);
});

/* Stimulation Mode, round three: more sounds and interactables */
let stimAmbient=null,stimFwTimer=null,stimDiscoEl=null,stimCharge=null,stimMagnet=null,stimLastHover=null,stimLastTick=0,stimLastKey=0;
const STIM_NOTES=[523,587,659,784,880,1047];
function stimNote(){return STIM_NOTES[Math.floor(Math.random()*STIM_NOTES.length)]}
function stimBurst(x,y){stimConfetti(x,y,70);stimTone(stimNote()*1.5,.25,"triangle",.05,1.3)}
function stimExtraStart(){stimToysStart();
 stimAmbient=setInterval(()=>{if(Math.random()<(stimHas("melody")?.95:.6))stimTone(stimNote()/2,.6,"triangle",.012,1)},700);
 stimFwTimer=setInterval(()=>{if(stimOn)stimBurst(innerWidth*(.15+Math.random()*.7),innerHeight*(.1+Math.random()*.4))},5200);
 stimDiscoEl=document.createElement("button");stimDiscoEl.type="button";stimDiscoEl.className="stim-disco";stimDiscoEl.setAttribute("aria-label","Disco ball");
 stimDiscoEl.onclick=e=>{e.stopPropagation();const f=document.createElement("div");f.className="stim-flood";f.addEventListener("animationend",()=>f.remove(),{once:true});document.body.appendChild(f);stimConfetti(innerWidth-60,innerHeight-60,90);[523,659,784,1047,1319].forEach((n,i)=>setTimeout(()=>stimTone(n,.2,"square",.035),i*70))};
 document.body.appendChild(stimDiscoEl);
}
function stimExtraStop(){stimToysStop();
 if(stimAmbient){clearInterval(stimAmbient);stimAmbient=null}
 if(stimFwTimer){clearInterval(stimFwTimer);stimFwTimer=null}
 if(stimDiscoEl){stimDiscoEl.remove();stimDiscoEl=null}
 document.querySelectorAll(".stim-flood").forEach(n=>n.remove());
 if(stimCharge){cancelAnimationFrame(stimCharge.raf);stimCharge.el.style.scale="";stimCharge=null}
 if(stimMagnet){stimMagnet.style.translate="";stimMagnet=null}
}
function stimBoing(){if(stimOn)stimTone(180,.35,"sine",.06,3.2)}
document.addEventListener("change",e=>{if(stimOn&&e.target&&e.target.matches&&e.target.matches('input[type="checkbox"]'))stimBoing()});
document.addEventListener("mouseover",e=>{if(!stimOn||!stimSound||!e.target.closest)return;const el=e.target.closest(".pbtn,.chat,.round,.new,.gear,.model,.mi,.switch-row,.logo");if(!el||el===stimLastHover)return;stimLastHover=el;const now=Date.now();if(now-stimLastTick<60)return;stimLastTick=now;stimTone(stimNote()*2,.06,"sine",.025)});
function stimChargeStart(e){if(!stimOn||!e.target.closest)return;const logo=e.target.closest(".logo");if(!logo)return;const t0=performance.now();stimCharge={el:logo,t0,raf:null};stimTone(200,1.2,"sawtooth",.035,6);const step=()=>{if(!stimCharge)return;const k=Math.min(1,(performance.now()-t0)/1500);logo.style.scale=(1+k*.6).toFixed(3);stimCharge.raf=requestAnimationFrame(step)};step()}
function stimChargeEnd(){if(!stimCharge)return;const {el,t0,raf}=stimCharge;cancelAnimationFrame(raf);stimCharge=null;const k=Math.min(1,(performance.now()-t0)/1500);el.style.scale="";if(k<.3)return;const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;[0,170,340].forEach((d,i)=>setTimeout(()=>stimBurst(cx+(Math.random()-.5)*320,cy-60-Math.random()*220),d))}
document.addEventListener("pointerdown",stimChargeStart);
document.addEventListener("pointerup",stimChargeEnd);
document.addEventListener("pointercancel",stimChargeEnd);
ta.addEventListener("input",()=>{if(!stimOn)return;const now=Date.now();if(now-stimLastKey<35)return;stimLastKey=now;stimTone(stimNote()*2,.05,"triangle",.03);const r=ta.getBoundingClientRect();const d=document.createElement("div");d.className="stim-spark";d.style.left=(r.left+20+Math.random()*(Math.max(20,r.width-40)))+"px";d.style.top=(r.top+r.height/2)+"px";d.style.background="hsl("+Math.floor(Math.random()*360)+" 95% 65%)";document.body.appendChild(d);d.addEventListener("animationend",()=>d.remove(),{once:true})});

async function askStimulation(){const ok=await appConfirm({title:"Enable stimulation mode?",message:"",confirmLabel:"Enable",danger:false,standalone:true});if(ok)setStimulation(true)}
orb.addEventListener("click",()=>{if(stimOn||siteStimDisabled)return;const now=Date.now();stimTaps=stimTaps.filter(t=>now-t<3000);stimTaps.push(now);if(stimTaps.length>=5){stimTaps=[];askStimulation()}});
let smsg="",currentSettingsView="settings",closeModalTimer=null,closingModal=false,siteSignupMode="code",siteNoticeText="",siteStatusLoaded=false;
const touch=c=>{c.mu=Date.now()};
function clearAccountSession(){setTimeout(updateSchoolLock,0);if(accountSyncTimer!==null){clearTimeout(accountSyncTimer);accountSyncTimer=null}accountSession=null;applyModelList();accountSyncFailed=false;renderSyncStatus();refreshSendState();accountReady=true;accountInitialSyncPending=false;accountMergePendingToast=false;try{localStorage.removeItem(ACCOUNT_SESSION_STORAGE_KEY)}catch(e){}}
function scheduleAccountSync(){if(selfDisabledInfo)return;
 if(accountDisabledGate||!accountSession||!accountSession.token||!accountReady||accountSession.user&&accountSession.user.mustChange)return;
 if(accountSyncTimer!==null)clearTimeout(accountSyncTimer);
 accountSyncTimer=setTimeout(()=>{accountSyncTimer=null;syncAccountChatsNow()},1200);
}
async function syncAccountChatsNow(){if(selfDisabledInfo||!gatesPassed())return;
 if(accountDisabledGate||!accountSession||!accountSession.token||!accountReady||accountSession.user&&accountSession.user.mustChange)return;
 if(accountSyncing){accountSyncAgain=true;return}
 if(navigator.onLine===false){accountSyncAgain=true;if(accountInitialSyncPending){accountInitialSyncPending=false;renderChat()}return}
 accountSyncing=true;accountSyncAgain=false;const revision=localRevision;renderSyncStatus();
 try{
  const syncToken=accountSession.token;const c=clean();
  const result=await post({action:"account_chats_sync",sessionToken:syncToken,chats:c.chats,dead:c.dead,groups:c.groups,cur:S.cur});
  if(!accountSession||accountSession.token!==syncToken){accountSyncing=false;renderSyncStatus();return}
  if(result&&Array.isArray(result.chats)){
   const wasInitialSync=accountInitialSyncPending;
   const localCur=S.cur;
   const before=JSON.stringify({cur:S.cur,chats:S.chats.map(c=>[c.id,c.mu||c.u,c.t,c.p,c.model||"aries-1",c.g||""]),dead:S.dead,groups:S.groups.map(g=>[g.id,g.mu,g.name,g.del||0])});
   const merged=mergeLocalAndRemote({chats:S.chats,dead:S.dead,cur:S.cur,groups:S.groups},{chats:result.chats,dead:result.dead,cur:result.cur,groups:result.groups});
   S.chats=merged.chats;S.dead=merged.dead;S.groups=merged.groups;
   const fallbackCur=(S.chats[0]&&S.chats[0].id)||null;
   if(wasInitialSync)S.cur=merged.cur&&S.chats.some(c=>c.id===merged.cur)?merged.cur:fallbackCur;
   else S.cur=(localCur===null||S.chats.some(c=>c.id===localCur))?localCur:fallbackCur;
   store.set(JSON.stringify(persistedState()));
   const after=JSON.stringify({cur:S.cur,chats:S.chats.map(c=>[c.id,c.mu||c.u,c.t,c.p,c.model||"aries-1",c.g||""]),dead:S.dead,groups:S.groups.map(g=>[g.id,g.mu,g.name,g.del||0])});
   accountInitialSyncPending=false;
   if(before!==after||wasInitialSync){renderList();renderChat()}
   accountLastSync=Date.now();accountSyncFailed=false;syncRetryDelay=0;
   if(accountMergePendingToast){accountMergePendingToast=false;toast("Your existing chats were merged into your account.")}
   if(!modal.hidden&&currentSettingsView==="account")updateAccountSyncStatus();
  }
 }catch(e){
  accountInitialSyncPending=false;
  if(e&&e.message==="invalid_session"){
   clearAccountSession();accountMergePendingToast=false;renderList();renderChat();toast("Your sign-in expired. Your chats are still saved on this device. Sign in again to sync them.",{act:{icon:"log-in",label:"Sign in",run:()=>openSettings(()=>renderAccountAuth("login"))}});
  }else if(e&&e.message==="password_change_required"){
   if(accountSession&&accountSession.user)accountSession.user.mustChange=true;renderRequiredPasswordChange();
  }else{accountSyncAgain=true;accountSyncFailed=true;scheduleSyncRetry();renderChat();if(!modal.hidden&&currentSettingsView==="account")updateAccountSyncStatus("Offline or unable to sync right now. Your local changes remain saved.")}
 }finally{
  accountSyncing=false;renderSyncStatus();
  if(localRevision!==revision||accountSyncAgain)scheduleAccountSync();
 }
}
const PROFILE_COLORS=["#3f6ce0","#2fa35a","#e2574c","#d9822b","#8e5cd9","#0e9aa7","#d6336c","#4b5563"];
function accountAvatarHtml(){const u=accountSession&&accountSession.user||{};const init=String(u.username||"?").charAt(0).toUpperCase();return '<span class="tool-icon"><span class="tool-avatar" style="background:'+escapeAttr(u.profileColor||"#3f6ce0")+'" aria-hidden="true">'+esc(init)+'</span></span>'}
function profileColorHtml(){const u=accountSession&&accountSession.user||{};const cur=u.profileColor||"#3f6ce0";const initial=String(u.username||"?").charAt(0).toUpperCase();return '<div class="pc-block"><button type="button" class="pc-avatar" id="pc-avatar" aria-expanded="false" aria-controls="pc-options" aria-label="Change profile color" style="background:'+esc(cur)+'"><span>'+esc(initial)+'</span><span class="pc-pencil" aria-hidden="true">'+ic('pencil',15,2)+'</span></button><div class="pc-options" id="pc-options" hidden><span class="pc-label">Profile color</span><div class="pc-swatches">'+PROFILE_COLORS.map(c=>'<button type="button" class="pc-sw'+(c===cur?' on':'')+'" data-color="'+c+'" style="background:'+c+'" aria-label="Color '+c+'" aria-pressed="'+(c===cur)+'"></button>').join("")+'</div></div></div>'}
function wireProfileColors(){const av=$("pc-avatar"),opts=$("pc-options");if(av&&opts)av.onclick=()=>{const open=opts.hidden;opts.hidden=!open;av.setAttribute("aria-expanded",String(open))};document.querySelectorAll(".pc-sw").forEach(btn=>{btn.onclick=async()=>{const color=btn.dataset.color,previous=(accountSession&&accountSession.user&&accountSession.user.profileColor)||"#3f6ce0";document.querySelectorAll(".pc-sw").forEach(x=>{x.classList.toggle("on",x===btn);x.setAttribute("aria-pressed",String(x===btn))});if(av)av.style.background=color;try{const r=await post({action:"account_profile_color",sessionToken:accountSession.token,color});if(!r||!r.ok)throw new Error("failed");accountSession.user.profileColor=r.profileColor;if(adminData&&adminData.accounts){const me=adminData.accounts.find(x=>x.username===accountSession.user.username);if(me)me.profileColor=r.profileColor}renderSyncStatus();toast("Profile color updated",{undo:async()=>{try{const r=await post({action:"account_profile_color",sessionToken:accountSession.token,color:previous});if(!r||!r.ok)throw new Error("failed");accountSession.user.profileColor=r.profileColor;if(av)av.style.background=previous;document.querySelectorAll(".pc-sw").forEach(x=>{x.classList.toggle("on",x.dataset.color===previous);x.setAttribute("aria-pressed",String(x.dataset.color===previous))});renderSyncStatus();toast("Changes undone.")}catch(e){toast("Couldn't undo that. Try again.")}}})}catch(e){if(av)av.style.background=previous;toast("Couldn't save the color. Try again.",{retry:()=>btn.click()})}}})}
function profileStateText(){if(accountSyncing)return "Syncing chats…";if(navigator.onLine===false||accountSyncFailed)return "Offline · saved on this device";if(accountLastSync)return "Chats synced · "+new Date(accountLastSync).toLocaleTimeString();return "Not synced yet"}
function renderProfileMenu(){const menu=$("profile-menu");if(!menu||!accountSession||!accountSession.user)return;menu.innerHTML='<div class="pm-head"><strong>'+esc(accountSession.user.username)+'</strong><span>'+esc(profileStateText())+'</span></div><button class="pm-item" id="pm-sync" type="button"'+(accountSyncing?' disabled':'')+'>'+(accountSyncing?'Syncing…':'Sync now')+'</button><button class="pm-item" id="pm-settings" type="button">Account settings</button>';const doSync=async()=>{await syncAccountChatsNow();renderProfileMenu();toast(accountSyncFailed?"Couldn't sync right now. Your chats are saved on this device.":"Chats synced",accountSyncFailed?{retry:doSync}:{})};$("pm-sync").onclick=doSync;$("pm-settings").onclick=()=>{hideProfileMenu();openSettings(isDeskSettings()?null:()=>renderAccount())}}
function hideProfileMenu(){hideEl($("profile-menu"))}
function togglePanel(panel,btn,replay){const open=panel.hidden;open?showEl(panel):hideEl(panel);btn.setAttribute("aria-expanded",String(open));if(open&&replay){const ol=panel.querySelector(".steps");if(ol){ol.classList.remove("play");void ol.offsetWidth;ol.classList.add("play")}}}
// The thought process is shown only when it adds something: a web search ran, sources were used, or the reasoning is long. Simple questions show no thought process.
function thinkingWorthShowing(m){const searched=Array.isArray(m.tools)&&m.tools.length>0;const sourced=Array.isArray(m.sources)&&m.sources.length>0;return searched||sourced||String(m.thinking||"").length>=500}
function thinkingSteps(text){return String(text||"").replace(/([.!?])\s+(?=[A-Z])/g,"$1\n").split(/\n+/).map(s=>s.replace(/^[\s\-*•\d.)]+/,"").replace(/\s+/g," ").trim()).filter(s=>s.length>2).slice(0,14).map(s=>s.length>220?s.slice(0,217)+"…":s)}
// Signed-in session check every 5 minutes (was every minute).
async function accountCheckNow(){
 if(!(gatesPassed()&&accountSession&&accountSession.token&&accountReady&&!(accountSession.user&&accountSession.user.mustChange)))return;
 try{await post({action:"account_me",sessionToken:accountSession.token})}
 catch(e){if(e&&e.message==="invalid_session"&&accountSession){clearAccountSession();renderList();renderChat();toast("Your sign-in expired. Your chats are still saved on this device. Sign in again to sync them.",{act:{icon:"log-in",label:"Sign in",run:()=>openSettings(()=>renderAccountAuth("login"))}})}}
}
var lastAcctLoading=null;
function renderSyncStatus(){
 const ld=accountLoading();if(ld!==lastAcctLoading){const first=lastAcctLoading===null;lastAcctLoading=ld;if(!first){renderList();renderChat()}}
 try{const md=$("modal");if(md&&!md.hidden&&currentSettingsView==="account")updateAccountSyncStatus()}catch(e){}
 const b=$("profile-btn");if(!b)return;
 const sideEl=$("side");if(sideEl)sideEl.classList.toggle("has-profile",!!(accountSession&&accountSession.token&&accountSession.user&&accountSession.user.username));
 const name=accountSession&&accountSession.token&&accountSession.user&&accountSession.user.username?String(accountSession.user.username):"";
 if(!name){b.hidden=true;b.innerHTML="";return}
 let state,text;
 if(accountSyncing){state="busy";text="Syncing chats…"}
 else if(navigator.onLine===false||accountSyncFailed){state="off";text="Offline · saved on this device"}
 else if(accountLastSync){state="ok";text="Chats synced · last synced "+new Date(accountLastSync).toLocaleTimeString()}
 else{state="idle";text="Not synced yet"}
 const reveal=b.hidden;b.hidden=false;b.dataset.sync=state;if(reveal){b.classList.remove("acct-in");void b.offsetWidth;b.classList.add("acct-in")}b.textContent=name.charAt(0).toUpperCase();b.style.background=accountSession.user.profileColor||"";
 b.insertAdjacentHTML("beforeend",'<span class="sync-dot" aria-hidden="true"></span>');
 b.title=name+" · "+text;b.setAttribute("aria-label","Account menu, signed in as "+name+". "+text);const pm=$("profile-menu");if(pm&&!pm.hidden)renderProfileMenu();
}
function mergeLocalAndRemote(first,second){
 const map={},dead={},groupMap={};const t=c=>Number(c.mu||c.u||0);
 [first||{},second||{}].forEach(state=>{
  (Array.isArray(state.dead)?state.dead:[]).forEach(d=>{if(d&&d.id!=null){const id=String(d.id),mu=Number(d.mu)||0;if(!(id in dead)||dead[id]<mu)dead[id]=mu}});
  (Array.isArray(state.chats)?state.chats:[]).forEach(c=>{if(!c||!c.id)return;const cand=safeChat(c);if(!cand)return;const cur=map[c.id];if(!cur||t(cand)>t(cur)||(t(cand)===t(cur)&&cand.m.length>cur.m.length))map[c.id]=cand});
  safeGroups(state.groups).forEach(g=>{const cur=groupMap[g.id];if(!cur||g.mu>cur.mu)groupMap[g.id]=g});
 });
 const chats=Object.keys(map).map(id=>map[id]).filter(c=>!(c.id in dead)||dead[c.id]<t(c));
 const deadList=Object.keys(dead).map(id=>({id,mu:dead[id]}));let cur=String((second&&second.cur)||(first&&first.cur)||"");if(!chats.some(c=>c.id===cur))cur=chats.length?chats[0].id:null;
 const allGroups=Object.keys(groupMap).map(id=>groupMap[id]);
 const live=allGroups.filter(g=>!g.del),tombs=allGroups.filter(g=>g.del).sort((x,y)=>y.mu-x.mu).slice(0,200);
 return{chats,dead:deadList,cur,groups:live.concat(tombs).slice(0,2000)};
}
// Account and session data load only after the AI-disabled, access-code, account-disabled and browser-disabled screens are passed.
function gatesPassed(){return !aiDisabled&&!accountDisabledGate&&!browserDisabledGate&&!document.body.classList.contains("access-locked")}
let pendingAccountResume=false;
function flushAccountResume(){if(pendingAccountResume&&gatesPassed()){pendingAccountResume=false;resumeAccountSession()}}
async function resumeAccountSession(){
 if(!accountSession||!accountSession.token)return;
 accountReady=false;
 try{
  const result=await post({action:"account_me",sessionToken:accountSession.token});
  if(!result||!result.user)throw new Error("invalid_session");
  accountSession.user=result.user;accountReady=true;applyModelList();
  if(result.user.mustChange){renderRequiredPasswordChange();return}
  refreshSettingsPane();
  accountInitialSyncPending=true;renderChat();
  await syncAccountChatsNow();
 }catch(e){
  if(e&&e.message==="accesslocked"){accountReady=true;accountInitialSyncPending=false;renderSyncStatus();return}
  if(e&&e.message==="invalid_session"){
   clearAccountSession();renderList();renderChat();refreshSettingsPane();toast("Your account session expired. Your chats are still saved on this device. Sign in again to sync them.",{act:{icon:"log-in",label:"Sign in",run:()=>openSettings(()=>renderAccountAuth("login"))}});
  }else{accountReady=true;accountSyncAgain=true;scheduleSyncRetry();}
 }
}
function clearLocalWhwData(removeSession){
 S={chats:[],cur:null,dead:[],groups:[],model:"aries-1",col:!!S.col};mem=null;
 try{localStorage.removeItem(KEY);localStorage.removeItem(ARIES_INTRO_KEY);localStorage.removeItem(EXPORT_COOLDOWN_KEY);localStorage.removeItem(DEVICE_STORAGE_KEY)}catch(e){mem=JSON.stringify({chats:[],cur:null,dead:[],model:"aries-1",col:!!S.col})}
 cachedDeviceId="";exportCooldownMemory=0;ariesIntroShownThisPage=false;hideAriesIntro(false);
 if(removeSession)clearAccountSession();
 try{store.set(JSON.stringify(persistedState()))}catch(e){}
}
const EXPORT_COOLDOWN_MS=10*60*1000;
const EXPORT_COOLDOWN_KEY=KEY+".exportCooldownUntil.v1";
let exportCooldownMemory=0,exportingData=false,exportCooldownPersistent=true;
function readExportCooldown(){
 try{return Number(localStorage.getItem(EXPORT_COOLDOWN_KEY)||0)||0}
 catch(e){exportCooldownPersistent=false;return exportCooldownMemory}
}
function writeExportCooldown(value){
 exportCooldownMemory=value;
 try{localStorage.setItem(EXPORT_COOLDOWN_KEY,String(value));exportCooldownPersistent=true}
 catch(e){exportCooldownPersistent=false}
}
function countdownLabel(ms){
 const seconds=Math.max(0,Math.ceil(ms/1000));
 const minutes=Math.floor(seconds/60),remainder=seconds%60;
 return String(minutes).padStart(2,"0")+":"+String(remainder).padStart(2,"0");
}
let exportCooldownTicker=null;
function updateExportStatus(){
 const button=$("export-data"),status=$("export-status");
 if(!button)return;
 const remaining=Math.max(0,readExportCooldown()-Date.now());
 button.disabled=exportingData||remaining>0;
 button.setAttribute("aria-busy",String(exportingData));
 button.innerHTML=exportingData?'<span class="sync-spinner" aria-hidden="true"></span>Preparing ZIP…':remaining>0?countdownLabel(remaining):"Download chats (.zip)";
 button.title=remaining>0?"Available again in "+countdownLabel(remaining):"Create a ZIP backup of chats stored in this browser";
 button.classList.toggle("cooldown",remaining>0);
 if(status){
  status.hidden=remaining>0&&!exportingData;
  if(exportingData)status.textContent="Preparing the ZIP locally in this browser…";
  else if(remaining>0)status.textContent="";
  else status.textContent=exportCooldownPersistent?"A 10-minute cooldown starts after an export is prepared.":"A 10-minute cooldown starts after an export is prepared. This browser cannot persist the cooldown across reloads.";
 }
}
function startExportCooldownTicker(){
 if(exportCooldownTicker!==null)clearInterval(exportCooldownTicker);
 updateExportStatus();
 exportCooldownTicker=setInterval(()=>{
  if(!$("export-data")){clearInterval(exportCooldownTicker);exportCooldownTicker=null;return}
  updateExportStatus();
 },1000);
}
function crc32_(bytes){
 let crc=0xffffffff;
 for(let i=0;i<bytes.length;i++){
  crc^=bytes[i];
  for(let j=0;j<8;j++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);
 }
 return (crc^0xffffffff)>>>0;
}
function zipStored_(files){
 const encoder=new TextEncoder(),locals=[],centrals=[];
 let offset=0;
 const stamp=new Date();
 const dosTime=(stamp.getHours()<<11)|(stamp.getMinutes()<<5)|Math.floor(stamp.getSeconds()/2);
 const dosDate=((Math.max(1980,stamp.getFullYear())-1980)<<9)|((stamp.getMonth()+1)<<5)|stamp.getDate();
 function header(size,fill){const a=new Uint8Array(size);fill(new DataView(a.buffer));return a}
 function join(parts){let size=0;parts.forEach(p=>size+=p.length);const out=new Uint8Array(size);let pos=0;parts.forEach(p=>{out.set(p,pos);pos+=p.length});return out}
 files.forEach(file=>{
  const name=encoder.encode(file.name),data=encoder.encode(file.text),crc=crc32_(data),start=offset;
  const local=header(30,v=>{
   v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x0800,true);v.setUint16(8,0,true);
   v.setUint16(10,dosTime,true);v.setUint16(12,dosDate,true);v.setUint32(14,crc,true);v.setUint32(18,data.length,true);
   v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);v.setUint16(28,0,true);
  });
  locals.push(local,name,data);offset+=local.length+name.length+data.length;
  const central=header(46,v=>{
   v.setUint32(0,0x02014b50,true);v.setUint16(4,20,true);v.setUint16(6,20,true);v.setUint16(8,0x0800,true);
   v.setUint16(10,0,true);v.setUint16(12,dosTime,true);v.setUint16(14,dosDate,true);v.setUint32(16,crc,true);
   v.setUint32(20,data.length,true);v.setUint32(24,data.length,true);v.setUint16(28,name.length,true);v.setUint16(30,0,true);
   v.setUint16(32,0,true);v.setUint16(34,0,true);v.setUint32(36,0,true);v.setUint32(38,0,true);v.setUint32(42,start,true);
  });
  centrals.push(central,name);
 });
 const centralBytes=join(centrals),localBytes=join(locals);
 const end=header(22,v=>{
  v.setUint32(0,0x06054b50,true);v.setUint16(4,0,true);v.setUint16(6,0,true);
  v.setUint16(8,files.length,true);v.setUint16(10,files.length,true);
  v.setUint32(12,centralBytes.length,true);v.setUint32(16,localBytes.length,true);v.setUint16(20,0,true);
 });
 return new Blob([localBytes,centralBytes,end],{type:"application/zip"});
}
function safeFilePart(value){
 const name=String(value||"Untitled chat").normalize?String(value||"Untitled chat").normalize("NFKD"):String(value||"Untitled chat");
 return name.replace(/[^A-Za-z0-9 _.-]+/g,"").replace(/[ ._-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,64)||"chat";
}
function dateLabel(value){
 const time=Number(value||0);return time?new Date(time).toLocaleString():"Unknown date";
}
function exportSettings(){
 let introSeen=false,whatsNew="";
 try{introSeen=localStorage.getItem(ARIES_INTRO_KEY)==="1";whatsNew=localStorage.getItem(WHATS_NEW_KEY)||""}catch(e){}
 return {model:S.model||"aries-1",sidebarCollapsed:!!S.col,confirmDeleteChats:confirmDeleteEnabled(),ariesIntroShown:introSeen,whatsNewSeen:whatsNew};
}
function makeChatExport(source,fromServer,opts){
 const options=opts||{},groupList=Array.isArray(options.groups)?options.groups:[],groupNames=new Map(groupList.map(g=>[g.id,g.name]));
 const chats=(Array.isArray(source)?source:S.chats).map(c=>({
  id:c.id,title:String(c.t||"Untitled chat"),createdAt:c.u||null,updatedAt:c.mu||c.u||null,pinned:!!c.p,autoTitle:!!c.auto,model:c.model||null,groupId:c.g||null,group:c.g?(groupNames.get(c.g)||null):null,ended:!!c.ended,endedBy:c.ended?"AI":null,
  messages:(Array.isArray(c.m)?c.m:[]).filter(m=>m&&!m.err).map(m=>{const item={role:m.r==="u"?"user":"assistant",content:String(m.x||""),timestamp:m.at||null};if(m.model)item.model=m.model;if(Array.isArray(m.sources)&&m.sources.length)item.sources=m.sources;if(Array.isArray(m.tools)&&m.tools.length)item.tools=m.tools;if(m.thinking)item.thinking=m.thinking;return item})
 }));
 const groupsOut=groupList.map(g=>({id:g.id,name:g.name,colour:groupColourKey(g),icon:groupIconKey(g),collapsed:closedGroups.has(g.id),createdAt:g.u||null,updatedAt:g.mu||g.u||null}));
 const data={format:"whwai-chat-export",version:2,exportedAt:new Date().toISOString(),chats:chats,groups:groupsOut};
 if(options.settings)data.settings=options.settings;
 const exportedAt=new Date();
 const files=[{
  name:"chats.json",
  text:JSON.stringify(data,null,2)
 },{
  name:"README.txt",
  text:"WHWai chat export\nai.wehatewindows.org\n"+
   "==================\n\n"+
   "Created: "+exportedAt.toLocaleString()+"\n"+
   "Chats included: "+chats.length+"\n\n"+
   "What is in this ZIP\n"+
   "- chats.json: everything needed to restore this data: chat titles, timestamps, pin state, group membership, AI-ended status, and message text with any saved sources, tools, models and thinking notes.\n"+"- chats.json groups: each group's name, colour, icon, collapsed state and dates.\n"+(options.settings?"- chats.json settings: default model, sidebar state, confirm-delete preference and onboarding notices.\n":"")+
   "- chats/: one readable text file for each chat, showing its group and whether the AI ended it.\n"+
   "- README.txt: this file, with export details and limitations.\n\n"+
   "Source and scope\n"+
   (fromServer?"This ZIP was created in your browser from the chats saved on your WHWai account. Deleted-chat markers are not included.\n\n":"This ZIP is created locally in your browser and contains the chats currently stored on this device. It is not fetched directly from the WHWai server. When signed in, the local copy may differ from your account copy until account syncing completes. Return to WHWai and wait for account syncing before exporting if you need the latest account changes. Deleted-chat markers are not included.\n\n")+
   "Keep this file private\n"+
   "Anyone who obtains the ZIP or an extracted text file may be able to read the conversations. Store it in a private location.\n"
 }];
 chats.forEach((c,index)=>{
  const lines=["WHWai chat: "+c.title,"Created: "+dateLabel(c.createdAt),"Last updated: "+dateLabel(c.updatedAt),"Group: "+(c.group||"none"),c.ended?"Status: Ended by the AI. This chat cannot receive new messages.":"Status: active","", "=".repeat(60),""];
  c.messages.forEach(m=>{lines.push((m.role==="user"?"YOU":"ARIES")+"  — "+dateLabel(m.timestamp),m.content,"", "-".repeat(40),"")});
  const ordinal=String(index+1).padStart(3,"0");
  files.push({name:"chats/"+ordinal+"-"+safeFilePart(c.title)+".txt",text:lines.join("\n")});
 });
 return {data:data,files:files};
}
async function exportLocalData(){
 if(exportingData||Date.now()<readExportCooldown())return;
 exportingData=true;updateExportStatus();
 try{
  const scope=(mbody.querySelector('input[name="export-scope"]:checked')||{}).value||"all";
  let source=S.chats;
  if(scope==="selected"){const ids=[...mbody.querySelectorAll('input[name="export-chat"]:checked')].map(x=>x.value);source=S.chats.filter(c=>ids.includes(c.id));if(!source.length){const st=$("export-status");if(st)st.textContent="Choose at least one chat to export.";return}}
  const groupsAll=liveGroups(),fullBackup=scope!=="selected";
  const prepared=fullBackup?makeChatExport(source,false,{groups:groupsAll,settings:exportSettings()}):makeChatExport(source,false,{groups:groupsAll.filter(g=>source.some(c=>c.g===g.id))});
  const blob=zipStored_(prepared.files);
  const filename="whwai-chat-export-"+new Date().toISOString().slice(0,10)+".zip";
  let shared=false;
  if(typeof File!=="undefined"&&navigator.share&&navigator.canShare){
   try{
    const file=new File([blob],filename,{type:"application/zip"});
    if(navigator.canShare({files:[file]})){await navigator.share({title:"WHWai chat export",files:[file]});shared=true}
   }catch(shareError){if(shareError&&shareError.name==="AbortError")return}
  }
  if(!shared){
   const url=URL.createObjectURL(blob),a=document.createElement("a");
   a.href=url;a.download=filename;a.style.display="none";document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),10*60*1000);
  }
  writeExportCooldown(Date.now()+EXPORT_COOLDOWN_MS);
  const st=$("export-status");if(st)st.textContent="Your ZIP is ready. The 10-minute cooldown has started.";
 }catch(e){
  const st=$("export-status");if(st)st.textContent="Could not prepare the ZIP. Please try again.";
 }finally{exportingData=false;updateExportStatus()}
}
async function readBackupFile(file){
 const bytes=new Uint8Array(await file.arrayBuffer());
 if(/\.json$/i.test(file.name)||file.type==="application/json")return JSON.parse(new TextDecoder().decode(bytes));
 const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),decoder=new TextDecoder();let offset=0;
 while(offset+30<=bytes.length&&view.getUint32(offset,true)===0x04034b50){
  const method=view.getUint16(offset+8,true),size=view.getUint32(offset+18,true),nameLen=view.getUint16(offset+26,true),extraLen=view.getUint16(offset+28,true);
  const nameStart=offset+30,name=decoder.decode(bytes.slice(nameStart,nameStart+nameLen)),dataStart=nameStart+nameLen+extraLen,dataEnd=dataStart+size;
  if(dataEnd>bytes.length)throw new Error("Invalid ZIP");
  if(name.replace(/\\/g,"/").split("/").pop()==="chats.json"){
   if(method!==0)throw new Error("Compressed ZIP not supported");
   return JSON.parse(decoder.decode(bytes.slice(dataStart,dataEnd)));
  }
  offset=dataEnd;
 }
 throw new Error("No chats.json in ZIP");
}
function normalizeBackupChats(data){
 const list=Array.isArray(data)?data:(data&&Array.isArray(data.chats)?data.chats:[]);
 return list.map((item,index)=>{
  const messages=Array.isArray(item.m)?item.m:(Array.isArray(item.messages)?item.messages:[]);
  const chat=safeChat({id:item.id||("import-"+Date.now().toString(36)+"-"+index+"-"+Math.random().toString(36).slice(2,7)),t:item.t!=null?item.t:(item.title||"Imported chat"),u:item.u||item.createdAt||Date.now(),mu:item.mu||item.updatedAt||Date.now(),p:item.p||item.pinned,m:messages.map(m=>({r:(m.role==="user"||m.r==="u")?"u":"a",x:m.content!=null?m.content:m.x,at:m.timestamp||m.at,sources:m.sources,model:m.model,tools:m.tools,thinking:m.thinking})),g:item.groupId,ended:!!item.ended,auto:!!item.autoTitle,model:item.model});
  return chat;
 }).filter(Boolean);
}
function normalizeBackupGroups(data){
 const list=data&&typeof data==="object"&&Array.isArray(data.groups)?data.groups:[],now=Date.now();
 return list.map((g,index)=>{
  if(!g||typeof g!=="object")return null;
  const id=safeText(g.id,60).trim()||("import-group-"+now.toString(36)+"-"+index);
  return safeGroup({id,name:g.name,u:Number(g.createdAt)||now,mu:Number(g.updatedAt)||Number(g.createdAt)||now,c:g.colour,i:g.icon});
 }).filter(Boolean);
}
function applyBackupSettings(settings){
 if(typeof settings.model==="string"&&/^[A-Za-z0-9._-]{1,80}$/.test(settings.model))S.model=settings.model;
 if(typeof settings.sidebarCollapsed==="boolean"){S.col=settings.sidebarCollapsed;const frame=document.querySelector(".frame");if(frame)frame.classList.toggle("collapsed",S.col)}
 if(typeof settings.confirmDeleteChats==="boolean")setConfirmDelete(settings.confirmDeleteChats);
 try{
  if(settings.ariesIntroShown===true)localStorage.setItem(ARIES_INTRO_KEY,"1");
  if(typeof settings.whatsNewSeen==="string"&&settings.whatsNewSeen.length>0&&settings.whatsNewSeen.length<=40)localStorage.setItem(WHATS_NEW_KEY,settings.whatsNewSeen);
 }catch(e){}
}
function renderDataManagement(){
 currentSettingsView="data";
 if(exportCooldownTicker!==null){clearInterval(exportCooldownTicker);exportCooldownTicker=null}
 $("modal-title").textContent="Manage your data";
 const exportIcon=ic('download',19,1.8);
 const localIcon=ic('trash-2',19,1.8);
 mbody.innerHTML=`<p class="sm">Chats saved in this browser. Account chats also stay on the server while you're signed in.</p>
  <div class="data-tools-list">
   <button class="data-tool" id="open-export-info" type="button"><span class="tool-icon">${exportIcon}</span><span class="tool-copy"><strong>Download chats</strong><small>Save a private ZIP backup of this browser's chats, groups and settings.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>
   <button class="data-tool" id="open-import-backup" type="button"><span class="tool-icon">${ic('upload',19,1.8)}</span><span class="tool-copy"><strong>Import chats</strong><small>Restore from a WHWai JSON or ZIP backup.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>
   <input id="import-backup-file" type="file" accept=".json,.zip,application/json,application/zip" hidden>
   <button class="data-tool danger" id="open-delete-local" type="button"><span class="tool-icon">${localIcon}</span><span class="tool-copy"><strong>Delete data on this device</strong><small>Remove local chats and your sign-in from this browser.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>
  </div>
  <p class="sm" id="s-msg" role="status"></p><div class="data-toolbar"><button class="pbtn" id="data-back">Back to Settings</button></div>`;
 const q=id=>mbody.querySelector("#"+id);
 q("open-export-info").onclick=renderExportInfo;
 q("open-import-backup").onclick=()=>q("import-backup-file").click();
 q("import-backup-file").onchange=async ev=>{
  const file=ev.target.files&&ev.target.files[0];if(!file)return;
  const importButton=q("open-import-backup"),originalButtonHTML=importButton.innerHTML,started=Date.now();
  importButton.disabled=true;importButton.setAttribute("aria-busy","true");
  importButton.innerHTML='<span class="tool-icon"><span class="sync-spinner" aria-hidden="true"></span></span><span class="tool-copy"><strong>Importing backup…</strong><small>Reading and restoring your chats</small></span>';
  setMsg("Importing chat backup…");await new Promise(resolve=>setTimeout(resolve,30));
  try{
   const data=await readBackupFile(file),backup=data&&typeof data==="object"?data:{},imported=normalizeBackupChats(data),importedGroups=normalizeBackupGroups(data),importedSettings=backup.settings&&typeof backup.settings==="object"?backup.settings:null;
   if(!imported.length&&!importedGroups.length&&!importedSettings){setMsg("No chats were found in that backup.");return}
   const collapsedIds=new Set((Array.isArray(backup.groups)?backup.groups:[]).filter(g=>g&&g.collapsed).map(g=>String(g.id)));
   let groupsAdded=0;
   for(const group of importedGroups){if(liveGroups().some(g=>g.id===group.id))continue;S.groups=S.groups.filter(g=>g.id!==group.id);S.groups.push(group);groupsAdded++;if(collapsedIds.has(group.id))closedGroups.add(group.id)}
   saveClosedGroups();
   const liveIds=new Set(liveGroups().map(g=>g.id));
   imported.forEach(chat=>{if(chat.g&&!liveIds.has(chat.g))delete chat.g});
   if(importedSettings)applyBackupSettings(importedSettings);
   const existing=new Set(S.chats.map(c=>c.id));let added=0;
   for(const chat of imported){if(existing.has(chat.id))chat.id="import-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9);existing.add(chat.id);S.chats.push(chat);added++}
   S.chats.sort((a,b)=>(Number(b.mu||b.u)||0)-(Number(a.mu||a.u)||0));S.cur=S.chats.length?S.chats[0].id:null;save();renderList();renderChat();refreshSendState();const parts=[];if(added)parts.push(added+" chat"+(added===1?"":"s"));if(groupsAdded)parts.push(groupsAdded+" group"+(groupsAdded===1?"":"s"));if(importedSettings)parts.push("settings");
   setMsg("Imported "+(parts.join(", ")||"nothing new")+(accountSession&&(added||groupsAdded)?". Saving to your account…":"."));
  }catch(err){setMsg("Could not import that backup. Choose a valid WHWai JSON or ZIP backup.")}
  finally{const wait=Math.max(0,520-(Date.now()-started));if(wait)await new Promise(resolve=>setTimeout(resolve,wait));ev.target.value="";if(importButton.isConnected){importButton.innerHTML=originalButtonHTML;importButton.disabled=false;importButton.removeAttribute("aria-busy")}}
 };
 q("open-delete-local").onclick=renderLocalDeleteConfirm;q("data-back").onclick=renderSettings;setMsg(smsg);
}
function renderLocalDeleteConfirm(){
 currentSettingsView="local-delete-confirm";$("modal-title").textContent="Delete local data";
 mbody.innerHTML=`<div class="confirm-panel"><span class="choice-icon">${ic('trash-2',19,1.8)}</span><div><strong>Delete this browser's WHWai data?</strong><p>This removes local chats, the local account session, the browser identifier, the export cooldown, and the Aries first-use notice. If you are signed in, your server-stored account chats remain unchanged.</p></div></div>
  <p class="sm">This cannot be undone locally unless you have a backup. If signed in, WHWai will try to revoke this browser's session before clearing its local copy.</p><p class="sm" id="delete-status" role="status"></p>
  <div class="data-toolbar"><button class="pbtn" id="delete-cancel">Cancel</button><button class="pbtn danger" id="confirm-local-delete">Delete local data</button></div>`;
 $("delete-cancel").onclick=renderDataManagement;$("confirm-local-delete").onclick=performLocalOnlyDelete;
}
async function performLocalOnlyDelete(){
 if(deletingLocalData)return;deletingLocalData=true;
 const button=$("confirm-local-delete"),started=Date.now();mbody.querySelectorAll("button").forEach(b=>b.disabled=true);
 if(button){button.setAttribute("aria-busy","true");button.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Deleting…'}
 setDeleteStatus("Removing local data…");await new Promise(resolve=>setTimeout(resolve,30));
 let revoked=!accountSession||!accountSession.token;
 try{if(accountSession&&accountSession.token){try{await post({action:"account_logout",sessionToken:accountSession.token});revoked=true}catch(e){revoked=false}}
  const wait=Math.max(0,520-(Date.now()-started));if(wait)await new Promise(resolve=>setTimeout(resolve,wait));clearLocalWhwData(true);renderList();renderChat();smsg=revoked?"This browser's local WHWai data and sign-in session were removed. Server-stored account chats are unchanged.":"Local WHWai data was removed. The server-stored account is unchanged; this browser's server-side session may remain active until it expires.";
 }finally{deletingLocalData=false;if(!modal.hidden&&currentSettingsView==="local-delete-confirm")renderDataManagement()}
}
function setDeleteStatus(message){const el=$("delete-status");if(el)el.textContent=message;else smsg=message}
function renderExportInfo(){
 currentSettingsView="export-info";if(exportCooldownTicker!==null){clearInterval(exportCooldownTicker);exportCooldownTicker=null}
 $("modal-title").textContent="Download your data";
 const chatOptions=S.chats.length?S.chats.map(c=>`<label class="export-pick"><input type="checkbox" name="export-chat" value="${escapeAttr(c.id)}" checked><span>${esc(String(c.t||"Untitled chat"))}</span></label>`).join(""):"<p class=\"sm\">No chats on this device yet.</p>";
 mbody.innerHTML=`<p>WHWai creates this ZIP in your browser from chats currently cached on this device. When you're signed in, that cache syncs with your account after changes and when you return to the page.</p>
  <div class="export-contents"><strong>What's inside</strong><ul><li><strong>chats.json</strong> — chats, groups, AI-ended status and settings.</li><li><strong>chats/</strong> — a readable text file for each chat.</li><li><strong>README.txt</strong> — export scope and general notes.</li></ul></div>
  <p><strong>Private data:</strong> the export contains conversation text. It does not include the account session token, early-access tokens, the browser identifier, or deleted chats.</p>
  <p><strong>Sync first:</strong> if signed in and you need the newest account changes, wait for account syncing to finish before exporting. Deleted-chat markers are not included.</p>
  <p><strong>Keep the ZIP private:</strong> anyone who gets the file can read the conversations. Deleting chats in WHWai does not erase downloaded copies.</p>
  <fieldset class="export-scope"><legend><strong>What to export</strong></legend><label class="radio-row"><input type="radio" name="export-scope" value="all" checked><span><strong>All chats</strong><small>Every chat on this device.</small></span></label><label class="radio-row"><input type="radio" name="export-scope" value="selected"><span><strong>Selected chats</strong><small>Only the chats you check below.</small></span></label></fieldset><div class="export-picks" id="export-picks" hidden>${chatOptions}</div>
  <p class="sm" id="export-status" role="status">A 10-minute cooldown starts after an export is prepared.</p>
  <div class="data-toolbar"><button type="button" class="pbtn" id="export-back">Back to data tools</button><button type="button" class="pbtn" id="export-data">Download chats (.zip)</button></div>`;
 const q=id=>mbody.querySelector("#"+id);q("export-back").onclick=renderDataManagement;q("export-data").onclick=exportLocalData;mbody.querySelectorAll('input[name="export-scope"]').forEach(rd=>rd.onchange=()=>{q("export-picks").hidden=mbody.querySelector('input[name="export-scope"]:checked').value!=="selected"});startExportCooldownTicker();
}
function openForgotPanel(){
 if($("policy-overlay"))return;
 const o=document.createElement("div");o.id="policy-overlay";o.className="policy-overlay";
 o.innerHTML=`<div class="policy-card" role="dialog" aria-modal="true" aria-labelledby="policy-title"><div class="policy-head"><strong id="policy-title">Forgot your password?</strong><button type="button" class="policy-close" aria-label="Close"><span class="xi" aria-hidden="true"></span></button></div><div class="policy-body"><p>Password resets are handled by We Hate Windows support. Email <a href="mailto:wehatewindows.help@gmail.com?subject=WHWai%20password%20reset">wehatewindows.help@gmail.com</a> with your username and a short note asking for a reset.</p></div></div>`;
 const close=()=>{if(o.classList.contains("closing"))return;o.classList.add("closing");document.removeEventListener("keydown",onKey);setTimeout(()=>o.remove(),170)};
 const onKey=e=>{if(e.key==="Escape")close()};
 o.addEventListener("click",e=>{if(e.target===o||e.target.closest(".policy-close"))close()});
 document.addEventListener("keydown",onKey);
 document.body.appendChild(o);
 const c=o.querySelector(".policy-close");if(c)c.focus();
}
function openLegalPanel(kind){
 if($("policy-overlay"))return;
 const isTerms=kind==="terms";
 const o=document.createElement("div");o.id="policy-overlay";o.className="policy-overlay";
 o.innerHTML=`<div class="policy-card" role="dialog" aria-modal="true" aria-labelledby="policy-title"><div class="policy-head"><strong id="policy-title">${isTerms?"Terms of Use":"Privacy Policy"}</strong><button type="button" class="policy-close" aria-label="Close"><span class="xi" aria-hidden="true"></span></button></div><div class="policy-body">${isTerms?termsBodyHTML():privacyBodyHTML()}</div></div>`;
 const close=()=>{if(o.classList.contains("closing"))return;o.classList.add("closing");document.removeEventListener("keydown",onKey);setTimeout(()=>o.remove(),170)};
 const onKey=e=>{if(e.key==="Escape")close()};
 o.addEventListener("click",e=>{if(e.target===o||e.target.closest(".policy-close"))close()});
 document.addEventListener("keydown",onKey);
 document.body.appendChild(o);
 const c=o.querySelector(".policy-close");if(c)c.focus();
}
document.addEventListener("click",e=>{if(e.target.closest&&e.target.closest("#pre-close")){preDismissed=true;updateSchoolNotice();return}const fp=e.target.closest&&e.target.closest(".forgot-link");if(fp){openForgotPanel();return}const lg=e.target.closest&&e.target.closest("[data-legal]");if(lg){e.preventDefault();openLegalPanel(lg.dataset.legal)}const si=e.target.closest&&e.target.closest("#school-lock-signin");if(si)openSettings(()=>renderAccountAuth("login"))});
function termsBodyHTML(){return `<div class="policy-takeaways"><strong>Key takeaways</strong><ul><li>WHWai is a general-purpose AI chat tool. It is not made by, endorsed by, or affiliated with any school.</li><li>You must be 13 or older. If you are under 18, you need a parent or guardian's permission.</li><li>During school hours, WHWai is available only to signed-in users.</li><li>AI replies can be wrong. Check important information before you rely on it.</li><li>You are responsible for activity on your account.</li></ul></div>
 <p class="sm">Effective date: November 25, 2026</p>
 <h3>Who runs WHWai</h3><p>WHWai is operated by We Hate Windows (WHW), based in Hawaii, United States. Contact: <a href="mailto:wehatewindows.help@gmail.com">wehatewindows.help@gmail.com</a>.</p>
 <h3>Who can use WHWai</h3><p>You must be at least 13 years old. When you create an account, you confirm that you meet this age and, if you are under 18, that your parent or guardian has given permission. WHWai is in early access, so new accounts need an access code. These terms also apply if you use WHWai without an account.</p>
 <h3>School use</h3><p>During school hours, WHWai is available only to signed-in users. Schools set their own rules for device and AI use, and those rules apply to you too. WHWai is not endorsed by or partnered with any school.</p>
 <h3>Your account</h3><p>You are responsible for activity on your account and for keeping your password private. Temporary passwords must be changed when you sign in.</p>
 <h3>Your content</h3><p>You keep ownership of what you type. You allow WHWai to process it to produce replies and titles, to run web searches when a model uses them, and to sync your chats across your devices. We do not sell your content or use it to train AI models.</p>
 <h3>AI-generated replies</h3><p>Replies are generated by AI and can be wrong, incomplete, or out of date. Check important information before relying on it, and follow your school's rules on AI use.</p>
 <h3>Acceptable use</h3><p>Do not use WHWai to break the law, harass or threaten people, spread malware, access other people's accounts or the service's systems, or overload or interfere with the service. You agree to be responsible for claims against WHW that arise from your misuse of WHWai or your content.</p>
 <h3>Access and changes</h3><p>We may limit, suspend, or end access to protect the service or to enforce these terms. That can include disabling an account or a browser, for a set period or until it is re-enabled. Features may change over time.</p>
 <h3>Ending your use</h3><p>You can stop using WHWai at any time and delete your chats or account from Settings. We may suspend accounts that break these terms.</p>
 <h3>No warranty</h3><p>WHWai is provided as is, without warranties of any kind. To the extent the law allows, WHW is not liable for indirect or consequential losses.</p>
 <h3>Third-party software and fonts</h3><p>WHWai uses icons from the Lucide icon set, licensed under the ISC License, Copyright (c) Lucide Icons and Contributors. Some Lucide icons are derived from Feather and licensed under the MIT License, Copyright (c) 2013-present Cole Bemis. Full license text: <a href="https://github.com/lucide-icons/lucide/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Lucide license</a>. The Inter font is loaded from Google Fonts and is licensed under the SIL Open Font License.</p>
 <h3>Governing law</h3><p>These terms are governed by the laws of the State of Hawaii, United States. Disputes are heard in the state or federal courts in Hawaii.</p>
 <h3>Changes to these terms</h3><p>We will change the effective date at the top of this page and post a notice in WHWai before material changes take effect. If you keep using WHWai after a change takes effect, you accept the updated terms.</p>`}
function renderTerms(){
 currentSettingsView="terms";$("modal-title").textContent="Terms of Use";
 mbody.innerHTML=termsBodyHTML()+`<div class="btns"><button class="pbtn" id="terms-back">Back to Settings</button></div>`;
 $("terms-back").onclick=renderSettings;
}
function privacyBodyHTML(){return `<div class="policy-takeaways"><strong>Key takeaways</strong><ul><li>Guest chats stay in your browser. Signed-in chats are saved to your account so they sync across your devices.</li><li>Your messages go to Groq to generate replies. Web search queries go to Tavily.</li><li>Admins can see account details and usage totals, never chat content.</li><li>Passwords are stored only as salted hashes.</li><li>Deleting your account removes it and its saved chats.</li></ul></div>
 <p class="sm">Effective date: November 25, 2026</p>
 <h3>Who we are</h3><p>WHWai is operated by We Hate Windows (WHW). For privacy questions, contact <a href="mailto:wehatewindows.help@gmail.com">wehatewindows.help@gmail.com</a>.</p>
 <h3>What we collect</h3>
 <p><strong>Accounts.</strong> A username, a salted hash of your password (never the password itself), your role and account status, and account timestamps. We do not collect email addresses or birth dates.</p>
 <p><strong>Chats.</strong> Guest chats stay in your browser. Signed-in chats are saved to our server so they can sync across your devices.</p>
 <p><strong>Sessions and devices.</strong> A hashed session token, its expiry and revocation times, and when it was last used. Your browser also creates a random device ID. We use it for usage limits and sign-in protection. When you sign in, we link it to your account.</p>
 <p><strong>Usage.</strong> Counts of requests and AI tokens, used for limits and admin totals. These counts never include message text.</p>
 <p><strong>Connection details.</strong> Services your browser contacts, such as Google and GitHub, can see your IP address and browser details.</p>
 <h3>How we use it</h3><p>We use your data to show, save, and sync chats; to generate the replies and titles you request; to enforce usage limits and protect accounts from abuse; and to run, support, and secure WHWai. We do not sell your data, use it for advertising, or use it to train AI models.</p>
 <h3>AI processing</h3><p>Your prompt and recent messages from the conversation are sent to Groq to generate replies and chat titles. We record only the token counts Groq reports, not the text. Groq's handling of data is described in <a href="https://console.groq.com/docs/your-data" target="_blank" rel="noopener noreferrer">Groq's data documentation</a>.</p>
 <h3>Web search</h3><p>When a model uses web search, only the search query is sent to Tavily. We do not send your account name or other identifiers with it. See <a href="https://www.tavily.com/privacy" target="_blank" rel="noopener noreferrer">Tavily's privacy policy</a>.</p>
 <h3>Storage and access</h3><p>Signed-in data is stored in a Supabase database and processed by our server, which runs on Google Apps Script. Authorized admins can view account details and usage totals to run and support the service. Admin tools do not show chat content. Admins can add short notes (flags) about issues and can disable accounts or browsers for a set period.</p>
 <h3>Backups</h3><p>Account data is backed up daily. Backups are encrypted and stored in a private Google Drive folder. Each account's backup uses its own encryption key. Deleting an account deletes that key, so its backups can no longer be read.</p>
 <h3>Security</h3><p>Passwords are stored as salted hashes, never in plain text. When you set a password, it is checked against the Have I Been Pwned breach database. Only the first five characters of the password's hash are sent, never the password. Sessions expire after 14 days and can be revoked. No online service is completely secure, but we take reasonable steps to protect your data.</p>
 <h3>How long we keep data</h3><p>Chats are kept until you delete them. Sessions are removed about a week after they expire or are revoked. Device records are removed 90 days after they were last used. Admin audit log entries are kept for up to 90 days. Daily usage counts are kept for about a week. Encrypted backups are kept for 7 days. Temporary passwords expire after 72 hours. Admin flags are kept until they are cleared, and older flags are removed when the list is trimmed.</p>
 <h3>Your choices</h3>
 <p><strong>Export.</strong> You can download your chats as a ZIP file from Settings. The file is created in your browser. Anyone who has it can read the conversations, so keep it private.</p>
 <p><strong>Delete.</strong> You can delete your chats and your account from Settings. Deleting data on this device removes only the local copy and your session. Deleting your account removes your account record, sessions, and saved chats. Audit log entries that name your username may remain for up to 90 days. Your encrypted backups stop being readable as soon as your account is deleted, and are removed within 7 days.</p>
 <p><strong>Other requests.</strong> To ask about your data, contact us. Depending on where you live, you may have additional rights under local privacy law.</p>
 <h3>Children</h3><p>WHWai is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child under 13 has an account, contact us and we will delete it. Users under 18 need a parent or guardian's permission (see the Terms of Use).</p>
 <h3>Cookies and local storage</h3><p>WHWai does not use cookies, advertising, or analytics trackers. Your browser stores your session token, your device ID, guest chats, and a few settings in local storage. You can clear these at any time, which signs you out on this device.</p>
 <h3>Service providers</h3><p>WHWai uses Groq (replies and titles), Supabase (database), Google Apps Script (server), Google Drive (encrypted backups), Tavily (web search, when a model uses it), and Have I Been Pwned (password checks). The site is hosted on GitHub Pages, which also checks for new versions. Source icons come from Google's favicon service, which receives only the source's domain name. Fonts are loaded from Google Fonts. These providers may process data outside your country.</p>
 <h3>Changes to this policy</h3><p>We will change the effective date at the top of this page and post a notice in WHWai before material changes take effect.</p>`}
function renderPrivacyPolicy(){
 currentSettingsView="privacy";$("modal-title").textContent="Privacy Policy";
 mbody.innerHTML=privacyBodyHTML()+`<div class="btns"><button class="pbtn" id="privacy-back">Back to Settings</button></div>`;
 $("privacy-back").onclick=renderSettings;
}
let deletingLocalData=false;
function setMsg(t){smsg=String(t||"");const status=mbody.querySelector("#s-msg");if(status)status.textContent=smsg}
// Phones: announcements fold into one short row with a count, so they do not take over the screen. Tap to show them all.
function layoutBanners(){
 const stack=$("banner-stack");if(!stack)return;
 const phone=!!(window.matchMedia&&matchMedia("(max-width:640px)").matches);
 const items=[...stack.querySelectorAll(".site-notice:not([hidden]),.school-notice:not([hidden])")];
 const open=stack.classList.contains("open");
 const fold=phone&&items.length>1&&!open;
 let toggle=stack.querySelector(".banner-toggle");
 if(phone&&items.length>1){
  if(!toggle){toggle=document.createElement("button");toggle.type="button";toggle.className="banner-toggle";toggle.onclick=()=>{stack.classList.toggle("open");layoutBanners()};stack.appendChild(toggle)}
  const label=open?"Hide announcements":"Show all "+items.length+" announcements";
  if(!toggle.firstChild)toggle.innerHTML=ic("chevron-down",16);
  if(toggle.getAttribute("aria-label")!==label){toggle.setAttribute("aria-label",label);toggle.title=label}
  toggle.setAttribute("aria-expanded",String(open));
 }else if(toggle){toggle.remove()}
 items.forEach((el,i)=>{const hide=fold&&i>0,first=fold&&i===0;if(el.classList.contains("fold-hide")!==hide)el.classList.toggle("fold-hide",hide);if(el.classList.contains("fold-first")!==first)el.classList.toggle("fold-first",first)});
 stack.querySelectorAll(".fold-hide,.fold-first").forEach(el=>{if(!items.includes(el))el.classList.remove("fold-hide","fold-first")});
 const main=stack.parentElement;
 if(main){main.classList.toggle("has-banners",items.length>0);main.style.setProperty("--banner-h",(items.length?stack.offsetHeight:0)+"px")}
 const kindOf=el=>el.classList.contains("site-notice")?"site":"school";
 if(fold){items[0].dataset.n1=items[1]?kindOf(items[1]):"";items[0].dataset.n2=items[2]?kindOf(items[2]):""}else if(items[0]){delete items[0].dataset.n1;delete items[0].dataset.n2}
}
let bannerFrame=0;
const bannerObserver=new MutationObserver(()=>{cancelAnimationFrame(bannerFrame);bannerFrame=requestAnimationFrame(layoutBanners)});
if($("banner-stack"))bannerObserver.observe($("banner-stack"),{subtree:true,childList:true,attributes:true,attributeFilter:["hidden"],characterData:true});
window.addEventListener("resize",()=>layoutBanners());
window.addEventListener("resize",()=>document.querySelectorAll(".thought-panel").forEach(p=>{if(p._bubble)p.style.width=p._bubble.offsetWidth+"px"}));
function renderSiteNotice(){
 const has=!!siteNoticeText;
 const g=$("gate-notice");if(g){g.textContent=siteNoticeText;g.hidden=!(has&&siteNoticeOnGates)}
 const el=$("site-notice");if(!el)return;
 const visible=has&&siteNoticeDismissedText!==siteNoticeText;
 const paint=()=>{
  el.innerHTML="";
  const t=document.createElement("span");t.textContent=siteNoticeText;el.appendChild(t);
  if(siteNoticeDismissible){
   const x=document.createElement("button");x.type="button";x.className="notice-x";x.setAttribute("aria-label","Dismiss announcement");
   x.innerHTML=ic('x',14,2.2);
   x.onclick=()=>{siteNoticeDismissedText=siteNoticeText;renderSiteNotice()};el.appendChild(x);
  }
  el._shown=siteNoticeText;
 };
 if(visible){
  if(el._lt){clearTimeout(el._lt);el._lt=null;unsettle(el);el.classList.remove("leaving")}
  if(el.hidden){
   showEl(el);paint();
   el.classList.add("entering");setTimeout(()=>el.classList.remove("entering"),300);
  }else if(el._shown!==siteNoticeText){
   // Live change: the old text fades out fully, then the new text fades in.
   if(!el._swap){
    el.classList.add("changing");
    el._swap=setTimeout(()=>{
     el._swap=null;el.classList.remove("changing");paint();
     el.classList.add("entering");setTimeout(()=>el.classList.remove("entering"),300);
    },220);
   }
  }else paint();
 }else if(!el.hidden){
  if(el._swap){clearTimeout(el._swap);el._swap=null;el.classList.remove("changing")}
  hideEl(el,240);
 }
}
function setAccountFromResult(result){
 accountSession={token:String(result.token||""),user:result.user||null};rtRejoin();accountReady=true;applyModelList();updateSchoolLock();refreshSendState();renderSyncStatus();
 try{if(accountSession.token)localStorage.setItem(ACCOUNT_SESSION_STORAGE_KEY,accountSession.token)}catch(e){}
}
function applyLoginChats(result){
 const hadLocalChats=S.chats.length>0;
 const merged=mergeLocalAndRemote({chats:S.chats,dead:S.dead,cur:S.cur,groups:S.groups},{chats:result.chats||[],dead:result.dead||[],cur:result.cur||null,groups:result.groups||[]});
 S.chats=merged.chats;S.dead=merged.dead;S.groups=merged.groups;S.cur=merged.cur&&S.chats.some(c=>c.id===merged.cur)?merged.cur:(S.chats[0]&&S.chats[0].id)||null;
 store.set(JSON.stringify(persistedState()));renderList();renderChat();
 if(hadLocalChats&&result.mergedLocalChats)toast("Your existing chats were merged into your account.");
 else if(accountInitialSyncPending)toast("Signed in. Loading your account chats…");
 else toast("Signed in successfully.");
 if(accountSession&&accountSession.user&&accountSession.user.mustChange)renderRequiredPasswordChange();
 else if(!modal.hidden&&currentSettingsView==="account-auth")renderAccount();
}
function showAccountAuthError(message,field){const text=message||"The account action could not be completed.";const el=mbody.querySelector("#account-auth-error");if(field&&window.fieldError){if(el)el.hidden=true;window.fieldError(field,text,true);return}if(el){el.textContent=text;el.hidden=false}else setMsg(text)}
let buildIdCache="",buildIdLoading=null,buildIdShown=false;
// Short ID of the latest commit on main (the version the app is built from). Public GitHub API, no user data sent.
function loadBuildId(){
 if(buildIdCache)return Promise.resolve(buildIdCache);
 if(!buildIdLoading)buildIdLoading=fetch("https://api.github.com/repos/wehatewindows/whwai/commits/main",{headers:{Accept:"application/vnd.github+json"}})
  .then(r=>{if(!r.ok)throw new Error("status "+r.status);return r.json()})
  .then(j=>{const sha=String(j&&j.sha||"");if(!/^[0-9a-f]{40}$/.test(sha))throw new Error("bad id");buildIdCache=sha.slice(0,7);return buildIdCache})
  .finally(()=>{buildIdLoading=null});
 return buildIdLoading;
}
async function toggleBuildId(){
 const el=document.getElementById("settings-ver");if(!el||!whatsNewCfg)return;
 const base=String(whatsNewCfg.version);
 if(buildIdShown){buildIdShown=false;el.textContent=base;el.setAttribute("aria-expanded","false");return}
 el.setAttribute("aria-expanded","true");
 let label;
 try{label=await loadBuildId()}catch(e){label="unavailable"}
 const now=document.getElementById("settings-ver");if(!now)return;
 buildIdShown=true;now.textContent=base+" ("+label+")";
}
function accountSummaryHtml(u){
 const init=String(u.username||"?").charAt(0).toUpperCase();
 const chats=S&&Array.isArray(S.chats)?S.chats:[];
 const last=chats.reduce((m,c)=>Math.max(m,Number(c.mu||c.u)||0),0);
  return '<div class="acct-summary desk-summary"><span class="tool-avatar acct-summary-av" style="background:'+escapeAttr(u.profileColor||"#3f6ce0")+'" aria-hidden="true">'+esc(init)+'</span><div class="acct-summary-txt"><strong>'+esc(u.username||"")+'</strong></div></div>';
}
function renderSettings(){
 currentSettingsView="settings";if(exportCooldownTicker!==null){clearInterval(exportCooldownTicker);exportCooldownTicker=null}
 mbody=mbodyOuter;
 if(isDeskSettings()){renderDeskSettings();return}
 $("modal-title").textContent="Settings";
 const signed=!!(accountSession&&accountSession.token&&accountSession.user),user=signed?accountSession.user:null;
 const accountCopy=signed?`Signed in as ${esc(user.username)}${user.role==="admin"?" · Administrator":""}.`:(accountSession&&accountSession.token?(accountReady?"Signed in. Your account will sync once the server is reachable and the access code is entered.":"Checking your account session…"):"");
 mbody.innerHTML=`<h3>Account</h3>${accountCopy?`<p class="sm acct-copy">${accountCopy}</p>`:""}
  ${signed?accountSummaryHtml(user):""}
  <div class="data-tools-list">
   ${signed?`<button class="data-tool" id="account-open" type="button">${accountAvatarHtml()}<span class="tool-copy"><strong>Account settings</strong></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>`:`<button class="data-tool" id="account-signin" type="button"><span class="tool-icon">${ic('log-in',19,1.8)}</span><span class="tool-copy"><strong>Sign in</strong></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>${siteSignupMode!=="closed"?`<button class="data-tool" id="account-signup" type="button"><span class="tool-icon">${ic('plus',19,1.8)}</span><span class="tool-copy"><strong>Create account</strong></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button>`:""}`}
  </div>
  <h3>Data & privacy</h3><button class="pbtn data-manage-button" id="data-tools-open" type="button"><span class="manage-icon">${ic('notebook-text',17)}</span><span>Manage your data</span></button>${confirmDeleteEnabled()?"":'<button type="button" class="subtle-link" id="restore-delete-confirm">Ask before deleting chats again</button>'}
  ${signed&&user.role==="admin"?`<h3>Administration</h3><button class="pbtn data-manage-button" id="admin-open" type="button"><span class="manage-icon">${ic('star',17)}</span><span>Admin panel</span></button>`:""}
  ${stimOn?stimSettingsHtml():""}
  <p class="sm" id="s-msg" role="status">${esc(smsg)}</p><div class="privacy-row"><a href="#" class="privacy-link" id="privacy-open">Privacy Policy</a><a href="#" class="privacy-link" id="terms-open">Terms of Use</a><a href="#" class="privacy-link" id="whatsnew-open">What's new</a>${accessRequired?'<button type="button" class="lock-link" id="lock-whwai-now">Lock WHWai</button>':''}</div>${whatsNewCfg&&whatsNewCfg.version?'<p class="wn-ver wn-ver-btn" id="settings-ver" role="button" tabindex="0" aria-expanded="false" title="Tap to show the build ID">'+esc(String(whatsNewCfg.version))+'</p>':''}`;
 const q=id=>mbody.querySelector("#"+id);
 if(q("account-open"))q("account-open").onclick=renderAccount;
 if(q("account-signin"))q("account-signin").onclick=()=>renderAccountAuth("login");
 if(q("account-signup"))q("account-signup").onclick=()=>renderAccountAuth("signup");
 q("data-tools-open").onclick=renderDataManagement;{const st=q("stim-toggle");if(st)st.onchange=()=>{if(!st.checked){setStimulation(false);renderSettings()}};const ss=q("stim-sound");if(ss)ss.onchange=()=>{stimSound=ss.checked}}{const rd=q("restore-delete-confirm");if(rd)rd.onclick=()=>{setConfirmDelete(true);toast("Delete confirmation is back on.");renderSettings()}}q("privacy-open").onclick=e=>{e.preventDefault();renderPrivacyPolicy()};q("terms-open").onclick=e=>{e.preventDefault();renderTerms()};q("whatsnew-open").onclick=e=>{e.preventDefault();closeSettings();setTimeout(()=>showWhatsNewIfNeeded(true),320)};
 if(q("admin-open"))q("admin-open").onclick=()=>renderAdminPanel("site");
 buildIdShown=false;{const sv=q("settings-ver");if(sv){sv.onclick=toggleBuildId;sv.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggleBuildId()}}}}
 if(q("lock-whwai-now"))q("lock-whwai-now").onclick=()=>{closeSettings();side(false);lockEarlyAccess(true)};
}
// Desktop: a navigation list with a search box on the left, one page at a time on the right, legal links and version in the footer. Phones keep one column.
const SET_ICONS={general:'settings-2',appearance:'sun',account:'user',data:'shield',admin:'star',stim:'sun'};
// Desktop Settings: a sidebar (Account, Data & privacy, and Administration's tabs in a grouped bar) and one content pane. Phones keep the single-column list.
const DESK_ADMIN_TABS=[["site","Site"],["accounts","Accounts"],["flags","Flags"],["usage","Usage"],["audit","Audit log"]];
function isDeskSettings(){return !!(window.matchMedia&&matchMedia("(min-width:641px)").matches)}
function deskIcon(paths,size){if(typeof paths==='string'&&paths[0]!=='<')return ic(paths,size||17,1.8);return '<svg viewBox="0 0 24 24" width="'+(size||17)+'" height="'+(size||17)+'" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+paths+'</svg>'}
function deskFooterHtml(){
 return '<div class="privacy-row"><a href="#" class="privacy-link" id="privacy-open">Privacy Policy</a><a href="#" class="privacy-link" id="terms-open">Terms of Use</a><a href="#" class="privacy-link" id="whatsnew-open">What\'s new</a>'+(accessRequired?'<button type="button" class="lock-link" id="lock-whwai-now">Lock WHWai</button>':'')+'</div>'+(whatsNewCfg&&whatsNewCfg.version?'<p class="wn-ver wn-ver-btn" id="settings-ver" role="button" tabindex="0" aria-expanded="false" title="Tap to show the build ID">'+esc(String(whatsNewCfg.version))+'</p>':'');
}
function deskSetTitle(t){$("modal-title").textContent="Settings"}
function renderDeskSettings(active){
 const signed=!!(accountSession&&accountSession.token&&accountSession.user),isAdmin=signed&&accountSession.user.role==="admin";
 const adminBlock=isAdmin?'<div class="set-cap">Administration</div><div class="set-group">'+DESK_ADMIN_TABS.map(t=>'<button type="button" class="set-sub" data-desk="admin:'+t[0]+'"><span class="set-sub-ico">'+deskIcon(ADMIN_ICONS[t[0]]||"",14)+'</span><span>'+t[1]+'</span></button>').join("")+'</div>':"";
 mbodyOuter.innerHTML='<div class="set-wrap desk"><div class="set-side"><nav class="set-nav" aria-label="Settings sections"><button type="button" class="set-nav-btn" data-desk="account"><span class="set-ico" aria-hidden="true">'+deskIcon(SET_ICONS.account)+'</span><span>Account</span></button><button type="button" class="set-nav-btn" data-desk="data"><span class="set-ico" aria-hidden="true">'+deskIcon(SET_ICONS.data)+'</span><span>Data &amp; privacy</span></button>'+adminBlock+'</nav><div class="set-side-foot">'+deskFooterHtml()+'</div></div><div class="set-pane" id="set-pane"></div></div>';
 mbody=$("set-pane");
 if(!window.__deskObs){window.__deskObs=new MutationObserver(()=>{const mc=document.querySelector("#modal .mcard");if(mc)mc.classList.toggle("settings-wide",!!mbodyOuter.querySelector(":scope > .set-wrap.desk"))});window.__deskObs.observe(mbodyOuter,{childList:true})}
 const mc0=document.querySelector("#modal .mcard");if(mc0)mc0.classList.add("settings-wide");
 mbodyOuter.querySelectorAll("[data-desk]").forEach(b=>b.onclick=()=>deskGo(b.dataset.desk));
 mbodyOuter.querySelector("#privacy-open").onclick=e=>{e.preventDefault();renderPrivacyPolicy()};
 mbodyOuter.querySelector("#terms-open").onclick=e=>{e.preventDefault();renderTerms()};
 mbodyOuter.querySelector("#whatsnew-open").onclick=e=>{e.preventDefault();closeSettings();setTimeout(()=>showWhatsNewIfNeeded(true),320)};
 if(mbodyOuter.querySelector("#lock-whwai-now"))mbodyOuter.querySelector("#lock-whwai-now").onclick=()=>{closeSettings();side(false);lockEarlyAccess(true)};
 const sv=mbodyOuter.querySelector("#settings-ver");if(sv){sv.onclick=toggleBuildId;sv.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggleBuildId()}}}
 deskGo(active||"account");
}
function deskMark(key){mbodyOuter.querySelectorAll(".set-nav-btn,.set-sub").forEach(b=>b.setAttribute("aria-current",b.dataset.desk===key?"true":"false"))}
function deskGo(key){
 deskMark(key);
 if(key==="account")return deskAccount();
 if(key==="data")return deskData();
 if(key.startsWith("admin:")){const t=key.slice(6);adminTab=t;renderAdminPanel(t);deskSetTitle(DESK_ADMIN_TABS.find(x=>x[0]===t)[1]);return}
}
function deskAccount(){
 const signed=!!(accountSession&&accountSession.token&&accountSession.user);
 if(signed){
  renderAccount();
  mbody.insertAdjacentHTML("afterbegin",accountSummaryHtml(accountSession.user));
  deskSetTitle("Account");
  if(stimOn){mbody.insertAdjacentHTML("beforeend",stimSettingsHtml());bindStimControls()}
  return;
 }
 currentSettingsView="settings";
 const copy=accountSession&&accountSession.token?(accountReady?"Signed in. Your account will sync once the server is reachable and the access code is entered.":"Checking your account session…"):"Sign in to sync your chats across browsers, or create an account.";
 mbody.innerHTML='<p class="sm">'+esc(copy)+'</p><div class="data-tools-list"><button class="data-tool" id="account-signin" type="button"><span class="tool-icon">'+ic('log-in',19,1.8)+'</span><span class="tool-copy"><strong>Sign in</strong></span><span class="tool-arrow">'+ic('chevron-right',16)+'</span></button>'+(siteSignupMode!=="closed"?'<button class="data-tool" id="account-signup" type="button"><span class="tool-icon">'+ic('plus',19,1.8)+'</span><span class="tool-copy"><strong>Create account</strong></span><span class="tool-arrow">'+ic('chevron-right',16)+'</span></button>':"")+'</div><p class="sm" id="s-msg" role="status"></p>';
 mbody.querySelector("#account-signin").onclick=()=>renderAccountAuth("login");
 const su=mbody.querySelector("#account-signup");if(su)su.onclick=()=>renderAccountAuth("signup");
 deskSetTitle("Account");
 animateMenuContent();
}
function deskData(){
 renderDataManagement();
 currentSettingsView="data";
 deskSetTitle("Data & privacy");
 if(!confirmDeleteEnabled()){
  const rd=document.createElement("button");rd.type="button";rd.className="subtle-link";rd.id="restore-delete-confirm";rd.textContent="Ask before deleting chats again";
  rd.onclick=()=>{setConfirmDelete(true);toast("Delete confirmation is back on.",{undo:()=>{setConfirmDelete(false);deskData();toast("Changes undone.")}});deskData()};
  mbody.appendChild(rd);
 }
}
function bindStimControls(){
 const st=mbody.querySelector("#stim-toggle");if(st)st.onchange=()=>{if(!st.checked){setStimulation(false);deskGo("account")}};
 const ss=mbody.querySelector("#stim-sound");if(ss)ss.onchange=()=>{stimSound=ss.checked};
}

// ---- Hawaii-time date and time picker (admin disable dialog) ----
// Writes "YYYY-MM-DDTHH:MM" in HST into the hidden #dis-reenable input, the same format the server already reads.
const HST_OFFSET_MS=10*3600000;
function hstNowParts(ms){const d=new Date(ms-HST_OFFSET_MS);return {y:d.getUTCFullYear(),m:d.getUTCMonth(),d:d.getUTCDate(),h:d.getUTCHours(),min:d.getUTCMinutes()}}
// Accepts "2026-11-10 9:00 AM", "2026-11-10 21:00", "11/10/2026 9:00 PM", or a date with no time (9:00 AM). Returns null if invalid.
function parseHstInput(text){
 const t=String(text||"").trim().replace(/\s+/g," ").toUpperCase().replace(/\s*HST$/,"");
 let m=t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?: (\d{1,2}):(\d{2}) ?(AM|PM)?)?$/);
 let y,mo,d,h=9,mi=0,ap;
 if(m){y=+m[1];mo=+m[2];d=+m[3];ap=m[6];if(m[4]!==undefined){h=+m[4];mi=+m[5]}}
 else{m=t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?: (\d{1,2}):(\d{2}) ?(AM|PM)?)?$/);if(!m)return null;mo=+m[1];d=+m[2];y=+m[3];ap=m[6];if(m[4]!==undefined){h=+m[4];mi=+m[5]}}
 if(ap){if(h<1||h>12)return null;h=(h%12)+(ap==="PM"?12:0)}
 if(h>23||mi>59||mo<1||mo>12||d<1)return null;
 const dt=new Date(Date.UTC(y,mo-1,d));if(dt.getUTCMonth()!==mo-1||dt.getUTCDate()!==d)return null;
 return {y:y,m:mo-1,d:d,h:h,min:mi};
}
function mountHstPicker(hidden,host){
 const pad=n=>String(n).padStart(2,"0"), nowP=hstNowParts(Date.now()), todayKey=nowP.y*10000+nowP.m*100+nowP.d;
 const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
 const parsedVal=v=>{const mt=String(v||"").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);return mt?{y:+mt[1],m:+mt[2]-1,d:+mt[3],h:+mt[4],min:+mt[5]}:null};
 const futureOk=p=>Date.UTC(p.y,p.m,p.d,p.h,p.min)+HST_OFFSET_MS>Date.now()+60000;
 let sel=parsedVal(hidden.value), draft=null, view=null, open=false;
 const ORDER=["m","d","y","h","min","ap"], MAXLEN={m:2,d:2,y:4,h:2,min:2,ap:2}, JUMP={m:2,d:4,h:2,min:6};
 const part=(k,ph,label)=>'<input type="text" class="hst-part hst-'+k+'" data-part="'+k+'" id="dis-reenable-'+k+'" inputmode="'+(k==="ap"?"text":"numeric")+'" maxlength="'+MAXLEN[k]+'" placeholder="'+ph+'" aria-label="'+label+'" autocomplete="off" spellcheck="false">';
 const sep=t=>'<span class="hst-sep" aria-hidden="true">'+t+'</span>';
 host.innerHTML='<div class="hst-field"><div class="hst-seg" id="dis-reenable-text" role="group" aria-label="Re-enable date and time, Hawaii time">'
  +part("m","--","Month")+sep("/")+part("d","--","Day")+sep("/")+part("y","----","Year")
  +'<span class="hst-gap"></span>'
  +part("h","--","Hour")+sep(":")+part("min","--","Minute")
  +'<span class="hst-gap"></span>'
  +part("ap","--","AM or PM")
  +'</div><button type="button" class="hst-cal-btn" id="dis-reenable-btn" aria-label="Open calendar" aria-haspopup="dialog" aria-expanded="false">'+ic('calendar',20,1.8)+'</button></div><div class="hst-pop" id="dis-reenable-pop" role="dialog" aria-label="Choose re-enable date and time" hidden></div><p class="hst-msg" id="dis-reenable-msg" role="status" hidden></p>';
 const group=host.querySelector(".hst-seg"), parts={}, btn=host.querySelector(".hst-cal-btn"), pop=host.querySelector(".hst-pop"), msg=host.querySelector(".hst-msg");
 group.querySelectorAll("[data-part]").forEach(i=>{parts[i.dataset.part]=i});
 const showMsg=t=>{msg.textContent=t||"";msg.hidden=!t};
 const partsFull=()=>ORDER.every(k=>parts[k].value.length===MAXLEN[k]);
 const syncParts=()=>{
  if(!sel){ORDER.forEach(k=>{parts[k].value=""});return}
  parts.m.value=pad(sel.m+1);parts.d.value=pad(sel.d);parts.y.value=String(sel.y);
  parts.h.value=pad(((sel.h+11)%12)+1);parts.min.value=pad(sel.min);parts.ap.value=sel.h<12?"AM":"PM";
 };
 const writeValue=p=>{sel=p;hidden.value=p?p.y+"-"+pad(p.m+1)+"-"+pad(p.d)+"T"+pad(p.h)+":"+pad(p.min):"";syncParts();if(open&&p&&typeof paintPop==="function"){draft={...p};view={y:p.y,m:p.m};paintPop()}};
 const close=()=>{open=false;hideEl(pop);btn.setAttribute("aria-expanded","false")};
 const normalise=()=>{
  ["m","d","h","min"].forEach(k=>{if(/^\d$/.test(parts[k].value))parts[k].value="0"+parts[k].value});
  const a=parts.ap.value.trim().toUpperCase();if(a==="A"||a==="P")parts.ap.value=a+"M";
 };
 const commit=()=>{
  normalise();
  const any=ORDER.some(k=>parts[k].value.trim()!=="");
  if(!any){writeValue(null);showMsg("");return}
  if(!partsFull()){showMsg("Finish the date and time, or use the calendar.");return}
  const p=parseHstInput(parts.m.value+"/"+parts.d.value+"/"+parts.y.value+" "+parts.h.value+":"+parts.min.value+" "+parts.ap.value);
  if(!p){showMsg("Type a date and time like 11/10/2026 9:00 AM, or use the calendar.");return}
  if(!futureOk(p)){showMsg("Pick a time at least a minute from now.");return}
  writeValue(p);showMsg("");
 };
 const focusPart=k=>{const el=parts[k];if(el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}};
 ORDER.forEach((k,i)=>{
  const el=parts[k];
  el.addEventListener("input",()=>{
   showMsg("");
   if(k==="ap"){const c=(el.value.match(/[ap]/i)||[])[0];el.value=c?(c.toLowerCase()==="p"?"PM":"AM"):""}
   else{el.value=el.value.replace(/\D/g,"").slice(0,MAXLEN[k])}
   const v=el.value;
   if(k!=="ap"&&i<ORDER.length-1&&v.length&&(v.length===MAXLEN[k]||(v.length===1&&Number(v)>=JUMP[k])))focusPart(ORDER[i+1]);
   if(k==="ap"&&v.length===2)commit();
  });
  el.addEventListener("keydown",e=>{
   if(e.key==="Enter"){e.preventDefault();commit();return}
   if((e.key==="/"||e.key===":")&&i<ORDER.length-1){e.preventDefault();focusPart(ORDER[i+1]);return}
   if(e.key==="Backspace"&&!el.value&&i>0){e.preventDefault();focusPart(ORDER[i-1])}
  });
  el.addEventListener("paste",e=>{
   const text=(e.clipboardData||window.clipboardData).getData("text"), p=parseHstInput(text);
   if(!p)return;
   e.preventDefault();
   if(!futureOk(p)){showMsg("Pick a time at least a minute from now.");return}
   writeValue(p);showMsg("");
  });
  el.addEventListener("blur",e=>{if(e.relatedTarget&&host.contains(e.relatedTarget))return;commit()});
 });
 const paintPop=()=>{
  const first=new Date(Date.UTC(view.y,view.m,1)).getUTCDay(), days=new Date(Date.UTC(view.y,view.m+1,0)).getUTCDate();
  const cells=[];for(let i=0;i<first;i++)cells.push('<span></span>');
  for(let d=1;d<=days;d++){
   const key=view.y*10000+view.m*100+d, past=key<todayKey, isSel=draft&&draft.y===view.y&&draft.m===view.m&&draft.d===d, isToday=key===todayKey;
   cells.push('<button type="button" class="hst-day'+(isToday?' is-today':'')+'" data-day="'+d+'" aria-pressed="'+(isSel?'true':'false')+'"'+(past?' disabled':'')+'>'+d+'</button>');
  }
  const hour12=((draft.h+11)%12)+1, ampm=draft.h<12?"AM":"PM";
  const hours=[1,2,3,4,5,6,7,8,9,10,11,12].map(x=>'<option value="'+x+'"'+(x===hour12?' selected':'')+'>'+x+'</option>').join("");
  const mins=[0,15,30,45].map(x=>'<option value="'+x+'"'+(x===draft.min?' selected':'')+'>'+pad(x)+'</option>').join("");
  pop.innerHTML='<div class="hst-head"><button type="button" class="hst-nav" data-nav="-1" aria-label="Previous month">‹</button><strong>'+MONTHS[view.m]+' '+view.y+'</strong><button type="button" class="hst-nav" data-nav="1" aria-label="Next month">›</button></div>'
   +'<div class="hst-grid">'+["Su","Mo","Tu","We","Th","Fr","Sa"].map(x=>'<span class="hst-dow">'+x+'</span>').join("")+cells.join("")+'</div>'
   +'<div class="hst-time"><label class="sm">Time (HST)</label><select data-part="hour" aria-label="Hour">'+hours+'</select><span>:</span><select data-part="min" aria-label="Minute">'+mins+'</select><select data-part="ampm" aria-label="AM or PM"><option value="AM"'+(ampm==="AM"?' selected':'')+'>AM</option><option value="PM"'+(ampm==="PM"?' selected':'')+'>PM</option></select></div>'
   +'<div class="hst-actions"><button type="button" class="pbtn" data-act="cancel">Cancel</button><button type="button" class="pbtn active" data-act="set">Set time</button></div>';
  pop.querySelectorAll(".hst-nav").forEach(b=>b.onclick=()=>{let mm=view.m+Number(b.dataset.nav),yy=view.y;if(mm<0){mm=11;yy--}if(mm>11){mm=0;yy++}view={y:yy,m:mm};paintPop()});
  pop.querySelectorAll(".hst-day").forEach(b=>b.onclick=()=>{draft.y=view.y;draft.m=view.m;draft.d=Number(b.dataset.day);paintPop()});
  const sync=()=>{const h12=Number(pop.querySelector('[data-part="hour"]').value),ap=pop.querySelector('[data-part="ampm"]').value;draft.h=(h12%12)+(ap==="PM"?12:0);draft.min=Number(pop.querySelector('[data-part="min"]').value)};
  pop.querySelectorAll("select").forEach(x=>x.onchange=()=>{sync()});
  pop.querySelector('[data-act="cancel"]').onclick=()=>close();
  pop.querySelector('[data-act="set"]').onclick=()=>{
   sync();
   if(!futureOk(draft)){showMsg("Pick a time at least a minute from now.");return}
   writeValue({...draft});showMsg("");close();
  };
 };
 btn.onclick=()=>{
  if(open){close();return}
  const tm=new Date(Date.UTC(nowP.y,nowP.m,nowP.d+1)), base=sel?{...sel}:{y:tm.getUTCFullYear(),m:tm.getUTCMonth(),d:tm.getUTCDate(),h:9,min:0};
  draft={...base};view={y:draft.y,m:draft.m};open=true;showEl(pop);btn.setAttribute("aria-expanded","true");paintPop();
 };
 host._refresh=()=>{sel=parsedVal(hidden.value);syncParts();close();showMsg("")};
 syncParts();
}

// ---- Sign-up: live rules under the fields and show/hide toggles ----
function enhanceAuthForm(signup,ids){
 if(!signup)return;
 const user=ids?null:$("account-username"),pw=$(ids?ids.pw:"account-password"),pc=$(ids?ids.pc:"account-password-confirm");
 if(!pw||!pc)return;
 const EYE=ic('eye',18,1.8);
 const EYE_OFF=ic('eye-off',18,1.8);
 const wrapWithToggle=input=>{
  const row=document.createElement("div");row.className="pw-row";input.parentNode.insertBefore(row,input);row.appendChild(input);
  const b=document.createElement("button");b.type="button";b.className="pw-toggle";b.setAttribute("aria-label","Show password");b.setAttribute("aria-pressed","false");b.innerHTML=EYE;
  b.onclick=()=>{const show=input.type==="password";input.type=show?"text":"password";b.innerHTML=show?EYE_OFF:EYE;b.setAttribute("aria-label",show?"Hide password":"Show password");b.setAttribute("aria-pressed",show?"true":"false")};
  row.appendChild(b);
 };
 wrapWithToggle(pw);wrapWithToggle(pc);
 const makeList=(input,rules)=>{
  const ul=document.createElement("ul");ul.className="rule-list";ul.setAttribute("aria-label","Requirements");
  ul.innerHTML=rules.map((r,i)=>'<li data-i="'+i+'">'+esc(r.label)+'</li>').join("");
  (input.parentElement&&input.parentElement.classList.contains("pw-row")?input.parentElement:input).insertAdjacentElement("afterend",ul);
  return ()=>{const v=input.value;ul.classList.toggle("is-open",!!v);rules.forEach((r,i)=>{const li=ul.children[i];if(!v){li.className="";return}li.className=r.test(v)?"ok":"bad"})};
 };
 const userRules=[{label:"3 to 20 characters",test:v=>v.length>=3&&v.length<=20},{label:"Lowercase letters and numbers only",test:v=>/^[a-z0-9]+$/.test(v)}];
 const passRules=[{label:"At least 8 characters",test:v=>v.length>=8},{label:"Matches the confirm password",test:v=>v===pc.value}];
 const confRules=[{label:"Matches the password",test:v=>v===pw.value}];
 const paintUser=user?makeList(user,userRules):()=>{}, paintPass=makeList(pw,passRules), paintConf=makeList(pc,confRules);
 const all=()=>{paintUser();paintPass();paintConf()};
 [user,pw,pc].filter(Boolean).forEach(i=>i.addEventListener("input",all));
 all();
 // Age and terms consent: sign-up stays blocked until it is ticked (client-side; the server does not check it).
 const form=$("account-auth-form"),submit=$("account-auth-submit");
 if(!form||!submit)return;
 const row=document.createElement("div");row.className="consent-row";
 row.innerHTML='<label class="consent-label"><input type="checkbox" id="account-age-consent"><span>I am 13 or older, and I agree to the <a href="#" data-legal="terms">Terms of Use</a> and <a href="#" data-legal="privacy">Privacy Policy</a>. If I am under 18, I have my parent or guardian\'s permission to use WHWai.</span></label>';
 const last=pc.closest(".pw-row").nextElementSibling;
 (last&&last.classList.contains("rule-list")?last:pc.closest(".pw-row")).insertAdjacentElement("afterend",row);
 const cb=row.querySelector("#account-age-consent");
 const syncConsent=()=>{submit.disabled=!cb.checked;submit.setAttribute("aria-disabled",String(!cb.checked))};
 cb.addEventListener("change",syncConsent);syncConsent();
 // Enter in a field also submits the form, so block it here too (capture runs before the form's own handler)
 form.addEventListener("submit",e=>{if(!cb.checked){e.preventDefault();e.stopImmediatePropagation()}},true);
 row.querySelectorAll("[data-legal]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openLegalPanel(a.dataset.legal)}));
}
function renderAccountAuth(mode){
 currentSettingsView="account-auth";const signup=mode==="signup";$("modal-title").textContent=signup?"Create account":"Sign in";
 const codeField=signup&&siteSignupMode==="code"?'<label for="account-invite-code">Access code</label><input id="account-invite-code" type="text" class="masked-field" maxlength="80" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true" required>':'';
 mbody.innerHTML=`${signup?(siteSignupMode!=="code"?"":`<p class="sm">The current access code is required to sign up.</p>`):""}
  <form id="account-auth-form" class="account-form" autocomplete="off"><label for="account-username">Username</label><input id="account-username" name="username" type="text" minlength="3" maxlength="20" ${signup?'pattern="[a-z0-9]{3,20}"':'pattern="[a-zA-Z0-9_]{3,20}"'} autocapitalize="off" autocomplete="username" required><label for="account-password">Password</label><input id="account-password" name="password" type="password" maxlength="200" autocomplete="${signup?"new-password":"current-password"}" required>${signup?"":'<button type="button" class="forgot-link">Forgot password?</button>'}${signup?'<label for="account-password-confirm">Confirm password</label><input id="account-password-confirm" type="password" maxlength="200" autocomplete="new-password" required>':''}${codeField}<p class="access-error" id="account-auth-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar"><button type="button" class="pbtn" id="account-auth-back">Back</button><button type="submit" class="pbtn" id="account-auth-submit">${signup?"Create account":"Sign in"}</button></div></form>`;
 const form=mbody.querySelector("#account-auth-form");enhanceAuthForm(signup);
 mbody.querySelector("#account-auth-back").onclick=renderSettings;
 form.onsubmit=async e=>{
  e.preventDefault();const rawUser=mbody.querySelector("#account-username").value.trim(),username=signup?rawUser:rawUser.toLowerCase(),password=mbody.querySelector("#account-password").value;
  if(signup?!/^[a-z0-9]{3,20}$/.test(rawUser):!/^[a-z0-9_]{3,20}$/.test(username)){showAccountAuthError(signup?"Use 3–20 characters: lowercase letters and numbers only.":"Use 3–20 characters: lowercase letters, numbers, or underscores.",mbody.querySelector("#account-username"));return}
  if(signup&&password!==mbody.querySelector("#account-password-confirm").value){showAccountAuthError("The passwords do not match.",mbody.querySelector("#account-password-confirm"));return}
  const submit=mbody.querySelector("#account-auth-submit");submit.disabled=true;submit.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>'+(signup?"Creating…":"Signing in…");
  try{
   const body={action:signup?"auth_signup":"auth_login",username,password,deviceId:getDeviceId()};
   if(signup)body.acknowledgeBreached=!!($("breach-ack")&&$("breach-ack").checked);
   if(signup&&siteSignupMode==="code")body.inviteCode=mbody.querySelector("#account-invite-code").value.trim();
   const result=await post(body);
   if(!result||!result.ok||!result.token)throw Object.assign(new Error(result&&result.error||"account_action_failed"),{payload:result});
   setAccountFromResult(result);
   accountInitialSyncPending=!accountSession.user.mustChange;
   accountMergePendingToast=!accountSession.user.mustChange&&S.chats.length>0;
   applyLoginChats(result);
   if(!accountSession.user.mustChange){syncAccountChatsNow();if(isDeskSettings()&&mbodyOuter.querySelector(":scope > .set-wrap.desk"))renderDeskSettings("account");else renderAccount()}
  }catch(err){if(err&&err.payload&&err.payload.error==="breached_password_confirm")showBreachConfirm(mbody.querySelector("#account-auth-error"),err.payload.message);else{const msg=err&&err.payload&&err.payload.message||"Couldn't complete sign-in. Check your details and try again.";showAccountAuthError(msg,/user/i.test(msg)?mbody.querySelector("#account-username"):mbody.querySelector("#account-password"))}submit.disabled=false;submit.textContent=signup?"Create account":"Sign in"}
 };
}
function acctSkeletonHtml(){return '<div class="acct-skel" aria-hidden="true"><div class="skel" style="width:42%;height:20px"></div><div class="skel" style="width:88%;height:12px;margin-top:12px"></div><div class="skel" style="width:70%;height:12px;margin-top:8px"></div><div class="skel acct-skel-card" style="margin-top:20px"></div><div class="skel acct-skel-card" style="margin-top:10px"></div><div class="skel acct-skel-card" style="margin-top:10px"></div></div>'}
// Re-renders the open Settings page (or the account page) when the account state changes, so admin and account options appear without reopening it.
function refreshSettingsPane(){
 if(!modal||modal.hidden)return;
 // Desktop layout: rebuild it the same way it was first drawn (account summary, admin sections), keeping the section that is open.
 const desk=mbodyOuter.querySelector(":scope > .set-wrap.desk");
 if(desk){const cur=desk.querySelector('[aria-current="true"][data-desk]');renderDeskSettings(cur?cur.dataset.desk:"account");return}
 if(currentSettingsView==="account")renderAccount();else if(currentSettingsView==="settings")renderSettings();else return;
 animateMenuContent();
}
function renderAccount(){
 currentSettingsView="account";$("modal-title").textContent="Account settings";
 if(!accountSession||!accountSession.token){renderSettings();return}
 if(!accountSession.user){
  const failed=accountReady;
  mbody.innerHTML='<p class="sm" role="status">'+(failed?"Can't reach your account right now. It will load when the connection is back.":"Checking your account session…")+'</p>'+(failed?"":acctSkeletonHtml())+'<div class="data-toolbar"><button class="pbtn" id="account-back">Back to Settings</button></div>';
  $("account-back").onclick=renderSettings;return;
 }
 const u=accountSession.user;
 mbody.innerHTML=`<p class="acct-who"><strong>${esc(u.username)}</strong>${u.role==="admin"?" · Administrator":""}</p><p class="sm">Your account chats sync to the server when you make changes and when you return to WHWai. You can use the same account on multiple browsers.</p><p class="sm" id="account-sync-status" role="status">${accountSyncing?"Syncing account chats…":accountLastSync?"Last synced "+ago(accountLastSync):"Account chat sync runs automatically."}</p>
  ${profileColorHtml()}
  <div class="data-tools-list"><button class="data-tool" id="change-password-open" type="button"><span class="tool-icon">${ic('lock',19,1.8)}</span><span class="tool-copy"><strong>Change password</strong><small>Use a new password for future sign-ins.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button><button class="data-tool" id="signout-everywhere" type="button"><span class="tool-icon">${ic('log-in',19,1.8)}</span><span class="tool-copy"><strong>Sign out everywhere</strong><small>Revoke every session for this account and clear this browser's account cache.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button><button class="data-tool danger" id="delete-account-open" type="button"><span class="tool-icon">${ic('trash-2',19,1.8)}</span><span class="tool-copy"><strong>Delete account</strong><small>Permanently remove this account and its server-stored chats.</small></span><span class="tool-arrow">${ic('chevron-right',16)}</span></button></div>
  <p class="sm" id="s-msg" role="status">${esc(smsg)}</p><div class="data-toolbar"><button class="pbtn" id="account-back">Back to Settings</button><button class="pbtn" id="signout-current">Sign out</button></div>`;
 $("change-password-open").onclick=()=>renderPasswordChange(false);wireProfileColors();$("signout-everywhere").onclick=performSignoutEverywhere;$("delete-account-open").onclick=renderDeleteAccountConfirm;$("account-back").onclick=renderSettings;$("signout-current").onclick=performSignoutCurrent;
}
function updateAccountSyncStatus(custom){const el=$("account-sync-status");if(el)el.textContent=custom||(accountSyncing?"Syncing account chats…":accountLastSync?"Last synced "+ago(accountLastSync):"Account chat sync runs automatically.")}
function renderRequiredPasswordChange(){renderPasswordChange(true)}
function renderPasswordChange(required){
 if(required&&modal.hidden)openSettings();
 currentSettingsView=required?"password-required":"password-change";$("modal-title").textContent=required?"Set a new password":"Change password";
 mbody.innerHTML=`<p class="sm">${required?"Your account must have a new password before you can continue.":"Choose a new password with at least 8 characters."}</p><form id="password-change-form" class="account-form" autocomplete="off">${required?"":'<label for="current-password">Current password</label><input id="current-password" type="password" maxlength="200" autocomplete="current-password" required>'}<label for="new-password">New password</label><input id="new-password" type="password" minlength="8" maxlength="200" autocomplete="new-password" required><label for="new-password-confirm">Confirm new password</label><input id="new-password-confirm" type="password" minlength="8" maxlength="200" autocomplete="new-password" required><p class="access-error" id="password-change-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar">${required?"":'<button type="button" class="pbtn" id="password-cancel">Cancel</button>'}<button type="submit" class="pbtn" id="password-change-submit">Save password</button></div></form>`;
 enhanceAuthForm(true,{pw:"new-password",pc:"new-password-confirm"});const form=$("password-change-form");if(!required)$("password-cancel").onclick=renderAccount;
 form.onsubmit=async e=>{e.preventDefault();const next=$("new-password").value,confirmPassword=$("new-password-confirm").value;if(next.length<8){passwordError("Choose a password with at least 8 characters.",$("new-password"));return}if(next!==confirmPassword){passwordError("The passwords do not match.",$("new-password-confirm"));return}
  const b=$("password-change-submit");b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Saving…';
  try{const result=await post({action:"account_password_change",currentPassword:required?"":($("current-password")?$("current-password").value:""),newPassword:next,acknowledgeBreached:!!($("breach-ack")&&$("breach-ack").checked)});if(!result||!result.ok)throw Object.assign(new Error(result&&result.error||"failed"),{payload:result});accountSession.user=result.user||accountSession.user;accountReady=true;toast("Password updated.");if(required){accountInitialSyncPending=true;syncAccountChatsNow()}if(required&&accountSession.user&&accountSession.user.role==="admin")renderAdminPanel("site");else renderAccount()}
  catch(err){if(err&&err.payload&&err.payload.error==="breached_password_confirm")showBreachConfirm($("password-change-error"),err.payload.message);else{const msg=err&&err.payload&&err.payload.message||"Couldn't change the password. Try again.";passwordError(msg,/current|incorrect|wrong/i.test(msg)&&$("current-password")?$("current-password"):$("new-password"))}b.disabled=false;b.textContent="Save password"}
 };
}
function showBreachConfirm(el,message){
 if(!el){setMsg(message);return}
 el.textContent=message;el.hidden=false;
 if(!$("breach-ack")){const wrap=document.createElement("label");wrap.className="check-row breach-ack";wrap.innerHTML='<input type="checkbox" id="breach-ack"> I understand the risk, and I want to keep this password anyway.';el.insertAdjacentElement("afterend",wrap)}
}
function passwordError(message,field){const el=$("password-change-error");const target=field||$("new-password");if(target&&window.fieldError){if(el)el.hidden=true;window.fieldError(target,message,true);return}if(el){el.textContent=message;el.hidden=false}}
function clearSignedInLocalCache(){clearAccountSession();try{localStorage.removeItem(ARIES_INTRO_KEY)}catch(e){}ariesIntroShownThisPage=false;S={chats:[],cur:null,dead:[],groups:[],model:"aries-1",col:!!S.col};store.set(JSON.stringify(persistedState()));renderList();renderChat()}
async function performSignoutCurrent(){
 if(!accountSession||!accountSession.token)return;
 const buttons=mbody.querySelectorAll("button");buttons.forEach(b=>b.disabled=true);setMsg("Signing out…");
 try{await post({action:"account_logout"})}catch(e){}
 clearSignedInLocalCache();smsg="Signed out. The server-stored account chats remain in your account.";toast("Signed out.");renderSettings();
}
async function performSignoutEverywhere(){
 if(!accountSession||!accountSession.token)return;
 const accepted=await appConfirm({title:"Sign out everywhere?",message:"This revokes all active sessions for your account on every browser. You will need to sign in again. Your server-stored chats will remain.",confirmLabel:"Sign out everywhere",danger:true});
 if(!accepted){if(!modal.hidden&&!closingModal)renderAccount();return}
 if(modal.hidden||currentSettingsView!=="app-confirm")return;
 mbody.innerHTML='<div class="confirm-panel"><span class="choice-icon"><span class="sync-spinner" aria-hidden="true"></span></span><div><strong>Signing out everywhere…</strong><p>Revoking account sessions.</p></div></div>';animateMenuContent();
 try{await post({action:"account_signout_everywhere"});clearSignedInLocalCache();smsg="All sessions were revoked. The server-stored account chats remain.";toast("Signed out everywhere.");renderSettings()}
 catch(e){setMsg(e&&e.payload&&e.payload.message||"Couldn't revoke sessions. Try again.");renderAccount()}
}
function renderDeleteAccountConfirm(){
 currentSettingsView="delete-account-confirm";$("modal-title").textContent="Delete account";
 mbody.innerHTML=`<div class="confirm-panel"><span class="choice-icon">${ic('trash-2',19,1.8)}</span><div><strong>Delete this account and its chats?</strong><p>This permanently deletes the account record and active server-stored chats. It also invalidates its sessions. Download a backup first if you need to keep any conversations.</p></div></div><form id="delete-account-form" class="account-form" autocomplete="off"><label for="delete-account-password">Confirm your password</label><input id="delete-account-password" type="password" maxlength="200" autocomplete="current-password" required><p class="access-error" id="delete-account-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar"><button type="button" class="pbtn" id="delete-account-cancel">Cancel</button><button type="submit" class="pbtn danger" id="delete-account-submit">Delete account</button></div></form>`;
 $("delete-account-cancel").onclick=renderAccount;
 $("delete-account-form").onsubmit=async e=>{e.preventDefault();const b=$("delete-account-submit");b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Deleting…';try{const result=await post({action:"account_delete",password:$("delete-account-password").value});if(!result||!result.ok)throw Object.assign(new Error(result&&result.error||"failed"),{payload:result});clearSignedInLocalCache();smsg="Your account and active server-stored chats were deleted.";toast("Account deleted.");renderSettings()}catch(err){const el=$("delete-account-error");el.textContent=err&&err.payload&&err.payload.message||"Couldn't delete the account.";el.hidden=false;b.disabled=false;b.textContent="Delete account"}}
}
function escapeAttr(text){return String(text||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
let adminPanelGeneration=0,adminActionPending=false,adminData=null,adminDataAt=0,adminLoading=null,adminTab="site",adminQuery="";const debAccounts=debounceFn(()=>paintAccountList(),350);
function adminDayText(value){const n=Number(value||0);return n?new Date(n).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}):"Never"}
function adminDate(value){const n=Number(value||0);return n?new Date(n).toLocaleString():"Never"}
function adminFetch(force){
 if(!force&&adminData)return Promise.resolve(adminData);
 if(!adminLoading)adminLoading=post({action:"admin_overview"}).then(r=>{
  if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});
  adminData=r;adminDataAt=Date.now();scheduleAdminExpiry();return r;
 }).finally(()=>{adminLoading=null});
 return adminLoading;
}
// Auto re-enable: when a disabled account or browser reaches its re-enable time, refetch so the panel shows it as active.
let adminExpiryTimer=null;
function nextAdminExpiry(){
 let next=0;const consider=t=>{t=Number(t||0);if(t>Date.now()&&(!next||t<next))next=t};
 ((adminData&&adminData.accounts)||[]).forEach(a=>{if(a.status==="disabled"&&a.disabledInfo)consider(a.disabledInfo.reenableAt)});
 ((adminFlagsData&&adminFlagsData.browserDisables)||[]).forEach(b=>consider(b.reenableAt));
 const s=selfDisabledInfo;if(s){if(s.account)consider(s.account.reenableAt);if(s.browser)consider(s.browser.reenableAt)}
 return next;
}
function scheduleAdminExpiry(){
 if(adminExpiryTimer!==null){clearTimeout(adminExpiryTimer);adminExpiryTimer=null}
 const at=nextAdminExpiry();if(!at)return;
 adminExpiryTimer=setTimeout(runAdminExpiry,Math.min(at-Date.now()+2000,2147483000));
}
function runAdminExpiry(){
 adminExpiryTimer=null;
 const s=selfDisabledInfo,now=Date.now();
 if(s){if(s.account&&Number(s.account.reenableAt)<=now)s.account=null;if(s.browser&&Number(s.browser.reenableAt)<=now)s.browser=null;if(!s.account&&!s.browser)selfDisabledInfo=null}
 adminFlagsData=null;
 adminFetch(true).then(()=>{if(currentSettingsView==="admin")paintAdminTab()}).catch(()=>{});
}
function showAdminError(err){
 const box=$("admin-content");if(!box)return;
 const p=err&&err.payload||{};box.innerHTML=`<p class="access-error" role="status">${esc(p.message||"Couldn't load admin data. Check the account session and sheet setup.")}${p.detail?esc(" ("+p.detail+")"):""}</p><button type="button" class="pbtn" id="admin-retry">Retry</button>`;
 $("admin-retry").onclick=()=>refreshAdmin();
}
function refreshAdmin(){
 const g=adminPanelGeneration,b=$("admin-refresh");
 if(b){b.disabled=true;b.setAttribute("aria-busy","true");b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Refreshing…'}
 const finish=()=>{const nb=$("admin-refresh");if(nb){nb.disabled=false;nb.removeAttribute("aria-busy");nb.textContent="Refresh"}};
 return adminFetch(true).then(()=>{
  finish();adminFlagsData=null;
  if(g===adminPanelGeneration&&currentSettingsView==="admin"){paintAdminTab();toast("Admin data refreshed.")}
 }).catch(err=>{finish();if(g===adminPanelGeneration)showAdminError(err)});
}
function skeletonCards(n,label,kind){
 const acct='<div class="skel-acct" aria-hidden="true"><div class="skel-head"><span class="skel-id"><span class="skel skel-avatar"></span><span class="skel skel-name"></span></span><span class="skel skel-role"></span></div><div class="skel-facts"><div><span class="skel skel-label" style="width:64px"></span><span class="skel skel-value" style="width:70%"></span></div><div><span class="skel skel-label" style="width:70px"></span><span class="skel skel-value" style="width:56%"></span></div><div><span class="skel skel-label" style="width:44px"></span><span class="skel skel-value" style="width:36%"></span></div></div></div>';
 const chat='<div class="skel-chat" aria-hidden="true"><span class="skel skel-ct"></span><span class="skel skel-cm"></span></div>';
 const wrap=kind==="chat"?"skel-wrap skel-wrap-chat":"skel-wrap";
 return '<div class="'+wrap+'" aria-busy="true" role="status"><span class="visually-hidden">'+label+'</span>'+(kind==="chat"?chat:acct).repeat(n)+'</div>';
}
function adminSkeleton(tab){
 const acct='<div class="skel-acct"><div class="skel-head"><span class="skel-id"><span class="skel skel-avatar"></span><span class="skel skel-name"></span></span><span class="skel skel-role"></span></div><div class="skel-facts">'+'<div><span class="skel skel-label" style="width:64px"></span><span class="skel skel-value" style="width:70%"></span></div><div><span class="skel skel-label" style="width:70px"></span><span class="skel skel-value" style="width:56%"></span></div><div><span class="skel skel-label" style="width:44px"></span><span class="skel skel-value" style="width:36%"></span></div>'+'</div></div>';
 const flag='<div class="skel-acct"><div class="skel-head"><span class="skel-id"><span class="skel skel-name" style="width:150px"></span></span><span class="skel skel-role"></span></div><div style="margin-top:12px"><span class="skel skel-thin" style="width:70%;display:block"></span><span class="skel skel-thin" style="width:45%;display:block;margin-top:8px"></span></div><div class="skel-actions"><span class="skel skel-action"></span></div></div>';
 const stat='<div class="skel-stat"><span class="skel skel-thin" style="width:60%;display:block"></span><span class="skel skel-num"></span></div>';
 const audit='<div class="skel-audit"><span class="skel skel-au-t"></span><span class="skel skel-thin" style="width:28%;display:block;margin-top:6px"></span><span class="skel skel-au-m" style="width:70%"></span><span class="skel skel-au-m" style="width:50%;margin-top:6px"></span></div>';
 const sec=(inner)=>'<section class="account-form site-group skel-group">'+inner+'</section>';
 const srow='<div class="check-row skel-row"><span class="skel skel-box"></span><span class="skel skel-line" style="width:58%"></span></div>';
 const site='<div class="skel-site">'+
  sec('<span class="skel skel-h" style="width:72px"></span>'+srow+srow+'<span class="skel skel-line skel-lbl" style="width:118px"></span><span class="skel skel-input"></span><span class="skel skel-line skel-lbl" style="width:132px"></span><span class="skel skel-hint"></span><span class="skel skel-input"></span>')+
  sec('<span class="skel skel-h" style="width:104px"></span><span class="skel skel-wide"></span>')+
  sec('<span class="skel skel-h" style="width:86px"></span><span class="skel skel-wide"></span>')+
  sec('<span class="skel skel-h" style="width:80px"></span><span class="skel skel-wide"></span>')+
  '<div class="data-toolbar"><span class="skel skel-save"></span></div></div>';
 const parts={site:[site,"Loading site controls…"],accounts:[acct.repeat(3),"Loading accounts…"],flags:[flag.repeat(2),"Loading flags…"],usage:['<div class="skel-stats">'+stat.repeat(4)+'</div>',"Loading usage…"],audit:[audit.repeat(3),"Loading audit log…"]}[tab]||[acct.repeat(3),"Loading admin data…"];
 return '<div class="skel-wrap" aria-busy="true" role="status"><span class="visually-hidden">'+parts[1]+'</span>'+parts[0]+'</div>';
}
// Desktop admin panel: the same two-pane layout as Settings (tabs on the left, content on the right). Phones keep the original layout.
const ADMIN_ICONS={site:'globe',accounts:'users',flags:'flag',usage:'chart-column',audit:'list'};
function renderAdminPanel(tab,query){
 currentSettingsView="admin";if(tab&&tab!==adminTab){adminFilterOpen=null;if(tab==="usage")adminUsageView="summary"}if(tab)adminTab=tab;if(query!=null)adminQuery=query;
 const generation=++adminPanelGeneration;
 const inlineAdmin=mbody.classList.contains("set-pane");
 if(!inlineAdmin)$("modal-title").textContent="Admin panel";
 mbody.innerHTML=inlineAdmin?`<div id="admin-content" aria-live="polite"></div><div class="data-toolbar"><button type="button" class="pbtn" id="admin-refresh">Refresh</button></div>`:`<div class="admin-nav">${[["site","Site"],["accounts","Accounts"],["flags","Flags"],["usage","Usage"],["audit","Audit log"]].map(t=>`<button type="button" class="pbtn ${adminTab===t[0]?"active":""}" data-admin-tab="${t[0]}">${t[1]}</button>`).join("")}</div><div id="admin-content" aria-live="polite"></div><div class="data-toolbar"><button type="button" class="pbtn" id="admin-back">Back to Settings</button><button type="button" class="pbtn" id="admin-refresh">Refresh</button></div>`;
 if(!inlineAdmin)mbody.querySelectorAll("[data-admin-tab]").forEach(b=>b.onclick=()=>renderAdminPanel(b.dataset.adminTab));
 $("admin-refresh").onclick=()=>refreshAdmin();syncAdminBack();
 if(adminData){paintAdminTab();if(Date.now()-adminDataAt>60000)refreshAdmin();return}
 $("admin-content").innerHTML=adminSkeleton(adminTab);
 adminFetch().then(()=>{if(generation===adminPanelGeneration&&currentSettingsView==="admin")paintAdminTab()}).catch(err=>{if(generation===adminPanelGeneration)showAdminError(err)});
}
let adminFlagsData=null,adminFlagsLoading=null,disableSubject="account";
const FLAG_TYPE_LABELS={ai_ended:"AI ended chat",browser_evasion:"Disabled browser tried to use WHWai",manual:"Manual flag"};
function subjectText(t){return disableSubject==="browser"?String(t).replace(/This account/g,"This browser").replace(/this account/g,"this browser"):t}
function loadAdminFlags(){
 if(!adminFlagsLoading)adminFlagsLoading=post({action:"admin_flags"}).then(r=>{if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});adminFlagsData=r;return r}).finally(()=>{adminFlagsLoading=null});
 return adminFlagsLoading;
}
function accountNameById(id){const a=((adminData&&adminData.accounts)||[]).find(x=>x.id===id);return a?a.username:""}
function browserLineHtml(a){
 const bd=a.browserDisabled;
 if(bd)return '<div class="admin-account-meta">Browser disabled: '+esc(bd.reasonTitle||"Custom reason")+(bd.reasonSub?" · "+esc(bd.reasonSub):"")+(bd.reenableAt?" · Re-enables "+esc(hstText(bd.reenableAt)):" · Until an admin enables it")+'</div>';
 return '';
}
function flagsLineHtml(a){
 const open=((adminFlagsData&&adminFlagsData.flags)||[]).filter(f=>f.accountId===a.id);
 if(!open.length)return "";
 return '<section class="acct-flags" data-acct-flags><div class="acct-flags-head"><span>Open flags</span><span class="acct-flags-count">'+open.length+'</span></div>'+open.map(f=>'<div class="flag-item acct-flag"><div class="acct-flag-meta">'+esc(FLAG_TYPE_LABELS[f.type]||f.type)+' · '+adminDate(f.createdAt)+'</div><div class="acct-flag-summary">'+esc(f.summary||"")+'</div><div class="admin-account-actions"><button type="button" class="pbtn" data-flag-clear="'+escapeAttr(f.id)+'">Resolve</button></div></div>').join("")+'</section>';
}
function browserButtonsHtml(a){
 const id=escapeAttr(a.id);let h="";
 if(a.hasBrowser){
  h+=a.browserDisabled
   ?'<button type="button" class="pbtn" data-account-action="edit_browser_reason" data-target-id="'+id+'">Edit browser reason</button><button type="button" class="pbtn" data-account-action="enable_browser" data-target-id="'+id+'">Enable browser</button>'
   :'<button type="button" class="pbtn" data-account-action="disable_browser" data-target-id="'+id+'">Disable browser</button>';
 }
 return h+'<button type="button" class="pbtn" data-account-action="flag" data-target-id="'+id+'">Flag account</button>';
}
function backToAdminAccounts(){if(!modal.hidden)renderAdminPanel("accounts")}
function refreshAdminAccounts(){if(!modal.hidden&&currentSettingsView==="admin"&&adminTab==="accounts"&&$("admin-account-results"))paintAccountList()}
const accountsWorking=new Set();
function patchAccountRow(id,change){const row=(adminData&&adminData.accounts||[]).find(a=>a.id===id);if(!row||!change)return null;const prev={};Object.keys(change).forEach(k=>{prev[k]=row[k]});Object.assign(row,change);return ()=>{Object.assign(row,prev)}}
// Runs one admin account action in the background: the row shows a spinner and the new status right away,
// the server result replaces the optimistic values, and a failure rolls the row back.
async function runAccountOp(id,change,send,doneText,opts){
 accountsWorking.add(id);const undo=patchAccountRow(id,change);refreshAdminAccounts();
 try{
  const result=await send();
  if(!result||!result.ok)throw Object.assign(new Error(result&&result.error||"failed"),{payload:result});
  if(opts&&opts.flagsChanged)adminFlagsData=null;
  accountsWorking.delete(id);
  await adminFetch(true).catch(()=>{});
  if(doneText)toast(doneText);
  return result;
 }catch(err){
  if(undo)undo();
  toast(err&&err.payload&&err.payload.message||"Couldn't update that account.",{retry:()=>runAccountOp(id,change,send,doneText,opts)});
  return null;
 }finally{
  accountsWorking.delete(id);refreshAdminAccounts();
 }
}
async function runAccountWork(payload,doneText){
 backToAdminAccounts();
 await runAccountOp(payload.targetId,null,()=>post(payload),doneText,{flagsChanged:true});
}
async function runBrowserAction(action,targetId){
 const edit=action==="edit_browser_reason";
 const row=(adminData&&adminData.accounts||[]).find(a=>a.id===targetId),bd=row&&row.browserDisabled;
 const cur=bd?{title:bd.reasonTitle,sub:bd.reasonSub,text:bd.reason,reenableAt:bd.reenableAt}:null;
 disableSubject="browser";
 let accepted=false,form=null;
 try{
  accepted=await appConfirm({title:edit?"Edit the browser reason?":"Disable browser?",message:edit?"The browser stays disabled. It sees the updated reason.":"This browser will no longer be able to use WHWai. It sees the reason and any re-enable time you set.",confirmLabel:edit?"Save reason":"Disable browser",danger:!edit,extraHtml:disableFormHtml(cur),onRender:wireDisableForm});
  if(accepted&&!modal.hidden&&currentSettingsView==="app-confirm")form=readDisableForm();
 }finally{disableSubject="account"}
 if(!form){if(!modal.hidden&&!closingModal)renderAdminPanel("accounts");return}
 await runAccountWork(Object.assign({action:"admin_account_action",accountAction:edit?"edit_browser_reason":"disable_browser",targetId:targetId},form),edit?"Browser reason updated.":"Browser disabled.");
}
async function runFlagAccount(targetId){
 const accepted=await appConfirm({title:"Flag this account?",message:"Flags are visible only to admins. The user is not told.",confirmLabel:"Add flag",danger:false,extraHtml:'<label class="sm reason-label" for="flag-note-input">Note (admins only)</label><textarea id="flag-note-input" class="reason-input" rows="3" maxlength="300" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"></textarea>'});
 if(!accepted){if(!modal.hidden&&!closingModal)renderAdminPanel("accounts");return}
 if(modal.hidden||currentSettingsView!=="app-confirm")return;
 const note=($("flag-note-input")?$("flag-note-input").value:"").trim();
 if(!note){toast("Add a short note first.");renderAdminPanel("accounts");return}
 await runAccountWork({action:"admin_account_action",accountAction:"flag",targetId:targetId,note:note},"Flag added.");
}
async function flagAction(payload,doneText,opts){
 try{
  const r=await post(Object.assign({action:"admin_flag_action"},payload));
  if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});
  adminFlagsData=null;toast(doneText);
  if(!(opts&&opts.noRender)&&!modal.hidden)renderAdminPanel(adminTab);
  return true;
 }catch(err){toast(err&&err.payload&&err.payload.message||"Couldn't update that flag.");return false}
}
// Resolve is optimistic: the flag fades and collapses at once, the request runs alongside,
// and the row comes back if the server refuses.
async function resolveFlag(b){
 if(!b||b.disabled)return;
 const id=b.dataset.flagClear,item=b.closest(".flag-item"),label=b.textContent;
 b.disabled=true;b.classList.add("is-busy");b.textContent="Resolving…";
 if(item)item.classList.add("is-resolving");
 const pending=post({action:"admin_flag_action",flagAction:"clear",flagId:id}).then(r=>(r&&r.ok)?{ok:true}:{ok:false,msg:r&&r.message},()=>({ok:false}));
 if(item)await setFlagCollapsed(item,true);
 const res=await pending;
 if(!res.ok){
  b.disabled=false;b.classList.remove("is-busy");b.textContent=label;
  if(item){item.classList.remove("is-resolving");await setFlagCollapsed(item,false)}
  toast(res.msg||"Couldn't update that flag.",{retry:()=>b.click()});return;
 }
 if(adminFlagsData)adminFlagsData=Object.assign({},adminFlagsData,{flags:(adminFlagsData.flags||[]).filter(f=>f.id!==id)});
 if(item)item.remove();
 toast("Flag resolved.");
 refreshFlagCounts();
}
// Collapses (on=true) or expands (on=false) a flag row. Resolves when the height transition ends.
function setFlagCollapsed(el,on){
 return new Promise(res=>{
  let done=false;const finish=()=>{if(!done){done=true;el.removeEventListener("transitionend",onEnd);res()}};
  const onEnd=e=>{if(e.target===el&&e.propertyName==="height")finish()};
  el.addEventListener("transitionend",onEnd);setTimeout(finish,450);
  if(on){
   el.style.height=el.offsetHeight+"px";el.style.overflow="hidden";void el.offsetHeight;
   el.style.height="0px";el.style.paddingTop="0px";el.style.paddingBottom="0px";el.style.marginTop="0px";el.style.marginBottom="0px";el.style.borderTopWidth="0px";el.style.borderBottomWidth="0px";
  }else{
   el.style.paddingTop="";el.style.paddingBottom="";el.style.marginTop="";el.style.marginBottom="";el.style.borderTopWidth="";el.style.borderBottomWidth="";
   el.style.height="0px";void el.offsetHeight;
   el.style.height=el.scrollHeight+"px";
   setTimeout(()=>{el.style.height="";el.style.overflow=""},460);
  }
 });
}
function refreshFlagCounts(){
 document.querySelectorAll("[data-acct-flags]").forEach(sec=>{const left=sec.querySelectorAll(".flag-item").length;if(!left){if(sec.dataset.leaving)return;sec.dataset.leaving="1";sec.style.transition="opacity .25s ease";sec.style.opacity="0";setTimeout(()=>sec.remove(),260)}else{const c=sec.querySelector(".acct-flags-count");if(c)c.textContent=left}});
 const list=$("admin-flag-list");
 if(list&&!list.querySelector(".flag-item")&&!list.querySelector("p.sm")&&!list.querySelector("h3"))list.insertAdjacentHTML("beforeend",'<p class="sm">No open flags.</p>');
 if(adminAccountFilters.has("flagged")&&!modal.hidden&&adminTab==="accounts")paintAccountList();
}
async function disableBrowserByDevice(deviceId){
 disableSubject="browser";
 let accepted=false,form=null;
 try{
  accepted=await appConfirm({title:"Disable browser?",message:"This browser can't use WHWai until you enable it from this flag, or until the re-enable time you set, if you set one.",confirmLabel:"Disable browser",danger:true,extraHtml:disableFormHtml(null),onRender:wireDisableForm});
  if(accepted&&!modal.hidden&&currentSettingsView==="app-confirm")form=readDisableForm();
 }finally{disableSubject="account"}
 if(!form){if(!modal.hidden&&!closingModal)renderAdminPanel(adminTab);return}
 await flagAction(Object.assign({flagAction:"disable_browser",deviceId:deviceId},form),"Browser disabled.");
}
let adminFlagQuery="";
function debounceFn(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}}
const debFlags=debounceFn(()=>paintFlagList(),350);
function flagCardHtml(f,disables){
 const uname=f.username||accountNameById(f.accountId);
 const browserOff=!uname&&!!f.deviceId&&disables.some(x=>x.deviceId===f.deviceId);
 const side=uname?'<button type="button" class="pbtn" data-open-account="'+escapeAttr(uname)+'">Show account</button>':(f.deviceId?(browserOff?'<button type="button" class="pbtn" data-enable-browser="'+escapeAttr(f.deviceId)+'">Enable browser</button>':'<button type="button" class="pbtn" data-flag-browser="'+escapeAttr(f.deviceId)+'">Disable browser…</button>'):"");
 return '<article class="admin-account flag-item"><div class="admin-account-head"><span class="admin-account-id"><strong>'+esc(FLAG_TYPE_LABELS[f.type]||f.type)+'</strong></span><span class="account-role">'+adminDate(f.createdAt)+'</span></div><div class="admin-account-meta">'+esc(uname||"No account")+(f.deviceId?" · Browser ···"+esc(String(f.deviceId).slice(-6)):"")+'</div>'+(f.summary?'<div class="admin-account-meta">'+esc(f.summary)+'</div>':"")+'<div class="admin-account-actions"><button type="button" class="pbtn" data-flag-clear="'+escapeAttr(f.id)+'"'+(browserOff?' disabled title="Enable this browser before resolving this flag."':'')+'>Resolve</button>'+side+'</div>'+(browserOff?'<p class="sm acct-lock">Enable this browser before you can resolve this flag.</p>':'')+'</article>';
}
function paintAdminFlags(box){
 if(!adminFlagsData){
  box.innerHTML=adminSkeleton("flags");
  const g=adminPanelGeneration;
  loadAdminFlags().then(()=>{if(g===adminPanelGeneration&&adminTab==="flags"&&currentSettingsView==="admin")paintAdminTab()}).catch(err=>{if(g===adminPanelGeneration)showAdminError(err)});
  return;
 }
 box.innerHTML='<div class="admin-search"><input id="admin-flag-query" type="search" maxlength="60" placeholder="Search flags" value="'+escapeAttr(adminFlagQuery)+'" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"></div><div id="admin-flag-list"></div>';
 $("admin-flag-query").oninput=e=>{adminFlagQuery=e.target.value;debFlags()};
 paintFlagList();
}
function paintFlagList(){
 const list=$("admin-flag-list");if(!list||!adminFlagsData)return;
 const all=adminFlagsData.flags||[],disables=adminFlagsData.browserDisables||[],q=adminFlagQuery.trim().toLowerCase();
 const shown=q?all.filter(f=>[FLAG_TYPE_LABELS[f.type]||f.type,f.summary,f.username,accountNameById(f.accountId),f.deviceId?String(f.deviceId).slice(-6):"",adminDate(f.createdAt)].join(" ").toLowerCase().indexOf(q)!==-1):all;
 list.innerHTML=shown.length?'<h3 class="sm reason-label">Open flags</h3>'+shown.map(f=>flagCardHtml(f,disables)).join(""):'<p class="sm">'+(all.length?"No flags match that search.":"No open flags.")+'</p>';
 list.querySelectorAll("[data-flag-clear]").forEach(b=>b.onclick=()=>resolveFlag(b));
 list.querySelectorAll("[data-enable-browser]").forEach(b=>b.onclick=()=>flagAction({flagAction:"enable_browser",deviceId:b.dataset.enableBrowser},"Browser enabled."));
 list.querySelectorAll("[data-flag-browser]").forEach(b=>b.onclick=()=>disableBrowserByDevice(b.dataset.flagBrowser));
 list.querySelectorAll("[data-open-account]").forEach(b=>b.onclick=()=>renderAdminPanel("accounts",b.dataset.openAccount));
}
function paintAdminTab(){document.querySelectorAll("body > .admin-filter-menu").forEach(m=>m.remove());
 const box=$("admin-content");if(!box||!adminData)return;
 mbody.querySelectorAll("[data-admin-tab]").forEach(b=>b.classList.toggle("active",b.dataset.adminTab===adminTab));
 if(adminTab==="site")paintAdminSite(box);else if(adminTab==="accounts")paintAdminAccounts(box);else if(adminTab==="usage")paintAdminUsage(box);else if(adminTab==="flags")paintAdminFlags(box);else paintAdminAudit(box);
 if(selfDisabledInfo&&(selfDisabledInfo.account||selfDisabledInfo.browser)){box.insertAdjacentHTML("afterbegin",selfDisabledBannerHtml());wireSelfBanner(box.querySelector(".self-disabled-banner"))}
 if(adminData.problems&&adminData.problems.length)box.insertAdjacentHTML("afterbegin",'<p class="access-error" role="status">Some admin data could not load: '+adminData.problems.map(p=>esc(p.part+" – "+p.error)).join("; ")+'</p>');
}
function selfDisabledBannerHtml(){
 const s=selfDisabledInfo,acct=s.account,br=s.browser;
 let h='<section class="self-disabled-banner" role="status"><strong>'+(acct?"Your account is disabled":"This browser is disabled")+'</strong>';
 if(acct&&(acct.reasonTitle||acct.reason))h+='<p class="sm">Reason: '+esc(acct.reasonTitle||"Custom reason")+(acct.reason?' · '+esc(acct.reason):'')+'</p>';
 if(acct&&acct.reenableAt)h+='<p class="sm">Re-enables '+esc(hstText(acct.reenableAt))+'</p>';
 if(acct&&br)h+='<p class="sm">This browser is also disabled from accessing WHWai.</p>';
 h+='<div class="admin-account-actions">'+(acct?'<button type="button" class="pbtn" data-self-reenable="account">Re-enable my account</button>':'')+(br?'<button type="button" class="pbtn" data-self-reenable="browser">Re-enable this browser</button>':'')+'</div></section>';
 return h;
}
function wireSelfBanner(el){
 if(!el)return;
 el.querySelectorAll("[data-self-reenable]").forEach(b=>b.onclick=()=>selfReenable(b.dataset.selfReenable));
}
async function selfReenable(kind){
 const s=selfDisabledInfo;if(!s)return;
 try{
  if(kind==="account"){
   const r=await post({action:"admin_account_action",accountAction:"enable",targetId:s.userId,reason:"",dataMode:"keep"});
   if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});
   s.account=null;
  }else{
   const r=await post({action:"admin_flag_action",flagAction:"enable_browser",deviceId:s.browser.deviceId});
   if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});
   s.browser=null;
  }
  adminFlagsData=null;await adminFetch(true).catch(()=>{});
  toast(kind==="account"?"Account re-enabled.":"Browser re-enabled.");
  if(!s.account&&!s.browser){selfDisabledInfo=null;scheduleAccountSync()}
  if(!modal.hidden)renderAdminPanel(adminTab);
 }catch(err){toast(err&&err.payload&&err.payload.message||"Couldn't re-enable that.",{retry:()=>selfReenable(kind)})}
}
function adminDisableNoteHtml(row){
 return '<div class="admin-disable-note"><p class="sm">Demote this admin before disabling the account.</p><p class="sm">For testing only, disabling without demotion still lets this admin sign in.</p>'+(row.isBootstrap?'<p class="sm">The bootstrap admin can\'t be demoted.</p>':'<button type="button" class="pbtn" id="dis-demote" data-demote-target="'+escapeAttr(row.id)+'">Demote admin first</button>')+'</div>';
}
async function demoteFromDisable(targetId){
 resolvePendingConfirmation(false);
 await new Promise(r=>setTimeout(r,280));
 try{
  const r=await post({action:"admin_account_action",accountAction:"demote",targetId:targetId,reason:"",dataMode:"keep"});
  if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});
  await adminFetch(true).catch(()=>{});
  toast("Demoted. You can disable them now.");
 }catch(err){toast(err&&err.payload&&err.payload.message||"Couldn't demote that account.",{retry:()=>demoteFromDisable(targetId)});return}
 runDisableAction("disable",targetId);
}
document.addEventListener("click",e=>{const d=e.target.closest&&e.target.closest("#dis-demote");if(d)demoteFromDisable(d.dataset.demoteTarget)});
function paintAdminSite(box){
 const v=adminData.settings||{};
 box.innerHTML=`<form id="admin-settings-form" class="account-form site-form" autocomplete="off">
<section class="account-form site-group"><h4 class="site-group-h">Access</h4>
<label class="check-row"><input id="admin-ai-enabled" type="checkbox"> AI enabled</label>
<label class="check-row"><input id="admin-access-required" type="checkbox"> Require access code screen on page load</label>
<label for="admin-signup-mode">Account creation</label><select id="admin-signup-mode"><option value="code">Access code required</option><option value="open">Open sign-up</option><option value="closed">Closed</option></select>
<label for="admin-new-access-code">New access code</label><p class="site-field-hint">Leave blank to keep the current code.</p><input id="admin-new-access-code" type="text" class="masked-field" maxlength="80" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true">
</section>
<section class="account-form site-group"><h4 class="site-group-h">Announcement</h4>
<button type="button" class="pbtn data-manage-button" id="announcement-admin-open"><span>Site announcement</span></button>
</section>
<section class="account-form site-group"><h4 class="site-group-h">What's new</h4>
<button type="button" class="pbtn data-manage-button" id="whatsnew-admin-open"><span>What's new screen</span></button>
</section>
<section class="account-form site-group">
<details class="admin-advanced"><summary>Advanced</summary>
<label class="check-row"><input id="admin-stim-disabled" type="checkbox"> Disable Stimulation Mode for everyone</label>
<label class="check-row"><input id="admin-school-override" type="checkbox"> Turn off the account requirement for today (resets at midnight Hawaii time)</label>
</details>
</section>
<p class="access-error" id="admin-settings-error" role="status" aria-live="polite" hidden></p>
<div class="data-toolbar"><button class="pbtn" id="admin-settings-save" type="submit">Save changes</button></div></form>`;
 $("whatsnew-admin-open").onclick=renderWhatsNewAdmin;$("announcement-admin-open").onclick=renderAnnouncementAdmin;$("admin-ai-enabled").checked=!!v.aiEnabled;$("admin-access-required").checked=!!v.accessCodeRequired;$("admin-signup-mode").value=v.signupMode||"code";$("admin-stim-disabled").checked=!!v.stimulationDisabled;$("admin-school-override").checked=!!v.schoolOverrideActive;
 $("admin-settings-form").onsubmit=async e=>{
  e.preventDefault();const b=$("admin-settings-save"),error=$("admin-settings-error");error.hidden=true;b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Saving…';
  const wn=(adminData.settings&&adminData.settings.whatsNew)||{};const settings={aiEnabled:$("admin-ai-enabled").checked,accessCodeRequired:$("admin-access-required").checked,signupMode:$("admin-signup-mode").value,siteNotice:(adminData.settings||{}).siteNotice||"",siteNoticeDismissible:!!(adminData.settings||{}).siteNoticeDismissible,siteNoticeOnGates:(adminData.settings||{}).siteNoticeOnGates!==false,stimulationDisabled:$("admin-stim-disabled").checked,schoolOverride:$("admin-school-override").checked,newAccessCode:$("admin-new-access-code").value,whatsNewEnabled:!!wn.enabled,whatsNewVersion:wn.version||"",whatsNewContent:{intro:wn.intro||"",items:wn.items||[]}};
  try{
   const saved=await post({action:"admin_update_settings",settings});
   if(!saved||!saved.ok)throw Object.assign(new Error(saved&&saved.error||"failed"),{payload:saved});
   siteSignupMode=saved.settings.signupMode||"code";siteNoticeText=saved.settings.siteNotice||"";siteNoticeDismissible=!!saved.settings.siteNoticeDismissible;siteNoticeOnGates=saved.settings.siteNoticeOnGates!==false;aiDisabled=!saved.settings.aiEnabled;accessRequired=!!saved.settings.accessCodeRequired;siteStimDisabled=!!saved.settings.stimulationDisabled;siteSchoolOverride=!!saved.settings.schoolOverrideActive;updateSchoolLock();if(siteStimDisabled&&stimOn)setStimulation(false);renderSiteNotice();
   if(saved.settings&&saved.settings.whatsNew)applyWhatsNewCfg(saved.settings.whatsNew);if(adminData)adminData.settings=saved.settings;toast("Site settings saved.");
   const current=$("admin-content");if(current&&adminTab==="site"&&currentSettingsView==="admin"&&adminData)paintAdminSite(current);
  }catch(err){const el=$("admin-settings-error"),cb=$("admin-settings-save");if(el){el.textContent=err&&err.payload&&err.payload.message||"Couldn't save settings.";el.hidden=false}if(cb){cb.disabled=false;cb.textContent="Save changes"}}
 };
}
function renderAnnouncementAdmin(){
 currentSettingsView="admin";
 const cur=(adminData&&adminData.settings)||{};
 $("modal-title").textContent="Announcement";
 mbody.innerHTML=`<form id="announcement-admin-form" class="account-form" autocomplete="off"><p class="sm">Shown on the sign-in, access code and disabled screens. Leave it blank to clear it.</p><label for="admin-site-notice">Announcement text (optional)</label><textarea id="admin-site-notice" class="reason-input" rows="5" maxlength="600" placeholder="Leave blank to clear the announcement" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"></textarea><label class="check-row"><input id="admin-notice-dismissible" type="checkbox"> Let users dismiss the announcement</label><label class="check-row"><input id="admin-notice-gates" type="checkbox"> Show the announcement on sign-in, access code, and disabled screens</label><p class="access-error" id="ann-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar"><button class="pbtn" id="ann-back" type="button">Back</button><button class="pbtn" id="ann-save" type="submit">Save changes</button></div></form>`;
 $("admin-site-notice").value=cur.siteNotice||"";
 $("admin-notice-dismissible").checked=!!cur.siteNoticeDismissible;
 $("admin-notice-gates").checked=cur.siteNoticeOnGates!==false;
 $("ann-back").onclick=()=>renderAdminPanel("site");
 $("announcement-admin-form").onsubmit=async e=>{
  e.preventDefault();const b=$("ann-save"),error=$("ann-error");error.hidden=true;b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Saving…';
  const settings={siteNotice:$("admin-site-notice").value,siteNoticeDismissible:$("admin-notice-dismissible").checked,siteNoticeOnGates:$("admin-notice-gates").checked};
  try{
   const saved=await post({action:"admin_update_settings",settings});
   if(!saved||!saved.ok)throw Object.assign(new Error(saved&&saved.error||"failed"),{payload:saved});
   siteNoticeText=saved.settings.siteNotice||"";siteNoticeDismissible=!!saved.settings.siteNoticeDismissible;siteNoticeOnGates=saved.settings.siteNoticeOnGates!==false;renderSiteNotice();
   if(adminData)adminData.settings=saved.settings;toast("Announcement saved.");
   renderAdminPanel("site");
  }catch(err){const el=$("ann-error");if(el){el.textContent=err&&err.payload&&err.payload.message||"Couldn't save the announcement.";el.hidden=false}b.disabled=false;b.textContent="Save changes"}
 };
}
function renderWhatsNewAdmin(){
 currentSettingsView="admin";
 const cur=(adminData&&adminData.settings)||{},wn=cur.whatsNew||{};
 $("modal-title").textContent="What's new screen";
 mbody.innerHTML=`<form id="whatsnew-admin-form" class="account-form" autocomplete="off"><p class="sm">Shown once per browser. Change the version to show it again to everyone.</p><label class="check-row"><input id="wna-enabled" type="checkbox"${wn.enabled?" checked":""}> What's new screen enabled</label><label for="wna-version">Version</label><input id="wna-version" type="text" maxlength="40" value="${escapeAttr(wn.version||"")}" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"><label for="wna-intro">Intro line (optional)</label><input id="wna-intro" type="text" maxlength="200" value="${escapeAttr(wn.intro||"")}" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"><label for="wna-items">Items, one per line, as Title | Description (up to 10)</label><textarea id="wna-items" rows="8" maxlength="3000" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true" placeholder="Aries | Aries is the model you chat with.">${esc((wn.items||[]).map(it=>it.t+" | "+it.d).join("\n"))}</textarea><p class="access-error" id="wna-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar"><button type="button" class="pbtn" id="wna-back">Back</button><button type="submit" class="pbtn" id="wna-save">Save changes</button></div></form>`;
 $("wna-back").onclick=()=>renderAdminPanel("site");
 $("whatsnew-admin-form").onsubmit=async e=>{
  e.preventDefault();const b=$("wna-save"),error=$("wna-error");error.hidden=true;b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Saving…';
  const site=(adminData&&adminData.settings)||{};
  const settings={aiEnabled:!!site.aiEnabled,accessCodeRequired:!!site.accessCodeRequired,signupMode:site.signupMode||"code",siteNotice:site.siteNotice||"",siteNoticeDismissible:!!site.siteNoticeDismissible,siteNoticeOnGates:site.siteNoticeOnGates!==false,newAccessCode:"",whatsNewEnabled:$("wna-enabled").checked,whatsNewVersion:$("wna-version").value.trim(),whatsNewContent:{intro:$("wna-intro").value.trim(),items:$("wna-items").value.split("\n").map(line=>{const i=line.indexOf("|");return i<0?{t:line.trim(),d:""}:{t:line.slice(0,i).trim(),d:line.slice(i+1).trim()}}).filter(it=>it.t||it.d)}};
  try{
   const saved=await post({action:"admin_update_settings",settings});
   if(!saved||!saved.ok)throw Object.assign(new Error(saved&&saved.error||"failed"),{payload:saved});
   if(saved.settings&&saved.settings.whatsNew)applyWhatsNewCfg(saved.settings.whatsNew);if(adminData)adminData.settings=saved.settings;
   toast("What's new saved.");renderAdminPanel("site");
  }catch(err){error.textContent=err&&err.payload&&err.payload.message||"Couldn't save What's new.";error.hidden=false;b.disabled=false;b.textContent="Save changes"}
 };
}
function paintAdminAccounts(box){
 box.innerHTML=`<div class="admin-search"><input id="admin-account-query" type="search" maxlength="20" placeholder="Search users" value="${escapeAttr(adminQuery)}" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true">${filterDropdown("accounts",ACCOUNT_FILTERS,adminAccountFilters)}<button type="button" class="pbtn" id="admin-create-account">Create account</button></div><div id="admin-account-results"></div>`;
 $("admin-account-query").oninput=e=>{adminQuery=e.target.value.trim();debAccounts()};
 $("admin-create-account").onclick=renderCreateAccount;
 bindAdminFilters(box);
 paintAccountList();
}
function isOtherAdminRow(a){if(accountSession&&accountSession.user&&accountSession.user.isBootstrap)return false;return a.role==="admin"&&(!accountSession||!accountSession.user||a.username!==accountSession.user.username)}
function paintAccountList(){
 const target=$("admin-account-results");if(!target||!adminData)return;
 closeAcctMenu();
 if(!adminFlagsData&&!adminFlagsLoading)loadAdminFlags().then(()=>{if(adminTab==="accounts")paintAccountList()}).catch(()=>{});
 const q=String(adminQuery||"").trim().toLowerCase(),all=adminData.accounts||[];
 const byFilter=all.filter(accountMatchesFilter),list=q?byFilter.filter(a=>String(a.username).toLowerCase().indexOf(q)!==-1):byFilter;
 if(!list.length){target.innerHTML='<p class="sm">No accounts match these filters.</p>';return}
 target.innerHTML=list.map(a=>`<article class="admin-account"><div class="admin-account-head"><span class="admin-account-id"><span class="admin-avatar" style="background:${escapeAttr(a.profileColor||"#3f6ce0")}" aria-hidden="true">${esc(String(a.username||"?").charAt(0).toUpperCase())}</span><strong>${esc(a.username)}</strong></span><div class="account-head-end"><span class="account-role">${esc(a.role)} · ${esc(a.status)}</span>${acctMoreHtml(a)}</div></div><dl class="acct-facts"><div><dt>Created</dt><dd>${adminDayText(a.createdAt)}</dd></div><div><dt>Last sign-in</dt><dd>${adminDayText(a.lastLoginAt)}</dd></div><div><dt>Chats</dt><dd>${Number(a.chatCount)||0}</dd></div></dl>${a.status==="disabled"?adminReasonHtml(a.disabledInfo||{text:a.disabledReason||""}):""}${a.status==="disabled"&&a.dataMode&&a.dataMode!=="keep"?`<div class="admin-account-meta">Chats: ${esc({download:"user can download them",download_delete:"user can download, then they are deleted",delete:"deleted"}[a.dataMode]||a.dataMode)}</div>`:""}${browserLineHtml(a)}${flagsLineHtml(a)}</article>`).join("")+(adminData.truncated?'<p class="sm">Showing the first 500 accounts. Narrow your search for more specific results.</p>':"");
 [...target.querySelectorAll("article.admin-account")].forEach((el,i)=>{if(list[i]&&accountsWorking.has(list[i].id)){el.classList.add("is-working");const end=el.querySelector(".account-head-end");if(end)end.insertAdjacentHTML("afterbegin",'<span class="sync-spinner row-spin" aria-label="Applying" role="status"></span>')}});
 target.querySelectorAll("[data-account-action]").forEach(button=>button.onclick=()=>runAdminAccountAction(button.dataset.accountAction,button.dataset.targetId));
 target.querySelectorAll("[data-flag-clear]").forEach(b=>b.onclick=()=>resolveFlag(b));
 target.querySelectorAll(".acct-more").forEach((b,i)=>b.onclick=e=>{e.stopPropagation();openAcctMenu(list[i],b)});
 [...target.querySelectorAll("article.admin-account")].forEach((el,i)=>{if(list[i]&&isOtherAdminRow(list[i]))el.insertAdjacentHTML("beforeend",'<p class="sm acct-lock">Only this admin can change this account.</p>')});
}
function acctMoreHtml(a){const other=isOtherAdminRow(a);return '<button type="button" class="acct-more" aria-haspopup="menu" aria-expanded="false" aria-label="Account options for '+escapeAttr(a.username)+'" title="'+(other?"Only this admin can change this account":"Account options")+'"'+(other?' disabled':'')+'>'+ic(DOTS,18)+'</button>'}
const ACCT_ICONS={disable_browser:'monitor-x',edit_browser_reason:'monitor',enable_browser:'monitor-check',flag:'flag',disable:'ban',enable:'circle-check',edit_reason:PEN,reset_password:'key-round',force_signout:'log-out',promote:'shield-plus',demote:'shield-minus',delete:TRASH};
function accountMenuHtml(a){
 const id=escapeAttr(a.id),item=(action,label,extra,cls)=>'<button type="button" role="menuitem" class="'+(cls||"")+'" data-account-action="'+action+'" data-target-id="'+id+'"'+(extra||"")+'>'+ic(ACCT_ICONS[action]||"",16)+'<span>'+esc(label)+'</span></button>';
 const self=!!(accountSession&&accountSession.user&&a.username===accountSession.user.username);
 const selfOff=' disabled title="Not available on your own admin account"';
 let h=item("flag","Flag account");
 h+=a.status==="active"?item("disable","Disable account",self?selfOff:""):item("enable","Enable account");
 if(a.status==="disabled")h+=item("edit_reason","Edit reason");
 h+=item("reset_password","Temp password",self?selfOff:"")+item("force_signout","Sign out all",self?selfOff:"");
 h+=a.role==="admin"?item("demote","Demote",(a.isBootstrap||self)?(self?selfOff:" disabled"):""):item("promote","Make admin");
 h+=item("delete","Delete",(a.isBootstrap||self)?(self?selfOff:" disabled"):"","danger");
 return h;
}
let acctMenuId=null;
function closeAcctMenu(){const m=$("acctmenu");if(acctMenuId===null&&(!m||m.hidden))return;acctMenuId=null;if(m)hideEl(m);document.querySelectorAll(".acct-more").forEach(b=>b.setAttribute("aria-expanded","false"))}
function openAcctMenu(a,btn){
 if(!a||!btn)return;
 let m=$("acctmenu");
 if(!m){m=document.createElement("div");m.id="acctmenu";m.className="cmenu";m.hidden=true;m.setAttribute("role","menu");document.body.appendChild(m);
  m.addEventListener("click",e=>{const b=e.target.closest("[data-account-action]");if(!b||b.disabled)return;closeAcctMenu();runAdminAccountAction(b.dataset.accountAction,b.dataset.targetId)})}
 if(acctMenuId===a.id){closeAcctMenu();return}
 closeMenu();
 m.innerHTML=accountMenuHtml(a);
 acctMenuId=a.id;
 showEl(m);
 const r=btn.getBoundingClientRect(),w=m.offsetWidth,hh=m.offsetHeight;
 m.style.left=Math.max(8,Math.min(r.right-w,innerWidth-w-8))+"px";
 m.style.top=(r.bottom+4+hh>innerHeight?Math.max(8,r.top-hh-4):r.bottom+4)+"px";
 btn.setAttribute("aria-expanded","true");
}
document.addEventListener("click",e=>{if(acctMenuId!==null&&!e.target.closest("#acctmenu,.acct-more"))closeAcctMenu()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&acctMenuId!==null){closeAcctMenu();e.stopPropagation()}},true);
window.addEventListener("scroll",()=>{if(acctMenuId!==null)closeAcctMenu()},{capture:true,passive:true});
window.addEventListener("resize",()=>{if(acctMenuId!==null)closeAcctMenu()});
let adminUsageView="summary",adminUsersUsage=null,adminUsersLoading=null,adminUsageQuery="";const debUsage=debounceFn(()=>fill(),350);
function syncAdminBack(){const bk=$("admin-back");if(!bk)return;const nested=adminTab==="usage"&&adminUsageView==="users";bk.hidden=nested;if(!nested){bk.textContent="Back to Settings";bk.onclick=renderSettings}}
function animateAdminContent(){const box=$("admin-content");if(!box)return;box.classList.remove("menu-content-enter");void box.offsetWidth;box.classList.add("menu-content-enter")}
function fmtTok(n){return (Number(n)||0).toLocaleString("en-US")}
function fmtTokShort(n){n=Number(n)||0;if(n>=1e6)return (n/1e6).toFixed(n>=1e7?0:1)+"M";if(n>=1e3)return (n/1e3).toFixed(n>=1e4?0:1)+"k";return String(n)}
function fmtHstWhen(ms){return new Date(ms).toLocaleString("en-US",{timeZone:"Pacific/Honolulu",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})+" HST"}
function tokenRow(label,i,o){const ii=Number(i)||0,oo=Number(o)||0;return '<div class="usage-tok-row"><span>'+label+'</span><span>'+fmtTokShort(ii)+'</span><span>'+fmtTokShort(oo)+'</span><span><strong>'+fmtTokShort(ii+oo)+'</strong></span></div>'}
function usageModelCard(name,today,week){return `<div class="usage-model"><h4>${name}</h4><div class="admin-stat-grid"><div class="admin-stat"><span>Requests today</span><strong>${Math.max(0,today.req)}</strong></div><div class="admin-stat"><span>Requests in 7 days</span><strong>${Math.max(0,week.req)}</strong></div></div><div class="usage-tok-grid">${tokenRow("Today",today.i,today.o)}${tokenRow("Last 7 days",week.i,week.o)}</div></div>`}
function paintAdminUsage(box){
 if(adminUsageView==="users"){paintAdminUsageUsers(box);return}
 const r=(adminData&&adminData.usage)||{},t=r.today||{},w=r.week||{},vt=t.vela||{},vw=w.vela||{},n=v=>Number(v)||0;
 box.innerHTML=`<div class="admin-stat-grid"><div class="admin-stat"><span>Requests today</span><strong>${Number(t.total)||0}</strong></div><div class="admin-stat"><span>Requests in 7 days</span><strong>${Number(w.total)||0}</strong></div><div class="admin-stat"><span>Accounts</span><strong>${Number(r.accountCount)||0}</strong></div><div class="admin-stat"><span>Failed sign-ins today</span><strong>${Number(t.failedSignins)||0}</strong></div><div class="admin-stat"><span>Guest requests today</span><strong>${Number(t.guests)||0}</strong></div><div class="admin-stat"><span>Account requests today</span><strong>${Number(t.accounts)||0}</strong></div></div>`
  +`<h3 class="usage-sub">Models</h3><div class="usage-models">${usageModelCard("Aries",{req:n(t.total)-n(vt.requests),i:n(t.inputTokens)-n(vt.inputTokens),o:n(t.outputTokens)-n(vt.outputTokens)},{req:n(w.total)-n(vw.requests),i:n(w.inputTokens)-n(vw.inputTokens),o:n(w.outputTokens)-n(vw.outputTokens)})}${usageModelCard("Vela",{req:n(vt.requests),i:n(vt.inputTokens),o:n(vt.outputTokens)},{req:n(vw.requests),i:n(vw.inputTokens),o:n(vw.outputTokens)})}</div>`
  +`<div class="data-toolbar"><button type="button" class="pbtn" id="usage-by-user">Per user usage</button></div>`;
 box.querySelector("#usage-by-user").onclick=()=>{adminUsersUsage=null;adminUsageView="users";paintAdminUsage(box);animateAdminContent()};
 syncAdminBack();
}
function paintAdminUsageUsers(box){
 box.innerHTML=`<div class="usage-users-head"><button type="button" class="pbtn usage-back" id="usage-users-back" aria-label="Back to usage summary">← <span>Usage overview</span></button><h3 class="usage-sub">Per-user usage</h3></div><div class="admin-search"><input id="usage-user-query" type="search" maxlength="20" placeholder="Search users" value="${escapeAttr(adminUsageQuery)}" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"></div><p class="sm" id="usage-users-msg">Loading…</p><div id="usage-users-list"></div>`;
 syncAdminBack();
 const usageBack=box.querySelector("#usage-users-back");if(usageBack)usageBack.onclick=()=>{adminUsageView="summary";paintAdminTab();animateAdminContent()};
 const input=box.querySelector("#usage-user-query");
 input.oninput=e=>{adminUsageQuery=e.target.value.trim().toLowerCase();debUsage()};
 const fill=()=>{
  if(!box.isConnected||adminUsageView!=="users"||!adminUsersUsage)return;
  const msg=box.querySelector("#usage-users-msg"),list=box.querySelector("#usage-users-list");
  if(msg)msg.hidden=true;
  const all=[...(adminUsersUsage.users||[])].sort((x,y)=>((Number(y.inputTokens)||0)+(Number(y.outputTokens)||0))-((Number(x.inputTokens)||0)+(Number(x.outputTokens)||0))||String(x.username).localeCompare(String(y.username)));
  const users=adminUsageQuery?all.filter(u=>String(u.username).toLowerCase().indexOf(adminUsageQuery)!==-1):all;
  if(!all.length){list.innerHTML='<p class="sm">No accounts yet.</p>';return}
  if(!users.length){list.innerHTML='<p class="sm">No usernames match.</p>';return}
  list.innerHTML=users.map(u=>{const total=(Number(u.inputTokens)||0)+(Number(u.outputTokens)||0);return '<div class="usage-user"><div class="usage-user-head"><strong>'+esc(u.username)+'</strong><small>'+(u.role==="admin"?"Admin":"User")+' · '+(u.lastUsedAt?"Last used "+fmtHstWhen(u.lastUsedAt):"Never used")+'</small></div><div class="usage-user-nums"><span><b>'+fmtTok(u.requests)+'</b> requests</span><span><b>'+fmtTok(u.inputTokens)+'</b> in</span><span><b>'+fmtTok(u.outputTokens)+'</b> out</span><span><b>'+fmtTok(total)+'</b> total</span></div></div>'}).join("")+(adminUsersUsage.truncated?'<p class="sm">Showing the first 500 accounts.</p>':"");
 };
 if(adminUsersUsage){fill();return}
 if(!adminUsersLoading)adminUsersLoading=post({action:"admin_usage_users"}).then(r=>{if(!r||!r.ok)throw Object.assign(new Error(r&&r.error||"failed"),{payload:r});adminUsersUsage=r;return r}).finally(()=>{adminUsersLoading=null});
 adminUsersLoading.then(fill,()=>{const msg=box.querySelector("#usage-users-msg");if(msg)msg.textContent="Couldn't load usage. Try again."});
}
let adminAuditFilters=new Set(),adminAccountFilters=new Set(),adminFilterOpen=null,filterSettled=false,filterClosing=false;
const ACCOUNT_FILTERS=[["admin","Admins"],["user","Users"],["active","Active"],["disabled","Disabled"],["flagged","Flagged"]];
function accountMatchesFilter(a){
 if(!adminAccountFilters.size)return true;
 if(adminAccountFilters.has("flagged")&&((adminFlagsData&&adminFlagsData.flags)||[]).some(f=>f.accountId===a.id))return true;
 return adminAccountFilters.has(a.role==="admin"?"admin":"user")||adminAccountFilters.has(a.status==="disabled"?"disabled":"active");
}
function filterDropdown(group,options,selected){
 const open=adminFilterOpen===group,n=selected.size;
 return `<div class="admin-filter-wrap${filterSettled?" settled":""}"><button type="button" class="admin-filter-btn${open?" active":""}" data-filter-toggle="${esc(group)}" aria-expanded="${open}" aria-label="Filter ${esc(group)}${n?", "+n+" selected":""}" title="Filter">${ic('list-filter',16,2)}${n?`<span class="admin-filter-count">${n}</span>`:""}</button>${open?`<div class="admin-filter-menu" role="group" aria-label="Filter ${esc(group)}">${options.map(o=>`<label class="check-row"><input type="checkbox" data-filter-group="${esc(group)}" value="${escapeAttr(o[0])}"${selected.has(o[0])?" checked":""}> ${esc(o[1])}</label>`).join("")}${n?`<button type="button" class="pbtn" data-filter-clear="${esc(group)}">Clear filters</button>`:""}</div>`:""}</div>`;
}
function closeFilterMenu(box){
 if(filterClosing)return;
 const menu=box.querySelector(".admin-filter-menu")||document.querySelector("body > .admin-filter-menu"),btn=box.querySelector("[data-filter-toggle]");
 if(!menu){adminFilterOpen=null;paintAdminTab();return}
 filterClosing=true;
 menu.classList.add("closing");
 if(btn){btn.classList.remove("active");btn.setAttribute("aria-expanded","false")}
 setTimeout(()=>{filterClosing=false;filterSettled=true;adminFilterOpen=null;paintAdminTab()},180);
}
function bindAdminFilters(box){
 box.querySelectorAll("[data-filter-toggle]").forEach(b=>b.onclick=()=>{const g=b.dataset.filterToggle;if(adminFilterOpen===g){closeFilterMenu(box);return}filterSettled=false;adminFilterOpen=g;paintAdminTab();requestAnimationFrame(fitFilterMenus)});
function placeFilterMenu(){document.querySelectorAll("body > .admin-filter-menu").forEach(m=>{const a=m._anchor;if(!a||!a.isConnected){m.remove();return}const b=a.getBoundingClientRect();const w=Math.min(240,innerWidth-16);m.style.width=w+"px";const h=m.offsetHeight;let left=b.left;if(left+w>innerWidth-8)left=Math.max(8,b.right-w);let top=b.bottom+6;if(top+h>innerHeight-8)top=Math.max(8,b.top-6-h);m.style.left=left+"px";m.style.top=top+"px"})}
function fitFilterMenus(){const m=document.querySelector(".mcard .admin-filter-menu");if(!m)return;const btn=m.parentElement&&m.parentElement.querySelector(".admin-filter-btn");if(!btn)return;m._anchor=btn;document.body.appendChild(m);m.classList.add("portal");placeFilterMenu()}
window.addEventListener("resize",placeFilterMenu);document.addEventListener("scroll",placeFilterMenu,true);
 box.querySelectorAll("[data-filter-group]").forEach(i=>i.onchange=()=>{const set=i.dataset.filterGroup==="audit"?adminAuditFilters:adminAccountFilters;if(i.checked)set.add(i.value);else set.delete(i.value);filterSettled=true;paintAdminTab()});
 box.querySelectorAll("[data-filter-clear]").forEach(b=>b.onclick=()=>{(b.dataset.filterClear==="audit"?adminAuditFilters:adminAccountFilters).clear();filterSettled=true;paintAdminTab()});
}
function paintAdminAudit(box){
 const items=adminData.audit||[];
 const actions=[...new Set(items.map(i=>i.action).filter(Boolean))].sort();
 [...adminAuditFilters].forEach(a=>{if(actions.indexOf(a)===-1)adminAuditFilters.delete(a)});
 const shown=adminAuditFilters.size?items.filter(i=>adminAuditFilters.has(i.action)):items;
 const options=actions.map(a=>[a,a.replace(/_/g," ")]);
 box.innerHTML=`<div class="data-toolbar audit-top"><button class="pbtn" type="button" id="audit-top-back">Back to Settings</button><button class="pbtn" type="button" id="audit-top-refresh">Refresh</button></div><p class="sm audit-note">${items.length===1?"1 event":items.length+" events"}, admin and account-security only.</p>${items.length?filterDropdown("audit",options,adminAuditFilters):""}${shown.length?shown.map(item=>`<article class="admin-audit-item"><strong>${esc(String(item.action||"").replace(/_/g," ").replace(/^./,c=>c.toUpperCase()))}</strong><span>${adminDate(item.timestamp)}</span><p>${esc(item.actor)} → ${esc(item.target||"—")}</p><small>${esc(item.detail||"")}</small></article>`).join(""):`<p class="sm">${items.length?"No entries for this filter.":"No audit entries yet."}</p>`}`;
 bindAdminFilters(box);
 box.querySelector("#audit-top-back").onclick=()=>$("admin-back").click();
 box.querySelector("#audit-top-refresh").onclick=()=>$("admin-refresh").click();
}
function renderCreateAccount(){
 currentSettingsView="admin-create";$("modal-title").textContent="Create account";
 mbody.innerHTML=`<p class="sm">Creates a WHWai account with a temporary password that is shown only once. The new account must choose its own password at first sign-in.</p><form id="create-account-form" class="account-form"><label for="create-account-username">Username</label><input id="create-account-username" type="text" minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]{3,20}" required autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"><label for="create-account-role">Role</label><select id="create-account-role"><option value="user">User</option><option value="admin">Admin</option></select><p class="access-error" id="create-account-error" role="status" aria-live="polite" hidden></p><div class="data-toolbar"><button type="button" class="pbtn" id="create-account-cancel">Cancel</button><button type="submit" class="pbtn" id="create-account-submit">Create account</button></div></form>`;
 $("create-account-cancel").onclick=()=>renderAdminPanel("accounts");
 $("create-account-form").onsubmit=async e=>{
  e.preventDefault();const b=$("create-account-submit");b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Creating…';
  try{
   const result=await post({action:"admin_account_action",accountAction:"create_account",username:$("create-account-username").value.trim().toLowerCase(),role:$("create-account-role").value});
   if(!result||!result.ok)throw Object.assign(new Error(result&&result.error||"failed"),{payload:result});
   await adminFetch(true).catch(()=>{});
   renderOneTimePassword(result.role==="admin"?"New admin account created":"New account created",result.username,result.temporaryPassword,result.expiresAt,"accounts");
  }catch(err){const msg=err&&err.payload&&err.payload.message||"Couldn't create the account.";const input=$("create-account-username");if(input)window.fieldError(input,msg,true);else{const error=$("create-account-error");if(error){error.textContent=msg;error.hidden=false}}b.disabled=false;b.textContent="Create account"}
 };
}
const DISABLE_PRESETS=[
{title:"Misuse of WHWai",subs:[
{sub:"Attempting to break the service",text:"Attempting to break, disrupt, or bypass WHWai's features, limits, or security is not permitted. This account was disabled for misusing WHWai."},
{sub:"Creating or spreading harmful material",text:"Using WHWai to create or spread malware, spam, or other harmful material is not permitted. This account was disabled for misusing WHWai."}]},
{title:"Account sharing",subs:[
{sub:"Using someone else's account",text:"Sharing this account, or using an account that belongs to someone else, is not permitted. This account was disabled because it was used by someone other than its owner."}]},
{title:"Suspicious sign-in activity",subs:[
{sub:"Repeated failed sign-ins",text:"Repeated failed sign-in attempts were detected on this account. It has been disabled until the activity is reviewed."},
{sub:"Sign-ins from unusual locations",text:"Sign-ins from unusual locations were detected on this account. It has been disabled until the activity is reviewed."}]},
{title:"Off-task use during school hours",subs:[
{sub:"Using WHWai during school hours",text:"This account was disabled for using WHWai during school hours."}]},
{title:"Harassment or harmful content",subs:[
{sub:"Targeting people",text:"Harassing or threatening others through WHWai is not permitted. This account was disabled for targeting another person."},
{sub:"Sharing harmful content",text:"Sharing harmful, hateful, or explicit content through WHWai is not permitted. This account was disabled for sharing content that breaks these rules."}]},
{title:"Accessing other accounts",subs:[
{sub:"Trying to view or sign in to other accounts",text:"Attempting to access, view, or sign in to another person's account is not permitted. This account was disabled for attempting to access other accounts."}]},
{title:"Automated or excessive use",subs:[
{sub:"Bots or scripts",text:"Using bots, scripts, or other automated tools with WHWai is not permitted. This account was disabled for automated use."},
{sub:"Excessive use",text:"Overloading WHWai with excessive requests is not permitted. This account was disabled because its use exceeded what the service allows."}]},
{title:"Terms violation",subs:[
{sub:"General violation",text:"Violating WHWai's Terms of Use is not permitted. This account was disabled for breaking those terms."}]},
{title:"Security check",subs:[
{sub:"Required before use",text:"This account needs a security check before it can be used again. It has been disabled until the check is complete."}]}
];
const DISABLE_DATA_RADIOS={label:"What should happen to their chats?",items:[{value:"keep",label:"Keep chats",hint:"No download is offered. Chats remain on the account.",checked:true},{value:"download",label:"Allow a chat download",hint:"They can download chats from the disabled screen. Chats remain on the account."},{value:"download_delete",label:"Download, then delete chats",hint:"Chats are deleted after they download them."},{value:"delete",label:"Delete chats now",hint:"Chats are deleted immediately and can’t be restored."}]};
function reasonRadioHtml(v,label,sel){return '<label class="radio-row reason-option"><input type="radio" name="dis-preset" value="'+escapeAttr(v)+'"'+(sel===v?" checked":"")+'><span>'+esc(label)+'</span></label>'}
function disableFormHtml(cur){
 let sel="custom";const c=cur||{};
 DISABLE_PRESETS.forEach((p,i)=>p.subs.forEach((s,j)=>{if(c.title===p.title&&c.sub===s.sub&&c.text===s.text)sel=i+"-"+j}));
 const groups=DISABLE_PRESETS.map((p,i)=>'<div class="reason-group"><p class="reason-group-title">'+esc(p.title)+'</p>'+p.subs.map((s,j)=>reasonRadioHtml(i+"-"+j,s.sub,sel)).join("")+"</div>").join("");
 const custom=sel==="custom"?String(c.text||""):"";
 const re=c.reenableAt?new Date(Number(c.reenableAt)+36e5*10).toISOString().slice(0,16):"";
 return '<div class="disable-form"><button type="button" class="reason-row-btn" id="dis-reason-open" aria-haspopup="true"><span class="reason-row-label">Reason</span><span class="reason-row-value" id="dis-reason-now"></span>'+ic('chevron-right',16)+'</button><div class="reason-view" id="dis-reason-view" hidden><fieldset class="reason-set" id="dis-reasons">'+groups+'<div class="reason-group">'+reasonRadioHtml("custom","Custom reason",sel)+'</div></fieldset><div class="data-toolbar"><button type="button" class="pbtn" id="dis-reason-back">Back to disable form</button></div></div><p class="sm dis-preview" id="dis-preview"></p><textarea id="dis-custom" class="reason-input" rows="3" maxlength="200" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true" hidden>'+esc(custom)+'</textarea><div class="reenable-card"><label class="switch-row reenable-row"><span><strong>Re-enable automatically</strong><small>Turn on to choose a date and time in HST. Off keeps the '+(disableSubject==="browser"?"browser":"account")+' disabled until you enable it.</small></span><input type="checkbox" id="dis-reenable-on"'+(re?" checked":"")+'><span class="switch-ui"></span></label><div class="reenable-when" id="dis-reenable-wrap"'+(re?"":" hidden")+'><label class="sm reason-label" for="dis-reenable-m">Re-enable at (HST)</label><input type="hidden" id="dis-reenable" value="'+escapeAttr(re)+'"><div id="dis-picker"></div></div></div></div>';
}
function wireDisableForm(){
 mbody.classList.remove("reason-picking");
 const prev=$("dis-preview"),custom=$("dis-custom");
 const radios=[...document.querySelectorAll('input[name="dis-preset"]')];
 const form=document.querySelector(".disable-form"),view=$("dis-reason-view"),openBtn=$("dis-reason-open"),backBtn=$("dis-reason-back"),now=$("dis-reason-now");
 let titleBefore="";
 const update=()=>{const r=document.querySelector('input[name="dis-preset"]:checked');const v=r?r.value:"custom";const isCustom=v==="custom";custom.hidden=!isCustom;if(isCustom){now.textContent="Custom reason";prev.textContent=""}else{const [i,j]=v.split("-").map(Number);now.textContent=DISABLE_PRESETS[i].title+" · "+DISABLE_PRESETS[i].subs[j].sub;prev.textContent="The user sees: "+subjectText(DISABLE_PRESETS[i].subs[j].text)}};
 const showPicker=()=>{const t=$("modal-title");titleBefore=t?t.textContent:"";if(t)t.textContent="Choose a reason";form.classList.add("picking");view.hidden=false;mbody.classList.add("reason-picking");openBtn.setAttribute("aria-expanded","true");for(let el=view;el;el=el.parentElement){if(el.scrollTop)el.scrollTop=0}const c=document.querySelector('input[name="dis-preset"]:checked');setTimeout(()=>{try{(c||backBtn).focus({preventScroll:true})}catch(e){}for(let el=view;el;el=el.parentElement){if(el.scrollTop)el.scrollTop=0}},0)};
 const hidePicker=()=>{if(view.hidden)return;view.hidden=true;form.classList.remove("picking");mbody.classList.remove("reason-picking");openBtn.setAttribute("aria-expanded","false");const t=$("modal-title");if(t&&titleBefore)t.textContent=titleBefore;try{openBtn.focus()}catch(e){}};
 openBtn.onclick=showPicker;backBtn.onclick=hidePicker;
 view.addEventListener("keydown",e=>{if(e.key==="Escape"){e.stopPropagation();e.preventDefault();hidePicker()}});
 radios.forEach(r=>{r.onchange=()=>{update();hidePicker()}});update();
 const on=$("dis-reenable-on"),wrap=$("dis-reenable-wrap"),when=$("dis-reenable");
 on.onchange=()=>{wrap.hidden=!on.checked;if(!on.checked)when.value="";const host=$("dis-picker");if(host&&host._refresh)host._refresh()};
 const pickerHost=$("dis-picker");if(pickerHost)mountHstPicker(when,pickerHost);
}
function attachCharCounters(){
 document.querySelectorAll("textarea[maxlength]").forEach(t=>{
  if(t.id==="in"||(t.parentElement&&t.parentElement.classList.contains("char-wrap")))return;
  const w=document.createElement("span");w.className="char-wrap";t.parentNode.insertBefore(w,t);w.appendChild(t);
  const c=document.createElement("span");c.className="char-count";c.setAttribute("aria-hidden","true");w.appendChild(c);
  const upd=()=>{const n=t.value.length,m=Number(t.getAttribute("maxlength"))||0;c.textContent=n+"/"+m;c.classList.toggle("near",m>0&&n>=m*0.9&&n<m);c.classList.toggle("full",m>0&&n>=m)};
  t.addEventListener("input",upd);upd();
 });
}
new MutationObserver(()=>attachCharCounters()).observe(document.body,{childList:true,subtree:true});
attachCharCounters();
function readDisableForm(){
 const r=document.querySelector('input[name="dis-preset"]:checked');const v=r?r.value:"custom";let title="",sub="",text="";
 if(v==="custom"){text=$("dis-custom").value.trim()}else{const [i,j]=v.split("-").map(Number),p=DISABLE_PRESETS[i],s=p.subs[j];title=p.title;sub=s.sub;text=subjectText(s.text)}
 return {reasonTitle:title,reasonSub:sub,reasonText:text,reenableAt:($("dis-reenable-on").checked&&$("dis-reenable").value)||""};
}
function adminReasonHtml(i){
 const info=i||{};let h='<div class="admin-account-meta">Reason: '+esc(info.title||"Custom reason")+(info.sub?' · '+esc(info.sub):"")+'</div>';
 if(info.text)h+='<div class="admin-account-meta">'+esc(info.text)+'</div>';
 if(info.reenableAt)h+='<div class="admin-account-meta">Re-enables '+esc(hstText(info.reenableAt))+'</div>';
 return h;
}
async function runDisableAction(action,targetId){
 const edit=action==="edit_reason";
 const row=(adminData&&adminData.accounts||[]).find(a=>a.id===targetId),cur=row&&row.disabledInfo?row.disabledInfo:null;
 const accepted=await appConfirm({title:edit?"Edit the disable reason?":"Disable account?",message:edit?"The account stays disabled. The updated reason appears on their sign-in screen.":"They won’t be able to use WHWai. The reason and any return date you set will appear on their sign-in screen.",confirmLabel:edit?"Save reason":"Disable",danger:!edit,extraHtml:(!edit&&row&&row.role==="admin"?adminDisableNoteHtml(row):"")+disableFormHtml(cur)+(edit?"":'<div class="reenable-card browsers-card"><label class="switch-row reenable-row"><span><strong>Disable browsers</strong><small>Blocks every browser this account is signed into. Those browsers unblock at the re-enable time, if you set one.</small></span><input type="checkbox" id="dis-browsers"><span class="switch-ui"></span></label></div>'),onRender:wireDisableForm,radios:edit?null:DISABLE_DATA_RADIOS});
 if(!accepted){if(!modal.hidden&&!closingModal)renderAdminPanel("accounts");return}
 if(modal.hidden||currentSettingsView!=="app-confirm")return;
 const picked=document.querySelector('input[name="app-confirm-radio"]:checked');const dataMode=picked?picked.value:"keep";
 const form=readDisableForm();
 const alsoBrowsers=!!(document.getElementById("dis-browsers")&&document.getElementById("dis-browsers").checked);
 backToAdminAccounts();
 const payload=edit?Object.assign({action:"admin_account_action",accountAction:"update_disabled_reason",targetId:targetId},form):Object.assign({action:"admin_account_action",accountAction:"disable",targetId:targetId,dataMode:dataMode,disableBrowsers:alsoBrowsers},form);
 await runAccountOp(targetId,edit?null:{status:"disabled"},()=>post(payload),edit?"Reason updated.":"Account updated.");
}
async function runAdminAccountAction(action,targetId){
 if(action==="disable"||action==="edit_reason")return runDisableAction(action,targetId);
 if(action==="disable_browser"||action==="edit_browser_reason")return runBrowserAction(action,targetId);
 if(action==="flag")return runFlagAccount(targetId);
 const choices={enable_browser:{title:"Enable browser?",message:"This browser will be able to use WHWai again.",label:"Enable",danger:false},enable:{title:"Enable account?",message:"This account will be allowed to sign in again.",label:"Enable",danger:false},reset_password:{title:"Issue temporary password?",message:"A new one-time password will replace the current password and sign out this account everywhere. It expires after 72 hours.",label:"Issue password"},force_signout:{title:"Sign out everywhere?",message:"All active sessions for this account will be revoked.",label:"Sign out all"},promote:{title:"Make administrator?",message:"This account will gain access to administrative controls.",label:"Make admin"},demote:{title:"Remove administrator role?",message:"This account will lose access to administrative controls.",label:"Demote"},delete:{title:"Delete account permanently?",message:"The account and its active server-stored chats will be deleted. This cannot be undone from WHWai.",label:"Delete account"}};
 const choice=choices[action];if(!choice)return;
 const accepted=await appConfirm({title:choice.title,message:choice.message,confirmLabel:choice.label,danger:choice.danger!==false,input:choice.input,radios:choice.radios});
 const reason=(choice.input&&$("app-confirm-input"))?$("app-confirm-input").value.trim():"";
 const picked=choice.radios?document.querySelector('input[name="app-confirm-radio"]:checked'):null,dataMode=picked?picked.value:"keep";
 if(!accepted){if(!modal.hidden&&!closingModal)renderAdminPanel("accounts");return}
 if(modal.hidden||currentSettingsView!=="app-confirm")return;
 backToAdminAccounts();
 const change={enable:{status:"active"},disable:{status:"disabled"},promote:{role:"admin"},demote:{role:"user"}}[action]||null;
 const result=await runAccountOp(targetId,change,()=>post({action:"admin_account_action",accountAction:action,targetId:targetId,reason:reason,dataMode:dataMode}),"Account updated.");
 if(result&&result.temporaryPassword)renderOneTimePassword("Temporary password",result.username,result.temporaryPassword,result.expiresAt,"accounts");
}
async function appConfirm(options){
 options=options||{};lastConfirmCheckbox=false;
 const title=String(options.title||"Confirm action"),message=String(options.message??"Are you sure you want to continue?"),confirmLabel=String(options.confirmLabel||"Continue"),standalone=options.standalone===true&&modal.hidden,dialogGeneration=standalone?++confirmOverlayGeneration:0;
 if(pendingAppConfirmation)resolvePendingConfirmation(false);
 return await new Promise(resolve=>{
  let settled=false;
  const settle=value=>{
   if(settled)return;settled=true;if(pendingAppConfirmation===settle)pendingAppConfirmation=null;
   if(standalone){const overlay=$("confirm-overlay");overlay.classList.remove("open");overlay.classList.add("closing");setTimeout(()=>{if(dialogGeneration===confirmOverlayGeneration){overlay.hidden=true;overlay.classList.remove("closing");overlay.innerHTML="";overlay.onclick=null}resolve(value)},170)}else resolve(value);
  };
  pendingAppConfirmation=settle;
  const icon=ic(options.danger===false?'star':'triangle-alert',19,1.8);
  const inputHtml=options.input?`<label class="sm reason-label" for="app-confirm-input">${esc(options.input.label)}</label><textarea id="app-confirm-input" class="reason-input" rows="3" maxlength="300" autocomplete="off" data-lpignore="true" data-1p-ignore data-bwignore="true"></textarea>`:"";
  const radiosHtml=options.radios?`<fieldset class="confirm-radios"><legend class="sm reason-label">${esc(options.radios.label)}</legend>${options.radios.items.map(it=>`<label class="radio-row"><input type="radio" name="app-confirm-radio" value="${escapeAttr(it.value)}"${it.checked?" checked":""}><span><strong>${esc(it.label)}</strong><small>${esc(it.hint||"")}</small></span></label>`).join("")}</fieldset>`:"";
  const checkHtml=options.checkbox?`<label class="check-row confirm-skip"><input type="checkbox" id="app-confirm-skip"> ${esc(options.checkbox.label)}</label>`:"";
  const headHtml=standalone?`<strong>${esc(title)}</strong>`:"";
  const panel=`<div class="confirm-panel"><span class="choice-icon">${icon}</span><div>${headHtml}<p>${esc(message)}</p></div></div>${options.extraHtml||""}${inputHtml}${radiosHtml}${checkHtml}<div class="data-toolbar confirm-foot"><button type="button" class="pbtn" id="app-confirm-cancel">Cancel</button><button type="button" class="pbtn ${options.danger===false?"":"danger"}" id="app-confirm-accept">${esc(confirmLabel)}</button></div>`;
  if(standalone){
   const overlay=$("confirm-overlay");overlay.innerHTML=`<div class="app-confirm-card">${panel}</div>`;overlay.hidden=false;overlay.classList.remove("closing","open");overlay.setAttribute("aria-label",title);
   overlay.onclick=e=>{if(e.target===overlay)settle(false)};
   const card=overlay.querySelector(".app-confirm-card");card.onclick=e=>e.stopPropagation();
   requestAnimationFrame(()=>{if(dialogGeneration===confirmOverlayGeneration)overlay.classList.add("open")});
  }else{
   currentSettingsView="app-confirm";$("modal-title").textContent=title;mbody.innerHTML=panel;animateMenuContent();
  }
  if(typeof options.onRender==="function")options.onRender();
  $("app-confirm-cancel").onclick=()=>settle(false);$("app-confirm-accept").onclick=()=>{lastConfirmCheckbox=!!($("app-confirm-skip")&&$("app-confirm-skip").checked);settle(true)};$("app-confirm-cancel").focus();
 });
}
let pendingAppConfirmation=null,confirmOverlayGeneration=0;
function resolvePendingConfirmation(value){if(!pendingAppConfirmation)return false;pendingAppConfirmation(value);return true}
function renderOneTimePassword(title,username,password,expiresAt,returnTab){
 currentSettingsView="one-time-password";$("modal-title").textContent=title;
 mbody.innerHTML=`<p><strong>${esc(username||"")}</strong></p><p class="sm">Copy this password now. WHWai will not display it again after you leave this screen. The password expires ${adminDate(expiresAt)} and must be changed at first sign-in.</p><div class="key"><span class="key-value" id="one-time-password-value">${escapeAttr(password||"")}</span><button type="button" id="one-time-password-copy" class="pbtn">Copy</button></div><p class="sm" id="one-time-password-status" role="status"></p><div class="data-toolbar"><button type="button" class="pbtn" id="one-time-password-done">I have saved it</button></div>`;
 $("one-time-password-copy").onclick=async()=>{const ok=await copyText_(password);if(ok){$("one-time-password-status").textContent="Copied to clipboard.";return}const el=$("one-time-password-value"),range=document.createRange();range.selectNodeContents(el);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);$("one-time-password-status").textContent="Couldn't copy automatically. Select the password above and copy it manually."};
 $("one-time-password-done").onclick=()=>renderAdminPanel(returnTab||"accounts");
}

/* Plays the entrance animation for the current Settings or admin screen */
function animateMenuContent(){mbody.classList.remove("menu-content-enter");void mbody.offsetWidth;mbody.classList.add("menu-content-enter");resetScroll()}
// Every opened overlay starts at the top, not the bottom of the previous view.
function resetScroll(){[modal,accessGate,$("wn")].forEach(root=>{if(!root)return;root.scrollTop=0;root.querySelectorAll("*").forEach(el=>{if(el.scrollTop>0)el.scrollTop=0})})}
new MutationObserver(()=>animateMenuContent()).observe(mbody,{childList:true});
function wrapViewTransition(fn){return function(){const result=fn.apply(this,arguments);if(!modal.hidden){animateMenuContent();if(isDeskSettings()&&mbodyOuter.querySelector(":scope > .set-wrap.desk"))$("modal-title").textContent="Settings"}return result}}
renderSettings=wrapViewTransition(renderSettings);
renderAccountAuth=wrapViewTransition(renderAccountAuth);
renderAccount=wrapViewTransition(renderAccount);
renderPasswordChange=wrapViewTransition(renderPasswordChange);
renderDeleteAccountConfirm=wrapViewTransition(renderDeleteAccountConfirm);
renderAdminPanel=wrapViewTransition(renderAdminPanel);
renderAnnouncementAdmin=wrapViewTransition(renderAnnouncementAdmin);
renderWhatsNewAdmin=wrapViewTransition(renderWhatsNewAdmin);
renderCreateAccount=wrapViewTransition(renderCreateAccount);
renderOneTimePassword=wrapViewTransition(renderOneTimePassword);
renderDataManagement=wrapViewTransition(renderDataManagement);
renderExportInfo=wrapViewTransition(renderExportInfo);
renderPrivacyPolicy=wrapViewTransition(renderPrivacyPolicy);renderTerms=wrapViewTransition(renderTerms);
renderLocalDeleteConfirm=wrapViewTransition(renderLocalDeleteConfirm);
function finishModalClose(){if(!closingModal)return;mbody=mbodyOuter;if(closeModalTimer!==null){clearTimeout(closeModalTimer);closeModalTimer=null}modal.hidden=true;modal.classList.remove("closing");closingModal=false}
function closeSettings(){if(currentSettingsView==="password-required"&&accountSession&&accountSession.user&&accountSession.user.mustChange){toast("Set a new password to continue.");return}resolvePendingConfirmation(false);if(exportCooldownTicker!==null){clearInterval(exportCooldownTicker);exportCooldownTicker=null}if(modal.hidden||closingModal)return;closingModal=true;modal.classList.add("closing");closeModalTimer=setTimeout(finishModalClose,230)}
// Desktop always opens the redesigned settings shell. A sub-view (sign in, admin) is drawn inside that shell, never in the old layout.
// deskSection names the sidebar item to highlight for that sub-view.
function openSettings(initialRenderer,deskSection){
 if(closeModalTimer!==null){clearTimeout(closeModalTimer);closeModalTimer=null}
 closingModal=false;modal.classList.remove("closing");modal.hidden=false;smsg="";
 if(typeof initialRenderer==="function"&&isDeskSettings()){renderDeskSettings("account");deskMark(deskSection||"account");initialRenderer();return}
 mbody=mbodyOuter;
 if(typeof initialRenderer==="function")initialRenderer();else renderSettings();
}
function gateAdminMode(open){
 const form=$("access-admin-form"),link=$("access-admin-open");form.hidden=!open;link.hidden=!!open;accessForm.hidden=!!open||aiDisabled;accessError.hidden=true;$("access-admin-error").hidden=true;
 if(open){$("access-admin-user").focus()}else if(!aiDisabled)accessInput.focus();
}
$("access-admin-open").onclick=()=>gateAdminMode(true);$("access-admin-back").onclick=()=>gateAdminMode(false);
$("access-admin-form").onsubmit=async e=>{
 e.preventDefault();const username=$("access-admin-user").value.trim().toLowerCase(),password=$("access-admin-password").value,b=$("access-admin-submit"),error=$("access-admin-error");if(!username||!password)return;
 b.disabled=true;b.innerHTML='<span class="sync-spinner" aria-hidden="true"></span>Signing in…';error.hidden=true;
 try{const result=await post({action:"auth_admin_login",username,password});if(!result||!result.ok||!result.token)throw Object.assign(new Error(result&&result.error||"invalid_admin_credentials"),{payload:result});setAccountFromResult(result);if(result.selfDisabled){selfDisabledInfo={account:result.selfDisabled,browser:result.selfBrowser||null,userId:result.selfId||""};leaveDisabledGate()}$("access-admin-password").value="";hideEl(accessGate);openApp(true);if(result.user&&result.user.mustChange){openSettings();renderRequiredPasswordChange()}else{openSettings(()=>renderAdminPanel("site"),"admin:site")}}
 catch(err){error.hidden=true;window.fieldError($("access-admin-password"),err&&err.payload&&err.payload.message||"Invalid admin username or password.",true)}
 finally{b.disabled=false;b.textContent="Sign in"}
};
$("gear").onclick=openSettings;$("mx").onclick=closeSettings;modal.onclick=e=>{if(e.target===modal)closeSettings()};
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&accountSession&&accountSession.token&&!busy)scheduleAccountSync()});
window.addEventListener("online",()=>{renderSyncStatus();if(accountSession&&accountSession.token)scheduleAccountSync()});window.addEventListener("offline",renderSyncStatus);
setInterval(()=>document.querySelectorAll(".bar span[data-t],.cm").forEach(el=>el.textContent=ago(+el.dataset.t)),1000);
renderList();renderChat();renderSiteNotice();
if(accountSession&&accountSession.token){accountReady=false;if(gatesPassed())resumeAccountSession();else pendingAccountResume=true}
const fr=document.querySelector(".frame");fr.classList.add("no-anim");fr.classList.toggle("collapsed",!!S.col);requestAnimationFrame(()=>requestAnimationFrame(()=>fr.classList.remove("no-anim")));


/* School-hours notice: Mon-Fri 8:00 a.m.-2:40 p.m. Hawaii time, skipping Hawaii holidays */
function hstParts(d){const o={};new Intl.DateTimeFormat("en-US",{timeZone:"Pacific/Honolulu",year:"numeric",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(d).forEach(p=>o[p.type]=p.value);return{y:+o.year,m:+o.month,d:+o.day,wd:o.weekday,mins:(+o.hour%24)*60+(+o.minute)}}
function nthWeekday(y,m,wd,n){const first=new Date(Date.UTC(y,m-1,1)).getUTCDay();return Date.UTC(y,m-1,1+((wd-first+7)%7)+7*(n-1))}
function lastWeekday(y,m,wd){const last=new Date(Date.UTC(y,m,0));return Date.UTC(y,m-1,last.getUTCDate()-((last.getUTCDay()-wd+7)%7))}
function observedDate(y,m,d){const w=new Date(Date.UTC(y,m-1,d)).getUTCDay();return Date.UTC(y,m-1,d+(w===6?-1:w===0?1:0))}
function hawaiiHolidays(y){return new Set([observedDate(y,1,1),nthWeekday(y,1,1,3),nthWeekday(y,2,1,3),observedDate(y,3,26),lastWeekday(y,5,1),observedDate(y,6,11),observedDate(y,6,19),observedDate(y,7,4),nthWeekday(y,8,5,3),nthWeekday(y,9,1,1),nthWeekday(y,10,1,2),observedDate(y,11,11),nthWeekday(y,11,4,4),observedDate(y,12,25)])}
const SCHOOL_NOTICE_ALWAYS=false; /* set to true to show the school notice at all times */
function inSchoolWindow(now){if(SCHOOL_NOTICE_ALWAYS)return true;const p=hstParts(now||new Date());const wd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.wd);if(wd<1||wd>5)return false;const start=465;const end=wd===3?840:915;if(p.mins<start||p.mins>=end)return false;const key=Date.UTC(p.y,p.m-1,p.d);return !(hawaiiHolidays(p.y).has(key)||hawaiiHolidays(p.y+1).has(key))}
function schoolLockWindow(now){const p=hstParts(now||new Date());const wd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.wd);if(wd<1||wd>5)return false;const end=wd===3?840:880;if(p.mins<480||p.mins>=end)return false;const key=Date.UTC(p.y,p.m-1,p.d);return !(hawaiiHolidays(p.y).has(key)||hawaiiHolidays(p.y+1).has(key))}
function schoolLockActive(){if(siteSchoolOverride)return false;if(accountSession&&accountSession.token)return false;return schoolLockWindow(new Date())}
function updateSchoolLock(){const el=$("school-lock");if(!el)return;const gate=$("access-gate");const gateUp=!!gate&&!gate.hidden&&!gate.classList.contains("leaving");if(schoolStatusReady&&!gateUp&&schoolLockActive()){if(el.hidden)showEl(el)}else hideEl(el)}
function preSchoolWindow(now){const p=hstParts(now||new Date());const wd=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(p.wd);if(wd<1||wd>5)return false;if(p.mins<420||p.mins>=480)return false;const key=Date.UTC(p.y,p.m-1,p.d);return !(hawaiiHolidays(p.y).has(key)||hawaiiHolidays(p.y+1).has(key))}
let preDismissed=false;
function updateSchoolNotice(){const pre=$("pre-school-reminder");if(pre){const on=preSchoolWindow(new Date())&&!preDismissed;if(on){if(pre.hidden)showEl(pre)}else hideEl(pre,260)}const inWin=inSchoolWindow();const el=$("school-notice");if(el){if(inWin){if(el.hidden)showEl(el)}else hideEl(el,260)}const g=$("gate-school");if(g)g.hidden=!inWin;updateSchoolLock()}
updateSchoolNotice();setInterval(updateSchoolNotice,10000);
// Fade for show and hide: elements that start out hidden, or are added hidden, get the .fx class.
// Skips elements that already animate their own open and close (modals, toasts, menus, the jump button).
const FX_SKIP='#modal,.modal,.mcard,.toast-slot,.app-confirm-overlay,.cmenu,.pop,.info-pop,.jump-bottom';
function tagFx(root){
 if(!root||root.nodeType!==1)return;
 const hits=[root,...root.querySelectorAll("[hidden]")];
 hits.forEach(el=>{if(el.hasAttribute("hidden")&&!el.closest(FX_SKIP))el.classList.add("fx")});
}
tagFx(document.body);
new MutationObserver(recs=>{for(const r of recs){
 if(r.type==="attributes"){if(!r.target.closest(FX_SKIP))r.target.classList.add("fx")}
 else r.addedNodes.forEach(n=>tagFx(n));
}}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:["hidden"]});
