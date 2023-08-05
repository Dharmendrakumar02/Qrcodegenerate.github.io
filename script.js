const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generatebtn');
const downloadBtn = document.getElementById('downloadbtn');
const qrbody = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
    
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
})

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }else{
        alert("Please type a text massage or url generate QR code");
    }
}

function generateQRCode(){
    qrbody.innerHTML="";
    new QRCode(qrbody,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
        correctLevel : QRCode.CorrectLevel.H
    });
}

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');

    if(img!==null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }else{
        
    }

})
