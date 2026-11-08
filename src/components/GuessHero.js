import { useMemo, useState } from 'react';
import q1 from '../assets/questions/01.PNG';
import q2 from '../assets/questions/02.PNG';
import q3 from '../assets/questions/03.PNG';
import q4 from '../assets/questions/04.PNG';
import q5 from '../assets/questions/05.PNG';
import a1 from '../assets/answers/01.PNG';
import a2 from '../assets/answers/02.PNG';
import a3 from '../assets/answers/03.PNG';
import a4 from '../assets/answers/04.PNG';
import a5 from '../assets/answers/05.PNG';

const questions = [
  { id: 1, image: q1, answerImage: a1, answer: '英雄一', prompt: '第一题' },
  { id: 2, image: q2, answerImage: a2, answer: '英雄二', prompt: '第二题' },
  { id: 3, image: q3, answerImage: a3, answer: '英雄三', prompt: '第三题' },
  { id: 4, image: q4, answerImage: a4, answer: '英雄四', prompt: '第四题' },
  { id: 5, image: q5, answerImage: a5, answer: '英雄五', prompt: '第五题' },
];

function GuessHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState('');
  const [reviewMode, setReviewMode] = useState(false);

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex]);
  const currentAnswer = answers[currentQuestion.id] ?? '';
  const allAnswered = questions.every((question) => (answers[question.id] ?? '').trim() !== '');

  const handleInputChange = (event) => {
    const nextValue = event.target.value;
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: nextValue,
    }));
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedGuess = currentAnswer.trim();
    if (!normalizedGuess) {
      setMessage('请输入你的答案');
      return;
    }

    if (normalizedGuess === currentQuestion.answer) {
      setMessage('回答正确！');
      return;
    }

    setMessage('再想一想，继续猜！');
  };

  const handleNextQuestion = () => {
    setMessage('');
    setCurrentIndex((previous) => (previous + 1) % questions.length);
  };

  const handlePreviousQuestion = () => {
    setMessage('');
    setCurrentIndex((previous) => (previous - 1 + questions.length) % questions.length);
  };

  if (reviewMode) {
    return (
      <section className="guess-hero-card review-mode">
        <div className="guess-hero-header">
          <span className="guess-hero-badge">最终回顾</span>
        </div>

        <div className="guess-hero-review-list">
          {questions.map((question) => {
            const userAnswer = (answers[question.id] ?? '').trim();

            return (
              <div key={question.id} className="guess-hero-review-item">
                <div className="guess-hero-review-column">
                  <img src={question.image} alt={question.prompt} className="guess-hero-review-image" />
                  <span>题目</span>
                </div>

                <div className="guess-hero-review-column">
                  <img src={question.answerImage} alt="答案图" className="guess-hero-review-image" />
                  <span>答案</span>
                </div>

                <div className="guess-hero-review-meta">
                  <strong>{question.prompt}</strong>
                  <p>
                    你的答案： <span>{userAnswer || '未作答'}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button type="button" className="guess-hero-next" onClick={() => setReviewMode(false)}>
          返回答题
        </button>
      </section>
    );
  }

  return (
    <section className="guess-hero-card">
      <div className="guess-hero-header">
        <span className="guess-hero-badge">看图猜英雄</span>
        <span className="guess-hero-counter">
          {currentQuestion.prompt} / {questions.length}
        </span>
      </div>

      <div className="guess-hero-image-wrap">
        <img
          src={currentQuestion.image}
          alt={currentQuestion.prompt}
          className="guess-hero-image"
        />
      </div>

      <form className="guess-hero-form" onSubmit={handleSubmit}>
        <label htmlFor="hero-guess" className="guess-hero-label">
          你的答案
        </label>
        <div className="guess-hero-input-row">
          <input
            id="hero-guess"
            type="text"
            value={currentAnswer}
            onChange={handleInputChange}
            placeholder="输入英雄名字"
            className="guess-hero-input"
          />
        </div>
      </form>

      {message && (
        <p className={`guess-hero-message ${message.includes('正确') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}

      <div className="guess-hero-actions">
        <button type="button" className="guess-hero-previous" onClick={handlePreviousQuestion}>
          上一题
        </button>

        <button type="button" className="guess-hero-next" onClick={handleNextQuestion}>
          下一题
        </button>
      </div>

      {allAnswered && (
        <button type="button" className="guess-hero-review" onClick={() => setReviewMode(true)}>
          爷做完了，看看结果
        </button>
      )}
    </section>
  );
}

export default GuessHero;
