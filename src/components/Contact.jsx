const Contact = () => {
  return (
    <div name="contact" className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4  text-gray-300">
      <form className="max-w-[600px] w-full flex flex-col" action="https://getform.io/f/77dd5da2-abc4-48c2-b736-f4973441e899" method="POST">
        <div className="pb-8">
            <p className="border-b-4 border-pink-700 inline text-4xl font-bold">Contact</p>
            <p className="py-4">// Submit the form below to get in touch with me .</p>
        </div>
        <input className="bg-[#ccd6f6] p-2 outline-none" type="text" placeholder="Name" name="name"/>
        <input className="my-4 p-2 bg-[#ccd6f6] outline-none" type="email" placeholder="Email" name="email"/>
        <textarea className="p-2 bg-[#ccd6f6] outline-none" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;