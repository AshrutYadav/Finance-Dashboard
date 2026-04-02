exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    const income = records
      .filter(r => r.type === 'income')
      .reduce((sum, r) => sum + r.amount, 0);

    const expense = records
      .filter(r => r.type === 'expense')
      .reduce((sum, r) => sum + r.amount, 0);

    const categoryTotals = {};
    records.forEach(r => {
      if (!categoryTotals[r.category]) {
        categoryTotals[r.category] = 0;
      }
      categoryTotals[r.category] += r.amount;
    });

    
    const recent = records.slice(-5);

    res.json({
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
      categoryBreakdown: categoryTotals,
      recentTransactions: recent,
      totalTransactions: records.length
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};