// / <reference path="../typings/globals/jquery/index.d.ts" />
// navbar-sm
$('#nav-sm').click(function()
{
    $('.links-navbar-sm').removeClass('d-none');
    $(this).addClass('d-none').css('color', '#fff');
    $('#close-nav').removeClass('d-none').css('color', '#000').css('z-index', '999');
});
$('#close-nav').click(function()
{
    $('.links-navbar-sm').addClass('d-none');
    $(this).addClass('d-none');
    $('#nav-sm').removeClass('d-none')
})
// toggle-menu

$('.toggle-icon-L').click(function()
{
    $('.aside-section').removeClass('d-block');
    $('.aside-section').addClass('d-none');
    $('.aside-section-small').removeClass('d-none');
    $('.aside-section-small').addClass('d-block');
})
$('.toggle-icon-S').click(function()
{
    $('.aside-section').removeClass('d-none');
    $('.aside-section').addClass('d-block');
    $('.aside-section-small').removeClass('d-block');
    $('.aside-section-small').addClass('d-none');
})

// toggle password sections
$('#passowrd-submit').click(function()
{
  $('.login-password').addClass('d-none')
  $('.sign-up-smart-password').addClass('d-none')
  $('.login-password-inpux').removeClass('d-none')
  $('.main-section-password').css('padding', '5.5rem')
})
$('#passowrd-reset').click(function()
{
  $('.main-section-password').addClass('d-none')
  $('.main-section-reset-password ').removeClass('d-none')
})




// get start btn sign-in
let getStartBtn = document.getElementsByClassName('get-start-btn');
let iconFalse = document.getElementsByClassName('box-icon')
let myModal = document.getElementsByClassName('modal')
let requestBtn = document.getElementsByClassName('request-btn');

$(getStartBtn).click(function()
{
    $('#myModal-1').removeClass('d-none');
    $('#myModal-1').addClass('d-block');
})
// ////////////////////////////////requstdemotbtn btn
$(requestBtn).click(function()
{
    $('#myModal-2').removeClass('d-none');
    $('#myModal-2').addClass('d-block');
})
$('#Request-btn').click(function()
{
  $('#myModal-2').addClass('d-none')
  $('#myModal-2').removeClass('d-block')
  $('#myModal-3').removeClass('d-none')
  $('#myModal-3').addClass('d-block')
})
$('#timezone').click(function()
{
  $('#myModal-4').removeClass('d-none')
  $('#myModal-4').addClass('d-block')
})
$('#back').click(function()
{
  $('#myModal-4').removeClass('d-block')
  $('#myModal-4').addClass('d-none')
})
$('#confirm').click(function()
{
  $('#myModal-4').removeClass('d-block')
  $('#myModal-4').addClass('d-none')
  $('#myModal-3').removeClass('d-block')
  $('#myModal-3').addClass('d-none')
})


//////////////////////////////////////// tabs
$('.main-selectors span').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
   
    $($(this).data('change')).removeClass('d-none')
    $($(this).data('change')).siblings().addClass('d-none')

})


//////////////////////////////////////// 3d slide//////////////////////

 
// $('.shape .dots button').click(function()
// {
//     $(this).addClass('active').siblings().removeClass('active')
// })


$('#slide-1').click(function()
{ 
    $('#img-slide2').parent().addClass('div-2').removeClass('div-3 div-1');
    $('#img-slide2').addClass('img-2').removeClass('img-3 img-1');
    $('#img-slide3').parent().addClass('div-3').removeClass('div-2 div-1');
    $('#img-slide3').addClass('img-3').removeClass('img-2 img-1');
    $('#img-slide1').parent().addClass('div-1').removeClass('div-3 div-2');
    $('#img-slide1').addClass('img-1').removeClass('img-3 img-2');

    var slide_act = document.querySelectorAll('.slide_act')
        for(let i =0; i < slide_act.length ; i++){
            slide_act[i].classList.remove('active')
        }

    document.querySelector('button#slide-1').classList.add('active');
})


$('#slide-2').click(function(){

    $('#img-slide2').parent().addClass('div-3').removeClass('div-2 div-1');
    $('#img-slide2').addClass('img-3').removeClass('img-2 img-1');
    $('#img-slide3').parent().addClass('div-2').removeClass('div-3 div-1');
    $('#img-slide3').addClass('img-2').removeClass('img-3 img-1');
    $('#img-slide1').parent().addClass('div-1').removeClass('div-3 div-2');
    $('#img-slide1').addClass('img-1').removeClass('img-3 img-2');


    var slide_act = document.querySelectorAll('.slide_act')
        for(let i =0; i < slide_act.length ; i++){
            slide_act[i].classList.remove('active')
        }

    document.querySelector('button#slide-2').classList.add('active');
})


$('#slide-3').click(function(){

    $('#img-slide2').parent().addClass('div-2').removeClass('div-3 div-1');
    $('#img-slide2').addClass('img-2').removeClass('img-3 img-1');
    $('#img-slide3').parent().addClass('div-1').removeClass('div-2 div-3');
    $('#img-slide3').addClass('img-1').removeClass('img-2 img-3');
    $('#img-slide1').parent().addClass('div-3').removeClass('div-1 div-2');
    $('#img-slide1').addClass('img-3').removeClass('img-1 img-2');


    var slide_act = document.querySelectorAll('.slide_act')
        for(let i =0; i < slide_act.length ; i++){
            slide_act[i].classList.remove('active')
        }

    document.querySelector('button#slide-3').classList.add('active');
})




var arrSlide = [1,2,3];

var indexArr = 1;

setInterval(
    function () {
        
        var rand = indexArr;

        console.log(rand)
  
            if(rand == 1){
                $('#img-slide2').parent().addClass('div-2').removeClass('div-3 div-1');
                $('#img-slide2').addClass('img-2').removeClass('img-3 img-1');
                $('#img-slide3').parent().addClass('div-3').removeClass('div-2 div-1');
                $('#img-slide3').addClass('img-3').removeClass('img-2 img-1');
                $('#img-slide1').parent().addClass('div-1').removeClass('div-3 div-2');
                $('#img-slide1').addClass('img-1').removeClass('img-3 img-2');
            
    
                var slide_act = document.querySelectorAll('.slide_act')
                for(let i =0; i < slide_act.length ; i++){
                  slide_act[i].classList.remove('active')
                }
    
                document.querySelector('button#slide-1').classList.add('active');
                indexArr =2;
            }
    
            if(rand == 2){

                $('#img-slide2').parent().addClass('div-3').removeClass('div-2 div-1');
                $('#img-slide2').addClass('img-3').removeClass('img-2 img-1');
                $('#img-slide3').parent().addClass('div-2').removeClass('div-3 div-1');
                $('#img-slide3').addClass('img-2').removeClass('img-3 img-1');
                $('#img-slide1').parent().addClass('div-1').removeClass('div-3 div-2');
                $('#img-slide1').addClass('img-1').removeClass('img-3 img-2');
    
                var slide_act = document.querySelectorAll('.slide_act')
                for(let i =0; i < slide_act.length ; i++){
                  slide_act[i].classList.remove('active')
                }
    
                document.querySelector('button#slide-2').classList.add('active');
                indexArr =3;
            }
    
            if(rand == 3){
    
                $('#img-slide2').parent().addClass('div-2').removeClass('div-3 div-1');
                $('#img-slide2').addClass('img-2').removeClass('img-3 img-1');
                $('#img-slide3').parent().addClass('div-1').removeClass('div-2 div-3');
                $('#img-slide3').addClass('img-1').removeClass('img-2 img-3');
                $('#img-slide1').parent().addClass('div-3').removeClass('div-1 div-2');
                $('#img-slide1').addClass('img-3').removeClass('img-1 img-2');
                
                var slide_act = document.querySelectorAll('.slide_act')
                for(let i =0; i < slide_act.length ; i++){
                  slide_act[i].classList.remove('active')
                }
    
                document.querySelector('button#slide-3').classList.add('active');
                indexArr =1;
            }


    }, 1500);




    // $('#slide-1').click(setTimeout(function(){
    
    //     $('#img-slide2').parent().addClass('div-2').removeClass('div-3', 'div-1');
    //     $('#img-slide2').addClass('img-2').removeClass('img-3', 'img-1');
    //     $('#img-slide3').parent().addClass('div-3').removeClass('div-2', 'div-1');
    //     $('#img-slide3').addClass('img-3').removeClass('img-2', 'img-1');
    //     $('#img-slide1').parent().addClass('div-1').removeClass('div-3', 'div-2');
    //     $('#img-slide1').addClass('img-1').removeClass('img-3', 'img-2');
    // }, 2000))
    




/////////////////////////////////slide show////////////////////////////

$('#card-1').click(function()
{
    $('#card-1').addClass('cardcenter').addClass('active').removeClass('cardleft').removeClass('cardright')
    $('#card-2').addClass('cardleft').removeClass('cardcenter').removeClass('active').removeClass('cardright')
    $('#card-3').addClass('cardright').removeClass('active').removeClass('cardcenter').removeClass('cardleft')
    $('#prev-slide').addClass('d-none')
    $('#next-slide').addClass('d-none')

})
$('#card-2').click(function()
{
    $('#card-1').addClass('cardleft').removeClass('active').removeClass('cardcenter').removeClass('cardright')
    $('#card-2').addClass('cardcenter').removeClass('cardleft').addClass('active').removeClass('cardright')
    $('#card-3').addClass('cardright').removeClass('active').removeClass('cardcenter').removeClass('cardleft')
    $('#prev-slide').removeClass('d-none')
    $('#next-slide').removeClass('d-none')
})
$('#card-3').click(function()
{
    $('#card-1').addClass('cardleft').removeClass('active').removeClass('cardcenter').removeClass('cardright')
    $('#card-2').addClass('cardright').removeClass('cardcenter').removeClass('active').removeClass('cardleft')
    $('#card-3').addClass('cardcenter').addClass('active').removeClass('cardright').removeClass('cardleft')
    $('#prev-slide').removeClass('d-none')
    $('#next-slide').removeClass('d-none')
    $('#prev-slide').addClass('d-none')
    $('#next-slide').addClass('d-none')
})


$('#prev-slide').click(function()
{   
    if($('#card-2').hasClass('active') ==  true)
    {
        $('#card-1').addClass('active'),
        $('#card-2').removeClass('active'),
        $('#card-3').removeClass('active'),
        $('#prev-slide').toggleClass('d-none')
    }else if($('#card-3').hasClass('active') ==  true) (

        $('#card-1').removeClass('active'),
        $('#card-2').addClass('active'),
        $('#card-3').removeClass('active'),
        $('#prev-slide').removeClass('d-none'),
        $('#next-slide').toggleClass('d-none')

    )
})
$('#next-slide').click(function()
{   
    if($('#card-2').hasClass('active') ==  true)
    {
        $('#card-1').removeClass('active'),
        $('#card-2').removeClass('active'),
        $('#card-3').addClass('active'),
        $('#next-slide').toggleClass('d-none')
    }else if($('#card-1').hasClass('active') ==  true) (

        $('#card-1').removeClass('active'),
        $('#card-2').addClass('active'),
        $('#card-3').removeClass('active'),
        $('#prev-slide').removeClass('d-none'),
        $('#next-slide').removeClass('d-none')
    )
});








/////////////// icon false modal
$(iconFalse).click(function()
{
  $(myModal).removeClass('d-block')
  $(myModal).addClass('d-none')
})


// $(document.body).on('click mouseenter ',function () { 
//     console.log('helll');
// });
// calander
// dycalendar.draw ({
//   target: '#dycalander',
//   type: 'month',
//   dayformate: 'full',
//   monthformate: 'full',
//   highlighttargetdate: true,
//   prevnextbutton:'show'
// })
// /////////////////////////////////////////////////////////calander
class Calendar {
  constructor(id) {
      this.cells = [];
      this.selectedDate = null;
      this.currentMonth = moment();
      this.elCalendar = document.getElementById(id);
      this.showTemplate();
      this.elGridBody = this.elCalendar.querySelector('.grid__body');
      this.elMonthName = this.elCalendar.querySelector('.month-name');
      this.showCells();
  }

  showTemplate() {
      this.elCalendar.innerHTML = this.getTemplate();
      this.addEventListenerToControls();
  }

  getTemplate() {
      let template = `
          <div class="calendar__header">
              <button type="button" class="control control--prev">&lt;</button>
              <span class="month-name">dic 2019</span>
              <button type="button" class="control control--next">&gt;</button>
          </div>
          <div class="calendar__body">
              <div class="grid">
                  <div class="grid__header">
                      <span class="grid__cell grid__cell--gh">SUN</span>
                      <span class="grid__cell grid__cell--gh">MON</span>
                      <span class="grid__cell grid__cell--gh">TUE</span>
                      <span class="grid__cell grid__cell--gh">WED</span>
                      <span class="grid__cell grid__cell--gh">THU</span>
                      <span class="grid__cell grid__cell--gh">FRI</span>
                      <span class="grid__cell grid__cell--gh">SAT</span>
                  </div>
                  <div class="grid__body">
                  </div>
              </div>
          </div>
      `;
      return template;
  }

  addEventListenerToControls() {
      let elControls = this.elCalendar.querySelectorAll('.control');
      elControls.forEach(elControl => {
          elControl.addEventListener('click', e => {
              let elTarget = e.target;
              if (elTarget.classList.contains('control--next')) {
                  this.changeMonth(true);
              } else {
                  this.changeMonth(false);
              }
              this.showCells();
          });
      });
  }

  changeMonth(next = true) {
      if (next) {
          this.currentMonth.add(1, 'months');
      } else {
          this.currentMonth.subtract(1, 'months');
      }
  }

  showCells() {
      this.cells = this.generateDates(this.currentMonth);
      if (this.cells === null) {
          console.error('No fue posible generar las fechas del calendario.');
          return;
      }

      this.elGridBody.innerHTML = '';
      let templateCells = '';
      let disabledClass = '';
      for (let i = 0; i < this.cells.length; i++) {
          disabledClass = '';
          if (!this.cells[i].isInCurrentMonth) {
              disabledClass = 'grid__cell--disabled';
          }
          // <span class="grid__cell grid__cell--gd grid__cell--selected">1</span>
          templateCells += `
              <span class="grid__cell grid__cell--gd ${disabledClass}" data-cell-id="${i}">
                  ${this.cells[i].date.date()}
              </span>
          `;
      }
      this.elMonthName.innerHTML = this.currentMonth.format('MMM YYYY');
      this.elGridBody.innerHTML = templateCells;
      this.addEventListenerToCells();
  }

  generateDates(monthToShow = moment()) {
      if (!moment.isMoment(monthToShow)) {
          return null;
      }
      let dateStart = moment(monthToShow).startOf('month');
      let dateEnd = moment(monthToShow).endOf('month');
      let cells = [];

      // Encontrar la primer fecha que se va a mostrar en el calendario
      while (dateStart.day() !== 1) {
          dateStart.subtract(1, 'days');
      }

      // Encontrar la última fecha que se va a mostrar en el calendario
      while (dateEnd.day() !== 0) {
          dateEnd.add(1, 'days');
      }

      // Genera las fechas del grid
      do {
          cells.push({
              date: moment(dateStart),
              isInCurrentMonth: dateStart.month() === monthToShow.month()
          });
          dateStart.add(1, 'days');
      } while (dateStart.isSameOrBefore(dateEnd));

      return cells;
  }

  addEventListenerToCells() {
      let elCells = this.elCalendar.querySelectorAll('.grid__cell--gd');
      elCells.forEach(elCell => {
          elCell.addEventListener('click', e => {
              let elTarget = e.target;
              if (elTarget.classList.contains('grid__cell--disabled') || elTarget.classList.contains('grid__cell--selected')) {
                  return;
              }
              // Deselecionar la celda anterior
              let selectedCell = this.elGridBody.querySelector('.grid__cell--selected');
              if (selectedCell) {
                  selectedCell.classList.remove('grid__cell--selected');
              }
              // Selecionar la nueva celda
              elTarget.classList.add('grid__cell--selected');
              this.selectedDate = this.cells[parseInt(elTarget.dataset.cellId)].date;
              // Lanzar evento change
              this.elCalendar.dispatchEvent(new Event('change'));
          });
      });
  }

  getElement() {
      return this.elCalendar;
  }

  value() {
      return this.selectedDate;
  }
}




///////////////////////////////////////////////////// Owlcarousel
$(document).ready(function(){

  $(".feature .owl-carousel").owlCarousel({
      loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

//////////////////////////////////////////////////////////////////////////// pricing////////////////////////////////////////////////////////////
$('.head-cards a').click(function()
{
    $(this).addClass('active').siblings().removeClass('active')
})
$('#card-box-1').click(function(){

    $('#card-1').removeClass('d-none')
    $('#card-2').addClass('d-none')
})
$('#card-box-2').click(function(){

    $('#card-2').removeClass('d-none')
    $('#card-1').addClass('d-none')
})
// question section item 
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

////////////////////////////////////////////////////// innerpricing-page///////////////////////////////////////
$('.nested-card').click(function()
{
    $(this).addClass('active').siblings().removeClass('active')
})
$('#cradit-card').click(function()
{
    $('.card-inputs-box').removeClass('d-none')
    $('#btn-free').removeClass('d-none')
    $('#btn-paypal').addClass('d-none')
})
$('#pay-pal').click(function()
{
    $('.card-inputs-box').addClass('d-none')
    $('#btn-free').addClass('d-none')
    $('#btn-paypal').removeClass('d-none')
    
})
// ///////////////////////////////////////////////////////////////////Reporting page/////////////////////////////
let parentBox = `            <div class="parent col-6 parent-box-select">
<span class="plus" id="plus-parent"><i class="fa-solid fa-plus"></i></span>
<div class="parent-box ">
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <a class="text-blue">Show-leads</a>
</div>
<span class="plus-child" id="plus-child-select"><i class="fa-solid fa-plus"></i></span>
</div>`


let childBox = `            <div class="child col-6">
<span class="plus" id="plus-parent"><i class="fa-solid fa-plus"></i></span>
<div class="child-box">
  <h2>Leads</h2>
  <a class="text-blue">Show-leads</a>
</div>
<span class="plus-child" id="plus-child"><i class="fa-solid fa-plus"></i></span>
</div>`



$('#parent .plus').click(function(){
    $('.parent-box-select').removeClass('d-none')
})
$('#parent .plus-child').click(function(){
    $('.child').removeClass('d-none')
    $('.child .plus-child').addClass('d-none')
    $(this).addClass('d-none')
    
})
$('#plus-child-select').click(function(){
    $('.child-box-select').removeClass('d-none')
    $('.child-box-select .plus-child').addClass('d-none')
    $('.child-box-select .plus').addClass('d-none')
})
$('#delet1').click(function()
{
    $('#child').addClass('d-none')
})


// $('#delet2').click(function()
// {
//     $('#child-box-select').addClass('d-none')
// })


// toggle select bar
$('.dr-2').click(function()
{
    $('.dropdown-1').addClass('d-none')
    $('.dropdown-2').removeClass('d-none')
})
$('.dr-2').click(function()
{
    $('.dropdown-1').addClass('d-none')
    $('.dropdown-2').removeClass('d-none')
})
$('.dr-2').click(function()
{
    $('.dropdown-1').addClass('d-none')
    $('.dropdown-2').removeClass('d-none')
})
// -------------------------------------------------------popup
$('#delete1').click(function()
{
    $('.modal').removeClass('d-none');
    $('.modal').addClass('d-block');
})
$('#delete2').click(function()
{
    $('.modal').removeClass('d-none');
    $('.modal').addClass('d-block');
})
$('#close-nav').click(function()
{
    $('.links-navbar-sm').addClass('d-none');
    $(this).addClass('d-none');
    $('#nav-sm').removeClass('d-none')
})