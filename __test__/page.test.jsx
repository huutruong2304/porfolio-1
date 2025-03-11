import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import SkillBoard from '@/components/skill-board';
import { describe } from 'node:test';

describe('test SkillBoard component', () => {
  const mockSkills = [
    { id: '1', name: 'React', icon: '/react.png' },
    { id: '2', name: 'Javascript', icon: '/javascript.png' },
  ];

  it('should render a Skill board', () => {
    render(<SkillBoard amountYear={'4+'} skills={mockSkills} />);

    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('years experience working')).toBeInTheDocument();
  });

  it('should render skill icons', () => {
    render(<SkillBoard amountYear={'4+'} skills={mockSkills} />);
    const skillImages = screen.getAllByRole('img');
    expect(skillImages.length).toBe(2);
  });

  it('should display correct skills icon with alt text', () => {
    render(<SkillBoard amountYear={'4+'} skills={mockSkills} />);

    // check images have correct alt text
    expect(screen.getByAltText('React')).toBeInTheDocument();
    expect(screen.getByAltText('Javascript')).toBeInTheDocument();
  });

  it('should display without crashing when no skills are provided', () => {
    render(<SkillBoard amountYear={'4+'} skills={[]} />);
    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('years experience working')).toBeInTheDocument();
    const skillImages = screen.queryAllByRole('img');
    expect(skillImages.length).toBe(0);
  });
});

describe('test Portfolio Page', () => {
  it('renders a heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Truong');
  });

  it('render About me section', () => {
    render(<HomePage />);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('render My skills section', () => {
    render(<HomePage />);
    expect(screen.getByText('My skills')).toBeInTheDocument();
  });

  it('render Project section', () => {
    render(<HomePage />);
    expect(screen.getByText('Project')).toBeInTheDocument();
  });

  it('render Contact section', () => {
    render(<HomePage />);
    expect(screen.getByText('Contact me')).toBeInTheDocument();
  });

  it('render footer section', () => {
    render(<HomePage />);
    expect(screen.getByText('Truong Nguyen')).toBeInTheDocument();
  });
});
