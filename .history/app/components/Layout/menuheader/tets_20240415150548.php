<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/templates/".SITE_TEMPLATE_ID."/header.php");
CJSCore::Init(array("fx"));

\Bitrix\Main\UI\Extension::load(["ui.bootstrap4", "ui.fonts.opensans"]);

if (isset($_GET["theme"]) && in_array($_GET["theme"], array("blue", "green", "yellow", "red")))
{
	COption::SetOptionString("main", "wizard_eshop_bootstrap_theme_id", $_GET["theme"], false, SITE_ID);
}
$theme = COption::GetOptionString("main", "wizard_eshop_bootstrap_theme_id", "green", SITE_ID);

$curPage = $APPLICATION->GetCurPage(true);

?><!DOCTYPE html>
<html xml:lang="<?=LANGUAGE_ID?>" lang="<?=LANGUAGE_ID?>">
<head>
	<title><?$APPLICATION->ShowTitle()?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">
	<link rel="shortcut icon" type="image/x-icon" href="<?=SITE_DIR?>favicon.ico" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link  rel="stylesheet"  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
  />

	<?
    $APPLICATION->SetAdditionalCSS('http://t.sp-market.ru/custom.css');
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/custom.js');
    $APPLICATION->ShowHead();
    ?>
</head>
<body class="bx-background-image bx-theme-<?=$theme?>" <?$APPLICATION->ShowProperty("backgroundImage");?>>
	  <div class="popup_auth">
  
 		</div>


<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>
<?$APPLICATION->IncludeComponent(
	"bitrix:eshop.banner",
	"",
	array()
);?>
<div class="bx-wrapper" id="bx_eshop_wrap">
	<!-- loader -->


	<div class='main-loader-denc'>
		<div class='main-loader-denc__container'>
		<div class="lds-facebook"><div></div><div></div><div></div></div>
		</div>
		

	</div>
	<header class="bx-header">

	<div class="mobile-menu-denc__search">
		<div class="mobile-menu-denc__search-container-on-main">
						<!--region search.title -->
												
												
													
												<?$APPLICATION->IncludeComponent(
	"bitrix:search.title", 
	"search3mob", 
	array(
		"NUM_CATEGORIES" => "1",
		"TOP_COUNT" => "5",
		"CHECK_DATES" => "N",
		"SHOW_OTHERS" => "N",
		"PAGE" => SITE_DIR."catalog/",
		"CATEGORY_0_TITLE" => GetMessage("SEARCH_GOODS"),
		"CATEGORY_0" => array(
			0 => "iblock_catalog",
		),
		"CATEGORY_0_iblock_catalog" => array(
			0 => "all",
		),
		"CATEGORY_OTHERS_TITLE" => GetMessage("SEARCH_OTHER"),
		"SHOW_INPUT" => "Y",
		"INPUT_ID" => "title-search-input-2",
		"CONTAINER_ID" => "search-2",
		"PRICE_CODE" => array(
			0 => "SP-MARKET.RU МИЦ 15.08.22",
		),
		"SHOW_PREVIEW" => "Y",
		"PREVIEW_WIDTH" => "75",
		"PREVIEW_HEIGHT" => "75",
		"CONVERT_CURRENCY" => "Y",
		"COMPONENT_TEMPLATE" => "search3mob",
		"ORDER" => "date",
		"USE_LANGUAGE_GUESS" => "Y",
		"PRICE_VAT_INCLUDE" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"CURRENCY_ID" => "RUB",
		"TEMPLATE_THEME" => "blue"
	),
	false
);?>
														
						
					</div>

	</div>


	<div>
</div>
		
		<div class="bx-header-section ">
			<!--region bx-header-->
			<div id='1header-container-denc' class="row pt-0 pt-md-3 mb-3 align-items-center container header-container-denc" style="position: relative;">
				<div class="d-block d-md-none bx-menu-button-mobile" data-role='bx-menu-button-mobile-position'></div>
				<div class="col-12 col-md-auto bx-header-logo">
					<a class="bx-logo-block d-none d-md-block" href="<?=SITE_DIR?>">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_logo.php"),
							false
						);?>
					</a>
					<a class="bx-logo-block d-block d-md-none text-center" href="<?=SITE_DIR?>">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_logo_mobile.php"
							),
							false
						);?>
					</a>
				</div>
				<nav class="lefttop-header__menu lefttop-header-menu padding-desctop-denc">
					<ul class="lefttop-header-menu__list">
						<li class="lefttop-header-menu__link"> <a href="/about/delivery/">Доставка</a> </li>
						<li class="lefttop-header-menu__link"> <a href="/about/payment">ОПЛАТА</a> </li>
						<!-- <li class="lefttop-header-menu__link">
						АКЦИИ </li> -->
						<li class="lefttop-header-menu__link"> <a href="/news">ОБЗОРЫ</a> </li>
					</ul>
				</nav>

				<div class="col-auto d-md-block bx-header-personal padding-desctop-denc">
            <?$APPLICATION->IncludeComponent("bitrix:sale.basket.basket.line", "bascletLine", Array(
               "PATH_TO_BASKET" => SITE_DIR."personal/cart/",	// Страница корзины
                  "PATH_TO_PERSONAL" => SITE_DIR."personal/",	// Страница персонального раздела
                  "SHOW_PERSONAL_LINK" => "N",	// Отображать персональный раздел
                  "SHOW_NUM_PRODUCTS" => "Y",	// Показывать количество товаров
                  "SHOW_TOTAL_PRICE" => "Y",	// Показывать общую сумму по товарам
                  "SHOW_PRODUCTS" => "N",	// Показывать список товаров
                  "POSITION_FIXED" => "N",	// Отображать корзину поверх шаблона
                  "SHOW_AUTHOR" => "Y",	// Добавить возможность авторизации
                  "PATH_TO_REGISTER" => SITE_DIR."registration/",	// Страница регистрации
                  "PATH_TO_PROFILE" => SITE_DIR."personal/lk",	// Страница профиля
                  "COMPONENT_TEMPLATE" => "bootstrap_v4",
                  "PATH_TO_ORDER" => SITE_DIR."personal/order/make/",	// Страница оформления заказа
                  "SHOW_EMPTY_VALUES" => "Y",	// Выводить нулевые значения в пустой корзине
                  "PATH_TO_AUTHORIZE" => SITE_DIR."login/",	// Страница авторизации
                  "SHOW_REGISTRATION" => "Y",	// Добавить возможность регистрации
                  "HIDE_ON_BASKET_PAGES" => "N",	// Не показывать на страницах корзины и оформления заказа
               ),
               false
            );?>

<script type="text/javascript">
let openModal = false;
const auth = document.querySelector(".autorization-block-icons");
const loginReg = auth.querySelectorAll("a");
const login = loginReg?.[0];
const reg = loginReg?.[1];
const popupAuth = document.querySelector(".popup_auth");
reg.onclick = function(e){
openModal=true;
	e.preventDefault();

	if(popupAuth.style.display === "flex"){
	  popupAuth.style.display = "none";
	}
	else {
	  popupAuth.style.display = "flex";
	}
	

}
login.onclick = function(e){
openModal=true;
	e.preventDefault();
	if(popupAuth.style.display === "flex"){
	  popupAuth.style.display = "none";
	}
	else {
	  popupAuth.style.display = "flex";

}

}
</script>
				</div>

				<div class="col bx-header-contact padding-desctop-denc">
					<div class="d-flex align-items-center justify-content-end  flex-column flex-sm-row flex-md-column flex-lg-row">
						<div class="">
							<div class="bx-header-phone-block">
								<i class="bx-header-phone-icon"></i>
								<span class="bx-header-phone-number">
									<?$APPLICATION->IncludeComponent(
	"bitrix:main.include", 
	".default", 
	array(
		"AREA_FILE_SHOW" => "file",
		"PATH" => SITE_DIR."include/telephone.php",
		"COMPONENT_TEMPLATE" => ".default",
		"EDIT_TEMPLATE" => ""
	),
	false
);?>
								</span>
							</div>
						</div>
						<!-- <div class="p-lg-3 p-1">
							<div class="bx-header-worktime">
								<div class="bx-worktime-title"><?=GetMessage('HEADER_WORK_TIME'); ?></div>
								<div class="bx-worktime-schedule">
									<?$APPLICATION->IncludeComponent(
										"bitrix:main.include",
										"",
										array(
											"AREA_FILE_SHOW" => "file",
											"PATH" => SITE_DIR."include/schedule.php"
										),
										false
									);?>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</div>
			<script>

				const subMenuDenc = () =>{
					
					const mainMenu = document.querySelector('.custom-header-denc')
					const links = mainMenu.querySelectorAll('.bx_hma_one_lvl.dropdown')
					let mainH = mainMenu.clientHeight

					for (let index = 0; index < links.length; index++) {
						const el = links[index];
						let arrow = document.createElement('div')
						arrow.className="header-bottom-menu-left__arr"
						arrow.innerHTML=`<img class="lm-arr" src="/img/arrr.png" alt="">
                     <img class="lm-arro" src="/img/arrro.png" alt="">`
						let aLink = el.querySelector('a')
						
						aLink.appendChild(arrow)
						// let minusH = ((1+index)*el.clientHeight) + el.clientHeight/2

						// let newH = (mainH - minusH)+'px'
						// let subMenu = el.querySelector('.bx_children_container')
						// subMenu.setAttribute('style',`min-height:${newH}`)
					}

				}

				// let countForBasketDenc= document.querySelector('.basket-count-denc')
				// let blockForBasketDenc= document.querySelector('.basket-line-block-garb')
				// const countBasket=(n)=>{
				// 	let countBlock=document.querySelector('.basket-icon__count')
				// 	let textCount


				// 	if(countForBasketDenc){
				// 		if(!n){
				// 			textCount=countForBasketDenc.textContent.replace(/[\D]+/g,'')
				// 		}else{
				// 			textCount=n.replace(/[\D]+/g,'')
				// 		}
						
				// 		countBlock.textContent=textCount
				// 		console.log('textCount',textCount)
				// 		if(Number(textCount)>0){

				// 			countBlock.classList.add('active')
				// 		}else{
							
				// 		countBlock.classList.remove('active')
				// 		}
				// 	}
				// }
				// const openBasket=()=>{
				// 	countBasket()
				// 	let basket = document.querySelector('.basket-icon')
				// 	basket.addEventListener('mouseenter',()=>{
				// 		blockForBasketDenc.classList.add('active')
				// 	})
				// 	basket.addEventListener('mouseleave',()=>{
				// 		blockForBasketDenc.classList.remove('active')
				// 	})
				// }
					const activeBtnComparisons=()=>{
						
						let compareIconContainer=document.querySelector('.header-bottom-right__img')
						let compareIcon=compareIconContainer&&compareIconContainer.querySelector('.compare-icon__count')
						let compareCount = document.querySelector('.compare-count-span')
						
						let compareInfo = document.querySelector('.header-bottom-right__compare-info')
						
						

						let btn = document.querySelectorAll('.products-card__comparisons')
						btn.forEach(el=>{
							let img1=el.querySelector('.products-card__comparisons-imgbl')
							let img2=el.querySelector('.products-card__comparisons-imgor')
							
							if(el.querySelector('input[type=checkbox]').checked){


								img1.classList.remove('active')
								img2.classList.add('active')
							}else{
								img1.classList.add('active')
								img2.classList.remove('active')
							}
							
						})
						
						
						
						
						let detailComp = document.querySelector('.product-item-detail-compare-container')
						if(detailComp){
							let detailCompSpan = document.querySelector('.product-item-detail-compare-container__span')
							let detailCompInput = detailComp.querySelector('input[type=checkbox]')
							let detailCompLabel = detailComp.querySelector('.checkbox__label')
							
							if(detailCompLabel){
								console.log(detailComp)
								let imgDetailComp1=document.querySelector('.checkbox__img-bl')
								let imgDetailComp2=document.querySelector('.checkbox__img-or')
								
								if(detailCompInput&&detailCompInput.checked){
									detailCompSpan.classList.add('active')
									imgDetailComp1.classList.remove('active')
									imgDetailComp2.classList.add('active')
									detailComp.classList.add('active')
								}else{
									detailCompSpan.classList.remove('active')
									imgDetailComp1.classList.add('active')
									imgDetailComp2.classList.remove('active')
									detailComp.classList.remove('active')
								}
							}

						}
						

					}


					const delFromComparisonsClick=()=>{
						
						let compareIconContainer=document.querySelector('.header-bottom-right__img')
						let compareIcon=compareIconContainer&&compareIconContainer.querySelector('.compare-icon__count')
						let compareCount = document.querySelector('.compare-count-span')
						
						let compareInfo = document.querySelector('.header-bottom-right__compare-info').querySelector('span')
						if(compareIcon){
							console.log(compareIcon)
							if(Number(compareIcon.textContent)===1){
								compareIcon.classList.remove('active')
							}else{
								compareIcon.textContent=Number(compareIcon.textContent)-1
							}
							
						}
						console.log(compareInfo)
						if(compareInfo){
							let i = compareInfo.textContent.replace('Добавлено товаров для сравнения: ','')
							if(Number(i)===1){
								compareInfo.textContent='Нет товаров для сравнения'
							}else{
								i=Number(i)-1
								compareInfo.textContent=`Добавлено товаров для сравнения: ${i}`
							}
							
						}
					}

					const delFromComparisons=()=>{
						
						let delCompareBtns =document.querySelectorAll('.compare-del-link')
						

					
						
						if(delCompareBtns.length===1){
							
							delCompareBtns.forEach(el=>{
								
								if(el){
									
									el.addEventListener('click',delFromComparisonsClick)
								}
								
							})
						}

					}

				const hiddenBasketsInFavorites=()=>{
					let container = document.querySelector('.recomendated-container')
					if(container){
						console.log(container)
						let links = container.querySelectorAll('.wishbtn')
						links.forEach(el=>{
							el.remove()
						})
					}

				



					let table=document.querySelector('.basket-items-list-table-favorites-denc')
					if(table){
						console.log(table)
						let descr=document.querySelectorAll('.basket-items-list-item-descriptions')
						for(let i=0;i<descr.length;i++){
							let el=descr[i]
							if(el.querySelector('.basket-items-list-item-warning-container')){
								if(el.querySelector('.basket-items-list-item-warning-container').textContent.includes('Товар отложен')){
									let card = el.closest('.basket-items-list-item-container')
									card.classList.add('active')
								}
							}
						}
					}
				}

				const openSearchMob=()=>{
					
					let btn=document.querySelector('.bx-menu-button-mobile')
					let seadrchMob=document.querySelector('.mobile-menu-denc__search')
					window.addEventListener('resize',()=>{
						if(document.querySelectorAll('.delivery-menu__container.dencactive')){
							let cnt = document.querySelectorAll('.delivery-menu__container.dencactive')
							cnt.forEach(el=>{
								let nav = el.querySelector('.delivery-menu__nav')
								nav.setAttribute('style',`height:auto`)

							})
						}
						if(document.querySelectorAll('.payment-menu__container.dencactive')){
							let cnt = document.querySelectorAll('.payment-menu__container.dencactive')
							cnt.forEach(el=>{
								let nav = el.querySelector('.payment-menu__nav')
								nav.setAttribute('style',`height:auto`)

							})
						}


						let headerBot=document.getElementById('1header-bottom')
						let wid = headerBot.offsetWidth

						if(headerBot.classList.contains('scrolling')){
							if(wid<=1920){
								document.querySelector('.basket-line-block-garb').style.right=100+'px'
								if(wid<=1198){
									document.querySelector('.basket-line-block-garb').style.right=20+'px'
								}
							}else{
								let r = (document.documentElement.clientWidth/2)-(1720/2)
								document.querySelector('.basket-line-block-garb').style.right=r+'px'
							}

							if(window.innerWidth<767){
								headerBot.classList.remove('scrolling')
								document.querySelector('.basket-line-block-garb').classList.remove('scrolling')
								document.querySelector('.basket-line-block-garb').style.right=0+'px'
								let header=document.getElementById('1header-container-denc')
								header.style.height = 'auto'
							}
						}
						


						if(window.innerWidth>766){
							seadrchMob.classList.remove('bx-opened')
						}
					})

					btn.addEventListener('click',()=>{
						seadrchMob.classList.toggle('bx-opened')
						
					})
				}
					
				
				// const delFromBasket=()=>{
				// 	let delBtns=document.querySelectorAll('.basket-item-block-actions')
					
				// 	if(delBtns&&delBtns.length>0){
				// 		delBtns.forEach(btn=>{
				// 			btn.addEventListener('click',()=>{
				// 				let item=btn.closest('.basket-items-list-item-container')
				// 				console.log(item)
				// 				item.classList.add('delete')
				// 				console.log(document.querySelectorAll('.basket-items-list-item-container'))
				// 			})
				// 		})
				// 	}
				// }


				const openDetailInfoInLk=()=>{
					let btns = document.querySelectorAll('.sale-order-list-about-link-denc')

					const setDeliveriInfo = (data,deliveryInfo,sdek) =>{
						let divs =deliveryInfo.querySelectorAll('.boxberryDeliveryFlag__cnt')
						if(divs.length){
							divs.forEach(el=>{
								el.remove()
							})
						}
						if(data.length){
							if(sdek){
								data.reverse()
							}
							data.forEach((item,index)=>{
								let date = sdek ? item.date_time : item.Date
								if(sdek){
									date = date.split('T')
									if(date[1].includes('+')){
										date[1] = date[1].split('+')
										date[1] = date[1][0]
									}
									date = `${date[0]} ${date[1]}`
								}
								let name = sdek ? item.name : item.Name
								let div = document.createElement('div')
								div.className = 'boxberryDeliveryFlag__cnt sale-order-list-shipment-title'
								div.innerHTML = `<div class='boxberryDeliveryFlag__cnt-status-lvl ${sdek && 'sdekDeliveryFlag-cnt-status-lvl'}'>${index+1}</div><div><span style='font-size:11px;'>${date} </span><br><span style='font-weight:400;font-size:11px;'>${name}</span></div>`
								deliveryInfo.appendChild(div)

							})
						}
						
					}
					const fetchDeliveryFunc = (id,deliveryInfo) =>{
						// id = 'AAP123718982'
						console.log('fetchDeliveryFunc',id)
						let url = `/local/deliveryStatuses/bbery.php?token=d6f33e419c16131e5325cbd84d5d6000&m_Id=${id}`
						let data = null
						let oldLoader = deliveryInfo.querySelector('.lds-dual-ring')
						if(oldLoader){
							oldLoader.remove()
						}

						let div = document.createElement('div')

						div.className = 'lds-dual-ring'
						let divs =deliveryInfo.querySelectorAll('.boxberryDeliveryFlag__cnt')
						if(!divs.length){
							deliveryInfo.appendChild(div)

						}
						fetch(url)
						.then(res=>res.json())
						.then(result=>{
							data = JSON.parse(result)
							div.remove()

							if(!data.err){
								setDeliveriInfo(data,deliveryInfo)
							}
						})
						.catch(err=>{console.log('deliveryFetchErr',err);div.remove()})

					}
					const fetchDeliverySdekFunc = (id,deliveryInfo) =>{
						//id = AAP123718982
						console.log('fetchDeliverySdekFunc',id)
						let url = `/local/deliveryStatuses/sdek.php?token=d6f33e419c16131e5325cbd84d5d6000&m_Id=${id}`
						let data = null
						let oldLoader = deliveryInfo.querySelector('.lds-dual-ring')
						if(oldLoader){
							oldLoader.remove()
						}

						let div = document.createElement('div')

						div.className = 'lds-dual-ring'
						let divs =deliveryInfo.querySelectorAll('.boxberryDeliveryFlag__cnt')
						if(!divs.length){
							deliveryInfo.appendChild(div)

						}
						fetch(url)
						.then(res=>res.json())
						.then(result=>{
							data = JSON.parse(result)
							div.remove()
							console.log(data)
							if(!data.err){
								setDeliveriInfo(data,deliveryInfo,true)
							}
						})
						.catch(err=>{console.log('fetchDeliverySdekFunc',err);div.remove()})

					}

					if(btns.length>0){
						btns.forEach(btn=>{
							btn.addEventListener('click',()=>{
								let block = btn.closest('.sale-order-list-inner-row')
								if(block){
									let deliveryInfo = block.querySelector('.delivery-info-status-denc')
									let info = block.querySelector('.row-with-info-detail__info')
									
									if(info){
										let cntnr = info.querySelector('.row-with-info-detail__info-container')
										

										if(info.classList.contains('active')){
											

											// info.style.height = '0px'
											info.classList.remove('active')


										}else{
											// if(cntnr)
											// info.style.height = cntnr.clientHeight + 'px'
											info.classList.add('active')
										}
										


									}
									
									if(deliveryInfo){
										let boxberrySdekDeliveryFlag = false 
										let title = deliveryInfo.querySelector('.delivery-info-status-denc-title')
										let titleText = title?.textContent
										if(deliveryInfo.classList.contains('boxberrySdekDeliveryFlag')){
											let idBlock = deliveryInfo.querySelector('.boxberrySdekDeliveryFlag-id')

											boxberrySdekDeliveryFlag = true 
											
											if(idBlock){
												let id = idBlock.textContent
												if(info&&info.classList.contains('active')){
													let deliveryId = idBlock.id.replace('boxberrySdekDeliveryFlag-id-','')
													if(+deliveryId===15){
														console.log('boxberry',boxberrySdekDeliveryFlag,id,deliveryId)

														fetchDeliveryFunc(id,deliveryInfo)

													}
													if(+deliveryId===11){
														console.log('sdek',boxberrySdekDeliveryFlag,id,deliveryId)
														fetchDeliverySdekFunc(id,deliveryInfo)
													}

												}
											}
										}

									}
								}
							})
						})
					}

				}


				const allFiltersBtn = () =>{
					let fields = document.querySelectorAll('.smart-filter-parameters-box')

					if(fields.length>0){
						
						let moreArrDefault = Array.from(fields)
						let row = document.querySelector('.filtersrow')
						if(row){

						
						let placeFilter=fields[1]
						moreArrDefault.forEach((el,index)=>{
							//el.setAttribute('style','order:'+index)
							

							let checks = el.querySelectorAll('.form-check-input')
							let showmore = el.querySelector('.filter-showmore')
							for (let index = 0; index < checks.length; index++) {
								const element = checks[index];

								if(element.checked){
									//el.setAttribute('style','order:'+0)
									
										row.insertBefore(el,placeFilter)
									
									if(showmore){

										showmore.remove()
									}
									break
								}
								
							}
							
						})
						let newfields = document.querySelectorAll('.smart-filter-parameters-box')
						let moreArr = Array.from(newfields)
						moreArr=moreArr.slice(5, moreArr.length[-1])
						let btn=document.createElement('div')
						btn.className='btn-more-filters'
						btn.textContent='ВСЕ ФИЛЬТРЫ'

						let btns=document.querySelector('.smart-filter-button-box')
						btns.appendChild(btn)

						moreArr.forEach(el=>{
							el.classList.add('hidden-filter-field')
						})


						btn.addEventListener('click',()=>{
							moreArr.forEach(el=>{
								if(el.classList.contains('hidden-filter-field')){
									el.classList.remove('hidden-filter-field')
								}else{
									el.classList.add('hidden-filter-field')
								}
								
							})
							if(btn.textContent==='ВСЕ ФИЛЬТРЫ'){
								btn.textContent='СКРЫТЬ ФИЛЬТРЫ'
							}else{
								btn.textContent='ВСЕ ФИЛЬТРЫ'
							}
						})
					}}
				}

				const customPopupForBasket=()=>{
					let body = document.querySelector('body')
					let btns =document.querySelectorAll('.btn-carb-denc')
					if(btns.length>0){
						btns.forEach(btn=>{
							btn.addEventListener('click',()=>{
								let div = document.createElement('div')
								div.className='customPopupForBasket'
								
								div.innerHTML='hi'
								
								



								//body.appendChild(div)
									//console.log(div)

							})
						})
					}
				}
				const blockSearchEnterMac=()=>{
					let btn = document.querySelector('#title-search-input')
					// if(document.querySelector(".customSearchEnter")){
					// 	let search = document.querySelector(".customSearchEnter")
					// 	console.log(search)
						
					// }
					// $("#title-search-input").keydown(function(event){
					// 	if(event.keyCode == 13){
					// 		event.preventDefault();

					// 	}
					// });
					$("#title-search-input-2").keydown(function(event){
						if(event.keyCode == 13){
							event.preventDefault();

						}
					});

				}

				const favPageFilterClick = (el) =>{
						let filterlink = document .querySelectorAll('.fav-container-filter__link')
						if(filterlink.length>0){
							filterlink.forEach(el=>{
								el.classList.remove('active')
							})
						}

						el.classList.add('active')

						let favs = document.querySelectorAll('.fav-card-denc')
						if(favs.length>0){
							let favsHidden = document.querySelectorAll('.favHiddenFilter')
							if(favsHidden.length>0){
								favs.forEach(el=>{
									el.classList.remove('favHiddenFilter')
								})
							}

							if(el.dataset.catid!=='all'){
								let favarr = Array.from(favs)
								let arrhiddenarr = favarr.filter(item=>item.dataset.catid!==el.dataset.catid)
								if(arrhiddenarr.length>0){
									arrhiddenarr.forEach(el=>{
										el.classList.add('favHiddenFilter')
									})
								}
							}
						}
				}
				const favPageFilter = () =>{
						let filter = document.querySelector('.fav-container-filter')
						let filterlink = document .querySelectorAll('.fav-container-filter__link')
						if(filterlink.length>0){
							filterlink.forEach(el=>{
								
								el.addEventListener('click',()=>favPageFilterClick(el))
							})
						}	

					} 
				

				
				const fixedHeaderWithScroll=()=>{
					let header=document.getElementById('1header-container-denc')
					let headerBot=document.getElementById('1header-bottom')
					if(header&&headerBot){
						

						let panel=document.getElementById('bx-panel')
						let height=header.offsetHeight
						let heightBot=headerBot.offsetHeight
						let heightHeader=height + heightBot

						if(panel){
							height=height+panel.offsetHeight
						}
						window.addEventListener('scroll', ()=>{
							let scrollDistance = window.scrollY
							if(window.innerWidth>=767 && (document.querySelector('.bx-wrapper').clientHeight-window.innerHeight > height+ heightBot)){
								if(scrollDistance>=height+20 ){
									
									headerBot.classList.add('scrolling')
									document.querySelector('.basket-line-block-garb').classList.add('scrolling')
									let wid = headerBot.offsetWidth
									if(wid<=1920){
										document.querySelector('.basket-line-block-garb').style.right=100+'px'
										if(wid<=1198){
											document.querySelector('.basket-line-block-garb').style.right=20+'px'
										}
									}else{
										let r = (document.documentElement.clientWidth/2)-(1720/2)
										document.querySelector('.basket-line-block-garb').style.right=r+'px'
									}
									header.style.height=heightHeader+'px'
								//document.querySelector('.bx-wrapper').style.paddingTop=heightBot+'px'
							}else{
								

								headerBot.classList.remove('scrolling')
								document.querySelector('.basket-line-block-garb').classList.remove('scrolling')
								//document.querySelector('.bx-wrapper').style.paddingTop=0
								header.style.height='auto'

								document.querySelector('.basket-line-block-garb').style.right=0+'px'
							}
							}
							
						})
					}
				}	

				window.onload=()=>{
					fixedHeaderWithScroll()
					if(window.location.pathname.includes('favorites')){
						favPageFilter()
					}
					blockSearchEnterMac()
					customPopupForBasket()
					//allFiltersBtn()
					openDetailInfoInLk()
					//delFromBasket()
					//hiddenBasketsInFavorites()
					subMenuDenc()
					openSearchMob()
					//delFromComparisons()
					//activeBtnComparisons()
					//openBasket()
					let loader = document.querySelector('.main-loader-denc')
					loader.classList.add('hideLoader')
					
				}
			</script>
			<!--endregion-->

			<!--region menu-->
			<div class="row mb-4 d-none d-md-block mob-denc">
				<div class="col">
					<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"menuMobile1", 
	array(
		"ROOT_MENU_TYPE" => "left",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_TIME" => "36000000",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_THEME" => "site",
		"CACHE_SELECTED_ITEMS" => "N",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "3",
		"CHILD_MENU_TYPE" => "left",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N",
		"COMPONENT_TEMPLATE" => "menuMobile1"
	),
	false
);?>
				</div>
			</div>
			<div id='1header-bottom' class='header-bottom'>
				<div class='header__bottom container'>
					<a class="logo-fix-menu" href="<?=SITE_DIR?>">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_logo.php"),
							false
						);?>
					</a>
					<div class="header-bottom-left">
						<div class="header-bottom-left__title">
								<div class="header-bottom-left__icons-cnt">
									<div class="header-bottom-left__icons">
									<img class="header-bottom-left__arrd" src="	/img/arrd.png" alt="">
									</div>
								</div>
								
								<span>каталог</span>
								<div class="row mb-4  d-md-block custom-header-denc">
									<div class="col">
										<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"catalog_vertical_dencelot", 
	array(
		"ROOT_MENU_TYPE" => "left",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_TIME" => "36000000",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_THEME" => "site",
		"CACHE_SELECTED_ITEMS" => "N",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "4",
		"CHILD_MENU_TYPE" => "left",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N",
		"COMPONENT_TEMPLATE" => "catalog_vertical_dencelot"
	),
	false
);?>
									</div>
								</div>
						</div>

						<div class="header-bottom-left__search">
							<!--region search.title -->
							
							
								
							<?$APPLICATION->IncludeComponent(
	"bitrix:search.title", 
	"search2", 
	array(
		"NUM_CATEGORIES" => "1",
		"TOP_COUNT" => "5",
		"CHECK_DATES" => "N",
		"SHOW_OTHERS" => "N",
		"PAGE" => SITE_DIR."catalog/",
		"CATEGORY_0_TITLE" => GetMessage("SEARCH_GOODS"),
		"CATEGORY_0" => array(
			0 => "iblock_catalog",
		),
		"CATEGORY_0_iblock_catalog" => array(
			0 => "2",
		),
		"CATEGORY_OTHERS_TITLE" => GetMessage("SEARCH_OTHER"),
		"SHOW_INPUT" => "Y",
		"INPUT_ID" => "title-search-input",
		"CONTAINER_ID" => "search",
		"PRICE_CODE" => array(
		),
		"SHOW_PREVIEW" => "Y",
		"PREVIEW_WIDTH" => "75",
		"PREVIEW_HEIGHT" => "75",
		"CONVERT_CURRENCY" => "Y",
		"COMPONENT_TEMPLATE" => "search2",
		"ORDER" => "date",
		"USE_LANGUAGE_GUESS" => "N",
		"PRICE_VAT_INCLUDE" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"CURRENCY_ID" => "RUB",
		"TEMPLATE_THEME" => "blue",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);?>
									
							
						</div>

						
					</div>
					
					
						
				</div>
			</div>
         
			<!--endregion-->

			

			<!--region breadcrumb-->
			<?if ($curPage != SITE_DIR."index.php"):?>
				<!-- <div class="row mb-4 custom-breadcrumb">
					<div class="col" id="navigation">
						<?$APPLICATION->IncludeComponent(
							"bitrix:breadcrumb",
							"universal",
							array(
								"START_FROM" => "0",
								"PATH" => "",
								"SITE_ID" => "-"
							),
							false,
							Array('HIDE_ICONS' => 'Y')
						);?>
					</div>
				</div>  -->
				<!-- <h1 class='catalog-title container' id="pagetitle"><?$APPLICATION->ShowTitle();?></h1> -->
			<?endif?>
			<!--endregion-->
		</div>
	</header>

	<div class="workarea">

	
<!--swipers-->
		<script type="module">
			import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

			const swiperOnMainPage = () =>{
				let location=window.location.pathname

					if(location===''||location==='/'){
						console.log('true',window.location.pathname)
						let area = document.querySelector('.workarea')
						let div = document.createElement('div')
						div.className='main__container'
						div.innerHTML=`
												<div class="big-swiper-cntnr">
													<div class="big-swiper swiper">
													<div class="big-swiper swiper-wrapper">
														<a href='/catalog/osevye_ventilyatory/filter/prop_seriya-is-typhoon/apply/' class="big-swiper swiper-slide"><img src="/img/banners/8.webp" alt=""></a>
														<a href='/catalog/seriya_sav/filter/prop_seriya-is-sav/apply/' class="big-swiper swiper-slide"><img src="/img/banners/7.webp" alt=""></a>
														<a href='/catalog/radialnye_ventilyatory/filter/prop_seriya-is-buran/apply/' class="big-swiper swiper-slide"><img src="/img/banners/3.webp" alt=""></a>
														<a href='/catalog/vozdukhovody_gibkie_iz_nerzhaveyushchey_stali/filter/prop_seriya-is-fd/apply/' class="big-swiper swiper-slide"><img src="/img/banners/5.webp" alt=""></a>

														<a href='/catalog/nastennye_ventilyatory/filter/prop_seriya-is-aura-or-silent/apply/' class="big-swiper swiper-slide"><img src="/img/banners/2.webp" alt=""></a>
														<a href='/catalog/lyuki_pod_plitku/filter/prop_seriya-is-ceramo-optimum/apply/' class="big-swiper swiper-slide"><img src="/img/banners/4.webp" alt=""></a>
														
														<a href='/catalog/radialnye_ventilyatory/filter/prop_seriya-is-argest/apply/' class="big-swiper swiper-slide"><img src="/img/banners/1.webp" alt=""></a>
														<a href='/catalog/lyuki_plastikovye/filter/prop_konstruktiv-is-push/apply/' class="big-swiper swiper-slide"><img src="/img/banners/6.webp" alt=""></a>

													</div>
													<div class="big-swiper swiper-pagination"></div>
													
													<div class="big-swiper swiper-button-prev">
														<img src="/img/arrowbs.png" alt="">
													</div>
													<div class="big-swiper swiper-button-next">
														<img src="/img/arrowbs.png" alt="">
													</div>
													
													</div>
												</div>
												<div class="small-swiper-cntnr">
													<div class="small-swiper swiper">
													<div class="small-swiper swiper-wrapper">
														<div class="small-swiper swiper-slide"><img src="/img/rame1.png" alt=""></div>
														<div class="small-swiper swiper-slide"><img src="/img/rame2.png" alt=""></div>
														<div class="small-swiper swiper-slide"><img src="/img/rame4.png" alt=""></div>
														<div class="small-swiper swiper-slide"><img src="/img/rame5.png" alt=""></div>
														<div class="small-swiper swiper-slide"><img src="/img/rame6.png" alt=""></div>
													</div>
													
													<div class="small-swiper swiper-button-prev ">
														<div class="small-swiper__arr">
															<img class="small-swiper__arr-p" src="/img/arrowss.png" alt="">
															<img class="small-swiper__arr-op" src="/img/arrowsso.png" alt="">
														</div>
														
													</div>
													<div class="small-swiper swiper-button-next">
														<div class="small-swiper__arr">
															<img class="small-swiper__arr-p" src="/img/arrowss.png" alt="">
															<img class="small-swiper__arr-op" src="/img/arrowsso.png" alt="">
														</div>
													</div>
													
													</div>
												</div>`
											
						
						area.appendChild(div)



			
				const swiperb = new Swiper('.big-swiper.swiper', {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					autoplay: {
						delay: 3500,
						disableOnInteraction: false,
					},
					// If we need pagination
					pagination: {
					el: '.big-swiper.swiper-pagination',
					},

					// Navigation arrows
					navigation: {
					nextEl: '.big-swiper.swiper-button-next',
					prevEl: '.big-swiper.swiper-button-prev',
					},

				});

				const swipers = new Swiper('.small-swiper.swiper', {
					slidesPerView: 1,
					breakpoints: {
					
					768: {
						slidesPerView: 5,
					},
					480: {
						slidesPerView: 3,
					}
					},
					centeredSlides: true,
					spaceBetween: 10,
					loop: true,
					autoplay: {
						delay: 1500,
						disableOnInteraction: false,
					},
					// Navigation arrows
					navigation: {
					nextEl: '.small-swiper.swiper-button-next',
					prevEl: '.small-swiper.swiper-button-prev',
					},

				});

					}else
					{

						console.log('false.',window.location.pathname)
					}
					
			}
			swiperOnMainPage()



		</script>
		
		<div class=" bx-content-section">
			<div class="row">
			<?$needSidebar = preg_match("~^".SITE_DIR."(catalog|personal\/cart|personal\/order\/make)/~", $curPage);?>
				<div class="bx-content <?=($needSidebar ? "col" : "col-md-9 col-sm-8")?>">#WORK_AREA#<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
				<script>
					const giveContainer =()=>{
						let loc = window.location.pathname
						console.log(loc)
						let detailpage=document.querySelector('.detailpage')
						let testBlock=document.querySelector('.denccatalogsection')
						let searchPage = document.querySelector('.search-page')
						if(searchPage||(testBlock&&!detailpage)||loc.includes('login')||loc.includes('auth')){
							let bx = document.querySelector('.bx-content')
							
							bx.classList.add('container')

							if(testBlock)
							testBlock.classList.add('padding-l-for-catalog')
							
						}else{
							//testBlock.remove.add('padding-l-for-catalog')
							let bx = document.querySelector('.bx-content')
							bx.classList.remove('container')
						}
					}
					giveContainer()
				</script>
			</div><!--end .bx-content -->

				<!-- region Sidebar -->
				<?if (!$needSidebar):?>
					<div class="sidebar col-md-3 col-sm-4">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							Array(
								"AREA_FILE_SHOW" => "sect",
								"AREA_FILE_SUFFIX" => "sidebar",
								"AREA_FILE_RECURSIVE" => "Y",
								"EDIT_MODE" => "html",
							),
							false,
							Array('HIDE_ICONS' => 'Y')
						);?>
					</div>
				<?endif?>
				<!--endregion -->

			</div><!--end row-->
			<?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				"",
				Array(
					"AREA_FILE_SHOW" => "sect",
					"AREA_FILE_SUFFIX" => "bottom",
					"AREA_FILE_RECURSIVE" => "N",
					"EDIT_MODE" => "html",
				),
				false,
				Array('HIDE_ICONS' => 'Y')
			);?>
		</div><!--end .container.bx-content-section-->

		

	</div><!--end .workarea-->

	<footer class="bx-footer">
		<!-- <div class="bx-footer-section bx-footer-bg">
			<div class="container">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.include",
					"",
					Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => SITE_DIR."include/socnet_footer.php",
						"AREA_FILE_RECURSIVE" => "N",
						"EDIT_MODE" => "html",
					),
					false,
					Array('HIDE_ICONS' => 'Y')
				);?>
			</div>
		</div> -->
		<div class="bx-footer-section">
			<div class="container">
				<div class="row bx-footer-section__row">
					<div class="custom-col first-c-col">
							<div class="">
								<a class="bx-footer-logo" href="<?=SITE_DIR?>">
									<? $APPLICATION->IncludeComponent(
										"bitrix:main.include",
										"",
										array(
											"AREA_FILE_SHOW" => "file",
											"PATH" => SITE_DIR."include/company_logo_mobile.php"
										),
									false
									);?>
								</a>
							</div>
							
							<div class="d-flex align-items-center phone-footer">
								<!-- <i class="fa fa-phone pr-3 " style="font-size: 25px;"></i> -->
								<span class="phonespan">
									<? $APPLICATION->IncludeComponent(
										"bitrix:main.include", 
										".default", 
										array(
											"AREA_FILE_SHOW" => "file",
											"PATH" => SITE_DIR."include/telephone.php",
											"COMPONENT_TEMPLATE" => ".default",
											"EDIT_TEMPLATE" => ""
										),
										false
									);?>
								</span>
							</div>
							<!-- <div class="mb-3 text-white">
								<? $APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									array(
										"AREA_FILE_SHOW" => "file",
										"PATH" => SITE_DIR."include/schedule.php"
									),
									false
								);?>
							</div> -->
							<!-- <div class="footer-left-contacts">
								
								<? $APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									array(
										"AREA_FILE_SHOW" => "file",
										"PATH" => SITE_DIR."include/personal.php"
									),
									false
								);?>
							</div> -->

							


					</div>

					<div class="custom-col">
						<h4 class="bx-block-title ">
							<? $APPLICATION->IncludeComponent(
								"bitrix:main.include",
								"",
								array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => SITE_DIR."include/about_title.php"
								),
								false
							);?>
						</h4>
						<? $APPLICATION->IncludeComponent(
							"bitrix:menu",
							"bottom_menu",
							array(
								"ROOT_MENU_TYPE" => "bottom",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_TYPE" => "A",
								"CACHE_SELECTED_ITEMS" => "N",
								"MENU_CACHE_TIME" => "36000000",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"MENU_CACHE_GET_VARS" => array(),
							),
							false
						);?>
					</div>
					
					<div class="custom-col">
						<? $APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/footerinfo.php"
							),
							false
						);?>
					</div>
					<div class="custom-col prelast-col">
						<? $APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/footerinfo2.php"
							),
							false
						);?>


<div class="logos-payments">
					<img src="/img/horizontalLogos4.png" alt="">
					</div>
					</div>
					
					<div class="powered-by custom-col">
					
						<a class="powered-by__link" href="https://itsports.ru/" target="_blank">
							<img class="powered-by__imgColor" src="/img/poweredByC.png" alt="">
							<img class="powered-by__imgBlack" src="/img/poweredByB.png" alt="">
						</a>
					</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		<!-- <div class="bx-footer-section py-2 bg-secondary">
				<div class="container">
					<div class="row">
						<div class="col-sm-6 bx-up">
							<a href="javascript:void(0)" data-role="eshopUpButton" class="text-white"><i class="fa fa-caret-up"></i> <?=GetMessage("FOOTER_UP_BUTTON")?></a>
						</div>
						<div class="col-sm-6 text-white text-right">
							<? $APPLICATION->IncludeComponent("bitrix:main.include", "", array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/copyright.php"
							), false);?>
						</div>
					</div>
				</div>
			</div> -->
			
	</footer>
	
	
</div> <!-- //bx-wrapper -->


<script>
	BX.ready(function(){
		var upButton = document.querySelector('[data-role="eshopUpButton"]');
		BX.bind(upButton, "click", function(){
			var windowScroll = BX.GetWindowScrollPos();
			(new BX.easing({
				duration : 500,
				start : { scroll : windowScroll.scrollTop },
				finish : { scroll : 0 },
				transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step : function(state){
					window.scrollTo(0, state.scroll);
				},
				complete: function() {
				}
			})).animate();
		})
	});
</script>
</body>
</html>