import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS
    }

});

export const sendMail = async (to,subject,text)=>{
    await transporter.sendMail({
        from:`music app 🎶🎵${process.env.USER_EMAIL}`,
        to,
        subject,
        text
    })
};