import Image from "next/image"

export default function Card({ text, id, setDragged, list }) {
  function handleDragStart() {
    setDragged({     
        text,
        id          
    })
    // console.log(id);
  }
  return (
    <div  draggable onDragStart={ handleDragStart } className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4'> 
      <div className='flex justify-between'>
        <div className="flex flex-col gap-4">
          <p className='font-medium'>{ text }</p>
          <p className="font-medium">{ id }</p>
        </div>
        <Image src="/static/icons/edit.svg" width={20} height={20} alt="" />
      </div>     

      <div className='flex justify-between'>
        <Image src="/static/images/avatar.png" width={32} height={32} alt="" />        
        <Image src="/static/icons/square.svg" width={20} height={20} alt="" />
      </div>
    </div>
  )
}
