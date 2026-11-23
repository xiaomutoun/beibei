import { useState } from 'react';
import firstSceneImage from '../assets/election/first_scene.PNG';
import charlotteImage from '../assets/election/charlotte.PNG';
import newspaperImage from '../assets/election/bird_newpaper.PNG';

const candidates = [
  {
    name: '1号候选人 - 塔子哥',
    position: 'center',
    actions: [
      '不增加企业和个人的税收，减税，吸引投资，减少公共债务。',
      '对严重的刑事犯人判处终身监禁。',
      '推行一套基于积分制的移民选择性制度，根据工作、住房、枫丹语能力等',
      '新建更多的核反应堆。',
      '全民公投决定是否禁止15岁以下人群使用社交网络。',
      '增大国家对AI的投入。',
    ],
  },
  {
    name: '2号候选人 - 格鲁格鲁',
    position: 'left',
    actions: [
      '对1%最高的遗产继承收重税。',
      '最低工资增加10%。',
      '对高需求地区的租金进行管制，以保障低收入家庭的住房权利。',
      '支持安乐死合法化。',
      '将25万至30万无证工人合法化。',
      '开设足够多的通用枫丹语课程。',
      '向16岁青少年和外国人开放地方选举的投票权。',
      '禁止15岁以下的人使用社交媒体。',
      '通过提高薪酬差距的透明度、加强对歧视性雇主的制裁以及重新评估女性主导的职业，来加强男女同工同酬。',
    ],
  },
  {
    name: '3号候选人 - 庞姨',
    position: 'right',
    actions: [
      '不增加遗产税，对30岁以下的创业者前5年内免征企业所得税。',
      '不支持安乐死合法化。',
      '建立终身监禁制度，确立执法人员自卫推定原则。',
      '除特殊情况外，将无法为无证移民合法化身份。所有决定均以个案处理，不再进行大规模合法化。',
      '只有当申请人能够保证融入枫丹社会、掌握枫丹国语言并尊重枫丹国的法律和习俗时，才有可能授予外国人国籍。',
      '仅在境外处理庇护申请。',
      '防止15岁以下的未成年人拥有社交网络账户。',
      '终止将强奸未成年人视为轻罪的做法，取消对累犯家庭的家庭津贴。',
    ],
  },
  {
    name: '4号候选人 - 梅爷',
    position: 'left',
    actions: [
      '逐步退出核能，发展可再生能源，减少温室气体排放',
      '加大对富人的征税，加大对遗产继承的税。',
      '最低工资增加10%，逐步恢复60岁退休，恢复每周35小时的法定工作时间。',
      '采取人道主义的移民政策，对没有合法身份的工人、学生和学龄儿童父母提供合法身份。',
      '对于房租，在全国范围内实施租金管制，并在主要城市降低租金。',
      '支持安乐死合法化。',
      '废除预科课程制度，恢复所有高中毕业生攻读硕士学位的权利，而无需经过筛选。',
      '建立从本科到博士的免费高等教育制度，不分学生国籍。',
      '通过国家垄断，将医用和娱乐用大麻的消费、生产和销售合法化并加以规范。',
      '保证所有在枫丹出生的儿童享有完整的出生公民权，并促进获得枫丹国籍。',
      '为非枫丹语使用者开发扫盲项目和枫丹语课程。',
      '确立外国人在地方选举中的投票权。',
      '加大对不尊重男女同工同酬公司的经济和刑事处罚力度（罚款和拒绝授予公共合同）。',
    ],
  },
  {
    name: '5号候选人 - 雷大叔',
    position: 'right',
    actions: [
      '降低企业的生产税。',
      '废除租金上限机制，让房东和租户在签订租赁合同时自由确定租金。',
      '枫丹人公投来决定是否允许安乐死合法化。',
      '将刑事责任年龄降低至十五岁。',
      '废除一切形式的出生地公民权,不再允许18岁自动获得公民权。',
      '对最危险、再犯风险最高的个体强制进行化学阉割。',
      '对有子女家庭的房贷利息进行部分减免。',
    ],
  },
];

function Election() {
  const [showCandidates, setShowCandidates] = useState(false);
  const [candidatePositions, setCandidatePositions] = useState<Record<string, string>>({});
  const [guessSubmitted, setGuessSubmitted] = useState(false);
  const [positionGuessError, setPositionGuessError] = useState('');

  const positionNames: Record<string, string> = {
    left: '左翼 Left',
    center: '中间 Center',
    right: '右翼 Right',
  };

  const submitPositionGuess = () => {
    if (Object.keys(candidatePositions).length < candidates.length) {
      setPositionGuessError(`请完成全部 5 位候选人的选择（已选择 ${Object.keys(candidatePositions).length} 位）`);
      setGuessSubmitted(false);
      return;
    }
    setPositionGuessError('');
    setGuessSubmitted(true);
  };

  const guessedCandidateCount = Object.keys(candidatePositions).length;
  const correctCandidateCount = candidates.filter(
    (candidate) => candidatePositions[candidate.name] === candidate.position,
  ).length;

  return (
    <section className="election-page">
      <header className="election-intro">
        <h1>枫丹独家报道：水之国的最后一场审判</h1>
        <p>继摩拉克斯将璃月交还给人类之后，那维莱特也开始思考，枫丹是否应该进入一个不再由超越人类的存在掌握最高权力的时代</p>
      </header>
      {!showCandidates ? (
        <>
          <div className="election-story">
            <article className="election-scene">
              <h2>第一幕：最高审判官的宣告</h2>
              <img className="election-scene-image" src={firstSceneImage} alt="最高审判官在歌剧院向枫丹公民宣告改革" />
              <p>枫丹廷，欧庇克莱歌剧院。这一天，歌剧院没有举行歌剧，也没有审判任何罪犯。</p>
              <p>所有人都收到了来自最高审判官那维莱特的邀请。芙宁娜坐在观众席的第一排，旁边是克洛琳德、娜维娅、夏洛蒂和莱欧斯利。</p>
              <p>那维莱特站在审判席前，手里没有拿着审判文件。他沉默了片刻，开口说道：</p>
              <blockquote>
                <p>各位枫丹的公民，我今天召集诸位，并不是为了审判某个人。</p>
                <p>在过去的岁月里，我曾以最高审判官的身份，维持这个国家的法律与秩序。我见证过枫丹的繁荣，也见证过它的灾难。我曾经认为，只要法律足够公正，只要审判足够严谨，这个国家便能够长久地延续下去。</p>
                <p>然而，我逐渐意识到一个问题：一个国家的未来，究竟应该由一位拥有漫长生命、强大力量和丰富经验的存在来决定，还是应该由生活在这个国家中的人们共同决定？</p>
              </blockquote>
              <p>歌剧院内鸦雀无声。那维莱特接着说道：</p>
              <blockquote>
                <p>我不是人类。我拥有远超常人的寿命，也拥有足以改变自然秩序的力量。但正因为如此，我认为我不应该永远站在所有人的上方。</p>
                <p>从今天起，我将启动枫丹的政治改革。我希望将国家的行政权力交还给枫丹人民。</p>
              </blockquote>
              <p>全场震惊。夏洛蒂立刻举起了相机，芙宁娜则瞪大了眼睛。</p>
              <blockquote>
                <p><strong>芙宁娜：</strong>等、等等！那维莱特！你这是要辞去最高审判官的职位吗？</p>
                <p><strong>那维莱特：</strong>不仅如此。我希望枫丹建立一个由公民选举产生的政府。未来，枫丹的最高行政负责人，将不再由神明或任何超越人类的存在指定，而是由人民选举产生。</p>
              </blockquote>
            </article>

            <article className="election-scene">
              <h2>第二幕：蒸汽鸟报的头版</h2>
              <img className="election-scene-image" src={charlotteImage} alt="夏洛蒂拿着相机和报纸" />
              <p>第二天清晨，整个枫丹都沸腾了。蒸汽鸟报的印刷厂通宵工作，夏洛蒂亲自负责头版。</p>
              <img className="election-scene-image" src={newspaperImage} alt="蒸汽鸟报报道枫丹行政权交接的头版" />
              <p>消息传开后，枫丹街头出现了各种讨论。有人欢呼雀跃，有人忧心忡忡，也有人提出质疑：</p>
              <blockquote>
                <p>那维莱特大人治理了这么多年，为什么突然要离开？</p>
                <p>普通人真的有能力管理一个国家吗？</p>
                <p>如果选出一个糟糕的领导人，谁来阻止他？</p>
                <p>难道以后连水龙王都要接受普通人的法律？</p>
              </blockquote>
              <p>而最让人意外的是，芙宁娜竟然成为了第一个公开支持选举的人。</p>
              <blockquote>
                <p><strong>芙宁娜：</strong>既然枫丹曾经经历过那么漫长的谎言，那么现在，我们就应该让每个人都有机会说出自己的真实想法！</p>
              </blockquote>
            </article>
            <article className="election-scene">
              <h2>第三幕：候选人的资格</h2>
              <p>那维莱特宣布枫丹将举行首次全民总统选举之后，临时议会召开了第一次会议。</p>
              <p>会议上，一位议员提出了一个问题：</p>
              <blockquote>
                <p>我们既然要选出一位真正来自人民的总统，那么，为什么不规定候选人必须是没有神之眼的人？</p>
              </blockquote>
              <p>这句话让整个议会陷入了沉默。另一位议员接着说道：</p>
              <blockquote>
                <p>拥有神之眼的人，拥有普通人无法获得的元素力量。他们能够操纵火焰、雷电、冰雪和岩石。</p>
                <p>如果一个人能够凭借超自然力量影响社会，那么他与普通公民之间真的处于同一起跑线上吗？</p>
                <p>我们要选出的，是一位能够代表人民的人，而不是一位拥有特殊力量的英雄。</p>
              </blockquote>
              <p>最终，这项提案获得通过。几天后，临时议会正式公布了五项参选条件：</p>
              <section className="election-bill" aria-labelledby="election-bill-title">
                <h3 id="election-bill-title">枫丹总统选举资格法案</h3>
                <ol>
                  <li>
                    <strong>第一条：公民身份</strong>
                    <p>候选人必须是枫丹合法公民。</p>
                  </li>
                  <li>
                    <strong>第二条：神之眼限制</strong>
                    <p>候选人不得拥有任何元素神之眼，包括已经失去元素力量但仍保留神之眼的人。</p>
                  </li>
                  <li>
                    <strong>第三条：特殊力量限制</strong>
                    <p>候选人不得拥有龙族、魔神或其他超自然血统，也不得依赖特殊超自然能力。</p>
                  </li>
                  <li>
                    <strong>第四条：政治独立</strong>
                    <p>候选人不得接受任何神明、仙人或超自然存在的政治指派。</p>
                  </li>
                  <li>
                    <strong>第五条：公民资格</strong>
                    <p>候选人必须通过公民联署获得参选资格，并公开自己的政治纲领。</p>
                  </li>
                </ol>
              </section>
              <p>那维莱特特别强调：</p>
              <blockquote>
                <p>这项规则不是为了歧视拥有神之眼的人。</p>
                <p>神之眼持有者依然享有完整的公民权利，可以投票、参加议会、担任公职。</p>
                <p>我们只是希望，国家最高行政权力的获得，不再与特殊力量联系在一起。</p>
              </blockquote>
            </article>
          </div>
          <div className="election-page-actions">
            <button type="button" className="election-page-button" onClick={() => setShowCandidates(true)}>
              下一幕：爷来看看都有谁来参选
            </button>
          </div>
        </>
      ) : (
        <>
          <header className="election-candidates-intro">
            <p className="election-candidates-eyebrow">公民联署结果</p>
            <h2>正式参选候选人</h2>
            <p>经过一段时间的联署，五位候选人获得了参选资格。</p>
          </header>
          <div className="election-candidates">
            {candidates.map((candidate) => (
              <article className="election-candidate" key={candidate.name}>
                <header className="election-candidate-header">
                  <h2>{candidate.name}</h2>
                </header>
                <h3>竞选纲领</h3>
                <ul>
                  {candidate.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <section className="election-position-guess" aria-labelledby="election-position-guess-title">
            <h2 id="election-position-guess-title">猜一猜：五位候选人分别属于左翼、中间还是右翼呢？</h2>
            <div className="election-position-options">
              {candidates.map((candidate) => (
                <fieldset className="election-position-choice" key={candidate.name}>
                  <legend>{candidate.name}</legend>
                  {(['left', 'center', 'right'] as const).map((position) => (
                    <label className="election-position-option" key={position}>
                      <input
                        type="radio"
                        name={candidate.name}
                        value={position}
                        checked={candidatePositions[candidate.name] === position}
                        onChange={() =>
                          {
                            setCandidatePositions((current) => ({
                              ...current,
                              [candidate.name]: position,
                            }));
                            setGuessSubmitted(false);
                            setPositionGuessError('');
                          }
                        }
                      />
                      <span>{positionNames[position]}</span>
                    </label>
                  ))}
                </fieldset>
              ))}
            </div>
            <button type="button" className="election-page-button" onClick={submitPositionGuess}>
              爷猜完了，看看对不对
            </button>
            {positionGuessError && (
              <p className="election-position-score" role="alert">
                {positionGuessError}
              </p>
            )}
            {guessSubmitted && (
              <p
                className={
                  guessedCandidateCount === candidates.length &&
                  correctCandidateCount !== candidates.length
                    ? 'election-position-score election-position-score-incorrect'
                    : 'election-position-score'
                }
                role="status"
              >
                {guessedCandidateCount < candidates.length
                  ? `请完成全部 5 位候选人的选择（已选择 ${guessedCandidateCount} 位）`
                  : correctCandidateCount === candidates.length
                    ? '哇！全对！爷就是政治天才！'
                    : 'chovy chovy不全对喔'}
              </p>
            )}
          </section>
          <div className="election-page-actions">
            <button type="button" className="election-page-button secondary" onClick={() => setShowCandidates(false)}>
              太麻烦了，爷不想看了，回去重看剧情
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Election;
