export default function GradientBorderDiv({ gradientColors, className, children }) {
    const gradientStyle = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;

    const outerStyle = {
        borderRadius: '0.75rem', // rounded-lg
        display: 'flex',
        padding: '3px',
        background: gradientStyle,
        justifyContent: 'center',
        alignItems: 'center',
    };

    const innerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '0.75rem', // rounded-xl
        overflow: 'hidden',
    };

    return (
        <div style={outerStyle} className={className}>
            <div style={innerStyle}>
                {children}
            </div>
        </div>
    );
}
