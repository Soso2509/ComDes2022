import React from "react";
import Infograph from "../images/infograph1.png";

export default function Article2() {
  return (
    <div className={"article2"}>
      <h1 className={"articleTitle"}>Renteøkning</h1>
      <span className={"articleUnderTitle"}>Lorem ipsum dolor sit amet</span>
      <section className={"articleIntro"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</section>
      <section className={"articleContent"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue lacus viverra vitae congue eu consequat. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu non diam phasellus. Condimentum mattis pellentesque id nibh tortor.</p>
        <br></br>
        <img className={"image"} src={Infograph} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue lacus viverra vitae congue eu consequat. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu non diam phasellus. Condimentum mattis pellentesque id nibh tortor.</p>
        <img className={"image"} src="https://images.unsplash.com/photo-1663688762323-2bc6d8a034e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt=""></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est. In massa tempor nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Scelerisque felis imperdiet proin fermentum. Duis at tellus at urna condimentum mattis. Nunc sed augue lacus viverra vitae congue eu consequat. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna fermentum iaculis eu non diam phasellus. Condimentum mattis pellentesque id nibh tortor.</p>
      </section>
    </div>
  );
}
