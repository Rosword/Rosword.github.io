import { ArrowRight, Github, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1>
            Jinxin Yang
          </h1>
          <p className="hero-title">Undergraduate Researcher in Wireless Communications and Networked Systems</p>
          <p className="hero-lead">
            I am a final-year undergraduate student in Electronic and Electrical Engineering at the SWJTU–Leeds Joint
            School, where I am advised by{" "}
            <a href="https://scholar.google.com/citations?user=iv1w1DkAAAAJ&hl=zh-CN" target="_blank" rel="noreferrer">
              Prof. Xiangyi Chen
            </a>
            . Previously, I was a research intern at the University of California, Santa Cruz, working with{" "}
            <a href="https://mohammad-moltafet.github.io/my-website/" target="_blank" rel="noreferrer">
              Dr. Mohammad Moltafet
            </a>{" "}
            and{" "}
            <a href="https://users.soe.ucsc.edu/~hamid/index.html" target="_blank" rel="noreferrer">
              Prof. Hamid Sadjadpour
            </a>
            . I am currently a research intern at the University of California, Irvine, working with{" "}
            <a href="https://sites.google.com/uci.edu/yanning-shen/home" target="_blank" rel="noreferrer">
              Prof. Yanning Shen
            </a>
            .
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#publications">
              View Publications <ArrowRight size={17} />
            </a>
            <a className="button button--text" href="mailto:el23jy2@leeds.ac.uk">
              Contact Me
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Current academic status">
          <p className="aside-label">Current</p>
          <strong>Research Intern</strong>
          <span>University of California, Irvine</span>
          <hr />
          <strong>BEng Student</strong>
          <span>SWJTU–Leeds Joint School</span>
          <div className="hero-meta"><MapPin size={15} /> Chengdu, China</div>
          <div className="social-row" aria-label="Profile links">
            <a className="social-link" href="https://github.com/Rosword" target="_blank" rel="noreferrer" aria-label="Jinxin Yang on GitHub"><Github size={17} /></a>
            <a className="social-link" href="mailto:el23jy2@leeds.ac.uk" aria-label="Email Jinxin Yang"><Mail size={17} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
