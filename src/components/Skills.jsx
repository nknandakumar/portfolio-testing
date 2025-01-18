

const Skills = () => {
  return (
    <section className="bg-[#fbf4f4] flex-col py-20 md:py-32 w-[100%] px-6 md:px-12 min-h-screen flex items-center relative z-20 " >
          <div className="text-center mb-16">
          <h2 className="font-main font-semibold text-[40px] md:text-[60px] mb-20 text-[#151515]">
            Skills
          </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              {/**Front-End */}
              <div className="border-2 border-gray-500   font-second rounded-lg p-5  ">
                <h2 className="text-2xl font-semibold mt-[-38px] border-2 border-black bg-slate-50  mb-4  " >Frontend</h2>
                   <span className="h-5 bg-black w-1" ></span>
                <div className="grid grid-cols-2">
                  <span className="skill html "  >
                    HTML
                  </span>
                  <span className="skill css"  >
                    CSS
                  </span>
                  <span className="skill  js"  >
                    JavaScript
                  </span>
                  <span className="skill react"  >
                    React
                  </span>
                  <span className="skill tcss"  >
                    Tailwind CSS
                  </span>
                  <span className="skill redux"   >
                    Redux
                  </span>

                </div>
              </div>
              {/** Backend Section */}
              <div className="border-2 border-gray-500   font-second rounded-lg p-5  ">
                <h2 className="text-2xl font-semibold mt-[-38px] border-2 border-black bg-slate-50   " >Backnd</h2>
                   <span className="h-2 bg-black  my-[-20px] " >|</span>
                <div className="grid grid-cols-2">
                  <span className="skill node"  >
                    Node Js
                  </span>
                  <span className="skill express"  >
                    Express Js
                  </span>
                </div>
                <h2 className="text-2xl font-semibold border-2 border-black bg-slate-50 my-4 " >Database</h2>
                <div className="grid grid-cols-2">
                  <span className="skill sql"  >
                    SQL
                  </span>
                  <span className="skill psql"  >
                    Postgres SQL
                  </span>
                </div>
              </div>
            </div>
       
        </div>
    </section>
  )
}

export default Skills