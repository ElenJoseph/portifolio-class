const name = "Elen";
// calling date method to get current date and time
const date = new Date();

// then calling get full year to get the year of that particular time
const year = date.getFullYear();


var Nav = document.getElementById("nav");

//adding code to Nav using inner HTML
Nav.innerHTML = `<ul>
            <!--           logo here-->
            <li ><img src="images/logo.png" height="40px" alt="Elen Portfolio website"></li>
<li><a href="index.html" Title="This is my home page. ">Home</a></li>
            <li><a href="about.html" Title="This is about me. ">About</a></li>
            <li><a href="portifolio.html" Title="This is my portfolio. ">Portfolio</a></li>
            <li><a href="contact-us.html" Title="This is my contact page. ">Contact</a></li>
            <!--            social icons here -->
 <li class="social">
            <a href="https://www.facebook.com/" target="_blank"><img src="images/facebook.jpeg" alt="Elen Facebook" width="30px"></a>
            <a href="https://www.instagram.com/trips.n.tipss/?hl=pt" target="_blank"><img src="images/instagram.jpeg" alt="Elen Instagran" width="30px"></a>
            <a href="https://www.youtube.com/channel/UCLgSZoteWL6lx6vjBr_fOTw?view_as=subscriber" target="_blank"><img src="images/youtube.jpeg" alt="Elen Instagran" width="30px"></a>  
 </li>
        </ul>`;

var Footer = document.getElementById("footer");
Footer.innerHTML = `<p> All Rights Reserved ${name} 
            Copyrxight © ${year}-${year+5}</p>`;

function show() {
    var msg = document.getElementById('alert');
    msg.style.display = "block";
    return msg.innerHTML = `Thanks for your Message we will get back to you Shortly!`;
}
