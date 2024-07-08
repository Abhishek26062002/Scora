import os
import matplotlib.pyplot as plt

def generate_and_save_graphs(correct: int, incorrect: int, score: int):
    output_folder = r"C:\Users\abhishek\Desktop\Scora\Dashboard\src\sampleImages"
    os.makedirs(output_folder, exist_ok=True)

    graphs = []

    data = [correct, incorrect]
    labels = ['Correct', 'Incorrect']

    # Bar Plot
    plt.figure()
    plt.bar(labels, data)
    plt.title('Correct vs Incorrect Answers')
    plt.xlabel('Answer Type')
    plt.ylabel('Count')
    bar_plot_path = os.path.join(output_folder, 'bar_plot.png')
    plt.savefig(bar_plot_path)
    graphs.append(bar_plot_path)
    plt.close()

    # Pie Chart
    plt.figure()
    plt.pie(data, labels=labels, autopct='%1.1f%%')
    plt.title('Correct vs Incorrect Answers')
    pie_chart_path = os.path.join(output_folder, 'pie_chart.png')
    plt.savefig(pie_chart_path)
    graphs.append(pie_chart_path)
    plt.close()

    # Line Plot
    plt.figure()
    plt.plot(['Correct', 'Incorrect', 'Score'], [correct, incorrect, score], marker='o')
    plt.title('Performance Line Plot')
    plt.xlabel('Metric')
    plt.ylabel('Value')
    line_plot_path = os.path.join(output_folder, 'line_plot.png')
    plt.savefig(line_plot_path)
    graphs.append(line_plot_path)
    plt.close()

    # Histogram
    plt.figure()
    plt.hist([correct, incorrect, score], bins=3, edgecolor='black')
    plt.title('Histogram of Performance Metrics')
    plt.xlabel('Metric')
    plt.ylabel('Frequency')
    histogram_path = os.path.join(output_folder, 'histogram.png')
    plt.savefig(histogram_path)
    graphs.append(histogram_path)
    plt.close()

    return graphs