import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "../loading";
import { Modal } from "../modal/modal";
import "./data.css"


export default function Data() {
  const [data, setData] = useState([])
  const [item, setItem] = useState("")
  const [edit, setEdit] = useState("")
  const [loading, setLoading] = useState(false)
  const [ac, setAc] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalId, setMoadlId] = useState()



  const loadData = () => {
    setLoading(true)
    fetch("https://630cbcfd53a833c534339500.mockapi.io/todos").then(x => x.json()).then(res => {
      console.log(res)
      setData(res.reverse())
      setLoading(false)

    })
  }
  useEffect(() => {
    loadData()
  }, [ac])

  // ************* DELETE
  const handleDelete = async (id) => {
    setLoading(true)
    await fetch(`https://630cbcfd53a833c534339500.mockapi.io/todos/${id}`, {
      method: "DELETE"
    }).then(x => x.json()).then(res => {
      console.log(res)
      ac === false ? setAc(true) : setAc(false)
    })
  }
  // ************** EDIT
  const handleEdit = async (id) => {
    setLoading(true)
     await fetch(`https://630cbcfd53a833c534339500.mockapi.io/todos/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: edit })
    }).then(x => x.json()).then(res => {
      console.log(res)
      ac === false ? setAc(true) : setAc(false)
    })
  }
  // ************* COMPLETED
  const handleChange = async (items, id) => {
    setLoading(true)
    await fetch(`https://630cbcfd53a833c534339500.mockapi.io/todos/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isCompleted: !items.isCompleted })
    }).then(x => x.json()).then(res => {
      console.log(res)
      ac === false ? setAc(true) : setAc(false)
    })


  }
  // ************* ADD NEW TODO
  const handlePost = async (e) => {
    setLoading(true)
    e.preventDefault()
   await fetch(`https://630cbcfd53a833c534339500.mockapi.io/todos`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: item, isCompleted: false })
    }).then(x => x.json()).then(res => {
      console.log(res)
      setItem("")
      ac === false ? setAc(true) : setAc(false)
    })


  }
  return (
    <div className="data">
      <Loading show={loading} />
      <form className="dataAdd mt-4 mb-4" onSubmit={(e) => handlePost(e)} >
        <input className="inputAdd me-1" type="text" value={item} onChange={e => setItem(e.target.value)} placeholder="What's the Plan?" />
        <button className="btn btn-primary btndark" disabled={item.length < 3} type="submit" value="Submit" >Add</button>
      </form>
      {data.map((items) => {
        return (
          <div className="card mb-3" key={items.id} >
            <div className="card-body">
              <div className={`${items.isCompleted ? "completedcard" : ""} content`}>
                {items.content}
              </div>
              <div className="card-items">
                <input type={"checkbox"} name="checkbox" id="checkbox" checked={items.isCompleted} onChange={() => handleChange(items, items.id)} />
                <span onClick={() => {
                  setShowModal(true)
                  setEdit(items.content)
                  setMoadlId(items.id)
                }} className="material-symbols-outlined">edit</span>
                <Modal
                  openModal={showModal}
                  closeModal={() => setShowModal(false)}
                  title="Edit"
                  modalFooter={
                    <button
                      onClick={() => {
                        handleEdit(modalId)
                        setShowModal(false);
                      }}
                      disabled={edit.length < 3}
                      className="btn btn-primary"
                    >
                      Uygula
                    </button>}
                >
                  <input type="text" value={edit} onChange={e => setEdit(e.target.value)}  />
                </Modal>
                <span onClick={() => handleDelete(items.id)} className="material-symbols-outlined">delete</span>
              </div>
            </div>
          </div>
        )

      })}
    </div>
  )
}
