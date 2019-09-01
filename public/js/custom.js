$(document).ready(function () {
    $('.select2').select2();

    showSearchPanel("OutLineTicket");
});

//برای نمایش یا مخفی کردن پنل جستجو
function Toggle(tagId) {
    var x = document.getElementById(tagId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//برای نمایش پنل جستجو هنگامی که روی یکی از دکمه ها کلیک میکنیم
    function showSearchPanel(tagId){
        //غیر فعال کردن تصویر هواپیمای در حال پرواز
        document.getElementById('slider-img').style.display="none";
        switch (tagId) {
            case 'InlineTicket':
                // alert('hello');
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/inline-flight-bg.jpg')";
                document.getElementById('slider-img').style.display="block";

                break;
            case 'OutLineTicket':
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/outline-flight.jpg')"
                document.getElementById('slider-img').style.display="block";
                break;

            case 'TrainTicket':
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/train-bg.jpg')";
                break;

            case 'TourTicket':
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/tour-bg.jpg')";
                break;

            case 'HotelTicket':
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/hotel-bg.jpg')";
                break;

            case 'InsuranceTicket':
                document.getElementById('slider').style.backgroundImage ="url('../img/bgs/Insurance-bg.jpg')";
                break;

        
            default:
                alert('بک گراند مورد نظر یافت نشد.');
                break;
        }

        // alert(tagId);

        document.getElementById('InlineTicket').style.display="none";
        document.getElementById('OutLineTicket').style.display="none";
        document.getElementById('HotelTicket').style.display="none";
        document.getElementById('TourTicket').style.display="none";
        document.getElementById('TrainTicket').style.display="none";
        document.getElementById('InsuranceTicket').style.display="none";

        document.getElementById(tagId).style.display="block";
    }