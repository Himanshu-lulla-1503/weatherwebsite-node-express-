const express=require('express');
const app =express();
const path=require('path');
const port=process.env.PORT||8000;
const publicdir=path.resolve('./public');
console.log(publicdir);
app.set('view engine','hbs');
app.use(express.static(publicdir));
app.get('/',(req,res)=>{
	res.render('homepage1');

});
app.listen(port,()=>{
	console.log(`Server running at port ${port} `);

});