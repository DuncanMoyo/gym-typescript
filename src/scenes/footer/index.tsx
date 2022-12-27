import Logo from '@/assets/Logo.png'

type Props = {

}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16' >
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex' >
        <div className='mt-16 basis-1/2 md:mt-0' >
          <img alt='logo' src={Logo} />
          <p className='my-5' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis est nesciunt, quisquam libero perferendis omnis quis iste consequatur quae quo adipisci obcaecati tempora repudiandae dolorem sit aperiam officiis porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur ipsam dolorum. Nemo nisi, porro, tempore molestiae inventore aliquid, quo illum itaque ipsam necessitatibus odio voluptas mollitia odit voluptatibus? Delectus.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0' >
          <h4 className='font-bold' >LINKS</h4>
          <p className='my-5' >Lorem ipsum dolor</p> 
          <p className='my-5' >Perferendis omnis quis</p> 
          <p className='my-5' >Sed corporis est nesciunt</p>  
          <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0' >
          <h4 className='font-bold' >CONTACT US</h4>
          <p className='my-5' >Tempus metus mattis madjes volk ragnarok</p>
          <p>(+27)61 111 2222</p> 
        </div>
      </div>
    </footer>
  )
}

export default Footer