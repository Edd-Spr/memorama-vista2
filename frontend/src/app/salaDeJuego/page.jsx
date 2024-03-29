import React from "react";
import '@/styles/pages/gameView.css'
import NeonCard from '@/components/neonCard'
import Circle0 from '@/components/circle0'
import Circle1 from '@/components/circle1'
import Circle2 from '@/components/circle2'
import Circle3 from '@/components/circle3'
import LeftBarGame from '@/components/leftBar-gameView'
import InfoCard from '@/components/infoCard'

const GameView = () =>(
    <div>

        <Circle0/>
        <Circle1/>
        <Circle2/>
        <Circle3/>
        <LeftBarGame
        titGame="Nombre de la partida"
        teamName = "Nombre del equipo"
        />
        <div className="right">
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
            <NeonCard/>
        </div>
        {/* <InfoCard
        cardName = "Mantis Religiosa"
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis tellus in massa pretium, vitae cursus augue tristique. Aenean rutrum enim aliquam, malesuada enim id, mollis sem. Sed porta vehicula mauris, nec dapibus libero semper eu. Sed sit amet massa elementum, placerat sapien a, cursus eros. Vestibulum maximus purus enim, eu tristique nunc commodo non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lacus sed neque aliquam pretium. Ut id risus nulla. Etiam non sodales velit. Suspendisse suscipit nulla libero, eget iaculis nibh imperdiet at. Integer ac nunc lectus. Cras eu augue turpis. Donec sed ultricies diam. Suspendisse porta sollicitudin ligula vitae lacinia. Aliquam ac magna lobortis, blandit dui at, pharetra massa."
        itIsDangerous = {true}
        image = "mantisR.jpg"
        /> */}
    </div>
)

export default GameView;