import { useEffect, useState } from 'react'
import './index.css'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
import {v4} from "uuid"

function App() {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList , setimageList]=useState([])
  const imageListRaf = ref(storage , `images/`)
  //ref to images folder where all the img links are avaliabe 

  const uploadImage=(e)=>{
    if (imageUpload == null)  return ; 
    
    //folder create ..unique name given..where created for uploadBytes 
    const imageRaf = ref(storage , `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRaf , imageUpload).then((snapshoot)=>{
      getDownloadURL(snapshoot.ref).then((url)=>{
        setimageList((prev)=>[...prev , url])
      })
    })
  } 

  useEffect(()=>{
    //list avalive hoye jabe then...
    listAll(imageListRaf).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setimageList((prev)=>[...prev , url]
          )
        })
      })
    })
  },[])

  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-white shadow-md">
  <div className="text-4xl mb-4 text-center">
    <h1>Upload Your Images</h1>
  </div>
  
  <div className="flex flex-col items-center">
    <input
      type="file"
      onChange={(e) => setImageUpload(e.target.files[0])}
      className="border p-2 mb-4"
    />
    <button
      type="button"
      onClick={(e) => uploadImage(e)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Upload it !!
    </button>
  </div>

  <div className="flex flex-wrap mt-8">
    {imageList.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Image ${index + 1}`}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
      />
    ))}
  </div>
</div>
    </>
  )
}

export default App

//files array ekta .. onk gula upload kora jabe but amra just first ta nebo and upload korbo 

//`images/${imageUpload.name + v4()}` for--- unique image name 

//  const imageRaf = ref(storage ,  ---image storeage er ekta folder a joma hobe 

// HOW TO UPLOAD TO firebase --- uploadBytes (where , what).promise nae aita ..
//uploadBytes(imageRaf , imageUpload).then(()=>{
//   alert("image uploade!!!!!")
// }).. upload hour por ki korbe sheyta .then() a jabe 

//listAll(imageListRaf).then((response)=>{
// console.log(response)... we dont get url ..firebase has its own function to download url we will 
// get use that url and and then srote it to imagelist for later uses

// Response.items.forEach((item)=>{
//   getDownloadURL(item).then((url)=>{
//     setimageList((prev)=>[...prev , url]
// first every item a dhuke firebase function call kora hoisa ..then ja url paoa gayse ..store it to imagelist ..
// [...prev,url] use kore ..old url copy kore er sathy new url add kora hoisa 
