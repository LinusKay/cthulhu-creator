import { Skill } from "../types/types";

export const skills: Skill[] = [
  {
    key: "accounting",
    label: "Accounting",
    base: 0.05,
    description:
      "Grants understanding of accountancy procedures and reveals the financial functioning of a business or person. Inspecting the books, one might detect cheated employees, siphoned off funds, payment of bribes or blackmail, and whether the financial condition is better or worse than claimed. Looking through old accounts, one could see how money was gained or lost in the past (grain, slave-trading, whiskey-running, etc.) and to whom and for what payment was made.",
    pushexamples:
      "Taking more time to review documents; visiting banks or businesses to validate findings; double checking the math and data. ",
    pushconsequences:
      "Discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a vital part of the accounts is destroyed or lost (perhaps in their tired state the investigator spills coffee over them). \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she might be found having partially eaten the accounts.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "animalhandling",
    label: "Animal Handling",
    base: 0.05,
    description:
      "The ability to command and train domesticated animals to perform simple tasks. The skill is most commonly applied to dogs but may include birds, cats, monkeys, and so on (at the Keeper's discretion). For riding animals, such as horses or camels, the **[Ride](/skills#ride)** skill is used for breaking-in and controlling such mounts.",
    pushexamples:
      "Taking greater personal risk, in terms of getting closer to, or directly handling the animal.",
    pushconsequences:
      "The animal attacks the trainer or someone else nearby, most likely causing damage; the animal escapes. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she might be found behaving like the animal they were trying to control.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "anthropology",
    label: "Anthropology",
    base: 0.01,
    description:
      "Enables the user to identify and understand an individual's way of life through observation. If the skill-user observes another culture from within for a time, or works from accurate records concerning an extinct culture, then simple predictions can be made about that culture's ways and morals, even though the evidence may be incomplete. Studying the culture for a month or more, the anthropologist begins to understand how the culture functions and, in combination with Psychology, may predict the actions and beliefs of those being studied. ",
    pushexamples:
      'Taking more time to study the target/s; going "native" for a period; taking an active role in a ceremony, rite, etc',
    pushconsequences:
      "Being attacked or imprisoned by the people studied, due to some perceived transgression of their laws or social mores; suffering severe side-effects as the result of being involved in a ceremony which involved ingesting psychotropic plants.\n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she will be lost among the culture being studied, for example like Dennis Hopper's photojournalist character in the film Apocalypse Now.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "appraise",
    label: "Appraise",
    base: 0.05,
    description:
      "Used to estimate the value of a particular item, including the quality, material used, and workmanship. Where relevant, the skill-user could pinpoint the age of the item, assess its historical relevance, and detect forgeries.",
    pushexamples:
      "Checking an item’s validity with another expert; conducting testing; researching an item",
    pushconsequences:
      "Accidentally ruining the item in question; bringing the item to the attention of other people, leading to its theft; activating whatever function the item might serve.\n\n&nbsp;\n\n If an insane investigator fails a pushed roll, he or she could destroy the item, believing it to be cursed; alternatively they regard the item as their personal salvation and refuse to give it up to anyone else.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "archaeology",
    label: "Archaeology",
    base: 0.01,
    description:
      "Allows dating and identi cation of artifacts from past cultures, and the detection of fakes. Ensures expertise in setting up and excavating a dig site. On inspecting a site, the user might deduce the purposes and way of life of those who left the remains. **[Anthropology](/skills#anthropology)** might aid in this. Archaeology also helps identify written forms of extinct human languages.",
    pushexamples:
      "Taking more time to study the site or item; conducting further research; consulting another expert",
    pushconsequences:
      "The site is spoiled, with finds ruined through incompetence, vandalism, or theft; some higher authority seizes the site or the finds from your control; publicity leads to the finds being stolen. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she keeps digging deeper, ever deeper—the truth is down there somewhere.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "artcraft_acting",
    label: "Art/Craft (Acting)",
    base: 0.05,
    description:
      "The performer is trained in theatrical and/or film acting (in the modern era, this may also include television), able to adopt a persona, memorize scripts, and utilize stage/movie make-up to alter their appearance (See Disguise skill).",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    group: "",
  },
  {
    key: "artcraft_fineart",
    label: "Art/Craft (Fine Art)",
    base: 0.05,
    description:
      "The artist is accomplished in the art of painting (oils, acrylic, watercolor), as well as sketching in pencil, crayon, or pastels. While serious works of art might take many days or months to complete, the artist may quickly sketch accurate impressions, objects, and people. The skill also denotes a familiarity with the art world, and the artist may be able to determine a particular artist's work, their school, and known history.",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    group: "",
  },
  {
    key: "artcraft_forgery",
    label: "Art/Craft (Forgery)",
    base: 0.05,
    description:
      "Adept at fine detail, the user can produce high quality fake documents, be it a person's handwriting, a bureaucratic form or permit, or a duplicate of a tome. The forger will require suitable materials (inks, grades of paper, etc.) as well as an original from which to copy. A successful roll indicates the forgery will pass a normal, cursory inspection. Someone spending time and thoroughly examining the forgery would use the Appraise skill (opposed by the original forger's skill) when determining if the fake can be spotted",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    group: "",
  },
  {
    key: "artcraft_photography",
    label: "Art/Craft (Photography)",
    base: 0.05,
    description:
      "Covers both still and motion photography. This skill allows one to take clear pictures, develop them properly, and enhance half-hidden detail. In the 1920s, the user is able to prepare the necessary chemicals to make flashpowder (see Dangerous Photography, page 173). In the present day, the skill extends to cover video cameras, video playback equipment, digital photography, and digital editing, where the user is adept at the manipulation of digital images. Radically different versions can be created from an original source, such as changing the location of a person in a photograph, who they are with, and what they are doing. Those proficient may also be able to detect when an image has been manipulated. Regular snapshots do not require a skill roll. Rolls would be required to achieve effective candid photographs, or shots that capture fine detail—especially at long range, at speed,or in low light. This skill can also allow the investigator to determine if a photograph has been tampered with or fabricated, as well as the angle and position from which a photograph was taken.",
    pushexamples:
      "Reworking the object, piece or composition from scratch; conducting further research; checking with another expert.",
    pushconsequences:
      "A vast amount of time and money is wasted in creating a failed attempt; the audience or customer is highly offended or physically injured by some aspect of your work; the critics slam your work and no one desires your services any longer. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she creates a transgressive work that shocks and causes violent reactions in the viewer—perhaps only the most decadent could appreciate it.",
    source: "base",
    restriction: null,
    notes:
      "The investigator sheet contains blank spaces for specializations of this skill, for example: Acting, Barber, Carpenter, Cobbler, Cook, Dancer, Fine Art, Forgery, Morris Dancer, Opera Singer, Painter & Decorator, Photographer, Potter, Sculptor, Writer, Woodwork. \n\n&nbsp;\n\nMany of these examples are skills directly linked to a profession, but the skill may just be a leisure pursuit. You may spend skill points to purchase any skill specialization. The generic Art/Craft  skill cannot be purchased. \n\n&nbsp;\n\nAbility with this skill may enable the making or repair of an item—something typically requiring equipment and time, to be determined by the Keeper if necessary. In a situation where graduations of success might be appropriate, a higher level of success indicates the item made is of high quality and/or precision. \n\n&nbsp;\n\nAn art or craft skill might also be used to make a duplicate or fake item. In such a case, the difficulty level would depend on the intricacy and distinctiveness of the original to be copied. In the case of faking documentation, a specific specialization (Forgery) is used. \n\n&nbsp;\n\nA successful roll might provide information about an item, such as where or when it might have been made, some point of history or technique concerning it, or who might have made it. The holder of a specialization would have a breadth of knowledge within a particular field— knowledge of the subject, its history, and contemporary practitioners, as well as the ability to perform it.",
    group: "",
  },
  {
    key: "artillery",
    label: "Artillery",
    base: 0.01,
    description:
      "skill assumes some form of military training and experience. The user is experienced in the operation of field weapons in warfare, able to work in a crew or detachment to operate the projection of munitions beyond the range of personal weapons. Many weapons of this nature are too large for a single person to operate, and either an individual cannot use the weapon without a crew or the difficulty level should be raised (at the Keeper's discretion, dependent on the type of weapon employed). \n\n&nbsp;\n\nVarious specializations exist, depending on the period setting of the game, including cannon, howitzer, mortar, and rocket launcher.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes: "Uncommon skill. As a combat skill, this cannot be pushed.",
    group: "",
  },
  {
    key: "charm",
    label: "Charm",
    base: 0.15,
    description:
      "Charm takes many forms, including physical attraction, seduction,  flattery, or simply warmth of personality. Charm may be used to compel someone to act in a certain way, but not in a manner completely contrary to that person's normal behavior. Charm is opposed by the Charm or **[Psychology](/skills#psychology)** skills. \n\n&nbsp;\n\nCharm may be used for bargaining, to haggle the price of an item or service down. If successful, the seller is won over and they may well reduce the price a little.",
    pushexamples:
      "Overtly flattering the target with affection; presenting an expensive gift; building trust by imparting a secret. \n\n&nbsp;\n\nRemember this is about being charming: if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used; if threats are used, it may become **[Intimidation](/skills#intimidate)**; or if a protracted discussion ensues, it may become **[Persuasion](/skills#persuade)**. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "The target takes offence and will have nothing further to do with you; the target is associated in some way with your enemies and, while they may play along with you, they also inform on you; a third party intercedes to prevent you from chatting up their girl. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she falls head over heels in love with their target and will act as if the target had successfully used a Dominate spell (see Call of Cthulhu Rulebook) upon them",
    source: "base",
    restriction: null,
    notes: "",
    group: "interpersonal",
  },
  {
    key: "climb",
    label: "Climb",
    base: 0.2,
    description:
      "This skill allows a character to climb trees, walls and other vertical surfaces with or without ropes and climbing gear. The skill also encompasses rappelling. \n\n&nbsp;\n\nConditions, such as firmness of surface, available handholds, wind, visibility, rain, etc., may all affect the difficulty level. \n\n&nbsp;\n\nFailing this skill on the first roll indicates that the climb is perhaps beyond the investigator's capability. Failing a pushed roll is likely to indicate a fall with resultant damage. One successful Climb roll should allow the investigator to complete the climb in almost all cases (rather than requiring repeated rolls). A challenging or longer climb should have an increased difficulty level.",
    pushexamples:
      "Reassessing the climb; taking a longer route; straining one's reach.",
    pushconsequences:
      "Fall and suffer damage (1D6 damage per ten feet onto grass, or 1D10 damage per 10 feet onto concrete); lose a valuable possession as it falls from your pocket (you may not notice this until later); become stranded, unable to go up or down. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she holds on for dear life and screams at the top of their lungs for as long as they can.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "computeruse",
    label: "Computer Use",
    base: 0.05,
    description:
      "This skill allows the investigator to program in various computer languages, retrieve and analyze obscure data, break into a secured system, explore a complicated network, and detect or exploit intrusions, back doors, and viruses. Special manipulation of a computer system may require this roll. \n\n&nbsp;\n\nThe Internet places a wealth of information at the fingertips of an investigator. Use of the Internet to find highly specific or obscure information may require a combined dice roll for Computer Use and Library Use. \n\n&nbsp;\n\nThis skill is not needed to use computers when surfing the Internet, collecting email, or to run regular commercially available software. ",
    pushexamples:
      "Taking longer to develop a program; using another's code as a shortcut; using untested software (e.g. a virus) to exploit a system.",
    pushconsequences:
      "Accidentally erasing the sought-after files, or even corrupting the whole system; leaving evidence or alerting others through your actions; infesting your own computer/network with a virus. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she is lost in cyberspace, and it will require physical intervention to get the person to stop using the computer or look away from the screen.",
    source: "base",
    restriction: "Modern",
    notes: "",
    group: "",
  },
  {
    key: "creditrating",
    label: "Credit Rating",
    base: 0,
    description:
      "A measure of how prosperous and financially confident the investigator appears to be. Money opens doors; if the investigator is attempting to use his or her financial status to achieve a goal then use of the Credit Rating skill may be appropriate. Credit Rating can be used in place of APP to gauge first impressions. (i.e. wealthier people tend to dress in more expensive clothing). \n\n&nbsp;\n\nCall of Cthulhu is not a game that requires money to be carefully tracked; however, it is useful to know the bounds of an investigator's financial reach—for example, can the investigator afford to employ a team of archaeologists and workers to excavate an Egyptian tomb? An investigator's Credit Rating can change over time. Investigators of the Cthulhu Mythos are prone to insanity, and this may lead to loss of employment and thus a lowering of the investigator's Credit Rating score",
    pushexamples:
      "You offer your house and/or other valuables to secure money from a loan shark; you attempt to pressure the bank manager into giving you a loan. ",
    pushconsequences:
      "The loan shark turns nasty and directs his boys to teach you lesson; the bank manager calls the police; you are loaned the money, but it is a ploy to put you in deeper debt with a mobster who plans to buy out your debt and later call on you for a favor. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she loses all faith in capitalism and begins freely handing out his or her money to passersby. ",
    source: "base",
    restriction: null,
    notes:
      "Credit Rating is not so much a skill as a gauge of financial wealth, and should not be ticked as other skills are. A high Credit Rating can be a useful resource in play, and so should be paid for with skill points when creating an investigator. Each occupation has a starting range for Credit Rating, and skill points should be spent to achieve a rating therein. ",
    group: "",
  },
  {
    key: "cthulhumythos",
    label: "Cthulhu Mythos",
    base: 0,
    description:
      "Cthulhu Mythos (00%) is skill reflects understanding of the inhuman (Lovecraftian) Cthulhu Mythos. It is not founded on the accumulation of knowledge as academic skills are. Rather, it represents the opening and tuning of the human mind to the Cthulhu Mythos. Thus, Cthulhu Mythos skill derived from encountering Deep Ones (for example) is transferable to other situations and entities. Also referred to as \"That which man should not know,\" the Cthulhu Mythos is antithetical to human understanding, and exposure to it undermines human sanity. \n\n&nbsp;\n\nNo starting investigator may take points in Cthulhu Mythos as a starting skill (unless agreed with the Keeper). There is no tick-box for Cthulhu Mythos on the investigator sheet, as successful use of the skill does not offer an increase in the investigator's percentiles in the skill. Instead, points in Cthulhu Mythos are gained by encounters with the Mythos that result in insanity, by insane insights into the true nature of the universe, and by reading forbidden books and other Mythos writings. A character's Sanity may never be higher than 99 minus his or her Cthulhu Mythos skill. As Cthulhu Mythos points proliferate, they crowd out Sanity points, and leave the investigator vulnerable. \n\n&nbsp;\n\nWhenever spoor or other evidence of Mythos monsters is found, a successful roll against this skill allows the investigator to identify the entity, deduce something about its behavior, or guess at some property it may possess. A successful Cthulhu Mythos roll might also allow an investigator to remember some fact concerning the Mythos, identify a spell by seeing it cast, remember that a particular spell or piece of information may be found in a particular Mythos tome, or achieve some other task. The Cthulhu Mythos skill may also be used to manifest magical spell-like effects.",
    pushexamples:
      "Getting closer to the creature for a better view; consulting dread tomes, or lore of humans (or otherwise) possessing specialist knowledge; conducting an autopsy to learn more; reading aloud as you retrace the strange cryptograms.",
    pushconsequences:
      "Get too close, exposing oneself to harm or suspicion; unwittingly read aloud a passage from a tome that activates a summoning spell; accidentally corrupt or destroy the evidence being studied. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she experiences a vision or revelation that reveals new truths about the Cthulhu Mythos",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "demolitions",
    label: "Demolitions",
    base: 0.01,
    description:
      "With this skill the user is familiar in the safe use of demolitions, including setting and defusing explosive charges. Mines and similar devices are designed to be easy to set (no roll required) and more difficult to remove or defuse. \n\n&nbsp;\n\nThis skill also encompasses military-grade demolitions (anti-personnel mines, plastique, etc.) \n\n&nbsp;\n\nGiven enough time and resources, those proficient may rig charges to demolish a building, clear a blocked tunnel, and repurpose explosive devices (such as constructing low-yield charges, booby-traps, and so on).",
    pushexamples:
      "Taking until the very last second to defuse the bomb; double-checking all the circuits/connections by hand.",
    pushconsequences:
      "If defusing or removing an explosive device, the consequence of failing a pushed roll is clear—it explodes! If using the Demolitions skill to place charges, the consequence of failing a pushed roll may be a failure to detonate at the right time (or at all), or that the detonation fails to have the desired effect (either too great or too little). \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she devises the most bizarre method of delivering the explosive, such as strapping it to a cat or to themselves.",
    source: "base",
    restriction: null,
    notes: "Uncommon skill",
    group: "",
  },
  {
    key: "disguise",
    label: "Disguise",
    base: 0.05,
    description:
      "To be used whenever you wish to appear to be someone other than whom you are. The user changes posture, costume, and/or voice to enact a disguise, posing as another person or another sort of person. Theatrical makeup may help, as will fake ID. \n\n&nbsp;\n\nNote that to pass as a specific person in a face-to-face meeting with someone who knows the person being imitated is beyond the scope of this skill, and may well indicate the need for a combined skill roll at a higher difficulty (with **[Persuade](/skills#persuade)**, **[Charm](/skills#charm)**, or **[Fast Talk](/skills#fasttalk)**",
    pushexamples:
      "Undergoing a fully immersive and intensive preparation (losing oneself in the role); stealing personal items and utilizing them in the disguise; overt exaggeration to confound the target; feigning a sudden attack of illness to disorientate the observer.",
    pushconsequences:
      "Being arrested; causing offence, leading to violence or criminal charges; finding that the person being imitated is wanted by a criminal gang who come looking for vengeance.\n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, the investigator no longer recognizes his or her own face in the mirror, even when the disguise is removed.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "diving",
    label: "Diving",
    base: 0.01,
    description:
      "The user is trained in the use and maintenance of diving equipment for swimming underwater, including underwater navigation, proper weighting, and emergency procedures. Prior to the invention of the Aqua-Lung in 1942, rigid diving suits were worn with air pumped from the surface through a connecting tube. \n\n&nbsp;\n\nIn the modern age, a scuba diver will be familiar with the physics of diving, air pressure, and the physiological processes that occur when breathing with pressurized air.",
    pushexamples:
      "Pushing the limits of the equipment; methodically double-checking equipment; gaining professional assistance.",
    pushconsequences:
      "become trapped underwater; attacked by sea creatures; suffer the bends. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins to understand whale-song; all you have to do is follow their instructions.",
    source: "base",
    restriction: null,
    notes: "Uncommon",
    group: "",
  },
  {
    key: "dodge",
    label: "Dodge",
    base: 0,
    description:
      "**(Half DEX%)**\n\n&nbsp;\n\nAllows an investigator to instinctively evade blows, thrown missiles, and so forth. A character may attempt to use dodge any number of times in a combat round (but only once per  attack). Dodge can increase through experience, like other skills. If an attack can be seen, a character can try to dodge it. It is impossible to dodge bullets because they cannot be seen when in motion; the best a character can do is to take evasive action that results in being harder to hit (see Diving for Cover in the Call of Cthulhu Rulebook).",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes: "As a combat skill, this cannot be pushed",
    group: "combat",
  },
  {
    key: "driveauto",
    label: "Drive Auto",
    base: 0.2,
    description:
      "Anyone with this skill can drive a car or light truck, make ordinary maneuvers, and cope with ordinary vehicle problems. If the investigator wants to lose a pursuer or tail someone, a Drive roll would be appropriate. \n\n&nbsp;\n\nSome other cultures might replace this skill with a comparative one: the Inuit might use Drive Dogsled, or a Victorian might use Drive Carriage",
    pushexamples:
      "Driving the vehicle to its limit; not slowing down, regardless of the risk.",
    pushconsequences:
      'Crashing; skidding to a halt, unable to proceed; being seen and pursued by the police. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will be found behind the wheel of a stationary vehicle making "brum-brum" noises',
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "electricalrepair",
    label: "Electrical Repair",
    base: 0.1,
    description:
      "Enables the investigator to repair or reconfigure electrical equipment, such as auto ignitions, electric motors, fuse boxes, and burglar alarms. In the present day, this skill has little to do with the **[Electronics](/skills#electronics)** skill. Fixing an electrical device may require special parts or tools. Jobs in the 1920s may call for this skill and for **[Mechanical Repair](/skills#mechanicalrepair)** in combination. \n\n&nbsp;\n\nElectrical Repair may also be used in conjunction with modern explosives, such as blasting caps, C-4 plastic explosives, and mines.\n\n&nbsp;\n\nThese weapons are designed to be easy to deploy; only a fumble result will lead to mis re (remember the roll can be pushed). Defusing explosives is far trickier, as they may be  tted with anti-tamper mechanisms; raise the level of difficulty when disarming explosives—see Demolitions skill.",
    pushexamples:
      "Taking longer to repair or reconfigure the equipment; taking a risky short-cut.",
    pushconsequences:
      "take damage from an electric shock; blow the fuses and plunge the building into darkness; wreck the thing you are working on beyond repair. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she attempts to harness the electrical power of living organisms into the device.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "electronics",
    label: "Electronics",
    base: 0.01,
    description:
      "For troubleshooting and repairing electronic equipment. Allows simple electronic devices to be made. This is a skill for the present day—use Physics and Electrical Repair for electronic developments of the 1920s. \n\n&nbsp;\n\nUnlike the **[Electrical Repair](/skills#electricalrepair)** skill, parts needed for electronics work o en cannot be jury-rigged: they are designed for precise jobs. Often without the right microchip or circuit board, the skill user is out of luck unless they can contrive some form of workaround.",
    pushexamples:
      "Taking longer to construct or repair a device; researching new or other methodologies.",
    pushconsequences:
      "Fry circuitry or other delicate parts; take damage from electric shock; create a device that does something other than what was intended. If an insane investigator fails a pushed roll, he or she becomes paranoid, convinced that every item they come across contains electronic bugging devices: the telephone, the television, the refrigerator. ",
    source: "base",
    restriction: "Modern",
    notes: "",
    group: "",
  },
  {
    key: "fasttalk",
    label: "Fast Talk",
    base: 0.05,
    description:
      "Fast Talk is specifically limited to verbal trickery, deception, and misdirection, such as bamboozling a bouncer to let you inside a club, getting someone to sign a form they haven't read, making a policeman look the other way, and so on. \n\n&nbsp;\n\nThe skill is opposed by **[Psychology](/skills#psychology)** or Fast Talk. A er a brief period (usually a er the fast talker has le  the scene) the target will realize that they have been conned. The effect of Fast Talk is always temporary, though it will last longer if a Hard success is achieved.\n\n&nbsp;\n\nFast Talk may be used to haggle the price of an item or service down. If successful, the seller momentarily thinks that they have struck a good deal; however, if the buyer returns and attempts to purchase another item, the seller may well refuse further haggling and even increase the price in order to recoup what they lost on the previous sale!",
    pushexamples:
      "Getting up close and personal to the target; talking outlandishly, aiming to confuse the target. Remember this is Fast Talk, so if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used; if threats are used, it may become **[Intimidate](/skills#intimidate)**, or if a protracted discussion ensues, it may become **[Persuade](/skills#persuade)**. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "Cause great offence leading to violence, outrage, or criminal proceedings. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins hurling random abusive phrases at people. ",
    source: "base",
    restriction: null,
    notes: "",
    group: "interpersonal",
  },
  {
    key: "fighting_axe",
    label: "Fighting (Axe)",
    base: 0.15,
    description:
      "Use this skill for larger wood axes. A small hatchet can be used with basic brawling skill. If thrown, use the Throw skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_brawl",
    label: "Fighting (Brawl)",
    base: 0.25,
    description:
      "Includes all unarmed fighting and basic weapons that anyone could pick up and make use of, such as clubs (up to cricket bats or baseball bats), knives, and many improvised weapons, such as bottles and chair legs. To determine the damage done with an improvised weapon, the Keeper should refer to the weapons list and pick something comparable.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_chainsaw",
    label: "Fighting (Chainsaw)",
    base: 0.1,
    description:
      "The first gasoline-powered, mass-producedchainsaw appeared in 1927, however earlier versions existed.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_flail",
    label: "Fighting (Flail)",
    base: 0.1,
    description: "Nunchaku, morning stars, and similar medieval weapons.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_garrote",
    label: "Fighting (Flail)",
    base: 0.15,
    description:
      "Any length of material used to strangle. Requires the victim to make a Fighting Maneuver to escape, or suffer 1D6 damage per round.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_spear",
    label: "Fighting (Spear)",
    base: 0.2,
    description:
      "Lances and spears. If thrown, use **[Throw](/skills#accounting)** skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_sword",
    label: "Fighting (Sword)",
    base: 0.2,
    description: "All blades over two feet in length.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "fighting_whip",
    label: "Fighting (Whip)",
    base: 0.05,
    description: "Bolas and whips.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Fighting skill denotes a character's skill in melee combat. You may spend skill points to purchase any skill specialization. The generic Fighting skill cannot be purchased. Choose Fighting specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\n Those starting the game with a Fighting (Brawl) skill of 50% or higher may wish to choose some type of formal training as part of their background to account for his or her skill level. A myriad of fighting styles exist, each with its own pros and cons. Martial arts are simply a way of developing a person's Fighting skill. Decide how the character learned to fight, whether it be formal military training, martial arts classes, or learned the hard way as a result of street-fighting. The term \"brawl\" might feel too crude for a skilled martial artist and could be replaced (with Karate for example) if a player so wished.\n\n&nbsp;\n\n**As a combat skill, this cannot be pushed.**",
    group: "combat",
  },
  {
    key: "firearms_bow",
    label: "Firearms (Bow)",
    base: 0.15,
    description:
      "Use of bows and crossbows, ranging from medieval longbows to modern, high-powered compound bows.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_flamethrower",
    label: "Firearms (Flamethrower)",
    base: 0.1,
    description:
      "Weapons projecting a stream of ignited flammable liquid or gas. May either be carried by the operator or mounted on a vehicle.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_handgun",
    label: "Firearms (Handgun)",
    base: 0.2,
    description:
      "Use for all pistol-like firearms when firing discrete shots. For machine pistols (MAC-11, Uzi, etc.) in modern era games, use the Submachine Gun skill when firing bursts",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_heavyweapons",
    label: "Firearms (Heavy Weapons)",
    base: 0.1,
    description: "Use for grenade launchers, anti-tank rockets, etc.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_machinegun",
    label: "Firearms (Machine Gun)",
    base: 0.1,
    description:
      "Weapons firing bursts from bipods, tripods, and mounted weapons. If single shots are fired from a bipod, use Rifle skill. The differences between assault rifle, submachine gun, and light machine gun are tenuous today.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_rifleshotgun",
    label: "Firearms (Rifle/Shotgun)",
    base: 0.25,
    description:
      "With this skill any type of rifle (whether lever-action, bolt-action, or semi-automatic) or scatter-gun can be fired. Since the load from a shotgun expands in a spreading pattern, the user's chance to hit does not decrease with range, but the damage dealt does. When an assault rifle fires a single shot (or multiple singles) use this skill.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firearms_submachinegun",
    label: "Firearms (Submachine Gun)",
    base: 0.15,
    description:
      "Use this skill when firing any machine pistol or submachine gun; also for assault rifles set on burst or full automatic fire.",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes:
      "Covers all manner of firearms, as well as bows and crossbows. You may spend skill points to purchase any skill specialization. The generic Firearms skill cannot be purchased. Choose specializations appropriate to your investigator's occupation and history.\n\n&nbsp;\n\nNote: as a combat skill, this cannot be pushed.",
    group: "combat",
  },
  {
    key: "firstaid",
    label: "First Aid",
    base: 0.3,
    description:
      "The user is able to provide emergency medical care. This might encompass: applying a splint to a broken leg, stemming bleeding, treating a burn, resuscitating a drowning victim, dressing and cleaning a wound, etc. First Aid cannot be used to treat diseases (where the Medicine skill is required)\n\n&nbsp;\n\nTo be effective, First Aid must be delivered within one hour, in which case it grants 1 hit point. It may be attempted once, with subsequent attempts constituting a pushed roll. Two people can work together to administer First Aid, with a success granted if either one of them rolls a success. Successful use of First Aid can rouse an unconscious person to consciousness. A character is limited to one successful treatment of First Aid and Medicine until further damage is taken.\n\n&nbsp;\n\nWhen treating a dying character, successful First Aid stabilizes him or her for one hour and grants 1 temporary hit point. At the end of the hour, and each hour thereafter, the character must make a successful CON roll to remain stabilized, otherwise (with a failed CON roll) the character is dying and loses the temporary hit point, and must now make a CON roll per round thereafter to stave-off death. If the character survives until the following round, First Aid can be attempted again (by up to two individuals).\n\n&nbsp;\n\nThis can be continued (without constituting a pushed roll) until stabilization or death. First Aid (and only First Aid) can save the life of a dying character, after which they must receive a successful Medicine roll, or be hospitalized. Thus, First Aid is an important skill to have, alongside Medicine, if you wish to be an effective medic.",
    pushexamples:
      "Taking longer to treat the patient; employing high risk methods to stabilize the wound.",
    pushconsequences:
      'Make things worse, causing an additional point of damage. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she feels compelled to "heal" the person, even if it means amputation or worse. In effect their endeavors constitute physical attacks that may lead to murder if they are not stopped.',
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "history",
    label: "History",
    base: 0.05,
    description:
      "Enables an investigator to remember the significance of a country, city, region, or person, as pertinent. A successful roll might be used to help identify tools, techniques, or ideas familiar to ancestors, but little known today.",
    pushexamples:
      "Taking more time to examine; conducting further research; consulting another expert; hiring assistants to conduct detailed research, taking months, and at a huge cost.",
    pushconsequences:
      "Consultations alert your adversaries, who become aware of your intent; your facts are erroneous and lead you into danger; much time and money is wasted on fruitless research. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she is convinced that they are somehow displaced in time, or perhaps they start believing they are living in a historic period, dressing and speaking in an archaic manner.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "hypnosis",
    label: "Hypnosis",
    base: 0.01,
    description:
      "The user is able to induce a trancelike state in a willing target who experiences heightened suggestibility, relaxation, and possible recall of forgotten memories. The limits of hypnotism should be decided by the Keeper to fit their game; it may be that only willing subjects can be hypnotized, or the Keeper may allow it to be used on unwilling targets in a more aggressive manner. Using hypnosis is usually an opposed roll (opposed by the POW or Psychology skill of the target).\n\n&nbsp;\n\nThis skill may be utilized as hypnotherapy on those suffering mental trauma, reducing the effects of a phobia or mania in a patient: successful use means that the patient overcomes the phobia or mania on one occasion. Note that a series of successful hypnotherapy sessions may be needed to fully cure someone of a phobia (minimum of 1D6 sessions, at the Keeper's discretion)",
    pushexamples:
      "Increasing your influence on the target by ensuring their full and undivided attention; assaulting the target's senses with confusing lights or props; the use of drugs to make the target more susceptible to suggestion.",
    pushconsequences:
      "Some past memory or trauma is bought to the surface, causing the target 1D6 Sanity loss; the target falls into a trance, causing them to walk in front of a bus at a later time; the target's mind (or the investigator's mind) is temporarily emptied, allowing possession by a malevolent entity. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, his or her mind regresses to a childlike state until treatment is administered.",
    source: "base",
    restriction: null,
    notes: "Uncommon skill.",
    group: "",
  },
  {
    key: "intimidate",
    label: "Intimidate",
    base: 0.15,
    description:
      "Intimidation can take many forms, including physical force, psychological manipulation, and threats. It is used to frighten or compel a person to act in a certain way. Intimidate is opposed by Intimidate or Psychology.\n\n&nbsp;\n\nBacking up intimidation with a weapon or some other powerful threat or incentive may reduce the difficulty level. When pushing an Intimidation roll, one possible consequence of failure is carrying out one's threat, perhaps beyond the level of that which was intended.\n\n&nbsp;\n\nIntimidate may be used to force down the price of an item or service. If successful, the seller is may reduce the price, or hand the item over free of charge—depending on the situation, they may later report the incident to the police or to members of the local organized crime gang.",
    pushexamples:
      "Causing actual physical harm to the target or to something or someone that the target cares about. Remember that this is Intimidation; if the investigator begins to take an alternative approach, the Keeper may ask for a different skill to be used. If the threats are retracted and the investigator then tries to befriend the target, it may become Charm; or if a protracted and unthreatening discussion ensues, it may become Persuade. Switching from one to the other to gain a second roll still constitutes a pushed roll.",
    pushconsequences:
      "Accidentally pulling the trigger of the gun you're waving in the target's face; the target's mind snaps, resulting in violence or inane babbling,after which no more can be gained; the target simply laughs in your face and won't break no matter what you do; the target somehow turns the tables and intimidates the intimidator. \n\n&nbsp;\n\nIt is important to note that Pushing an Intimidate roll means taking things to the limit. This could involve days of interrogation, or an ultimatum with a gun to the head. Either way, a pushed roll either gains the required information or renders some kind of end to the situation. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she becomes intensely fearful of the target and does their bidding",
    source: "base",
    restriction: null,
    notes: "",
    group: "interpersonal",
  },
  {
    key: "jump",
    label: "Jump",
    base: 0.2,
    description:
      "With success, the investigator may leap up or down vertically, or jump horizontally from a standing or running start. When falling, Jump may be used to lessen the potential fall damage.\n\n&nbsp;\n\nJudgment must be exercised as to what constitutes a regular jump, a hard jump, or an extreme jump (respectively requiring Regular success, Hard success, and Extreme success). As a guide, a Regular success would be required for an investigator to safely leap down vertically to his or her own height, jump horizontally from a standing start across a gap for a distance equal to the jumper's own height, or run and then jump horizontally to a distance of twice the jumper's own height. One might achieve double this distance with an Extreme success, although bear in mind the world record for the long jump is around 29 feet.\n\n&nbsp;\n\nIf falling from a height, a successful Jump prepares for the fall, reducing resultant damage by half.",
    pushexamples:
      "Delaying and taking time to assess the jump; throwing all your weight and force behind the jump—really stretching for it. In some instances a pushed roll is not possible; if one leaps across an abyss one cannot have a second attempt. However, if one is trapped in a pit and jumping to escape, one could have any number of attempts, which would then be summarized by one pushed skill roll.",
    pushconsequences:
      "Fall and suffer physical harm; achieve the jump but a valuable possession (of the Keeper's choice) is dropped in the process. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she will become convinced that they can fly.",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
  {
    key: "language_other",
    label: "Language, Other",
    base: 0.01,
    description:
      "When choosing this skill, the exact language must be specified and written next to the skill. An individual can know any number of languages. The skill represents the user's chance to understand, speak, read, and write in a language other than his or her own.\n\n&nbsp;\n\n Ancient or unknown languages (such as Aklo, Hyperborean, etc.) should not be chosen (unless agreed with the Keeper,) but ordinary Earthly languages may be. The Keeper may raise the difficulty level if archaic speech or writing in that language is encountered. A single successful Other Language roll normally allows comprehension of an entire book.",
    pushexamples:
      "Taking longer to think through the words you want to say; taking long pauses to answer what you have been told; referencing other books to make a translation.",
    pushconsequences:
      "Exaggerated or loud discussions between investigators and third parties alert some enemy faction to the investigators' intentions; a word or phrase is misunderstood (perhaps the meaning is reversed); the listener takes offense to an unintentional slur, and they respond with their fists, or turn everyone in the neighborhood against you. \n\n&nbsp;\n\nIf an insane investigator fails a pushed roll, he or she begins to speak in tongues, or imagines that they are using the Enochian language",
    source: "base",
    restriction: null,
    notes:
      "Suggestions regarding the Other Languages skill:\n\n• At 5% skill a language can be correctly identified without need for a roll.\n\n• At 10% skill simple ideas can be communicated.\n\n• At 30% transactional requests can be understood.\n\n• At 50% skill a person is fluent.\n\n• At 75% skill in a character can pass for a native speaker of a foreign language.\n\n• To identify a present-day human language (unknown to the investigator), use an EDU roll.\n\n• To identify an extinct human language, use an **[Archaeology](/skills#archaeology)** or **[History](/skills#history)** roll.\n\n• To identify an alien language, use a **[Cthulhu Mythos](/skills#cthulhumythos)** or possibly an **[Occult](/skills#occult)** roll.",
    group: "",
  },
  {
    key: "",
    label: "",
    base: 0,
    description: "",
    pushexamples: "",
    pushconsequences: "",
    source: "base",
    restriction: null,
    notes: "",
    group: "",
  },
];
