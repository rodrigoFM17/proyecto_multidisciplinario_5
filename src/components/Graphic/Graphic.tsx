'use client'
import { horas } from "@/app/[userId]/kits/config/page"
import {v4 as uuidv4} from 'uuid'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import './Graphic.css'
import ReconnectingWebSocket from 'reconnecting-websocket'

const optionsWs = {
    WebSocket: WebSocket,
    connectionTimeout: 10000,
    maxRetries: 5
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const minutes = [];
  const zeros = []

    for (let i = 1; i <= 30; i++) {
    const minute = i < 10 ? `0${i}` : `${i}`;
    minutes.push(`${minute}:00`);
    zeros.push(0)
    }

const config = {
        labels: minutes,
        datasets: [{
            label: "Tiempo del perro frente al comedero de los ultimos 30 minutos",
            data: zeros,
            fill: true,
            borderColor: '#E19F41',
            tension: 0.2
        }]
    }

export default function Graphic () {

    const [chartData, setChartData ] = useState(config)
    const ws = useRef<ReconnectingWebSocket>(new ReconnectingWebSocket(process.env.NEXT_PUBLIC_API_WS!, [], optionsWs))

    

    useEffect(()=>{
        if(ws.current)
            ws.current.close()
        ws.current = new ReconnectingWebSocket(process.env.NEXT_PUBLIC_API_WS!, [], optionsWs)
        if(process.env.NEXT_PUBLIC_API_WS)
         
        
        ws.current.addEventListener('open', ()=> {
            console.log('conectades')
            if(ws.current){
                ws.current.send(JSON.stringify({_id: uuidv4()}))
                console.log('enviado')
            }
        })
        ws.current.addEventListener('message', data => {
        console.log(data.data)
        const newDistance = JSON.parse(data.data)
        console.log(Number.parseFloat(newDistance.distance))
        const aux = chartData
        aux.datasets[0].data.pop()
        aux.datasets[0].data.unshift(newDistance.distance)
        setChartData({...aux})

        })
    }, [chartData])
    


    return <div className="container-graphic">
            <Line options={{responsive:true}} data={chartData} />
        </div>
}