
const AboutMe = (props) =>{
 
  return(
    <section className="section py-5 text-center" id={props.contentid}>
          <h3>{props.title}</h3>
    <div className="main py-5 border-top">
      <ul className="d-flex justify-content-center">
        <li><a href="">스마트한 퍼블리셔</a></li>
        
      </ul>
    </div>
    </section>
  )
}

export default  AboutMe;

