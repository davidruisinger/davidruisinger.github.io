import React from 'react'

import { Laptop } from './svg/accessories'
import {
  Beard,
  Body,
  Eye,
  Eyebrow,
  Hair,
  Head,
  Moustache,
  Mouth,
  NeckShadow,
  Nose,
} from './svg/body'
import { Glasses, Hoodie, Shirt, Suit, UniversityHat } from './svg/clothing'

interface AvatarProps {
  path: string
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({ path }) => {
  const [leftEyebrow, setLeftEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('raised')
  const [rightEyebrow, setRightEyebrow] = React.useState<
    'normal' | 'raised' | 'down'
  >('raised')
  const [leftEye, setLeftEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [rightEye, setRightEye] = React.useState<'open' | 'pinch' | 'close'>(
    'open'
  )
  const [mouth, setMouth] = React.useState<'open' | 'smile' | 'serious'>('open')
  const [beard, setBeard] = React.useState<'normal' | 'raised'>('raised')
  const [cloths, setCloths] = React.useState<'welcome' | 'work' | 'education'>(
    path === `/education` ? 'education' : path === `/work` ? 'work' : 'welcome'
  )

  React.useEffect(() => {
    switch (path) {
      case '/':
        return setHome()
      case '/skills':
        return setSkills()
      case '/work':
        return setWork()
      case '/education':
        return setEducation()
      default:
        setHome()
    }
  }, [path])

  return (
    <>
      <div
        style={{
          height: 280,
          margin: 'auto',
          position: 'relative',
          width: 240,
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            bottom: 0,
            boxShadow:
              '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
            left: 0,
            paddingBottom: '100%',
            position: 'absolute',
            width: '100%',
            zIndex: 0,
          }}
        />
        <svg
          style={{
            left: 0,
            position: 'absolute',
            top: 0,
            zIndex: 1,
          }}
          viewBox="0 0 240 280"
        >
          <mask fill="white" id="Mask">
            <path d="M240,2.84217094e-14 L240,160 C240,226.27417 186.27417,280 120,280 C54.3885717,280 1.07577143,227.343314 0.0160765715,161.984419 L0,160 L0,2.84217094e-14 L240,2.84217094e-14 Z"></path>
          </mask>

          <g mask="url(#Mask)">
            {/* Body */}
            <Body left={24} top={181} />
            <NeckShadow left={98} opacity={0.1} top={182} />

            {/* Clothing */}
            <Shirt active={cloths === 'welcome'} left={24} top={195} />
            <Hoodie active={cloths === 'work'} left={24} top={173.5} />
            <Suit active={cloths === 'education'} left={24} top={183.5} />

            {/* Head */}
            <Head left={65} top={33} />
            <Beard left={73} state={beard} top={92.85} />
            <Mouth left={99} state={mouth} top={153} />
            <Moustache left={95} opacity={1} state={beard} top={146} />
            <Nose left={105} state={beard} top={135} />
            <Eye left={87} state={leftEye} top={97} />
            <Eye left={135} state={rightEye} top={97} />
            <Eyebrow left={81} state={leftEyebrow} top={83} />
            <Eyebrow flip left={132} state={rightEyebrow} top={83} />

            {/* Gear */}
            <Hair left={70} top={29} />
            <Glasses active={cloths === 'work'} left={66} top={88} />
            <Laptop active={cloths === 'work'} left={31} top={171} />
            <UniversityHat active={cloths === 'education'} left={25} top={9} />
          </g>
        </svg>
      </div>
      <button
        onClick={() => {
          setLeftEye('open')
          setRightEye('open')
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setLeftEye('pinch')
          setRightEye('pinch')
        }}
      >
        Pinch
      </button>
      <button onClick={winkLeft}>Wink Left</button>
      <button onClick={winkRight}>Wink Right</button>
      <button
        onClick={() => {
          setMouth('open')
          setBeard('raised')
          setLeftEyebrow('raised')
          setRightEyebrow('raised')
        }}
      >
        Mouth open
      </button>
      <button
        onClick={() => {
          setMouth('smile')
          setBeard('normal')
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Mouth smile
      </button>
      <button
        onClick={() => {
          setMouth('serious')
          setBeard('normal')
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Mouth serious
      </button>
      <button
        onClick={() => {
          setLeftEyebrow('normal')
          setRightEyebrow('normal')
        }}
      >
        Eybrows normal
      </button>
      <button
        onClick={() => {
          setLeftEyebrow('raised')
          setRightEyebrow('raised')
        }}
      >
        Eybrows raised
      </button>
      <button
        onClick={() => {
          setLeftEyebrow('down')
          setRightEyebrow('down')
        }}
      >
        Eybrows down
      </button>
      <button
        onClick={() => {
          setCloths('welcome')
        }}
      >
        Shirt
      </button>
      <button
        onClick={() => {
          setCloths('work')
        }}
      >
        Hoodie
      </button>
    </>
  )

  function setHome(): void {
    setLeftEyebrow('raised')
    setRightEyebrow('raised')
    setLeftEye('open')
    setRightEye('open')
    setBeard('raised')
    setMouth('open')
    setCloths('welcome')
  }

  function setSkills(): void {
    setLeftEyebrow('down')
    setRightEyebrow('down')
    setLeftEye('pinch')
    setRightEye('pinch')
    setBeard('normal')
    setMouth('serious')
    setCloths('welcome')
  }

  function setWork(): void {
    setLeftEyebrow('normal')
    setRightEyebrow('normal')
    setLeftEye('open')
    setRightEye('open')
    setBeard('normal')
    setMouth('smile')
    setCloths('work')
  }

  function setEducation(): void {
    setLeftEyebrow('down')
    setRightEyebrow('normal')
    setLeftEye('close')
    setRightEye('open')
    setBeard('normal')
    setMouth('smile')
    setCloths('education')
  }

  function winkLeft(): void {
    setLeftEye('open')
    setLeftEye('close')
    setLeftEyebrow('down')
    setTimeout(() => {
      setLeftEye('open')
      setLeftEyebrow('normal')
    }, 200)
  }
  function winkRight(): void {
    setRightEye('open')
    setRightEye('close')
    setRightEyebrow('down')
    setTimeout(() => {
      setRightEye('open')
      setRightEyebrow('normal')
    }, 200)
  }
}
