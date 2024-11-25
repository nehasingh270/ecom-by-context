import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LuEye } from "react-icons/lu";
import { Button, Modal } from 'antd';
import CartContext from '../context/CartContext';

const Home = () => {

  
  let ctx = useContext(CartContext)
      console.log(ctx)
  let search = ctx.searchValue
  console.log(search)

  const [products , setproducts] =useState([]);
  console.log(products)


  let getAllData = async()=>{
     let res = await fetch(`https://dummyjson.com/products?limit=0`)
  
    let data = await res.json();
    console.log(data);

    setproducts(data.products);
  }


  useEffect(()=>{
    getAllData()
  },[])

 const handleClick = (e)=>{
  console.log(e)
 }

//antdesign code for modal
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedObj, setSelectedObj] = useState("")

  const showModal = (ans) => {
    setSelectedObj(ans)
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  //************pagination logic start *******************
  let filteredArr = products.filter((ele)=>ele.title.toLowerCase().includes(search) || ele.category.toLowerCase().includes(search) ||  ele.brand?.toLowerCase().includes(search)  
   )
  console.log(filteredArr)
  const [currentPage, setCurrentPage] = useState(1);
  let itemPerPage = 12;
  let lastPage = currentPage * itemPerPage;
  let firstPage = lastPage - itemPerPage;
  let slicedArr = filteredArr.slice(firstPage, lastPage);
  console.log(slicedArr)
  let noOfPages = Math.ceil(filteredArr.length / itemPerPage);
  console.log(noOfPages)

   const handleNext = () => {
    if(currentPage < noOfPages){
      setCurrentPage(currentPage + 1);
    }
    
  };

   const handlePreview = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  };

  let btnArr = []
  for(let i=1; i<=noOfPages; i++){
    btnArr.push(i)
  }
  console.log(btnArr)

 const handleNumberClick = (ans)=>{
  console.log(ans)
  setCurrentPage(ans)
 }




 //****************pagination logic end **************
 
  
  return (
<div className='bg-blue-300 py-5 '>
      <Modal width={800} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}> 

      
<div className='dark:bg-gray-800 dark:border-gray-700 '>
<div className=" bg-white border flex items-center md-flex-row  flex-col  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
  <img className="rounded-t-lg" src={selectedObj.thumbnail} alt={selectedObj.title} />
  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title : {selectedObj.title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Brand :</b> {selectedObj.category}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1">{selectedObj.description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Discount :</b> {selectedObj.discountPercentage}%</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Price :</b> {selectedObj.price}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-1"><b>Return :</b> {selectedObj.returnPolicy}</p>
  </div>
</div>
<div className='dark:bg-gray-800 dark:border-gray-700'>
 <h3 className="mb-2 p-4 text-xl font-bold  text-gray-900 dark:text-white">Reviews</h3>
 <div className='grid grid-cols-12 gap-2  dark:bg-gray-800 dark:border-gray-700 '>
  {selectedObj?.reviews?.map((ele)=>{
    return <div className='col-span-4 p-4 rounded-lg' key={ele.id}>
    <h4 className="mb-2 text-sm font-bold  text-gray-900 dark:text-white">{ele.reviewerName}</h4>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.reviewerEmail}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.rating}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.comment}</p>
    </div>
  })}
 </div>
  </div>
</div>
      </Modal>


    <div className='grid grid-cols-12 gap-2 mx-3 bg-blue-300  p-10'>
      {
        
        slicedArr.map((ele) => {
       return <Card key={ele.id} className='relative flex flex-col justify-between lg:col-span-3
        md:col-span-4 sm:col-span-6 col-span-12 description'>
       <LuEye className='absolute right-3' onClick={()=>showModal(ele)} size={25} />
       <CardMedia className=' bg-yellow-200'
         component="img"
         alt="green iguana"
         height="140"
         image={ele.thumbnail}/>
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {ele.title}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
         </Typography>
       </CardContent>
       <CardActions>
        
         <button onClick={()=>ctx.addItem(ele)} className='bg-blue-900 text-white rounded-md py-2 px-4 hover:bg-blue-700' size="small">Add To Cart</button>
       </CardActions>
     </Card>
        })
      }
    </div>

{/*******************  pagination code nav ***********************/}

   <nav aria-label="Page navigation example" className='mx-auto'>
  <ul className="flex text-wrap flex-wrap justify-center ">
    <li onClick={handlePreview}>
      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    {
      btnArr.map((nums)=>{
        return  <li onClick={()=>handleNumberClick(nums)}>
        <a href="#" className={nums===currentPage ? `flex items-center justify-center px-3 h-8 leading-tight text-gray-500
         bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-blue-800
          dark:border-gray-700 dark:text-white-400 dark:hover:bg-blue-700 dark:hover:text-white` 
          :
          `flex items-center justify-center px-3 h-8 leading-tight text-gray-500
         bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
          dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white` }>{nums}</a>
      </li>
      })
    }
   
    <li onClick={handleNext}>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>


</div>
    
  )
}

export default Home
