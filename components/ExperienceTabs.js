'use client';

import { useState } from 'react';
import { BookOpen, CheckCircle2, BarChart3, Trophy, PlayCircle, FileQuestion } from 'lucide-react';

const states = {
  Learn: {
    icon: BookOpen,
    title: 'Learn with a clear path',
    description: 'Structured chapters, focused explanations and resources keep the learning journey easy to follow.',
    active: 'Key Concepts',
    badge: 'Video lesson',
    metric: '12 min lesson'
  },
  Practice: {
    icon: FileQuestion,
    title: 'Practice while the concept is fresh',
    description: 'Move directly into topic-wise questions with clear explanations and a focused practice flow.',
    active: 'Practice Questions',
    badge: 'Practice set',
    metric: '18 questions'
  },
  Track: {
    icon: BarChart3,
    title: 'Know exactly where you stand',
    description: 'Simple progress indicators help learners understand what is complete and where to focus next.',
    active: 'Progress Summary',
    badge: 'Progress view',
    metric: '72% complete'
  },
  Succeed: {
    icon: Trophy,
    title: 'Build confidence through consistency',
    description: 'Visible milestones and steady practice turn small wins into meaningful learning momentum.',
    active: 'Chapter Quiz',
    badge: 'Milestone',
    metric: 'Ready to test'
  }
};

export default function ExperienceTabs() {
  const [active, setActive] = useState('Learn');
  const current = states[active];
  const Icon = current.icon;

  return (
    <div className="experience-shell">
      <div className="experience-tabs" role="tablist" aria-label="Learning experience">
        {Object.keys(states).map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === item}
            className={active === item ? 'active' : ''}
            key={item}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="experience-card card">
        <aside className="chapter-nav" aria-label="Chapter navigation">
          <span className="overline">Chapter 3</span>
          {['Introduction', 'Key Concepts', 'Examples', 'Practice Questions', 'Progress Summary', 'Notes', 'Chapter Quiz'].map((item, i) => (
            <div key={item} className={current.active === item ? 'active' : ''}>
              <span>{i + 1}</span>{item}
            </div>
          ))}
        </aside>

        <div className="lesson-preview">
          <div className="lesson-preview-top">
            <div>
              <span className="eyebrow-mini">{current.badge}</span>
              <h3>{current.title}</h3>
            </div>
            <span className="metric-pill">{current.metric}</span>
          </div>
          <p>{current.description}</p>
          <div className="video-stage">
            <div className="video-orb"><PlayCircle size={34} fill="currentColor" /></div>
            <div className="video-lines">
              <i></i><i></i><i></i>
            </div>
          </div>
        </div>

        <aside className="lesson-side-panel">
          <div className="lesson-side-title"><Icon size={18} /> What happens next</div>
          {['Complete the lesson', 'Practice the topic', 'Review your score'].map((item, index) => (
            <div className="side-step" key={item}>
              <span>{index + 1}</span>
              <div>
                <strong>{item}</strong>
                <small>{index === 0 ? 'Stay focused on one concept.' : index === 1 ? 'Apply the idea immediately.' : 'Use feedback to improve.'}</small>
              </div>
            </div>
          ))}
          <div className="lesson-status"><CheckCircle2 size={17} /> Progress saved automatically</div>
        </aside>
      </div>
    </div>
  );
}
