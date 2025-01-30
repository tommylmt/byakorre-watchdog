# IKEA's Byakorre Watchdog

A Watchdog app for the availability of Byakorre in Ikea France. 

## Disclaimer

This app is not affiliated to IKEA. 
Yes, the code is hideous but it works the way it's supposed to. 

## How do I make it work

## Prerequisites 

* Having a Telegram bot 
* Knowing your Ikea store code

### Define env 

```bash
$ cp .env.example .env
```

### Build and start

```bash
$ docker compose build
$ docker compose up -d
```

### Run

```bash
docker compose node exec npm run cron
```

## Store codes

| City / Store name | Country code | Code |
| ----------------- | ------------ | ----- |
| Augsburg | de | 066 |
| Berlin-Lichtenberg | de | 324 |
| Berlin-Spandau | de | 394 |
| Berlin-Tempelhof | de | 421 |
| Berlin-Waltersdorf | de | 129 |
| Bielefeld | de | 119 |
| Braunschweig | de | 117 |
| Bremerhaven | de | 412 |
| Brinkum | de | 228 |
| Chemnitz | de | 118 |
| Dortmund | de | 223 |
| Dresden | de | 221 |
| Duisburg | de | 425 |
| Düsseldorf | de | 321 |
| Erfurt | de | 396 |
| Essen | de | 148 |
| Frankfurt | de | 393 |
| Freiburg | de | 320 |
| Halle/Leipzig | de | 139 |
| Hamburg-Altona | de | 245 |
| Hamburg-Moorfleet | de | 325 |
| Hamburg-Schnelsen | de | 146 |
| Hanau | de | 222 |
| Hannover EXPO-Park | de | 187 |
| Hannover-Großburgwedel | de | 226 |
| Kaarst | de | 494 |
| Kaiserslautern | de | 430 |
| Kamen | de | 323 |
| Karlsruhe | de | 551 |
| Kassel | de | 174 |
| Kiel | de | 333 |
| Koblenz | de | 332 |
| Köln-Am Butzweilerhof | de | 102 |
| Köln-Godorf | de | 147 |
| Lübeck | de | 289 |
| Ludwigsburg | de | 225 |
| Magdeburg | de | 520 |
| Mannheim | de | 397 |
| München-Brunnthal | de | 343 |
| München-Eching | de | 063 |
| Nürnberg/Fürth | de | 326 |
| Oldenburg | de | 069 |
| Osnabrück | de | 184 |
| Potsdam | de | 617 |
| Regensburg | de | 229 |
| Rostock | de | 092 |
| Saarlouis | de | 227 |
| Siegen | de | 369 |
| Sindelfingen | de | 224 |
| Ulm | de | 328 |
| Wallau | de | 322 |
| Walldorf | de | 075 |
| Wetzlar | de | 493 |
| Wuppertal | de | 492 |
| Würzburg | de | 124 |
| Graz | at | 387 |
| Innsbruck | at | 273 |
| Klagenfurt | at | 155 |
| Linz Haid | at | 388 |
| Salzburg | at | 386 |
| Vösendorf | at | 085 |
| Wien Nord | at | 090 |
| Wien Westbahnhof | at | 587 |
| Aubonne | ch | 078 |
| Dietlikon | ch | 291 |
| Grancia | ch | 101 |
| Lyssach | ch | 290 |
| Pratteln | ch | 292 |
| Riddes | ch | 688 |
| Rothenburg | ch | 275 |
| Spreitenbach | ch | 079 |
| St. Gallen | ch | 917 |
| Vernier | ch | 918 |
| Valladolid | es | 030 |
| Asturias | es | 428 |
| Ensanche de Vallecas | es | 498 |
| Hospitalet (Gran Vía) | es | 406 |
| Murcia | es | 449 |
| San Sebastián de los Reyes | es | 282 |
| Valencia (Alfafar) | es | 339 |
| A Coruña | es | 502 |
| Alcorcón | es | 031 |
| Barakaldo | es | 276 |
| Gran Vía LHospitalet | es | 406 |
| Badalona | es | 280 |
| Jerez | es | 277 |
| Málaga | es | 304 |
| Sabadell | es | 171 |
| Sevilla | es | 283 |
| Zaragoza | es | 497 |
| Avignon | fr | 018 |
| Bayonne | fr | 310 |
| Bordeaux | fr | 134 |
| Brest | fr | 060 |
| Caen | fr | 199 |
| Clermont-Ferrand | fr | 345 |
| Dijon | fr | 086 |
| Evry | fr | 082 |
| Franconville | fr | 389 |
| Grenoble | fr | 435 |
| Hénin-Beaumont | fr | 051 |
| Italie Deux | fr | 719 |
| La Valentine | fr | 433 |
| Lille | fr | 133 |
| Lyon - Grand Parilly | fr | 562 |
| Metz | fr | 260 |
| Montpellier | fr | 402 |
| Mulhouse | fr | 444 |
| Nantes | fr | 316 |
| Nice St. Isidore | fr | 518 |
| Orléans | fr | 487 |
| Paris Nord | fr | 131 |
| Plaisir | fr | 083 |
| Reims | fr | 198 |
| Rennes | fr | 177 |
| Rivoli | fr | 645 |
| Rouen | fr | 163 |
| Saint-Étienne | fr | 431 |
| Strasbourg | fr | 239 |
| Thiais | fr | 432 |
| Toulon - La Valette-du-Var | fr | 315 |
| Toulouse | fr | 242 |
| Tours | fr | 434 |
| Velizy | fr | 285 |
| Villiers | fr | 240 |
| Vitrolles | fr | 130 |
| Espoo | fi | 202 |
| Kuopio | fi | 208 |
| Raisio | fi | 301 |
| Tampere | fi | 008 |
| Vantaa | fi | 422 |
| Causeway Bay | hk | 062 |
| Kowloon Bay | hk | 071 |
| Shatin | hk | 052 |
| Tsuen Wan | hk | 532 |
| Zagreb | hr | 021 |
| Ancona | it | 457 |
| Bari | it | 356 |
| Bologna Casalecchio | it | 231 |
| Brescia Roncadelle | it | 354 |
| Catania | it | 098 |
| Chieti San Giovanni Teatino | it | 029 |
| Firenze Sesto Fiorentino | it | 352 |
| Genova | it | 232 |
| Gorizia Villesse | it | 116 |
| Milano Carugate | it | 233 |
| Milano Corsico | it | 455 |
| Milano San Giuliano | it | 295 |
| Napoli Afragola | it | 353 |
| Padova | it | 355 |
| Parma | it | 303 |
| Pisa | it | 314 |
| Rimini | it | 111 |
| Roma Anagnina | it | 234 |
| Roma Fiumicino | it | 682 |
| Roma Porta di Roma | it | 427 |
| Salerno Baronissi | it | 458 |
| Torino Collegno | it | 456 |
| 仙台 | jp | 392 |
| 前橋 | jp | 697 |
| 新三郷 | jp | 887 |
| Tokyo-Bay | jp | 447 |
| 立川 | jp | 359 |
| 原宿 | jp | 671 |
| 渋谷 | jp | 647 |
| 新宿 | jp | 651 |
| 港北(横浜) | jp | 448 |
| 長久手 | jp | 509 |
| 鶴浜(大阪) | jp | 496 |
| 神戸 | jp | 486 |
| 福岡新宮 | jp | 189 |
| 고양점 | kr | 522 |
| 광명점 | kr | 373 |
| 기흥점 | kr | 582 |
| 동부산점 | kr | 602 |
| الأفنيوز | kw | 219 |
| ذا وير هاوس | kw | 677 |
| Vilnius | lt | 235 |
| Tallinn | ee | 648 |
| Riga | lv | 516 |
| Amersfoort | nl | 415 |
| Amsterdam | nl | 088 |
| Barendrecht | nl | 274 |
| Breda | nl | 403 |
| Delft | nl | 151 |
| Duiven | nl | 272 |
| Eindhoven | nl | 087 |
| Groningen | nl | 404 |
| Haarlem | nl | 378 |
| Heerlen | nl | 089 |
| Hengelo | nl | 312 |
| Utrecht | nl | 270 |
| Zwolle | nl | 391 |
| Bydgoszcz | pl | 429 |
| Gdańsk | pl | 203 |
| Katowice | pl | 306 |
| Kraków | pl | 204 |
| Lublin | pl | 311 |
| Łódź | pl | 329 |
| Poznań | pl | 205 |
| Szczecin | pl | 583 |
| Warszawa Janki | pl | 188 |
| Warszawa Targówek | pl | 307 |
| Wrocław | pl | 294 |
| Băneasa | ro | 059 |
| Pallady | ro | 500 |
| Timișoara | ro | 664 |
| Forus | no | 126 |
| Furuset | no | 095 |
| Leangen | no | 371 |
| på Karl Johan | no | 722 |
| Ringsaker | no | 390 |
| Slependen | no | 091 |
| Sørlandet | no | 007 |
| Åsane | no | 441 |
| Alfragide | pt | 367 |
| Braga | pt | 499 |
| Loulé | pt | 453 |
| Loures | pt | 001 |
| Matosinhos | pt | 009 |
| CFF Санкт-Петербург | ru | 604 |
| Адыгея-Кубань | ru | 480 |
| Белая Дача | ru | 344 |
| Дыбенко | ru | 426 |
| Екатеринбург | ru | 342 |
| ИКЕА Сити в ТРЦ "Мозаика" | ru | 616 |
| Интернет-магазин | ru | 524 |
| Казань | ru | 341 |
| Нижний Новгород | ru | 437 |
| Новосибирск | ru | 338 |
| Омск | ru | 351 |
| Парнас | ru | 464 |
| Ростов-на-Дону | ru | 443 |
| Самара | ru | 442 |
| Теплый Стан | ru | 336 |
| Уфа | ru | 346 |
| Химки | ru | 335 |
| Ходынское поле | ru | 609 |
| Bratislava | sk | 489 |
| Borlänge | se | 248 |
| Gävle | se | 122 |
| Göteborg Bäckebol | se | 398 |
| Göteborg Kållered | se | 589 |
| Haparanda | se | 470 |
| Helsingborg | se | 468 |
| Jönköping | se | 109 |
| Kalmar | se | 469 |
| Karlstad | se | 471 |
| Linköping | se | 017 |
| Malmö | se | 445 |
| Stockholm Barkarby | se | 019 |
| Stockholm Gallerian | se | 669 |
| Stockholm Kungens Kurva | se | 012 |
| Sundsvall | se | 467 |
| Uddevalla | se | 053 |
| Umeå | se | 416 |
| Uppsala | se | 070 |
| Västerås | se | 020 |
| Älmhult | se | 268 |
| Örebro | se | 106 |
| Alexandra | sg | 045 |
| Jurong @ JEM | sg | 650 |
| Tampines | sg | 022 |
| Atlanta, GA | us | 257 |
| Baltimore, MD | us | 152 |
| Bolingbrook, IL | us | 170 |
| Brooklyn, NY | us | 921 |
| Burbank, CA | us | 399 |
| Canton, MI | us | 026 |
| Carson, CA | us | 162 |
| Centennial, CO | us | 064 |
| Charlotte, NC | us | 067 |
| College Park, MD | us | 411 |
| Columbus, OH | us | 511 |
| Conshohocken, PA | us | 211 |
| Costa Mesa, CA | us | 167 |
| Covina, CA | us | 413 |
| Draper, UT | us | 103 |
| East Palo Alto, CA | us | 347 |
| Elizabeth, NJ | us | 154 |
| Emeryville, CA | us | 165 |
| Fishers, IN | us | 536 |
| Frisco, TX | us | 183 |
| Grand Prairie, TX | us | 535 |
| Houston, TX | us | 379 |
| Jacksonville, FL | us | 537 |
| Las Vegas, NV | us | 462 |
| Live Oak, TX | us | 570 |
| Long Island, NY | us | 156 |
| Memphis, TN | us | 508 |
| Merriam, KS | us | 374 |
| Miami, FL | us | 327 |
| Minneapolis, MN | us | 212 |
| New Haven, CT | us | 213 |
| Norfolk, VA | us | 569 |
| Oak Creek, WI | us | 560 |
| Orlando, FL | us | 145 |
| Paramus, NJ | us | 409 |
| Pittsburgh, PA | us | 153 |
| Portland, OR | us | 028 |
| Renton, WA | us | 488 |
| Round Rock, TX | us | 027 |
| San Diego, CA | us | 166 |
| San Francisco, CA | us | 658 |
| Schaumburg, IL | us | 210 |
| South Philadelphia, PA | us | 215 |
| St. Louis, MO | us | 410 |
| Stoughton, MA | us | 158 |
| Sunrise, FL | us | 207 |
| Tampa, FL | us | 042 |
| Tempe, AZ | us | 209 |
| West Chester, OH | us | 175 |
| West Sacramento, CA | us | 157 |
| Woodbridge, VA | us | 168 |
| الثمامة | sa | 608 |
| الرياض | sa | 197 |
| المدينة المنورة | sa | 703 |
| جدة | sa | 110 |
| الظهران | sa | 065 |
| 台中店 | tw | 305 |
| 敦北店 | tw | 350 |
| 新莊店 | tw | 363 |
| 桃園店 | tw | 361 |
| 高雄店 | tw | 879 |
| IKEA Doha store | qa | 244 |
| Adelaide | au | 557 |
| Canberra | au | 451 |
| Logan | au | 919 |
| Marsden Park | au | 377 |
| Perth | au | 556 |
| North Lakes | au | 460 |
| Rhodes | au | 385 |
| Richmond | au | 384 |
| Springvale | au | 006 |
| Tempe | au | 446 |
| Boucherville | ca | 414 |
| Burlington | ca | 040 |
| Calgary | ca | 216 |
| Coquitlam | ca | 313 |
| Edmonton | ca | 349 |
| Etobicoke | ca | 256 |
| Halifax | ca | 529 |
| Montreal | ca | 039 |
| North York | ca | 149 |
| Ottawa | ca | 004 |
| Quebec City | ca | 559 |
| Richmond | ca | 003 |
| Scarborough Town Centre | ca | 698 |
| Toronto Downtown | ca | 659 |
| Vaughan | ca | 372 |
| Winnipeg | ca | 249 |
| 北京四元桥商场 | cn | 802 |
| 北京西红门商场 | cn | 214 |
| 成都成华商场 | cn | 418 |
| 成都高新商场 | cn | 466 |
| 大连商场 | cn | 495 |
| 佛山商场 | cn | 459 |
| 广州商场 | cn | 465 |
| 杭州商场 | cn | 401 |
| 南京商场 | cn | 481 |
| 宁波商场 | cn | 279 |
| 上海宝山商场 | cn | 247 |
| 上海北蔡商场 | cn | 885 |
| 上海徐汇商场 | cn | 856 |
| 深圳商场 | cn | 833 |
| 沈阳商场 | cn | 886 |
| 苏州商场 | cn | 484 |
| 天津商场 | cn | 058 |
| 无锡商场 | cn | 164 |
| 武汉商场 | cn | 340 |
| 西安商场 | cn | 424 |
| 重庆商场 | cn | 330 |
| Brno | cz | 278 |
| Cerny Most | cz | 408 |
| Ostrava | cz | 309 |
| Zličín | cz | 178 |
| Gentofte | dk | 121 |
| København | dk | 686 |
| Odense | dk | 172 |
| Taastrup | dk | 094 |
| Aalborg | dk | 005 |
| Aarhus | dk | 298 |
| Budaörsi IKEA | hu | 182 |
| Örs vezér téri IKEA | hu | 180 |
| Soroksári IKEA | hu | 507 |
| عمَّان | jo | 237 |
| บางนา | th | 057 |
| บางใหญ่ | th | 479 |
| สุขุมวิท | th | 694 |
| Batu Kawan | my | 566 |
| Cheras | my | 362 |
| Damansara | my | 438 |
| Tebrau | my | 477 |
| Ballymun | ie | 038 |
| Belfast | gb | 113 |
| Bristol | gb | 264 |
| Cardiff | gb | 267 |
| Croydon | gb | 144 |
| Edinburgh | gb | 265 |
| Exeter | gb | 548 |
| Gateshead | gb | 143 |
| Glasgow | gb | 266 |
| Greenwich | gb | 567 |
| Hammersmith | gb | 642 |
| Lakeside | gb | 262 |
| Leeds | gb | 261 |
| Manchester | gb | 186 |
| Milton Keynes | gb | 185 |
| Nottingham | gb | 263 |
| Reading | gb | 461 |
| Sheffield | gb | 519 |
| Southampton | gb | 125 |
| Warrington | gb | 140 |
| Wednesbury | gb | 142 |
| Wembley | gb | 141 |
| Anderlecht | be | 482 |
| Arlon | be | 483 |
| Gent | be | 169 |
| Hasselt | be | 452 |
| Liège | be | 375 |
| Mons | be | 423 |
| Wilrijk | be | 179 |
| Zaventem | be | 376 |
| Anderlecht | be | 482 |
| Arlon | be | 483 |
| Gent | be | 169 |
| Hasselt | be | 452 |
| Liège | be | 375 |
| Mons | be | 423 |
| Wilrijk | be | 179 |
| Zaventem | be | 376 |