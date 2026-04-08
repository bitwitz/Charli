class ConfidenceScorer {
    // Combines AI confidence + Technical confidence
    calculate(aiConfidence, techConfidence, regime) {
        let finalScore = (aiConfidence + techConfidence) / 2;
        
        // Penalty for sideways/choppy markets
        if (regime === 'SIDEWAYS_CHOP') finalScore *= 0.8;
        
        return finalScore;
    }
}
module.exports = new ConfidenceScorer();
