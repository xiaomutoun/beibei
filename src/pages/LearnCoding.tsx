import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const lessons = [
  {
    title: '1. 一分钟入门编程',
    examples: [
      {
        language: 'python',
        description: '所有程序员学的第一行代码都是 print，它会把括号里的内容显示在屏幕上。',
        code: `print("Hello, World!")  # 显示 Hello, World!`,
      },
      {
        language: 'python',
        description: '上面代码里的#是注释符号，程序运行时会忽略它后面的内容。注释只是给人看的。',
        code: `################### 我是一行很长的注释 ###################`,
      },
    ],
  },
  {
    title: '2. 变量',
    examples: [
      {
        language: 'python',
        description: '变量是用来保存数据的，就跟小时候学的方程变量差不多。',
        code: `x = 16
print(x) # 输出结果是16`,
      },
      {
        language: 'python',
        description: '使用变量是为了后面可以重复使用，比如可以用到print里。',
        code: `game = "英雄联盟"
print("我爱玩" + game) # 输出结果是：我爱玩英雄联盟
print(game + "真好玩") # 输出结果是：英雄联盟真好玩`,
      },
    ],
  },
  {
    title: '3. if条件语句',
    examples: [
      {
        language: 'python',
        description: 'if条件语句可以根据不同的条件执行不同的代码，如果条件成立就执行if下面的代码，否则就执行else下面的代码。elif是else if的缩写，表示如果上面的条件不成立，就判断elif的条件是否成立。',
        code: `time = 18
if time > 17:
    print("该下班啦") # 如果time大于17，就会输出：该下班啦
elif time == 17:
    print("准备要下班啦") # 如果time等于17，就会输出：准备要下班啦
else:
    print("还不到下班的时间哦") # 否则，就会输出：还不到下班的时间哦

# 当然，在这段代码里，会输出：该下班啦`,
      },
    ],
  },
];

function LearnCoding() {
  const [answers, setAnswers] = useState(['', '', '', '', '']);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'unanswered' | null>(null);

  const handleQuizSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (answers.some((answer) => answer.trim() === '')) {
      setFeedback('unanswered');
      return;
    }

    const expectedAnswers = ['2020', 'EDG', '2022', 'BLG', 'T1'];
    const allCorrect = answers.every(
      (answer, index) => answer.trim() === expectedAnswers[index],
    );
    setFeedback(allCorrect ? 'correct' : 'incorrect');
  };

  return (
    <section className="learn-coding-page">
      <header className="learn-coding-intro">
        <p className="learn-coding-eyebrow">从这里开始,成为编程大神</p>
        <h1>人生苦短 我用Python</h1>
        <p>让我们快乐地进行大脑的思维体操吧~</p>
      </header>

      <div className="learn-coding-lessons">
        {lessons.map((lesson) => (
          <article className="learn-coding-card" key={lesson.title}>
            <div className="learn-coding-card-heading">
              <h2>{lesson.title}</h2>
            </div>
            {lesson.examples.map((example, index) => (
              <div className="learn-coding-example" key={`${lesson.title}-${index}`}>
                <p>{example.description}</p>
                <SyntaxHighlighter
                  className="learn-coding-codeblock"
                  language={example.language}
                  style={vscDarkPlus}
                  customStyle={{
                    background: '#020617',
                    borderRadius: '12px',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    margin: 0,
                    overflowX: 'auto',
                    padding: '16px',
                    textAlign: 'left',
                  }}
                >
                  {example.code}
                </SyntaxHighlighter>
              </div>
            ))}
          </article>
        ))}
      </div>

      <section className="learn-coding-quiz" aria-labelledby="learn-coding-quiz-title">
        <h2 id="learn-coding-quiz-title">小测验</h2>
        <form onSubmit={handleQuizSubmit}>
          <fieldset>
            <legend>下面代码根据用户输入的年份来输出谁是世界冠军，5个&lt;填空&gt;的地方分别该填入什么呢？</legend>
            <SyntaxHighlighter
              className="learn-coding-codeblock learn-coding-quiz-codeblock"
              language="python"
              style={vscDarkPlus}
              customStyle={{
                background: '#020617',
                borderRadius: '12px',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                margin: '0 0 12px',
                overflowX: 'auto',
                padding: '16px',
                textAlign: 'left',
              }}
            >
              {`print("S10以后，谁是世界冠军呢？")
year = int(input()) # 用户输入一个年份，这个年份介于2020到2026之间
if year == <填空1>:
    print("DWG")
elif year == 2021:
    print("<填空2>")
elif year == <填空3>:
    print("DRX")
elif year == 2026:
    print("<填空4>")
else:
    print("<填空5>")`}
            </SyntaxHighlighter>
            <div className="learn-coding-quiz-inputs">
              {answers.map((answer, index) => (
                <label className="learn-coding-quiz-option" key={index}>
                  <span>&lt;填空 {index + 1}&gt;</span>
                  <input
                    type="text"
                    value={answer}
                    aria-label={`填空 ${index + 1}`}
                    autoComplete="off"
                    onChange={(event) => {
                      const nextAnswers = [...answers];
                      nextAnswers[index] = event.target.value;
                      setAnswers(nextAnswers);
                      setFeedback(null);
                    }}
                  />
                </label>
              ))}
            </div>
          </fieldset>
          <button type="submit" className="learn-coding-quiz-submit">
            检查答案
          </button>
          <p className="learn-coding-quiz-feedback" aria-live="polite">
            {feedback === 'correct' && '全对了！好棒！！！'}
            {feedback === 'incorrect' && '不全对喔！再好好想想，要注意大小写。'}
            {feedback === 'unanswered' && '请填写全部 5 个空再提交。'}
          </p>
        </form>
      </section>
    </section>
  );
}

export default LearnCoding;
