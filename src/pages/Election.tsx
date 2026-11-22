import { useState } from 'react';
import firstSceneImage from '../assets/election/first_scene.PNG';
import charlotteImage from '../assets/election/charlotte.PNG';
import newspaperImage from '../assets/election/bird_newpaper.PNG';

const candidates = [
  {
    name: '1号候选人 - 塔子哥',
    focus: '住房与生活成本',
    actions: [
      '增加可负担住房供给，优先支持青年和低收入家庭。',
      '扩大租房补助，并推动更清晰的租赁规则。',
      '改造老旧住宅，提升节能与居住安全。',
    ],
  },
  {
    name: '2号候选人 - 格鲁格鲁',
    focus: '气候与交通',
    actions: [
      '加快发展可再生能源，逐步降低对高碳能源的依赖。',
      '为住宅节能改造提供补贴，帮助家庭减少能源开支。',
      '改善公共交通与乡村交通连接，方便居民日常出行。',
    ],
  },
  {
    name: '3号候选人 - 庞姨',
    focus: '就业与经济',
    actions: [
      '简化小型企业办事流程，降低创业和经营的行政负担。',
      '扩大职业培训机会，帮助求职者掌握紧缺技能。',
      '支持地方产业与学徒岗位，增加本地就业机会。',
    ],
  },
  {
    name: '4号候选人 - 梅爷',
    focus: '生态与财富再分配',
    actions: [
      '逐步退出核能，发展可再生能源，减少温室气体排放',
      '加大对富人的征税，加大对遗产继承的税',
      '最低工资增加10%，逐步恢复60岁退休，恢复每周35小时的法定工作时间',
      '采取人道主义的移民政策，对没有合法身份的工人、学生和学龄儿童父母提供合法身份',
    ],
  },
  {
    name: '5号候选人 - 雷大叔',
    focus: '教育与公共参与',
    actions: [
      '为学校提供更多数字设备与教师培训资源。',
      '公开预算进展和政策执行情况，方便公众监督。',
      '建立定期公民咨询机制，让居民参与地方议题讨论。',
    ],
  },
];

function Election() {
  const [showCandidates, setShowCandidates] = useState(false);

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
        <p>
          经过一段时间的公民联署，最终有五位候选人获得了参选资格。他们分别是：
        </p>
          <div className="election-candidates">
            {candidates.map((candidate) => (
              <article className="election-candidate" key={candidate.name}>
                <header className="election-candidate-header">
                  <h2>{candidate.name}</h2>
                  <span>{candidate.focus}</span>
                </header>
                <h3>行动方案</h3>
                <ul>
                  {candidate.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="election-page-actions">
            <button type="button" className="election-page-button secondary" onClick={() => setShowCandidates(false)}>
              返回故事
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Election;
