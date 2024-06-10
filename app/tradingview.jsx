import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
    const isWidgetAdded = useRef(false);

    useEffect(() => {
        if (!isWidgetAdded.current) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
                symbols: [
                    { description: '', proName: 'BITSTAMP:BTCUSD' },
                    { description: '', proName: 'BINANCE:SOLUSDT' },
                    { description: '', proName: 'BINANCE:ETHUSDT' },
                    { description: '', proName: 'BINANCE:NOTUSDT' },
                    { description: '', proName: 'BINANCE:DOGEUSDT' },
                    { description: '', proName: 'BINANCE:MATICUSDT' },
                ],
                "showSymbolLogo": true,
                "isTransparent": false,
                "displayMode": "regular",
                "colorTheme": "dark",
                locale: 'en'
            });

            document.getElementById('tradingview-widget-container').appendChild(script);
            isWidgetAdded.current = true;

            // Add custom styles
            const style = document.createElement('style');
            style.innerHTML = `
                html.theme-dark .tv-embed-widget-wrapper__body {
                    background: #000000;
                    border-color: #000000;
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <div id="tradingview-widget-container" className="tradingview-widget-container">
        </div>
    );
};

export default TradingViewWidget;