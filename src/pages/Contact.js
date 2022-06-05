import { Footer } from "../components/Footer";
function Contact ( ) {
  return ( 
    <>
    <main class="pa4 black-80 mt6 mb7">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Contact Us</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="name">Name</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email-address" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="phone-number">Phone Number</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="phone-number" name="phone-number"  id="phone-number"/>
      </div>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sumbit"/>
    </div>
  </form>
</main>
<Footer/>
</>
  )
};

export default Contact;
