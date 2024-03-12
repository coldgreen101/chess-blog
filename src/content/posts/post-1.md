---
title: 'Game Analysis - Bezirksliga Mitte (vs. SSV Vimaria 91 Weimar)'
pubDate: 2024-03-11
description: 'Game analysis of my 7th league round :)'
author: 'Grkinic, Domjan'
image:
  url: '/game_analysis.jpeg'
  alt: 'Boy with his chess set'
tags: ['analysis', 'league', 'OTB', 'Colle System']
---

## Summary

a) I played reasonably well in the opening, although I was out of book very early on.

b) I outplayed my opponent in an IQP position.

c) I didn't calculate deeply enough at critical moments (over-confidence), giving my opponent chances for holding a draw.

## Analysis

1. **d4 d5** 2. **Nf3 Nf6** 3. **e3**

---

<img src="https://lichess1.org/export/fen.gif?fen=rnbqkb1r%2Fppp1pppp%2F5n2%2F3p4%2F3P4%2F4PN2%2FPPP2PPP%2FRNBQKB1R+b+KQkq+-+0+3&color=black&lastMove=e2e3&variant=standard&theme=green&piece=cburnett" width="600" height="600" alt="position after the first opening moves">

I have only played against this line once before, and in this game I was out of book from this point on.

TODO: Learn and quiz Colle lines on Chessable.

3<span style="color: #00895A">...**c5!**</span>

---

Typical pawn move in this structure to control more of the center!

4. **b3**

---

<img src="https://lichess1.org/export/fen.gif?fen=rnbqkb1r%2Fpp2pppp%2F5n2%2F2pp4%2F3P4%2F1P2PN2%2FP1P2PPP%2FRNBQKB1R+b+KQkq+-+0+4&color=black&lastMove=b2b3&variant=standard&theme=green&piece=cburnett" width="600" height="600" alt="position after 4. b3">

I have never encountered this 4. b3 line before. Initially, I thought it is quite dubious, but it turns out it is theory and it's called the Colle-Zuckertort System.

According to Toth's Chessable course the immediate ...cxd4! is the right approach.
The explanation being: "This is a rare example when releasing tension in the center is benefiting us. After the trade, the bishop on b2 will be biting into granite, having no real prospects!"

Example Chessable variation: (4...<span style="color: #00895A">cxd4!</span> 5. exd4 (5. <span style="color: #FF9500">Nxd4?</span> Note: A mistake due to <span style="color: #00895A">...e5!</span> 6. Nf3 Nc6∓ "and Black dominates the center! Plan of ...Bg4, ...Bd6 and ...O-O gives Black a great position.") ...Nc6 6. Bd3 (denying ...Bf5) ...<span style="color: #00895A">Bg4!</span> 7. Bb2 <span style="color: #00895A">Qa5+!</span> "This check seems silly, as it forces White to play Nbd2, which is what they want to do anyway, but we have a trick or two up our sleeve! 8. Nbd2 <span style="color: #00895A">Nb4!</span> "White is already in trouble since ...Nxd3 is a threat they can't possibly allow." 9.Qe2 (9. <span style="color: #FF9500">Be2?</span> Bxf3 10. Bxf3 Qc7 "and White has no good way to defend the c2 pawn") ...Nxd3+ "obtaining the bishop pair!" 10. Qxd3 e6 11. c3 "A sad necessity, as (11. <span style="color: #FF9500">O-O?</span>"loses the c2 pawn after" ...<span style="color: #00895A">Bf5!</span>") ...Bd6 12. O-O O-O "Black is firmly on top. We can choose to play in the center with ...Bf5 and ...Ne4, but the restrictive ...b7-b5, followed by ...Rac8 is also very attractive")

4...**Nc6** 5. **Bb2 Bf5**

---

Developing the bishop outside the pawn chain.

6. **Bd3 Bg6**

---

Considered exchanging on d3 but didn't want to ease White's development.

7. **O-O cxd4**

---

Struggled to find comfort after: (7...e6 8. Ba3 b6 9. Bb5 (8...<span style="color: #00895A">Qa5!</span> I overlooked this resource which relieves all pressure with tempo!)).

8. <span style="color: #017FC0">**exd4?!**</span> **e6**

---

There are ideas with a c2-c4 pawn break, but the b2-bishop is biting on granite.
(8. <span style="color: #00895A">Nxd4!</span> Seems better since 8... <span style="color: #D93526">e5??</span> doesn't work due to 9. Nxc6 bxc6 10. Bxe5 losing a central pawn.)

9.  <span style="color: #017FC0">**Ne5?!**</span>

---

A rather unprincipled move, moving an already developed piece while the b2-knight remains asleep.
A better move would be (9. Nbd2)

9...**Bxd3** 10. **Qxd3** **Bd6** 11. **Nd2** **O-O** <span style="color: #FF9500">12. **c4?**</span>

---

I would assume my opponent planned recapturing with 13. <span style="color: #D93526">bxc4??</span>, but Black has tactical resources winning a piece.

13. <span style="color: #FF9500">**Qe3?**</span>

---

(13. <span style="color: #00895A">Ndxc4!</span> and I don't see anything wrong recapturing the pawn with the knight.)

(After 13.<span style="color: #D93526">bxc4??</span> comes <span style="color: #00895A">Bxe5!-+</span> exploting the pin on the d-file and winning a piece!)

13... **Nd5** 14. **Qf3** <span style="color: #017FC0">**cxb3?!**</span>

---

I calculated 14...<span style="color: #00895A">c3</span> first and saw that I am winning a piece after 15. Bxc3 <span style="color: #D93526">Qxc3??</span> <span style="color: #00895A">Bb4!</span> 17. Qe3 Nxe5 18. Qxe5 (18. dxe5 Qxd2-+) Bxd2-+

After seeing that line, I saw a seemingly "better" option for White: <span style="color: #017FC0">15.Nxc6?!</span> and I thought this move ruins the party since I don't have Bb4 ideas anymore, but in fact it is an innaccuracy because of <span style="color: #00895A">Qc7!</span> 16. Bxc3 Bxh2+ 17. Kh1 Qxc6-+

The best for White seems to be: 15. Bxc3 Nxc3 16. <span style="color: #00895A">Nxc6!</span> and the resulting position is unclear.

15. <span style="color: #017FC0">**Nxb3?!**</span>

---

I think an inaccuracy because 15. Qxb3 seems more natural attacking the b7-pawn. Also the knight may be needed on the kingside.

...**Rc8** **16. Rac1** **<span style="color: #017FC0">Nce7?!</span>**

---

On second thought my reluctancy to switch the pawn structure was a bit overexaggerated in the game. I wanted to keep the IQP structure at all costs, which was a mistake IMO. Since after: (16...<span style="color: #00895A">Nxe5!</span> 17. dxe5 Be7⩱ -- There are absolutely no problems for Black here, because there is no apparent kingside attack for White. The White minor pieces are stuck on the queenside not having much to do on that side of the board. Also, the b2-bishop is still stuck behind the pawn, which is on a dark square.)

17. <span style="color: #FF9500">**h4?**</span>

---

Seemed to me unnecessary, since White has only two pieces for a kingside attack which is very slow. After this move, I was getting confident about my chances.

17... **<span style="color: #017FC0">Ng6?!</span>**

---

An inaccuracy since: 17...<span style="color: #00895A">Nf5!</span> attacks the h4-pawn as well, but it doesn't walk into 18. h5 with tempo.

18. **h5** **<span style="color: #00895A">Nh4!</span>**

---

Causing trouble with the knights on the kingside.

19. **Qe4** **<span style="color: #00895A">Qg5!</span>**

---

Getting the queen into the attack and outnumbering the defenders.

20. **<span style="color: #D93526">g4??</span>**

---

Exposing the king too much, I initially thought my opponent played with the idea of pushing f2-f4 next move.

20. g3 is better since h5 is immune to capture and it is less exposing for White's king.

20...**<span style="color: #017FC0">Bxe5?!</span>**

---

In hindsight a really unnecessary move since the bishop still has the potential to become a great attacking piece.
The reason I took is so the f4 push becomes impossible due to Qxg4+. Instead I would achieve the same thing with: 20...<span style="color: #00895A">Nf4!</span> keeping the bishop and stopping the f4 push at the same time!

21. **dxe5** **Nf4** 22. **f3** **<span style="color: #D93526">Nxh5??</span>**

---

With this hasty move, I gave away my advantage.

23. **<span style="color: #D93526">Kh2??</span>**

---

Tries to get out of the pin, but this creates more problems for White.

Instead: 23. <span style="color: #00895A">Rxc8!</span> Rxc8 24. <span style="color: #058686">Bc1!!</span> -- After this brilliant retreating move which I didn't spot in the game, the position is equal.

I initially saw 23. <span style="color: #D93526">Qxb7??</span> <span style="color: #00895A">Qe3!</span> and got really excited since I was worried White can take the b7-pawn attacking my rook. I failed to see White's brilliant resource instead. 25. <span style="color: #D93526">Rf2??</span> (25. Kh1 Ng3+ 26. Kh2 Nxf1+ ) Qe1+ <span style="color: #D93526">Kh2??</span> Qxf2+ 27. Kh1 Qg2#

## Game Replay

<iframe width="800" height="600" src="https://lichess.org/study/embed/WCyfLvFP/MeSUGH1l" frameborder=0></iframe>
