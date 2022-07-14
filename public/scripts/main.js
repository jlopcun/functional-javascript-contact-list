function app(state,output){
    R.pipe(
        ...view(state)
    )(output)
}
function view(state){
    
    return state
    .map(contact=>{
        const temp = createTemplate('contactElementTemplate')
        querySelector(temp,'#contactImage').src=contact.img
        querySelector(temp,'#contactName').textContent = contact.name
        return append(temp)
    })
}


app(Object.freeze([
    {
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    },{
        img:"jfla",
        name:"Yilmaz",
        mail:"yilmaz@gmail.com",
        telephone:"+34 111 11 11 11",
        enterprise:"pena Curruncho",
        position:"midfielder"
    }
]),getElem('main'))


