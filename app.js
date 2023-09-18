const cloudinary = require('cloudinary').v2

// cloudinary configuration
cloudinary.config({
    cloud_name: 'dgqhsx0mr', 
    api_key: '438163146211787', 
    api_secret: '-EdyEluXny1xxV-pstMhR1905RM'
});

const uploadImage = './BIP_6439.jpg'

const uploadfile = async()=>{
    try {
        const res =  await cloudinary.uploader.upload(uploadImage)
        console.log(res)
    } catch (e) {
        console.log(e)
    }
  
};
uploadfile()