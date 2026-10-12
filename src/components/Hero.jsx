import { assets } from '../assets';
import { heroLayers } from '../hero-layers';
import { description } from '../data';

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-background" aria-hidden="true">
      <img className="hero-background-base" src={assets.hero.imgImage} alt="" />
      <img className="hero-glow glow-center" src={assets.hero.imgEllipse20} alt="" />
      <img className="hero-glow glow-left" src={assets.hero.imgEllipse22} alt="" />
      <img className="hero-glow glow-right" src={assets.hero.imgEllipse20} alt="" />
    </div>
    <div className="container hero-inner">
      <div className="hero-copy"><h1 id="hero-title">Build Your Skills<br />With Online Course</h1><p>{description}</p><a className="button button-primary" href="#courses">Enroll Now<img src={assets.hero.imgEndIcon} alt="" /></a></div>
      <div className="hero-art-wrap" role="img" aria-label="Student learning online with a laptop, books and a cup of coffee">
        <div className="hero-art" aria-hidden="true">{heroLayers.map(layer => <img key={layer.name} src={assets.hero[layer.name]} alt="" style={{ left: layer.x, top: layer.y }} />)}</div>
      </div>
    </div>
  </section>;
}
