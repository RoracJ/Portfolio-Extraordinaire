import myImage from '../assets/roracj.jpg';

function AboutMe() {
  return (
    <section>
      <img src={myImage} alt="Rorac Johnson" style={{ width: '200px', height: 'auto', borderRadius: '50%' }} />
      <p>I'm a baby developer just trying to learn all I can!</p>
    </section>
  );
}

export default AboutMe;

