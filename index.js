
document.getElementById('analyze-btn').addEventListener('click', function () {
    var code = document.getElementById('code-input').value;
    if (!code) return;

    this.disabled = true;
    this.innerHTML = 'Analyzing...';

    setTimeout(function () {
        var suggestions = [
            {
                type: 'improvement',
                message: 'Consider using const instead of let for variables that are not reassigned',
                line: 3
            },
            {
                type: 'warning',
                message: 'This function could benefit from TypeScript type annotations',
                line: 5
            },
            {
                type: 'error',
                message: 'Potential memory leak: useEffect cleanup function missing',
                line: 12
            }
        ];

        document.getElementById('analysis-result').classList.remove('hidden');
        document.getElementById('no-suggestions').classList.add('hidden');

        var resultHTML = '';
        suggestions.forEach(function (suggestion) {
            resultHTML += `
            <div class="p-4 rounded-md ${suggestion.type === 'improvement' ? 'bg-green-50 border border-green-200' : suggestion.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'}">
              <div class="flex items-start space-x-3">
                <svg class="h-5 w-5 ${suggestion.type === 'improvement' ? 'text-green-500' : suggestion.type === 'warning' ? 'text-yellow-500' : 'text-red-500'} mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m0 0l3-3m-3 3v4m0 0h-6"></path>
                </svg>
                <div>
                  <p class="text-sm ${suggestion.type === 'improvement' ? 'text-green-700' : suggestion.type === 'warning' ? 'text-yellow-700' : 'text-red-700'}">${suggestion.message}</p>
                  <p class="text-xs text-gray-500 mt-1">Line: ${suggestion.line}</p>
                </div>
              </div>
            </div>
          `;
        });
        document.getElementById('analysis-result').innerHTML = resultHTML;

        document.getElementById('analyze-btn').disabled = false;
        document.getElementById('analyze-btn').innerHTML = 'Analyze';
    }, 1500);
});
