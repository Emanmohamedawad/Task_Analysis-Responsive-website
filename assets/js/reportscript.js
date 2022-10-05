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

// report-navbar
$('.link-re').click(function()
{
    $(this).addClass('active').siblings().removeClass('active')
})






// ///////////////////////////////////////////////////////////////////Reporting page/////////////////////////////
let parentBox = `<div class="parent-report report position-relative mt-5">
<div class="main-report-box">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <h4>Choose type</h4>
      <Form class="search">
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="search" class="form-control timezone-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <i class="fa-solid fa-magnifying-glass fs-3"></i>
        </div>
      </Form>
      <Form class="radio">
        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>

        <div class="input-group d-flex justify-content-center align-items-center">
        <li class="dr-2">Lorem, ipsum.</li>
        </div>
      </Form>
      <li><button class="dropdown-item d1">done</button></li>
    </ul>
  </div>

  <div class="dropdown-2 d-none">
  <button class="dropdown-toggle form-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-1" aria-labelledby="dropdownMenuButton1">
    <p>Choose child Modules</p>
    <input type="search" class="form-control timezone-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />

    <div class="input-group d-flex justify-content-center align-items-center">
    <input type="radio" name="lorem">
    <label type="radio" name="lorem">Lorem, ipsum 1</label>
    </div>

    <div class="input-group d-flex justify-content-center align-items-center">
      <input type="radio" name="lorem">
      <label type="radio" name="lorem">Lorem, ipsum 1</label>
    </div>
        
  </ul>
  <li><button class="dropdown-item">done</button></li>
</div>

  <span class="text-blue">Show leads</span>
  <i class="fa-solid fa-trash delete"></i>
</div>


<div class="lines">
<div class="line-right pr-2 pr-parent"><span><i class="fa-solid fa-link"></i></span></div>
<div class="line-bottom ch-2 pr-child"><span><i class="fa-solid fa-link"></i></span></div>
</div>
</div>

<!-- append parent module -->
<div class="parentBox-module"></div>

<!-- append child module -->
<div class="childBox-module"></div>

`


let childBox = `<div class="child-report report position-relative">
<div class="main-report-box d-flex align-items-center justify-content-between">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <h4>Choose type</h4>
      <Form class="search">
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="search" class="form-control timezone-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <i class="fa-solid fa-magnifying-glass fs-3"></i>
        </div>
      </Form>
      <Form class="radio">
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 1</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 2</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 3</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 4</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 5</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 6</label>
        </div>
        <div class="input-group d-flex justify-content-center align-items-center">
          <input type="radio" name="lorem">
          <label type="radio" name="lorem">Lorem, ipsum 7</label>
        </div>
      </Form>
      <li><button class="dropdown-item btn-action">done</button></li>
    </ul>
  </div>

  <div class="dropdown-2 d-none">
  <button class="dropdown-toggle form-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-1" aria-labelledby="dropdownMenuButton1">
    <p>Choose child Modules</p>
    <input type="search" class="form-control timezone-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
    <li class="dropdown-item dr-2">Lorem, ipsum.</li>
  </ul>
</div>

  <i class="fa-solid fa-trash delete"></i>
</div>

<div class="lines">
<div class="line-right ch-parent"><span><i class="fa-solid fa-link"></i></span></div>
<div class="line-bottom ch-child"><span><i class="fa-solid fa-link"></i></span></div>
</div>
</div>

<!-- append parent module -->
<div class="parentBox-module"></div>

<!-- append child module -->
<div class="childBox-module"></div>

`




$(document).on( 'click', '#parent', function(){
    $('.parent-module').append(parentBox)
})

$(document).on( 'click', '#child', function() {
    $('.child-module').append(childBox)
});

$(document).on( 'click', '.ch-parent, .pr-parent', function() {
  console.log($(this).parent());

  $(this).parent().closest('.parent-report, .child-report').siblings('.parentBox-module').append(parentBox);
});

$(document).on( 'click', '.ch-child, .pr-child', function() {
  console.log($(this).parent());
  $(this).parent().closest('.parent-report, .child-report').siblings('.childBox-module').append(childBox);
});



$(document).on( 'click', '.delete', function() {
  $('.modal').removeClass('d-none');
  $('.modal').addClass('d-block');
  $(this).parent().closest('.parent-report, .child-report').remove();
})


let drop2 = `
  <div class="dropdown-2">
  <button class="dropdown-toggle form-select" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-1" aria-labelledby="dropdownMenuButton1">
    <p>Choose child Modules</p>
    <input type="search" class="form-control timezone-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    
    <div class="input-group d-flex justify-content-center align-items-center">
    <input type="radio" name="lorem">
    <label type="radio" name="lorem">Lorem, ipsum 1</label>
    </div>

    <div class="input-group d-flex justify-content-center align-items-center">
      <input type="radio" name="lorem">
      <label type="radio" name="lorem">Lorem, ipsum 1</label>
    </div>
        
  </ul>
  <li><button class="dropdown-item d2">done</button></li>
</div>
`

// -------------------------------------------------------popup
$('.fa-trash').click(function()
{
    $('.modal').removeClass('d-none');
    $('.modal').addClass('d-block');
})
// $('#delete2').click(function()
// {
//     $('.modal').removeClass('d-none');
//     $('.modal').addClass('d-block');
// })
$('#false-model-3').click(function(){
    $('.modal').removeClass('d-block');
    $('.modal').addClass('d-none');
})