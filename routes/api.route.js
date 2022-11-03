const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = require('express').Router();

router.get('/products', async (req, res, next) => {
  try{
    const products =await prisma.product.findMany({});
    res.send(products)
  }
  catch(err){
   next(err)
  }
  res.send({ message: 'Ok api is working 🚀' });
});

router.get('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/products', async (req, res, next) => {
  try{
    const productCreated =await prisma.product.create({data:req.body})
    res.json(productCreated);
  }
  catch(err){
    next(err);
  }
  res.send({ message: 'Ok api is working 🚀' });
});

router.patch('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.delete('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


module.exports = router;
