import Link from 'next/link';
import Shell from '@/components/Shell';
import ExperienceTabs from '@/components/ExperienceTabs';
import PricingCards from '@/components/PricingCards';
import FAQAccordion from '@/components/FAQAccordion';
import {
  GraduationCap, BookOpenCheck, BarChart3, Smartphone, Calculator, FlaskConical,
  BookOpen, Landmark, Laptop, Target, CheckCircle2, Clock3, Heart,
  ListChecks, TimerReset, MessageSquareText, Video, FileText, Check, Play,
  ArrowRight, Trophy, CalendarDays
} from 'lucide-react';

const subjects = [
  { name: 'Mathematics', copy: 'Build problem-solving skills with structured concepts and practice.', Icon: Calculator, plan: 'Free' },
  { name: 'Science', copy: 'Understand ideas through clear explanations, examples and questions.', Icon: FlaskConical, plan: 'Free' },
  { name: 'English', copy: 'Strengthen reading, writing and communication step by step.', Icon: BookOpen, plan: 'Free' },
  { name: 'Social Studies', copy: 'Explore people, places, history and how the world works.', Icon: Landmark, plan: 'Premium' },
  { name: 'Coding & IT', copy: 'Build practical digital skills with guided learning paths.', Icon: Laptop, plan: 'Premium' },
  { name: 'Aptitude', copy: 'Sharpen logic, reasoning and problem-solving confidence.', Icon: Target, plan: 'Premium' }
];

const homeFaq = [
  { q: 'Can I use LOKOAX for free?', a: 'Yes. The Free plan is designed to let learners start with selected subjects, core lessons, limited practice and basic progress tracking.' },
  { q: 'What does Premium include?', a: 'Premium unlocks all available subjects, unlimited practice, full quizzes and assessments, deeper progress tracking and premium learning resources.' },
  { q: 'Can I switch between monthly and yearly billing?', a: 'Yes. The pricing experience supports monthly and annual Premium options. Final billing behavior can be connected to your payment provider at launch.' },
  { q: 'Will my learning progress stay saved?', a: 'The product experience is designed to keep progress tied to the learner account so completed lessons, practice and quiz history remain visible.' }
];

export default function HomePage() {
  return (
    <Shell>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">A smarter way to learn</div>
            <h1 className="display-title">Learn smarter.<br />Practice with purpose.<br /><span className="accent">Improve with confidence.</span></h1>
            <p className="lead">LOKOAX helps students understand concepts, practice with purpose and see their progress clearly — all in one focused learning experience.</p>
            <div className="hero-actions">
              <Link href="/signup?plan=free" className="button button-primary">Start Learning Free <ArrowRight size={17} /></Link>
              <Link href="/#experience" className="button button-secondary"><Play size={16} /> See how it works</Link>
            </div>
            <div className="hero-proof"><div className="proof-dots"><i></i><i></i><i></i><i></i></div><span>Structured learning · focused practice · visible progress</span></div>
          </div>

          <div className="dashboard-mockup" aria-label="LOKOAX learner dashboard preview">
            <div className="dashboard-top">
              <div className="dashboard-brand"><span className="brand-icon"><GraduationCap size={17} /></span> LOKOAX</div>
              <div className="dashboard-greeting"><strong>Good morning, Alex 👋</strong><span>Keep learning. You’re doing great.</span></div>
            </div>
            <div className="dashboard-stats">
              <div className="stat-card"><small>Overall progress</small><strong>72%</strong><div className="mini-progress"><i></i></div></div>
              <div className="stat-card"><small>Study streak</small><strong>14 days</strong><span className="small muted">Keep it going</span></div>
              <div className="stat-card"><small>Tests taken</small><strong>24</strong><span className="small muted">Across subjects</span></div>
            </div>
            <div className="dashboard-main">
              <div className="continue-card"><span>Continue learning</span><h3>Linear Equations</h3><p>Mathematics · Class 10</p><Link href="/signup?plan=free&subject=mathematics" className="button button-primary button-sm">Continue <ArrowRight size={14} /></Link></div>
              <div className="quick-card"><h4>Quick stats</h4><div className="quick-row"><span>Topics completed</span><b>48/65</b></div><div className="quick-row"><span>Practice questions</span><b>1,250</b></div><div className="quick-row"><span>Average score</span><b>86%</b></div></div>
            </div>
            <div className="dashboard-tip">Small steps lead to big results.</div>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div className="container value-grid">
          {[['Expertly Curated','Curriculum organised for clear learning',BookOpenCheck],['Practice with Purpose','Chapter-wise and topic-wise practice',ListChecks],['Track Real Progress','Simple analytics and progress visibility',BarChart3],['Learn Anywhere','Responsive on desktop, tablet and mobile',Smartphone]].map(([title,copy,Icon]) => <div className="value-item" key={title}><span className="value-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
        </div>
      </section>

      <section className="section" id="subjects">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">Explore learning</div><h2 className="section-title">Subjects for every learner’s journey</h2><p>Choose a subject, start with the essentials and move forward at a pace that feels manageable.</p></div><Link className="section-link" href="/signup?plan=free">Create your learning account →</Link></div>
          <div className="subject-grid">
            {subjects.map(({name,copy,Icon,plan}) => <article className="subject-card card" key={name}><span className="subject-icon"><Icon size={23} /></span><h3>{name}</h3><p>{copy}</p><span className={plan === 'Premium' ? 'subject-badge premium' : 'subject-badge'}>{plan}</span><Link href={`/signup?plan=${plan.toLowerCase()}&subject=${encodeURIComponent(name.toLowerCase())}`} className="button button-secondary">Explore <ArrowRight size={14} /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">A simple learning loop</div><h2 className="section-title">How LOKOAX works</h2></div></div>
          <div className="steps-grid">
            <article className="step-card card"><div className="step-head"><span className="step-number">1</span><div><h3>Choose your goal</h3><p>Select the class, subject and learning path you want to focus on.</p></div></div><div className="step-preview choice"><span>✓ Mathematics</span><span>✓ Science</span><span>✓ English</span></div></article>
            <article className="step-card card"><div className="step-head"><span className="step-number">2</span><div><h3>Learn with structure</h3><p>Move through concise lessons, examples and supporting resources.</p></div></div><div className="step-preview mini-video"><div className="mini-video-art"><Play size={22} fill="currentColor" /></div><div><strong>The Carbon Cycle</strong><small>Science · Class 10</small></div></div></article>
            <article className="step-card card"><div className="step-head"><span className="step-number">3</span><div><h3>Practice and improve</h3><p>Use questions, quizzes and feedback to understand what to work on next.</p></div></div><div className="step-preview score-preview"><div><small className="muted">Score improvement</small><strong>+42%</strong></div><div className="bar-stack"><i></i><i></i><i></i><i></i><i></i></div></div></article>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container experience-layout">
          <div className="experience-copy"><div className="eyebrow">Built for real progress</div><h2 className="section-title">A learning experience that stays clear.</h2><p>LOKOAX reduces clutter and keeps the learner focused on the next useful action.</p><div className="check-list">{['Concepts explained clearly','Practice immediately after learning','Progress saved to the learner account','Responsive across devices','Designed for repeatable learning habits'].map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}</div></div>
          <ExperienceTabs />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container"><div className="section-heading"><div><div className="eyebrow">Learner-first design</div><h2 className="section-title">Why the experience feels easier to use</h2></div></div><div className="benefit-grid">
          {[['Learn at your own pace','Revisit lessons and continue exactly where you left off.',Clock3],['Practice with purpose','Move from concepts to focused questions without losing context.',Target],['Track your progress','See completion, scores and activity in one understandable view.',BarChart3],['Build confidence','Turn consistent learning into visible progress and stronger habits.',Heart]].map(([title,copy,Icon]) => <article className="benefit-card card" key={title}><span className="benefit-icon"><Icon size={22} /></span><h3>{title}</h3><p>{copy}</p></article>)}
        </div></div>
      </section>

      <section className="section">
        <div className="container"><div className="section-heading"><div><div className="eyebrow">Flexible plans</div><h2 className="section-title">Start free. Upgrade when you need more.</h2><p>No complicated plan maze. Start with the essentials or unlock the complete learning experience.</p></div><Link className="section-link" href="/pricing">View detailed pricing →</Link></div><PricingCards compact /></div>
      </section>

      <section className="section section-soft" id="practice">
        <div className="container"><div className="section-heading"><div><div className="eyebrow">Purposeful practice</div><h2 className="section-title">Practice that helps you understand what you know.</h2></div></div><div className="practice-grid">
          {[['Topic-wise practice','Thousands of structured questions can be organised by topic and chapter.',['Multiple question types','Clear explanations','Learn from mistakes'],ListChecks],['Mock tests','Simulate focused test conditions and review performance afterwards.',['Full-length tests','Timed practice','Performance review'],TimerReset],['Doubt support','Give learners a clear route to ask for help when they get stuck.',['Support requests','Helpful explanations','Learning context'],MessageSquareText]].map(([title,copy,points,Icon]) => <article className="practice-card card" key={title}><span className="practice-icon"><Icon size={21} /></span><h3>{title}</h3><p>{copy}</p><ul>{points.map((p)=><li key={p}>{p}</li>)}</ul></article>)}
        </div></div>
      </section>

      <section className="section">
        <div className="container"><div className="section-heading"><div><div className="eyebrow">Progress that makes sense</div><h2 className="section-title">See what is moving forward.</h2></div></div><div className="progress-grid">
          <article className="progress-card card"><h3>Overall progress</h3><div className="progress-ring"><strong>72%</strong></div><p className="small muted" style={{textAlign:'center'}}>You’re on track. Keep going.</p></article>
          <article className="progress-card card"><h3>Subject performance</h3>{[['Mathematics',78,'#2477f3'],['Science',64,'#16a36a'],['English',82,'#7c4dff'],['Social Studies',58,'#f59e0b']].map(([name,val,color])=><div className="subject-score" key={name}><span>{name}</span><div className="score-line"><i style={{width:`${val}%`,background:color}}></i></div><b>{val}%</b></div>)}</article>
          <article className="progress-card card"><h3>Achievements</h3><Trophy size={31} color="#f59e0b" /><div className="achievement-number">7 Badges</div><span className="small muted">Earned</span><div className="achievement-stars">★ ★ ★</div></article>
          <article className="progress-card card"><h3>Learning streak</h3><div className="streak-title"><CalendarDays size={27} color="#2477f3" /><strong>14 Days</strong></div><p className="small muted">Keep the momentum going.</p><div className="week-row">{['M','T','W','T','F','S','S'].map((d,i)=><span className="day-dot" key={`${d}-${i}`}>{d}<i>{i<5?'✓':'·'}</i></span>)}</div></article>
        </div></div>
      </section>

      <section className="section section-soft">
        <div className="container"><div className="section-heading"><div><div className="eyebrow">Everything in one place</div><h2 className="section-title">The tools learners need to keep moving</h2></div></div><div className="feature-tool-grid">
          {[['Interactive video lessons','Concepts presented in a focused format',Video],['Smart practice sets','Questions organised by topic and chapter',ListChecks],['Detailed progress views','Activity, scores and completion in context',BarChart3],['Notes & study materials','Supporting resources available alongside lessons',FileText]].map(([title,copy,Icon])=><article className="tool-card card" key={title}><div><Icon size={20}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div></div>
      </section>

      <section className="section">
        <div className="container faq-home-grid"><div className="faq-home-copy"><div className="eyebrow">Frequently asked questions</div><h2 className="section-title">Questions before you start?</h2><p>Get the essentials here, or visit the full Help Center for account, billing and technical questions.</p><Link href="/faq" className="button button-secondary">View all FAQs</Link></div><FAQAccordion items={homeFaq} /></div>
      </section>

      <section className="cta-section">
        <div className="container"><div className="cta-banner"><div><h2>Ready to start learning?</h2><p>Create your account, choose a subject and experience the learning flow for yourself.</p><Link className="button button-primary" href="/signup?plan=free">Start Learning Free <ArrowRight size={16}/></Link></div><div className="cta-photo"><img src="/images/student-male.png" alt="Student ready to learn" /></div><div className="cta-list"><strong>Learn → Practice → Improve</strong>{['Structured lessons','Focused practice','Visible progress','One learner account'].map((item)=><span key={item}><Check size={15}/>{item}</span>)}</div></div></div>
      </section>
    </Shell>
  );
}
